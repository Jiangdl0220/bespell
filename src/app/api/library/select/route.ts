import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { getDb } from "@/db";
import { presetCourses, courses } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getSessionUserId } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const { presetId } = await req.json();
  if (!presetId) return NextResponse.json({ error: "缺少课程 ID" }, { status: 400 });

  const db = await getDb();

  const rows = await db.select().from(presetCourses).where(eq(presetCourses.id, presetId)).limit(1);
  const preset = rows[0];
  if (!preset) return NextResponse.json({ error: "课程不存在" }, { status: 404 });

  const courseId = uuid();
  await db.insert(courses).values({
    id: courseId,
    userId,
    title: preset.title,
    scene: preset.scene,
    difficulty: preset.difficulty,
    sentences: preset.sentences,
  });

  return NextResponse.json({ success: true, courseId });
}
