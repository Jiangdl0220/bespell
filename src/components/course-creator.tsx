"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  SCENE_PRESETS,
  DIFFICULTY_LEVELS,
  SENTENCE_COUNTS,
} from "@/lib/ai";

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
      setError("网络错误，请稍后重试");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="fixed left-0 top-0 h-full w-2 bg-[#c98a2b]" />

      <div className="max-w-xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-10">
          新建课程
        </h1>

        <div className="space-y-8">
          {/* Scene */}
          <div>
            <label className="block text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-widest mb-3">
              场景选择
            </label>
            <div className="grid grid-cols-3 gap-2">
              {SCENE_PRESETS.map((s) => (
                <button
                  key={s}
                  onClick={() => setScene(s)}
                  className={`px-3 py-2 text-sm border transition-colors text-left ${
                    scene === s
                      ? "border-[#c98a2b] bg-[#c98a2b]/5 text-[#c98a2b] font-semibold"
                      : "border-[#1a1a1a]/10 text-[#1a1a1a]/70 hover:border-[#1a1a1a]/30"
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setScene("__custom__")}
                className={`px-3 py-2 text-sm border transition-colors text-left ${
                  scene === "__custom__"
                    ? "border-[#c98a2b] bg-[#c98a2b]/5 text-[#c98a2b] font-semibold"
                    : "border-[#1a1a1a]/10 text-[#1a1a1a]/70 hover:border-[#1a1a1a]/30"
                }`}
              >
                自定义...
              </button>
            </div>
            {scene === "__custom__" && (
              <motion.input
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                type="text"
                value={customScene}
                onChange={(e) => setCustomScene(e.target.value)}
                placeholder="输入自定义场景..."
                className="w-full mt-2 bg-transparent border-0 border-b-2 border-[#1a1a1a]/15 px-0 py-2 text-base text-[#1a1a1a] placeholder-[#1a1a1a]/25 outline-none focus:border-[#c98a2b]"
              />
            )}
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-widest mb-3">
              难度等级
            </label>
            <div className="flex gap-2">
              {DIFFICULTY_LEVELS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`flex-1 py-3 text-sm font-semibold border transition-colors ${
                    difficulty === d
                      ? "border-[#c98a2b] bg-[#c98a2b]/5 text-[#c98a2b]"
                      : "border-[#1a1a1a]/10 text-[#1a1a1a]/50 hover:border-[#1a1a1a]/30"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div>
            <label className="block text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-widest mb-3">
              句子数量
            </label>
            <div className="flex gap-2">
              {SENTENCE_COUNTS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCount(c)}
                  className={`flex-1 py-3 text-sm font-semibold border transition-colors ${
                    count === c
                      ? "border-[#c98a2b] bg-[#c98a2b]/5 text-[#c98a2b]"
                      : "border-[#1a1a1a]/10 text-[#1a1a1a]/50 hover:border-[#1a1a1a]/30"
                  }`}
                >
                  {c} 句
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-[#c94b3a] font-medium"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full bg-[#1a1a1a] text-[#f5f0e8] py-4 text-base font-semibold tracking-wide
                       hover:bg-[#c98a2b] transition-colors duration-200
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "AI 正在生成课程..." : "生成课程"}
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60 transition-colors py-2"
          >
            返回课程列表
          </button>
        </div>
      </div>
    </div>
  );
}
