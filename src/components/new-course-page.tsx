"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CourseLibrary from "@/components/course-library";
import CourseCreator from "@/components/course-creator";

type Tab = "library" | "ai";

export default function NewCoursePage() {
  const [tab, setTab] = useState<Tab>("library");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex justify-center gap-1 mb-6 mt-4">
        <button
          onClick={() => setTab("library")}
          className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            background: tab === "library" ? "var(--accent-bg)" : "transparent",
            color: tab === "library" ? "var(--accent)" : "var(--text2)",
            border: tab === "library" ? "1px solid var(--accent)" : "1px solid var(--border)",
          }}
        >
          课程库
        </button>
        <button
          onClick={() => setTab("ai")}
          className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            background: tab === "ai" ? "var(--accent-bg)" : "transparent",
            color: tab === "ai" ? "var(--accent)" : "var(--text2)",
            border: tab === "ai" ? "1px solid var(--accent)" : "1px solid var(--border)",
          }}
        >
          AI 生成
        </button>
      </div>

      {/* Content */}
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {tab === "library" ? <CourseLibrary /> : <CourseCreator />}
      </motion.div>
    </div>
  );
}
