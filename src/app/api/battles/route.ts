import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { courseId, maxPeeks } = await req.json();
  if (!courseId) return NextResponse.json({ error: "Missing courseId" }, { status: 400 });

  const db = await getDb();
  const id = crypto.randomUUID();

  while (true) {
    const roomCode = String(Math.floor(1000 + Math.random() * 9000));
    const existing = await db.execute(
      `SELECT id FROM battles WHERE room_code = '${roomCode}' LIMIT 1`
    );
    if (existing.rows?.length === 0) {
      await db.execute(
        `INSERT INTO battles (id, course_id, creator_id, room_code, max_peeks, status, created_at)
         VALUES ('${id}', '${courseId}', '${userId}', '${roomCode}', ${maxPeeks ?? 5}, 'waiting', NOW())`
      );
      return NextResponse.json({ success: true, id, roomCode });
    }
  }
}
