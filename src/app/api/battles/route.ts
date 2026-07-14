import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { battles } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// POST — create a battle
export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { courseId, maxPeeks } = await req.json();
  if (!courseId) return NextResponse.json({ error: "Missing courseId" }, { status: 400 });

  const db = await getDb();

  // Generate unique 4-digit room code
  let roomCode = "";
  let attempts = 0;
  while (attempts < 20) {
    roomCode = String(Math.floor(1000 + Math.random() * 9000));
    const existing = await db
      .select()
      .from(battles)
      .where(eq(battles.roomCode, roomCode))
      .limit(1);
    if (existing.length === 0) break;
    attempts++;
  }

  const id = crypto.randomUUID();
  await db.insert(battles).values({
    id,
    courseId,
    creatorId: userId,
    roomCode,
    maxPeeks: maxPeeks ?? 5,
    status: "waiting",
  });

  return NextResponse.json({ success: true, id, roomCode });
}
