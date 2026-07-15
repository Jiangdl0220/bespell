"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Course {
  id: string; title: string; scene: string;
}

export default function BattleCreate({ onCreated, preselectedCourse }: { onCreated: (code: string) => void; preselectedCourse?: string }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse || "");
  const [maxPeeks, setMaxPeeks] = useState(5);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetch("/api/courses")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setCourses(data);
      })
      .catch(() => {});
  }, []);

  const handleCreate = async () => {
    if (!selectedCourse) return;
    setCreating(true);
    try {
      const r = await fetch("/api/battles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: selectedCourse, maxPeeks }),
      });
      const data = await r.json();
      if (data.roomCode) onCreated(data.roomCode);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">设局</h2>

      <label className="text-xs block mb-1.5" style={{ color: "var(--text2)" }}>
        择课
      </label>
      <div className="space-y-1.5 mb-5 max-h-48 overflow-y-auto">
        {courses.length === 0 ? (
          <p className="text-xs opacity-30">尚无研习，先去词海择一课吧</p>
        ) : (
          courses.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCourse(c.id)}
              className="w-full text-left p-3 rounded-xl text-sm border transition-all"
              style={{
                background: selectedCourse === c.id ? "var(--accent-bg)" : "var(--hover)",
                borderColor: selectedCourse === c.id ? "var(--accent)" : "transparent",
                color: selectedCourse === c.id ? "var(--accent)" : "var(--text)",
              }}
            >
              <div className="font-medium">{c.title}</div>
              <div className="text-xs mt-0.5 opacity-50">{c.scene}</div>
            </button>
          ))
        )}
      </div>

      <label className="text-xs block mb-1.5" style={{ color: "var(--text2)" }}>
        窥探次数上限
      </label>
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => setMaxPeeks((n) => Math.max(0, n - 1))}
          className="w-10 h-10 rounded-xl text-lg font-bold border"
          style={{ borderColor: "var(--border)", color: "var(--text2)" }}
        >
          -
        </button>
        <span className="text-2xl font-bold tabular-nums w-10 text-center">{maxPeeks}</span>
        <button
          onClick={() => setMaxPeeks((n) => Math.min(10, n + 1))}
          className="w-10 h-10 rounded-xl text-lg font-bold border"
          style={{ borderColor: "var(--border)", color: "var(--text2)" }}
        >
          +
        </button>
      </div>

      <button
        onClick={handleCreate}
        disabled={!selectedCourse || creating}
        className="btn btn-primary w-full py-3 text-sm"
      >
        {creating ? "设局中..." : "设局"}
      </button>
    </div>
  );
}

export function BattleJoin({ onJoined }: { onJoined: (data: { id: string; roomCode: string }) => void }) {
  const [roomCode, setRoomCode] = useState("");
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState("");

  const handleJoin = async () => {
    if (roomCode.length !== 4) return;
    setJoining(true);
    setError("");
    try {
      const r = await fetch("/api/battles/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomCode }),
      });
      const data = await r.json();
      if (data.error) {
        setError(data.error);
      } else {
        onJoined(data);
      }
    } finally {
      setJoining(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">赴约</h2>

      <label className="text-xs block mb-1.5" style={{ color: "var(--text2)" }}>
        暗号
      </label>
      <input
        className="input text-center text-2xl tracking-[.5em] font-mono py-4 mb-4"
        value={roomCode}
        onChange={(e) => {
          const v = e.target.value.replace(/\D/g, "").slice(0, 4);
          setRoomCode(v);
          setError("");
        }}
        placeholder="0000"
        maxLength={4}
        onKeyDown={(e) => { if (e.key === "Enter") handleJoin(); }}
      />
      {error && <p className="text-xs mb-3" style={{ color: "var(--red)" }}>{error}</p>}

      <button
        onClick={handleJoin}
        disabled={roomCode.length !== 4 || joining}
        className="btn btn-primary w-full py-3 text-sm"
      >
        {joining ? "赴约中..." : "赴约"}
      </button>
    </div>
  );
}
