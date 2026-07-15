"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CourseList from "@/app/course-list";
import CourseLibrary from "@/components/course-library";
import CourseCreator from "@/components/course-creator";

type Tab = "mine" | "library";

export default function CoursesPageContent() {
  const [tab, setTab] = useState<Tab>("mine");
  const [showAICreator, setShowAICreator] = useState(false);

  return (
    <div className="page-container">
      {/* Tab bar */}
      <div className="flex justify-center gap-2 mb-8 mt-2">
        <button
          onClick={() => setTab("mine")}
          className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
          style={{
            background: tab === "mine" ? "var(--accent-bg)" : "transparent",
            color: tab === "mine" ? "var(--accent)" : "var(--text2)",
            border: tab === "mine" ? "1px solid var(--accent)" : "1px solid var(--border)",
          }}
        >
          我的课程
        </button>
        <button
          onClick={() => setTab("library")}
          className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
          style={{
            background: tab === "library" ? "var(--accent-bg)" : "transparent",
            color: tab === "library" ? "var(--accent)" : "var(--text2)",
            border: tab === "library" ? "1px solid var(--accent)" : "1px solid var(--border)",
          }}
        >
          课程库
        </button>
      </div>

      {/* Tab content */}
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {tab === "mine" ? (
          <div>
            <CourseList />
          </div>
        ) : (
          <div className="space-y-10">
            <CourseLibrary />

            {/* Divider + AI section */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              <span className="text-xs font-medium shrink-0" style={{ color: "var(--text3)" }}>
                没有想要的？
              </span>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            {!showAICreator ? (
              <div className="text-center">
                <button
                  onClick={() => setShowAICreator(true)}
                  className="card p-6 w-full max-w-sm mx-auto text-left transition-all hover:border-[var(--accent)] group"
                >
                  <div className="text-base font-semibold mb-1 flex items-center gap-2">
                    <span style={{ color: "var(--accent)" }}>✦</span>
                    <span>即兴创作</span>
                  </div>
                  <p className="text-xs" style={{ color: "var(--text2)" }}>
                    用自然语言描述你想要的对话场景，AI 为你定制专属课程
                  </p>
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    ✦ 即兴创作
                  </h3>
                  <button
                    onClick={() => setShowAICreator(false)}
                    className="text-xs hover:opacity-70"
                    style={{ color: "var(--text2)" }}
                  >
                    收起
                  </button>
                </div>
                <CourseCreator embedded />
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
