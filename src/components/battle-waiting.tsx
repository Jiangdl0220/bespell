"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function BattleWaiting({
  roomCode,
  battleId,
  isCreator,
}: {
  roomCode: string;
  battleId: string;
  isCreator: boolean;
}) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(0);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    const es = new EventSource(`/api/battles/${roomCode}/events`);

    es.addEventListener("start", () => {
      router.push(`/battle/${battleId}?room=${roomCode}`);
    });

    es.onerror = () => {
      // will auto-reconnect
    };

    const timer = setInterval(() => setCountdown((c) => c + 1), 1000);

    return () => {
      es.close();
      clearInterval(timer);
    };
  }, [roomCode, battleId, router]);

  const handleCancel = async () => {
    if (!confirm("确定取消这个挑战？")) return;
    setCancelling(true);
    await fetch(`/api/battles/${roomCode}`, { method: "DELETE" });
    router.push("/battle");
    router.refresh();
  };

  return (
    <div className="page-container text-center">
      <h1 className="display text-3xl mb-6" style={{ color: "var(--accent)" }}>
        等待对手
      </h1>

      <div
        className="card inline-block px-10 py-8 mb-8"
        style={{ minWidth: 200 }}
      >
        <p className="text-xs mb-2" style={{ color: "var(--text2)" }}>房间号</p>
        <p
          className="text-5xl font-mono font-bold tracking-[.3em]"
          style={{ color: "var(--accent)" }}
        >
          {roomCode}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm mb-8" style={{ color: "var(--text2)" }}>
        <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
        等待对手加入... ({countdown}s)
      </div>

      {isCreator && (
        <button
          onClick={handleCancel}
          disabled={cancelling}
          className="text-sm px-6 py-2 rounded-xl border transition-all"
          style={{
            borderColor: "var(--red)",
            color: "var(--red)",
            opacity: cancelling ? 0.5 : 1,
          }}
        >
          {cancelling ? "取消中..." : "取消挑战"}
        </button>
      )}

      <p className="text-xs mt-6 opacity-30">
        把房间号发给朋友，输入后立即开始
      </p>
    </div>
  );
}
