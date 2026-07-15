"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePracticeEngine, PracticeSentence, WordToken } from "@/hooks/use-practice-engine";
import { useDictationEngine } from "@/hooks/use-dictation-engine";
import PracticeHeader from "@/components/practice/header";
import SentenceCard from "@/components/practice/sentence-card";
import InputArea from "@/components/practice/input-area";
import { speak } from "@/components/voice-selector";
import RequireAuth from "@/components/require-auth";

type PracticeMode = "spell" | "dictation";

const MODE_LABELS: Record<PracticeMode, string> = { spell: "拼写", dictation: "听力" };

function getInitialMode(): PracticeMode {
  if (typeof window === "undefined") return "spell";
  const p = new URLSearchParams(window.location.search);
  const m = p.get("mode") as PracticeMode;
  return m && ["spell", "dictation"].includes(m) ? m : "spell";
}

function ModeTabs({ mode, onChange }: { mode: PracticeMode; onChange: (m: PracticeMode) => void }) {
  return (
    <div className="flex gap-1 p-1 rounded-xl" style={{ background: "var(--bg2)" }}>
      {(Object.entries(MODE_LABELS) as [PracticeMode, string][]).map(([key, label]) => (
        <button key={key} onClick={() => onChange(key)}
          className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            background: mode === key ? "var(--card)" : "transparent",
            color: mode === key ? "var(--accent)" : "var(--text2)",
            boxShadow: mode === key ? "0 1px 3px rgba(0,0,0,.06)" : "none",
          }}
        >{label}</button>
      ))}
    </div>
  );
}

function DictationArea({ engine, answerRevealed }: { engine: ReturnType<typeof useDictationEngine>; answerRevealed: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <button onClick={() => engine.currentSentence && speak(engine.currentSentence.en, 0.82)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          再闻
        </button>
      </div>
      <textarea value={engine.input} onChange={(e) => engine.setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); engine.submitted ? engine.nextSentence() : engine.submitAndCheck(); }}}
        placeholder="输入你听到的英文句子..." rows={3} disabled={engine.submitted}
        className="w-full resize-none rounded-xl p-4 text-base leading-relaxed outline-none transition-all border"
        style={{
          background: "var(--card)", color: "var(--text)",
          borderColor: engine.submitted ? (engine.isCorrect ? "var(--accent)" : "var(--red)") : "var(--border)",
          fontFamily: "'Inter Tight', system-ui, sans-serif",
        }}
        autoFocus
      />
      {engine.submitted && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
          <span className="text-sm font-semibold" style={{ color: engine.isCorrect ? "var(--accent)" : "var(--red)" }}>
            {engine.isCorrect ? "✓ 正确" : "✗ 再看一次"}
          </span>
          {answerRevealed && !engine.isCorrect && (
            <span className="text-sm" style={{ color: "var(--text2)" }}>答案：{engine.currentSentence?.en}</span>
          )}
          {engine.submitted && (
            <button onClick={engine.nextSentence} className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
              style={{ background: "var(--accent)", color: "white" }}>
              {engine.done ? "终" : "续行"}
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default function PracticePage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [courseId, setCourseId] = useState<string | null>(null);
  const [course, setCourse] = useState<{ title: string; difficulty: string; sentences: PracticeSentence[]; total: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<PracticeMode>("spell");
  const [ipaVisible, setIpaVisible] = useState(true);
  const [savedWord, setSavedWord] = useState<string | null>(null);

  // Params
  useEffect(() => { paramsPromise.then(({ id }) => setCourseId(id)); }, [paramsPromise]);

  // Read mode from URL
  useEffect(() => { setMode(getInitialMode()); }, []);

  // Load course
  useEffect(() => {
    if (!courseId) return;
    fetch(`/api/courses/${courseId}`).then(r => r.json()).then(data => {
      if (data.error) setError(data.error); else setCourse(data);
      const saved = localStorage.getItem("bespell-ipa-visible");
      if (saved !== null) setIpaVisible(saved === "true");
    }).catch(() => setError("加载课程失败")).finally(() => setLoading(false));
  }, [courseId]);

  // ----- Spell engine -----
  const peekIdxRef = useRef(0);
  const spellEngine = usePracticeEngine(course?.sentences ?? [], useCallback((word: WordToken) => {
    fetch("/api/review-words", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ wordEn: word.en, wordZh: word.zh, ipa: course?.sentences[peekIdxRef.current]?.ipa || null, courseId, courseTitle: course?.title || "", source: "peek" }) }).catch(() => {});
  }, [courseId, course?.title, course?.sentences]));
  peekIdxRef.current = spellEngine.currentIndex;

  // ----- Dictation engine -----
  const dictationEngine = useDictationEngine(course?.sentences ?? []);
  const [dictAnswerRevealed, setDictAnswerRevealed] = useState(false);

  // Auto-speak for dictation
  useEffect(() => {
    if (mode === "dictation" && dictationEngine.currentSentence) {
      const timer = setTimeout(() => speak(dictationEngine.currentSentence.en, 0.82), 500);
      return () => clearTimeout(timer);
    }
  }, [mode, dictationEngine.currentIndex]);

  // Reveal answer after submit in dictation
  useEffect(() => { setDictAnswerRevealed(dictationEngine.submitted && !dictationEngine.isCorrect); }, [dictationEngine.submitted, dictationEngine.isCorrect]);

  // Auto-focus spell
  useEffect(() => { if (mode === "spell" && course) spellEngine.focusInput(); }, [mode, course]);

  // Auto-save spell progress
  const prevIndexRef = useRef(spellEngine.currentIndex);
  useEffect(() => {
    if (mode !== "spell" || !courseId) return;
    if (spellEngine.currentIndex > prevIndexRef.current) {
      fetch("/api/progress", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ courseId, sentenceIndex: prevIndexRef.current, attempts: 1, correct: 1 }) }).catch(() => {});
    }
    prevIndexRef.current = spellEngine.currentIndex;
  }, [spellEngine.currentIndex, courseId, mode]);

  // Spell completion
  useEffect(() => {
    if (mode !== "spell" || !spellEngine.isComplete || !courseId) return;
    router.push(`/course/${courseId}/done?${new URLSearchParams({ correct: String(spellEngine.totalCorrect), attempts: String(spellEngine.totalAttempts), accuracy: String(spellEngine.accuracy), combo: String(spellEngine.maxCombo), time: String(spellEngine.elapsed) }).toString()}`);
  }, [spellEngine.isComplete, courseId, mode]);

  // Handlers
  const handleModeChange = (m: PracticeMode) => {
    setMode(m);
    const url = new URL(window.location.href);
    url.searchParams.set("mode", m);
    window.history.replaceState({}, "", url.toString());
  };

  const toggleIpa = useCallback(() => {
    setIpaVisible(v => { const next = !v; localStorage.setItem("bespell-ipa-visible", String(next)); return next; });
  }, []);

  const handleSpeak = useCallback(() => {
    const en = spellEngine.currentSentence?.en;
    if (en) speak(en);
  }, [spellEngine.currentSentence]);

  const handleSaveWord = useCallback(() => {
    const word = spellEngine.currentWord;
    if (!word || !courseId) return;
    fetch("/api/review-words", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ wordEn: word.en, wordZh: word.zh, ipa: course?.sentences[spellEngine.currentIndex]?.ipa || null, courseId, courseTitle: course?.title || "", source: "saved" }) }).then(() => setSavedWord(word.en)).catch(() => {});
  }, [spellEngine.currentWord, courseId, course?.title, spellEngine.currentIndex, course?.sentences]);

  // Derived
  const currentSentence = mode === "dictation" ? dictationEngine.currentSentence : spellEngine.currentSentence;
  const currentIndex = mode === "dictation" ? dictationEngine.currentIndex : spellEngine.currentIndex;
  const done = mode === "dictation" ? dictationEngine.done : spellEngine.isComplete;

  if (loading) return <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}><div className="animate-pulse text-lg opacity-45">加载中...</div></div>;
  if (error || !course) return <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}><p style={{ color: "var(--red)" }}>{error || "课程不存在"}</p></div>;

  return (
    <RequireAuth>
      <div className="min-h-screen" style={{ background: "var(--bg)" }}>
        <PracticeHeader title={course.title} difficulty={course.difficulty} currentIndex={currentIndex} total={course.total} combo={mode === "spell" ? spellEngine.combo : 0} />
        <main className="w-full max-w-2xl mx-auto px-4 py-6 space-y-5">
          <ModeTabs mode={mode} onChange={handleModeChange} />

          {mode !== "dictation" && currentSentence && (
            <SentenceCard zh={currentSentence.zh ?? ""} ipa={currentSentence.ipa ?? ""} ipaVisible={ipaVisible} onToggleIpa={toggleIpa} onSpeak={handleSpeak} />
          )}

          {mode === "dictation" && currentSentence && (
            <div className="card px-6 py-8 text-center">
              <p className="text-sm mb-4" style={{ color: "var(--text2)" }}>第 {dictationEngine.currentIndex + 1} / {course.total} 句</p>
              <button onClick={() => speak(currentSentence.en, 0.82)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105" style={{ background: "var(--accent)", color: "white" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                播放发音
              </button>
              <p className="text-xs mt-3" style={{ color: "var(--text3)" }}>闻其声而后书，可反复再闻</p>
            </div>
          )}

          {mode === "spell" && spellEngine.currentWord && (
            <div className="flex justify-end">
              <button onClick={handleSaveWord} className="text-xs px-3 py-1.5 rounded-lg transition-all"
                style={{ background: savedWord === spellEngine.currentWord.en ? "var(--accent-bg)" : "var(--hover)", color: savedWord === spellEngine.currentWord.en ? "var(--accent)" : "var(--text3)", border: "1px solid", borderColor: savedWord === spellEngine.currentWord.en ? "var(--accent)" : "transparent" }}>
                {savedWord === spellEngine.currentWord.en ? "已收藏" : "+ 珍藏"}
              </button>
            </div>
          )}

          {mode === "spell" && (
            <InputArea words={currentSentence?.words ?? []} currentWordIndex={spellEngine.currentWordIndex} inputValue={spellEngine.inputValue} hintVisible={spellEngine.hintVisible} feedback={spellEngine.feedback} inputRef={spellEngine.inputRef} onKeyDown={spellEngine.handleKeyDown} onKeyUp={spellEngine.handleKeyUp} onChange={spellEngine.handleInputChange} onFocus={spellEngine.focusInput} />
          )}

          {mode === "dictation" && <DictationArea engine={dictationEngine} answerRevealed={dictAnswerRevealed} />}

          {done && mode !== "spell" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-8 text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--accent)" }}>一课终了</h2>
              <button onClick={() => router.push(`/course/${courseId}/done?mode=${mode}`)} className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-80" style={{ background: "var(--accent)", color: "white" }}>览卷</button>
            </motion.div>
          )}
        </main>
      </div>
    </RequireAuth>
  );
}
