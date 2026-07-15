import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { getDb } from "@/db";
import { progress } from "@/db/schema";
import { getSessionUserId } from "@/lib/auth";
import { eq, and } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  if (!courseId) return NextResponse.json({ error: "缺少课程 ID" }, { status: 400 });

  const db = await getDb();
  try {
    const rows = await db.select({ sentenceIndex: progress.sentenceIndex }).from(progress).where(and(eq(progress.userId, userId), eq(progress.courseId, courseId)));
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }

  const { courseId, sentenceIndex, attempts, correct } = await req.json();

  if (!courseId) {
    return NextResponse.json({ error: "缺少课程 ID" }, { status: 400 });
  }

  const db = await getDb();

  // Upsert progress record
  const existing = await db
    .select()
    .from(progress)
    .where(
      and(
        eq(progress.userId, userId),
        eq(progress.courseId, courseId),
        eq(progress.sentenceIndex, sentenceIndex)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(progress)
      .set({ attempts, correct })
      .where(eq(progress.id, existing[0].id));
  } else {
    await db.insert(progress).values({
      id: uuid(),
      userId,
      courseId,
      sentenceIndex: sentenceIndex ?? 0,
      attempts: attempts ?? 1,
      correct: correct ?? 1,
    });
  }

  return NextResponse.json({ success: true });
}
