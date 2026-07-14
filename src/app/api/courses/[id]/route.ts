import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { courses } from "@/db/schema";
import { getSessionUserId } from "@/lib/auth";
import { eq, and } from "drizzle-orm";
import { Sentence } from "@/lib/ai";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }

  const { id } = await params;
  const db = await getDb();
  const results = await db
    .select()
    .from(courses)
    .where(and(eq(courses.id, id), eq(courses.userId, userId)))
    .limit(1);

  if (results.length === 0) {
    return NextResponse.json({ error: "课程不存在" }, { status: 404 });
  }

  const course = results[0];
  const sentences: Sentence[] = JSON.parse(course.sentences);

  return NextResponse.json({
    id: course.id,
    title: course.title,
    scene: course.scene,
    difficulty: course.difficulty,
    sentences,
    total: sentences.length,
  });
}
