import { presetCourses } from "./schema";
import { v4 as uuid } from "uuid";
import presetData from "./preset-courses";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function seedPresetCourses(db: any) {
  try {
    const existing = await db.select().from(presetCourses).limit(1);
    if (existing.length > 0) return;

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

    console.log(`📚 Seeded ${presetData.length} preset courses.`);
  } catch (e) {
    console.error("Seed preset courses failed:", e);
  }
}
