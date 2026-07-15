import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { presetCourses } from "@/db/schema";
import { asc } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import presetData from "@/db/preset-courses";

export const dynamic = "force-dynamic";

// Server-side cache — preset courses don't change between deploys
let _cache: { courses: any[]; categories: string[]; difficulties: string[] } | null = null;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  // Return cached data if available (skip DB query)
  if (_cache) {
    let filtered = _cache.courses;
    if (category) filtered = filtered.filter((c: any) => c.category === category);
    if (difficulty) filtered = filtered.filter((c: any) => c.difficulty === difficulty);
    return NextResponse.json({ courses: filtered, categories: _cache.categories, difficulties: _cache.difficulties });
  }

  const db = await getDb();

  try {
    // Seed preset courses on first access (only needed once per deployment)
    const existing = await db.select().from(presetCourses).limit(1);
    if (existing.length === 0) {
      for (const course of presetData) {
        await db.insert(presetCourses).values({
          id: uuid(),
          category: course.category,
          title: course.title,
          scene: course.scene,
          difficulty: course.difficulty,
          sentences: JSON.stringify(course.sentences),
          sentenceCount: course.sentences.length,
        });
      }
      console.log(`📚 Seeded ${presetData.length} preset courses via library API`);
    }

    const all = await db.select().from(presetCourses).orderBy(asc(presetCourses.category), asc(presetCourses.difficulty));

    const list = all.map((c: any) => ({
      id: c.id,
      category: c.category,
      title: c.title,
      scene: c.scene,
      difficulty: c.difficulty,
      sentenceCount: c.sentenceCount,
      createdAt: c.createdAt,
    }));

    const categories = [...new Set(all.map((c: any) => c.category))] as string[];
    const difficulties = [...new Set(all.map((c: any) => c.difficulty))] as string[];

    // Populate cache
    _cache = { courses: list, categories, difficulties };

    let filtered = list;
    if (category) filtered = filtered.filter((c: any) => c.category === category);
    if (difficulty) filtered = filtered.filter((c: any) => c.difficulty === difficulty);

    return NextResponse.json({ courses: filtered, categories, difficulties });
  } catch {
    return NextResponse.json({ courses: [], categories: [], difficulties: [] });
  }
}
