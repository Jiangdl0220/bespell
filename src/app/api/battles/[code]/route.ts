import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { battles, battleResults } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET — battle status (polled by waiting room)
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: roomCode } = await params;
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

  // Get results if done
  let results: typeof battleResults.$inferSelect[] = [];
  if (battle.status === "done") {
    results = await db
      .select()
      .from(battleResults)
      .where(eq(battleResults.battleId, battle.id));
  }

  return NextResponse.json({
    id: battle.id,
    courseId: battle.courseId,
    creatorId: battle.creatorId,
    opponentId: battle.opponentId,
    roomCode: battle.roomCode,
    maxPeeks: battle.maxPeeks,
    status: battle.status,
    winnerId: battle.winnerId,
    results,
    myRole: battle.creatorId === userId ? "creator" : "opponent",
  });
}

// DELETE — cancel a battle (creator only, only when waiting)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: roomCode } = await params;
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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
  if (battle.creatorId !== userId) {
    return NextResponse.json({ error: "Only creator can cancel" }, { status: 403 });
  }
  if (battle.status !== "waiting") {
    return NextResponse.json({ error: "Battle already started" }, { status: 400 });
  }

  await db.delete(battles).where(eq(battles.id, battle.id));

  return NextResponse.json({ success: true });
}
