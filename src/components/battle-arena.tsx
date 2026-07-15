"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePracticeEngine, PracticeSentence, WordToken } from "@/hooks/use-practice-engine";
import { speak } from "@/components/voice-selector";
import PracticeHeader from "@/components/practice/header";
import SentenceCard from "@/components/practice/sentence-card";
import InputArea from "@/components/practice/input-area";

interface BattleInfo {
  id: string;
  roomCode: string;
  maxPeeks: number;
  courseId: string;
}

export default function BattleArena({
  battle,
  course,
}: {
  battle: BattleInfo;
  course: { title: string; sentences: PracticeSentence[]; total: number };
}) {
  const router = useRouter();
  const [ipaVisible, setIpaVisible] = useState(true);
  const [peekRemaining, setPeekRemaining] = useState(battle.maxPeeks);
  const [opponentDone, setOpponentDone] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [winnerId, setWinnerId] = useState<string | null>(null);
  const peekIdxRef = useRef(0);
  const peekCountRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => setTimeElapsed((t) => t + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Engine with peek recording
  const engine = usePracticeEngine(
    course?.sentences ?? [],
    useCallback(
      (word: WordToken) => {
        // Record peek
        fetch("/api/review-words", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            wordEn: word.en,
            wordZh: word.zh,
            ipa: course?.sentences[peekIdxRef.current]?.ipa || null,
            courseId: battle.courseId,
            courseTitle: course?.title || "",
            source: "peek",
          }),
        }).catch(() => {});
      },
      [battle.courseId, course?.title, course?.sentences]
    )
  );

  // Sync peek index ref
  peekIdxRef.current = engine.currentIndex;

  // Override: count peeks and enforce limit
  const handlePeek = useCallback(() => {
    if (peekRemaining <= 0) return;
    peekCountRef.current += 1;
    setPeekRemaining((n) => n - 1);
  }, [peekRemaining]);

  // SSE for opponent events
  useEffect(() => {
    const es = new EventSource(`/api/battles/${battle.roomCode}/events`);
    es.addEventListener("done", () => {
      setOpponentDone(true);
      // Fetch winner
      fetch(`/api/battles/${battle.roomCode}`)
        .then((r) => r.json())
        .then((data) => setWinnerId(data.winnerId));
    });
    return () => es.close();
  }, [battle.roomCode]);

  // Submit when complete
  useEffect(() => {
    if (engine.isComplete && !submitted) {
      setSubmitted(true);
      clearInterval(timerRef.current);

      fetch(`/api/battles/${battle.roomCode}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalTime: timeElapsed,
          peekCount: peekCountRef.current,
        }),
      })
        .then((r) => r.json())
        .then(async () => {
          // Re-fetch status to get winner
          const r = await fetch(`/api/battles/${battle.roomCode}`);
          const d = await r.json();
          setWinnerId(d.winnerId);
        });
    }
  }, [engine.isComplete, submitted, timeElapsed, battle.roomCode]);

  // Navigate to results when done
  useEffect(() => {
    if (engine.isComplete && winnerId !== null) {
      const params = new URLSearchParams({
        correct: String(engine.totalCorrect),
        attempts: String(engine.totalAttempts),
        accuracy: String(engine.accuracy),
        combo: String(engine.maxCombo),
        time: String(timeElapsed),
        battle: "1",
        win: winnerId === "you" ? "1" : "0",
        peeks: String(peekCountRef.current),
      });
      router.push(
        `/course/${battle.courseId}/done?${params.toString()}`
      );
    }
  }, [engine.isComplete, winnerId]);

  const handleSpeak = useCallback(() => {
    if (!engine.currentSentence) return;
    speak(engine.currentSentence.en);
  }, [engine.currentSentence]);

  const toggleIpa = useCallback(() => {
    setIpaVisible((v) => {
      const next = !v;
      localStorage.setItem("bespell-ipa-visible", String(next));
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <PracticeHeader
        title={course.title}
        difficulty="对弈"
        currentIndex={engine.currentIndex}
        total={course.total}
        combo={engine.combo}
      />

      {/* Battle HUD */}
      <div
        className="max-w-3xl mx-auto px-6 mb-3 py-2 rounded-xl flex items-center justify-between text-sm"
        style={{ background: "var(--accent-bg)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-5">
          <span className="font-mono font-bold" style={{ color: "var(--accent)" }}>
            ⏱ {timeElapsed}s
          </span>
          <span
            style={{
              color: peekRemaining <= 1 ? "var(--red)" : "var(--text2)",
              fontWeight: peekRemaining <= 1 ? 600 : 400,
            }}
          >
            👁 {peekRemaining}
          </span>
        </div>
        <div style={{ color: "var(--text2)", fontSize: 13 }}>
          {opponentDone ? "✅ 对手已完成" : "⏳ 对手进行中"}
        </div>
      </div>

      <main className="w-full max-w-3xl mx-auto px-6 py-4 space-y-5">
        <SentenceCard
          zh={engine.currentSentence?.zh ?? ""}
          ipa={engine.currentSentence?.ipa ?? ""}
          ipaVisible={ipaVisible}
          onToggleIpa={toggleIpa}
          onSpeak={handleSpeak}
        />

        <InputArea
          words={engine.currentSentence?.words ?? []}
          currentWordIndex={engine.currentWordIndex}
          inputValue={engine.inputValue}
          hintVisible={engine.hintVisible}
          feedback={engine.feedback}
          inputRef={engine.inputRef}
          onKeyDown={engine.handleKeyDown}
          onKeyUp={engine.handleKeyUp}
          onChange={engine.handleInputChange}
          onFocus={engine.focusInput}
        />
      </main>
    </div>
  );
}
