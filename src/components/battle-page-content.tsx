"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BattleCreate, { BattleJoin } from "@/components/battle-create";
import { BattleWaiting } from "@/components/battle-waiting";

export default function BattlePageContent() {
  const searchParams = useSearchParams();
  const preselectedCourse = searchParams.get("course");
  const [mode, setMode] = useState<"choose" | "create" | "join" | "waiting">(
    preselectedCourse ? "create" : "choose"
  );
  const [roomCode, setRoomCode] = useState("");
  const [battleId, setBattleId] = useState("");
  const [isCreator, setIsCreator] = useState(false);

  return (
    <div className="page-container">
      <h1 className="display text-3xl mb-6" style={{ color: "var(--accent)" }}>
        对弈
      </h1>

      {mode === "choose" && (
        <div className="space-y-3">
          <button
            onClick={() => setMode("create")}
            className="card p-5 w-full text-left transition-all hover:border-[var(--accent)]"
          >
            <div className="font-semibold text-base mb-1">设局</div>
            <div className="text-xs" style={{ color: "var(--text2)" }}>
              择一课业，定窥探之限，邀友人对弈
            </div>
          </button>
          <button
            onClick={() => setMode("join")}
            className="card p-5 w-full text-left transition-all hover:border-[var(--accent)]"
          >
            <div className="font-semibold text-base mb-1">赴约</div>
            <div className="text-xs" style={{ color: "var(--text2)" }}>
              输入暗号，即入对局
            </div>
          </button>
        </div>
      )}

      {mode === "create" && (
        <div className="card p-6">
          <BattleCreate
            preselectedCourse={preselectedCourse ?? undefined}
            onCreated={(code) => {
              setRoomCode(code);
              setIsCreator(true);
              setMode("waiting");
            }}
          />
          <button
            onClick={() => setMode("choose")}
            className="text-xs mt-4 block mx-auto opacity-40 hover:opacity-70"
          >
            ← 返回
          </button>
        </div>
      )}

      {mode === "join" && (
        <div className="card p-6">
          <BattleJoin
            onJoined={(data) => {
              setBattleId(data.id || "");
              setRoomCode(data.roomCode);
              setMode("waiting");
            }}
          />
          <button
            onClick={() => setMode("choose")}
            className="text-xs mt-4 block mx-auto opacity-40 hover:opacity-70"
          >
            ← 返回
          </button>
        </div>
      )}

      {mode === "waiting" && (
        <BattleWaiting roomCode={roomCode} battleId={battleId} isCreator={isCreator} />
      )}
    </div>
  );
}
