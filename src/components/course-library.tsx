"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface LibraryCourse {
  id: string;
  category: string;
  title: string;
  scene: string;
  difficulty: string;
  sentenceCount: number;
}

const DIFF_LABELS: Record<string, string> = { A1: "入门", A2: "基础", B1: "中级", B2: "中高级", C1: "高级" };

export default function CourseLibrary() {
  const router = useRouter();
  const [courses, setCourses] = useState<LibraryCourse[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [selecting, setSelecting] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (difficulty) params.set("difficulty", difficulty);
    setLoading(true);
    fetch(`/api/library?${params.toString()}`)
      .then(r => r.json())
      .then(data => {
        setCourses(data.courses || []);
        setCategories(data.categories || []);
        setDifficulties(data.difficulties || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [category, difficulty]);

  const handleSelect = async (courseId: string) => {
    setSelecting(courseId);
    const r = await fetch("/api/library/select", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ presetId: courseId }),
    });
    const data = await r.json();
    if (data.courseId) {
      router.push(`/course/${data.courseId}`);
    }
    setSelecting(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>课程库</h2>
        <p className="text-sm mb-6" style={{ color: "var(--text2)" }}>精选预设课程，选一门直接开始练习</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCategory("")}
              className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
              style={{
                background: !category ? "var(--accent-bg)" : "transparent",
                color: !category ? "var(--accent)" : "var(--text2)",
                border: !category ? "1px solid var(--accent)" : "1px solid var(--border)",
              }}
            >
              全部
            </button>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c === category ? "" : c)}
                className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                style={{
                  background: category === c ? "var(--accent-bg)" : "transparent",
                  color: category === c ? "var(--accent)" : "var(--text2)",
                  border: category === c ? "1px solid var(--accent)" : "1px solid var(--border)",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Separator */}
          <div className="w-full" />

          {/* Difficulty filter */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setDifficulty("")}
              className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
              style={{
                background: !difficulty ? "var(--accent-bg)" : "transparent",
                color: !difficulty ? "var(--accent)" : "var(--text2)",
                border: !difficulty ? "1px solid var(--accent)" : "1px solid var(--border)",
              }}
            >
              全部难度
            </button>
            {difficulties.map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d === difficulty ? "" : d)}
                className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                style={{
                  background: difficulty === d ? "var(--accent-bg)" : "transparent",
                  color: difficulty === d ? "var(--accent)" : "var(--text2)",
                  border: difficulty === d ? "1px solid var(--accent)" : "1px solid var(--border)",
                }}
              >
                {d} · {DIFF_LABELS[d] || d}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="card p-5 animate-pulse">
                <div className="h-4 w-32 rounded mb-3" style={{ background: "var(--border)" }} />
                <div className="h-3 w-48 rounded mb-3" style={{ background: "var(--border)" }} />
                <div className="h-3 w-20 rounded" style={{ background: "var(--border)" }} />
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm mb-3" style={{ color: "var(--text2)" }}>还没有预设课程</p>
            <p className="text-xs" style={{ color: "var(--text2)", opacity: 0.6 }}>去「AI 生成」标签创建自定义课程</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="card p-5 cursor-pointer group transition-all hover:shadow-md"
                onClick={() => handleSelect(course.id)}
                style={{ opacity: selecting === course.id ? 0.5 : 1 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-sm" style={{ color: "var(--text)" }}>{course.title}</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
                    style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>
                    {DIFF_LABELS[course.difficulty] || course.difficulty}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ color: "var(--text2)" }}>{course.scene}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-0.5 rounded"
                    style={{ background: "var(--bg2)", color: "var(--text2)" }}>
                    {course.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text2)", opacity: 0.6 }}>
                    {course.sentenceCount} 句
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
