import { getSessionUserId } from "@/lib/auth";
import BattlePageContent from "@/components/battle-page-content";
import RequireAuth from "@/components/require-auth";

export const dynamic = "force-dynamic";

export default function BattlePage() {
  return (
    <RequireAuth>
      <BattlePageContent />
    </RequireAuth>
  );
}
