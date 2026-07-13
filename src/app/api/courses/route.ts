import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { courses, progress } from "@/db/schema";
import { getSessionUserId } from "@/lib/auth";
import { eq, desc, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }

  const db = getDb();
  const list = await db
    .select({
      id: courses.id,
      title: courses.title,
      scene: courses.scene,
      difficulty: courses.difficulty,
      sentenceCount: sql<number>`json_array_length(${courses.sentences})`,
      createdAt: courses.createdAt,
    })
    .from(courses)
    .leftJoin(progress, eq(courses.id, progress.courseId))
    .where(eq(courses.userId, userId))
    .groupBy(courses.id)
    .orderBy(desc(courses.createdAt))
    .all();

  // Get correct count for each course
  const withProgress = await Promise.all(
    list.map(async (course) => {
      const stats = await db
        .select({
          completed: sql<number>`count(*)`,
        })
        .from(progress)
        .where(eq(progress.courseId, course.id))
        .all();

      const completed = stats[0]?.completed ?? 0;
      return {
        ...course,
        completed,
        progress: course.sentenceCount > 0
          ? Math.round((completed / course.sentenceCount) * 100)
          : 0,
      };
    })
  );

  return NextResponse.json(withProgress);
}
