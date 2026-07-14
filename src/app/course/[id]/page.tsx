"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePracticeEngine, PracticeSentence } from "@/hooks/use-practice-engine";
import PracticeHeader from "@/components/practice/header";
import SentenceCard from "@/components/practice/sentence-card";
import InputArea from "@/components/practice/input-area";

export default function PracticePage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [courseId, setCourseId] = useState<string | null>(null);
  const [course, setCourse] = useState<{
    title: string;
    difficulty: string;
    sentences: PracticeSentence[];
    total: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [ipaVisible, setIpaVisible] = useState(true); // default show

  useEffect(() => {
    paramsPromise.then(({ id }) => {
      setCourseId(id);
    });
  }, [paramsPromise]);

  useEffect(() => {
    if (!courseId) return;

    fetch(`/api/courses/${courseId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setCourse(data);
          // Load IPA preference
          const saved = localStorage.getItem("bespell-ipa-visible");
          if (saved !== null) setIpaVisible(saved === "true");
        }
      })
      .catch(() => setError("加载课程失败"))
      .finally(() => setLoading(false));
  }, [courseId]);

  const engine = usePracticeEngine(course?.sentences ?? []);

  // Auto-focus on mount
  useEffect(() => {
    if (!loading && course) {
      engine.focusInput();
    }
  }, [loading, course]);

  // Auto-save progress after each completed sentence
  const prevIndexRef = useRef(engine.currentIndex);
  useEffect(() => {
    if (!courseId) return;
    // Only save when we advance (not first render)
    if (engine.currentIndex > prevIndexRef.current) {
      const prevSentence = course?.sentences[prevIndexRef.current];
      if (prevSentence) {
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseId,
            sentenceIndex: prevIndexRef.current,
            attempts: 1,
            correct: 1,
          }),
        }).catch(() => {});
      }
    }
    prevIndexRef.current = engine.currentIndex;
  }, [engine.currentIndex, courseId, course?.sentences]);

  // Navigate to completion
  useEffect(() => {
    if (engine.isComplete && courseId) {
      const params = new URLSearchParams({
        correct: String(engine.totalCorrect),
        attempts: String(engine.totalAttempts),
        accuracy: String(engine.accuracy),
        combo: String(engine.maxCombo),
        time: String(engine.elapsed),
      });
      router.push(`/course/${courseId}/done?${params.toString()}`);
    }
  }, [engine.isComplete, courseId]);

  const toggleIpa = useCallback(() => {
    setIpaVisible((v) => {
      const next = !v;
      localStorage.setItem("bespell-ipa-visible", String(next));
      return next;
    });
  }, []);

  const handleSpeak = useCallback(() => {
    if (!engine.currentSentence) return;
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(engine.currentSentence.en);
      utterance.lang = "en-US";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, [engine.currentSentence]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center">
        <div className="animate-pulse text-[#1a1a1a]/30 text-lg">加载中...</div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center">
        <p className="text-[#c94b3a]">{error || "课程不存在"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <PracticeHeader
        title={course.title}
        difficulty={course.difficulty}
        currentIndex={engine.currentIndex}
        total={course.total}
        combo={engine.combo}
      />

      <main className="w-full max-w-3xl mx-auto px-6 py-8 space-y-5">
        <SentenceCard
          zh={engine.currentSentence?.zh ?? ""}
          ipa={engine.currentSentence?.ipa ?? ""}
          words={engine.currentSentence?.words ?? []}
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
