"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  SCENE_PRESETS,
  DIFFICULTY_LEVELS,
  SENTENCE_COUNTS,
} from "@/lib/ai";

const difficultyDesc: Record<string, string> = {
  A1: "零基础",
  A2: "日常会话",
  B1: "简单讨论",
  B2: "深度交流",
  C1: "专业表达",
};

export default function CourseCreator() {
  const router = useRouter();
  const [scene, setScene] = useState("");
  const [customScene, setCustomScene] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [count, setCount] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activeScene = scene === "__custom__" ? customScene : scene;
  const canSubmit = activeScene && difficulty && !loading;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scene: activeScene,
          difficulty,
          count,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "生成失败");
        setLoading(false);
        return;
      }
      router.push(`/course/${data.courseId}`);
    } catch {
      setError("网络错误");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bgdot">
      <div className="max-w-xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="display text-2xl font-bold text-[#1a1a1a]">
            新建课程
          </h1>
          <button
            onClick={() => router.push("/")}
            className="btn btn-ghost text-xs"
          >
            返回
          </button>
        </div>

        <div className="space-y-8 anim-in">
          {/* Scene */}
          <div>
            <label className="block text-xs font-semibold text-[#1a1a1a]/30 uppercase tracking-[0.15em] mb-3">
              对话场景
            </label>
            <div className="grid grid-cols-4 gap-2">
              {SCENE_PRESETS.map((s) => (
                <button
                  key={s}
                  onClick={() => setScene(s)}
                  className={`py-2.5 px-2 text-xs text-center border transition-all ${
                    scene === s
                      ? "border-[#c98a2b] bg-[#c98a2b]/5 text-[#c98a2b] font-semibold"
                      : "border-[#1a1a1a]/8 text-[#1a1a1a]/60 hover:border-[#1a1a1a]/20"
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setScene("__custom__")}
                className={`py-2.5 px-2 text-xs text-center border transition-all ${
                  scene === "__custom__"
                    ? "border-[#c98a2b] bg-[#c98a2b]/5 text-[#c98a2b] font-semibold"
                    : "border-[#1a1a1a]/8 text-[#1a1a1a]/40 hover:border-[#1a1a1a]/20"
                }`}
              >
                自定义
              </button>
            </div>
            {scene === "__custom__" && (
              <motion.input
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                type="text"
                value={customScene}
                onChange={(e) => setCustomScene(e.target.value)}
                placeholder="输入场景名称..."
                className="input mt-3 text-sm"
                autoFocus
              />
            )}
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-xs font-semibold text-[#1a1a1a]/30 uppercase tracking-[0.15em] mb-3">
              难度等级
            </label>
            <div className="flex gap-2">
              {DIFFICULTY_LEVELS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`flex-1 py-3 text-center border transition-all ${
                    difficulty === d
                      ? "border-[#c98a2b] bg-[#c98a2b]/5"
                      : "border-[#1a1a1a]/8 hover:border-[#1a1a1a]/20"
                  }`}
                >
                  <span
                    className={`block text-sm font-semibold ${
                      difficulty === d ? "text-[#c98a2b]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {d}
                  </span>
                  <span className="block text-xs text-[#1a1a1a]/30 mt-0.5">
                    {difficultyDesc[d]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sentence count */}
          <div>
            <label className="block text-xs font-semibold text-[#1a1a1a]/30 uppercase tracking-[0.15em] mb-3">
              句子数量
            </label>
            <div className="flex gap-2">
              {SENTENCE_COUNTS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCount(c)}
                  className={`flex-1 py-3 text-center border transition-all ${
                    count === c
                      ? "border-[#c98a2b] bg-[#c98a2b]/5"
                      : "border-[#1a1a1a]/8 hover:border-[#1a1a1a]/20"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      count === c ? "text-[#c98a2b]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {c}
                  </span>
                  <span className="block text-xs text-[#1a1a1a]/30 mt-0.5">
                    句
                  </span>
                </button>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-xs text-[#c94b3a] font-medium">{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="btn btn-ink w-full py-3.5 text-sm disabled:opacity-30 tracking-wide"
          >
            {loading ? "AI 正在生成课程..." : "生成课程"}
          </button>
        </div>
      </div>
    </div>
  );
}
