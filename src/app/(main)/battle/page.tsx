import { getSessionUserId } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function BattlePage() {
  const userId = await getSessionUserId();
  if (!userId) return null;

  return (
    <div className="page-container">
      <h1 className="display text-3xl mb-2" style={{ color: "var(--accent)" }}>竞技</h1>
      <p className="text-sm mb-10" style={{ color: "var(--text2)" }}>
        发起挑战，与朋友同场比拼拼写速度。
      </p>

      <div className="flex gap-4 mb-8">
        <button className="btn btn-primary flex-1 py-3 text-sm">
          创建挑战
        </button>
        <button className="btn flex-1 py-3 text-sm" style={{ background: "var(--hover)", borderColor: "var(--border)" }}>
          加入挑战
        </button>
      </div>

      <div className="card p-8 text-center">
        <p className="text-sm opacity-40">竞技功能即将上线</p>
      </div>
    </div>
  );
}
