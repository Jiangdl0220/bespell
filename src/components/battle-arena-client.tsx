"use client";

import BattleArena from "@/components/battle-arena";
import type { PracticeSentence } from "@/hooks/use-practice-engine";

export default function BattleArenaClient({
  battle,
  course,
}: {
  battle: { id: string; roomCode: string; maxPeeks: number; courseId: string };
  course: { title: string; sentences: PracticeSentence[]; total: number };
}) {
  return <BattleArena battle={battle} course={course} />;
}
