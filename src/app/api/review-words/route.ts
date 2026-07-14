import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { reviewWords } from "@/db/schema.pg";
import { eq, and, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET — list review words for current user
export async function GET(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const source = searchParams.get("source");

  const db = await getDb();
  const conditions = [eq(reviewWords.userId, userId)];
  if (source === "peek" || source === "saved") {
    conditions.push(eq(reviewWords.source, source));
  }

  const rows = await db
    .select()
    .from(reviewWords)
    .where(and(...conditions))
    .orderBy(desc(reviewWords.createdAt));

  return NextResponse.json(rows);
}

// POST — record a peek or save a word
export async function POST(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { wordEn, wordZh, ipa, courseId, courseTitle, source } = await req.json();

  if (!wordEn || !wordZh || !courseId || !courseTitle) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const db = await getDb();

  // Deduplicate: skip if same word+course already exists for this user
  const existing = await db
    .select()
    .from(reviewWords)
    .where(
      and(
        eq(reviewWords.userId, userId),
        eq(reviewWords.wordEn, wordEn),
        eq(reviewWords.courseId, courseId),
        eq(reviewWords.source, source)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    return NextResponse.json({ success: true, id: existing[0].id, existed: true });
  }

  const id = crypto.randomUUID();

  await db.insert(reviewWords).values({
    id,
    userId,
    wordEn,
    wordZh,
    ipa: ipa || null,
    courseId,
    courseTitle,
    source: source === "saved" ? "saved" : "peek",
  });

  return NextResponse.json({ success: true, id });
}

// DELETE — remove a word
export async function DELETE(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const db = await getDb();
  await db.delete(reviewWords).where(and(eq(reviewWords.id, id), eq(reviewWords.userId, userId)));

  return NextResponse.json({ success: true });
}
