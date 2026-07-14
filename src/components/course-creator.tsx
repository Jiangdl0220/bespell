"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SCENE_PRESETS, DIFFICULTY_LEVELS, SENTENCE_COUNTS } from "@/lib/ai";

const DIFF_LABELS: Record<string,string> = { A1:"入门", A2:"基础", B1:"中级", B2:"中高级", C1:"高级" };

export default function CourseCreator() {
  const router = useRouter();
  const [scene, setScene] = useState("便利店购物");
  const [difficulty, setDifficulty] = useState("A2");
  const [count, setCount] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreate = async () => {
    setError(""); setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scene, difficulty, count }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "AI \u751f\u6210\u5931\u8d25");
      router.push(`/course/${data.courseId}`);
    } catch (e: any) {
      setError(e.message || "\u751f\u6210\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen relative z-10 flex items-center justify-center p-6">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="w-full max-w-md">
        <h1 className="display text-3xl text-center mb-2" style={{color:"var(--accent)"}}>BeSpell</h1>
        <p className="text-center text-sm mb-10" style={{color:"var(--text2)"}}>新建课程</p>
        <div className="card px-6 py-7 space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[.12em] mb-3" style={{color:"var(--text2)"}}>场景</label>
            <div className="flex flex-wrap gap-2">
              {SCENE_PRESETS.map(s => (
                <button key={s} onClick={() => setScene(s)}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                  style={{
                    background: scene===s ? "var(--accent-bg)" : "transparent",
                    color: scene===s ? "var(--accent)" : "var(--text2)",
                    border: scene===s ? "1px solid var(--accent)" : "1px solid var(--border)",
                  }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[.12em] mb-3" style={{color:"var(--text2)"}}>难度</label>
            <div className="flex gap-2">
              {DIFFICULTY_LEVELS.map(d => (
                <button key={d} onClick={() => setDifficulty(d)}
                  className="flex-1 text-xs px-2 py-2 rounded-lg font-semibold transition-all text-center"
                  style={{
                    background: difficulty===d ? "var(--accent-bg)" : "transparent",
                    color: difficulty===d ? "var(--accent)" : "var(--text2)",
                    border: difficulty===d ? "1px solid var(--accent)" : "1px solid var(--border)",
                  }}>
                  {d}<br/><span className="font-normal opacity-60">{DIFF_LABELS[d]}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[.12em] mb-3" style={{color:"var(--text2)"}}>句数</label>
            <div className="flex gap-2">
              {SENTENCE_COUNTS.map(n => (
                <button key={n} onClick={() => setCount(n)}
                  className="flex-1 text-sm px-3 py-2.5 rounded-lg font-semibold transition-all"
                  style={{
                    background: count===n ? "var(--accent-bg)" : "transparent",
                    color: count===n ? "var(--accent)" : "var(--text2)",
                    border: count===n ? "1px solid var(--accent)" : "1px solid var(--border)",
                  }}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-xs font-medium" style={{color:"var(--red)"}}>{error}</p>}

          <button onClick={handleCreate} disabled={loading}
            className="btn btn-primary w-full py-3.5 text-sm disabled:opacity-30">
            {loading ? "AI \u751f\u6210\u4e2d..." : "\u5f00\u59cb\u751f\u6210"}
          </button>

          <div className="text-center">
            <button onClick={() => router.back()} className="text-xs hover:opacity-70 transition-opacity" style={{color:"var(--text2)"}}>
              \u2190 \u8fd4\u56de
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
