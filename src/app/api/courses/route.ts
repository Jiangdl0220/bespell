import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { courses, progress } from "@/db/schema";
import { getSessionUserId } from "@/lib/auth";
import { eq, desc, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) {
    return NextResponse.json({ error: "\u672a\u767b\u5f55" }, { status: 401 });
  }

  const db = await getDb();
  const list = await db
    .select({
      id: courses.id,
      title: courses.title,
      scene: courses.scene,
      difficulty: courses.difficulty,
      sentences: courses.sentences,
      createdAt: courses.createdAt,
    })
    .from(courses)
    .where(eq(courses.userId, userId))
    .orderBy(desc(courses.createdAt));

  const withProgress = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list.map(async (course: any) => {
      const sentenceCount = JSON.parse(course.sentences || "[]").length;
      const stats = await db
        .select({ completed: sql`count(*)` })
        .from(progress)
        .where(eq(progress.courseId, course.id));

      const completed = Number((stats[0] as any)?.completed) || 0;
      return {
        ...course,
        sentenceCount,
        completed,
        progress: sentenceCount > 0
          ? Math.round((completed / sentenceCount) * 100)
          : 0,
      };
    })
  );

  return NextResponse.json(withProgress);
}
