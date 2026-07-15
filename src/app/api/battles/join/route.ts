import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { battles } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// POST — join a battle by room code
export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { roomCode } = await req.json();
  if (!roomCode) return NextResponse.json({ error: "Missing roomCode" }, { status: 400 });

  const db = await getDb();

  const rows = await db
    .select()
    .from(battles)
    .where(eq(battles.roomCode, roomCode))
    .limit(1);

  if (rows.length === 0) {
    return NextResponse.json({ error: "房间不存在" }, { status: 404 });
  }

  const battle = rows[0];

  if (battle.creatorId === userId) {
    return NextResponse.json({ error: "不能加入自己创建的对局" }, { status: 400 });
  }

  if (battle.status !== "waiting") {
    return NextResponse.json({ error: "对局已开始或已结束" }, { status: 400 });
  }

  // Use raw SQL to avoid Drizzle timestamp parsing issues
  await db.execute(
    `UPDATE battles SET opponent_id = '${userId}', status = 'active' WHERE id = '${battle.id}' AND status = 'waiting'`
  );

  return NextResponse.json({
    success: true,
    id: battle.id,
    courseId: battle.courseId,
    maxPeeks: battle.maxPeeks,
  });
}
