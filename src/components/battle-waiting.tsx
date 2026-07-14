"use client";

import { useEffect, useState, useRef } from "react";
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
  const [showConfirm, setShowConfirm] = useState(false);
  const esRef = useRef<EventSource | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const es = new EventSource(`/api/battles/${roomCode}/events`);
    esRef.current = es;

    es.addEventListener("start", () => {
      router.push(`/battle/${battleId}?room=${roomCode}`);
    });

    es.onerror = () => {
      // will auto-reconnect
    };

    const timer = setInterval(() => setCountdown((c) => c + 1), 1000);

    return () => {
      es.close();
      esRef.current = null;
      clearInterval(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [roomCode, battleId, router]);

  const handleCancel = async () => {
    setCancelling(true);
    // Close SSE first so router.push works cleanly
    esRef.current?.close();
    esRef.current = null;

    try {
      const r = await fetch(`/api/battles/${roomCode}`, { method: "DELETE" });
      if (!r.ok) {
        console.error("Cancel failed:", r.status, await r.text());
      }
    } catch (e) {
      console.error("Cancel network error:", e);
    }

    // Hard navigation to break out of any stuck state
    window.location.href = "/battle";
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

      {isCreator && !showConfirm && (
        <button
          onClick={() => setShowConfirm(true)}
          className="text-sm px-6 py-2 rounded-xl border transition-all hover:bg-red-50 cursor-pointer"
          style={{
            borderColor: "var(--red)",
            color: "var(--red)",
          }}
        >
          取消挑战
        </button>
      )}

      {isCreator && showConfirm && (
        <div className="flex items-center justify-center gap-3">
          <p className="text-sm" style={{ color: "var(--red)" }}>确定取消？</p>
          <button
            onClick={handleCancel}
            disabled={cancelling}
            className="text-sm px-4 py-1.5 rounded-lg bg-[var(--red)] text-white font-medium cursor-pointer"
          >
            {cancelling ? "取消中..." : "确定"}
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="text-sm px-4 py-1.5 rounded-lg border cursor-pointer"
            style={{ borderColor: "var(--border)", color: "var(--text2)" }}
          >
            返回
          </button>
        </div>
      )}

      <p className="text-xs mt-6 opacity-30">
        把房间号发给朋友，输入后立即开始
      </p>
    </div>
  );
}
