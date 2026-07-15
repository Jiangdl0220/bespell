"use client";

import { Suspense } from "react";
import BattlePageContent from "@/components/battle-page-content";

export default function BattlePage() {
  return (
    <Suspense fallback={null}>
      <BattlePageContent />
    </Suspense>
  );
}
