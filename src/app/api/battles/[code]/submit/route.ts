import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { battles, battleResults } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// POST — submit battle result when a player finishes
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: roomCode } = await params;
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { totalTime, peekCount } = await req.json();
  if (totalTime === undefined || totalTime === null) {
    return NextResponse.json({ error: "Missing totalTime" }, { status: 400 });
  }

  const db = await getDb();
  const rows = await db
    .select()
    .from(battles)
    .where(eq(battles.roomCode, roomCode))
    .limit(1);

  if (rows.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const battle = rows[0];
  if (battle.status !== "active") {
    return NextResponse.json({ error: "Battle not active" }, { status: 400 });
  }

  // Save result
  const id = crypto.randomUUID();
  await db.insert(battleResults).values({
    id,
    battleId: battle.id,
    userId,
    finishedAt: new Date().toISOString(),
    totalTime: totalTime ?? 0,
    peekCount: peekCount ?? 0,
  });

  // Check if both players finished
  const allResults = await db
    .select()
    .from(battleResults)
    .where(eq(battleResults.battleId, battle.id));

  const bothFinished =
    allResults.some((r: typeof allResults[number]) => r.userId === battle.creatorId) &&
    allResults.some((r: typeof allResults[number]) => r.userId === battle.opponentId);

  if (bothFinished) {
    // Determine winner: lower net time (totalTime + peekCount * 5 penalty)
    const getNetTime = (userId: string) => {
      const r = allResults.find((x: typeof allResults[number]) => x.userId === userId);
      if (!r) return Infinity;
      return r.totalTime + r.peekCount * 5;
    };

    const creatorTime = getNetTime(battle.creatorId || "");
    const opponentTime = getNetTime(battle.opponentId || "");

    const winnerId = creatorTime <= opponentTime ? battle.creatorId : battle.opponentId;

    await db
      .update(battles)
      .set({ status: "done", winnerId })
      .where(eq(battles.id, battle.id));
  } else {
    // Update status to indicate one player is waiting
    await db
      .update(battles)
      .set({ status: bothFinished ? "done" : "active" })
      .where(eq(battles.id, battle.id));
  }

  return NextResponse.json({ success: true, allResults: allResults.length, bothFinished });
}
