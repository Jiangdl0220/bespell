import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { battles, courses as coursesTable } from "@/db/schema.pg";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import BattleArenaClient from "@/components/battle-arena-client";
import RequireAuth from "@/components/require-auth";

export const dynamic = "force-dynamic";

export default async function BattleArenaPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ room?: string }>;
}) {
  const userId = await getSessionUserId();
  if (!userId) return <RequireAuth><div /></RequireAuth>;

  const { id } = await paramsPromise;
  const { room } = await searchParamsPromise;

  const db = await getDb();

  // Get battle info
  const battleRows = room
    ? await db.select().from(battles).where(eq(battles.roomCode, room)).limit(1)
    : await db.select().from(battles).where(eq(battles.id, id)).limit(1);

  if (battleRows.length === 0) notFound();
  const battle = battleRows[0];

  // Get course
  const courseRows = await db
    .select()
    .from(coursesTable)
    .where(eq(coursesTable.id, battle.courseId))
    .limit(1);

  if (courseRows.length === 0) notFound();
  const course = courseRows[0];

  const sentences = JSON.parse(course.sentences || "[]");

  return (
    <RequireAuth>
      <BattleArenaClient
        battle={{
          id: battle.id,
          roomCode: battle.roomCode,
          maxPeeks: battle.maxPeeks,
          courseId: battle.courseId,
        }}
        course={{
          title: course.title,
          sentences,
          total: sentences.length,
        }}
      />
    </RequireAuth>
  );
}
