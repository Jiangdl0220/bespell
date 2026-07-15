"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { DIFFICULTY_LEVELS, SENTENCE_COUNTS } from "@/lib/ai";

const DIFF_LABELS: Record<string, string> = { A1: "入门", A2: "基础", B1: "中级", B2: "中高级", C1: "高级" };
const PLACEHOLDERS = [
  "描述你想要的对话场景，比如：「在巴黎街头问路，顺便聊聊当地美食」",
  "试试：「咖啡店里偶遇老朋友，聊聊近况和旅行计划」",
  "比如：「商务会议上讨论新产品发布计划」",
  "「酒店前台办理入住，询问早餐时间和周边景点」",
];

export default function CourseCreator({ embedded }: { embedded?: boolean }) {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [scene, setScene] = useState("");
  const [difficulty, setDifficulty] = useState("A2");
  const [count, setCount] = useState(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [placeholder] = useState(() => PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]);
  const [focused, setFocused] = useState(false);

  const handleCreate = async () => {
    const trimmed = scene.trim();
    if (!trimmed || trimmed.length < 3) {
      setError("请至少输入 3 个字描述场景");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scene: trimmed, difficulty, count }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "AI 生成失败");
      router.push(`/course/${data.courseId}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "生成失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  const isValid = scene.trim().length >= 3;

  return (
    <div className={embedded ? "" : "max-w-2xl mx-auto px-4 py-6"}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className={embedded ? "space-y-3" : "space-y-8"}
      >
        {/* Header — only when standalone */}
        {!embedded && (
          <div className="text-center">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "var(--text)" }}
            >
              描述你的场景
            </h2>
            <p className="text-sm" style={{ color: "var(--text2)" }}>
              用自然语言告诉 AI 你想要什么对话，剩下的交给我们
            </p>
          </div>
        )}

        {/* Scene textarea — the hero element */}
        <div
          className="relative rounded-xl p-[2px] transition-all duration-300"
          style={{
            background: focused
              ? "linear-gradient(135deg, var(--accent), rgba(45,138,78,.3))"
              : "linear-gradient(135deg, var(--border), var(--border))",
          }}
        >
          <div
            className="rounded-xl p-4"
            style={{ background: "var(--card)" }}
          >
            <textarea
              ref={textareaRef}
              value={scene}
              onChange={(e) => { setScene(e.target.value); setError(""); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleCreate();
              }}
              placeholder={placeholder}
              rows={embedded ? 2 : 4}
              maxLength={400}
              className="w-full resize-none bg-transparent border-none outline-none text-sm leading-relaxed"
              style={{
                fontFamily: "'Inter Tight', system-ui, sans-serif",
                color: "var(--text)",
                lineHeight: "1.65",
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[11px]" style={{ color: "var(--text3)" }}>
                {scene.length > 0 ? `${scene.length}/400` : "⌘ + Enter"}
              </span>
            </div>
          </div>
        </div>

        {/* Settings row: difficulty + count */}
        <div className="grid grid-cols-2 gap-3">
          {/* Difficulty */}
          <div>
            <label
              className="block text-[11px] font-semibold uppercase tracking-[.1em] mb-2"
              style={{ color: "var(--text2)" }}
            >
              难度
            </label>
            <div className="flex gap-1 flex-wrap">
              {DIFFICULTY_LEVELS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className="relative flex-1 min-w-[40px] py-1.5 rounded-lg text-[11px] font-semibold transition-all"
                  style={{
                    background: difficulty === d ? "var(--accent-bg)" : "var(--hover)",
                    color: difficulty === d ? "var(--accent)" : "var(--text2)",
                    border: difficulty === d ? "1px solid var(--accent)" : "1px solid transparent",
                    transform: difficulty === d ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <span className="block text-[13px]">{d}</span>
                  <span className="block text-[10px] font-normal opacity-60 mt-0.5">
                    {DIFF_LABELS[d]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sentence count */}
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-[.1em] mb-3"
              style={{ color: "var(--text2)" }}
            >
              句子数
            </label>
            <div className="flex gap-1.5 flex-wrap">
              {SENTENCE_COUNTS.map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className="flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  style={{
                    background: count === n ? "var(--accent-bg)" : "var(--hover)",
                    color: count === n ? "var(--accent)" : "var(--text2)",
                    border: count === n ? "1px solid var(--accent)" : "1px solid transparent",
                    transform: count === n ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-xs font-medium text-center"
              style={{ color: "var(--red)" }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Generate button */}
        <motion.button
          onClick={handleCreate}
          disabled={!isValid || loading}
          className="relative w-full py-2.5 rounded-xl text-sm font-bold tracking-wide overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: isValid
              ? "var(--accent)"
              : "var(--border)",
            color: isValid ? "#fff" : "var(--text3)",
          }}
          whileTap={isValid ? { scale: 0.98 } : {}}
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2"
              >
                <span className="flex gap-1">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                    className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                    className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                  />
                </span>
                AI 正在构思对话...
              </motion.span>
            ) : (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                AI 生成课程
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Hint — only standalone */}
        {!embedded && (
          <p className="text-center text-xs" style={{ color: "var(--text3)" }}>
            也可以去「课程库」选一门预设课程直接开始
          </p>
        )}
      </motion.div>
    </div>
  );
}
