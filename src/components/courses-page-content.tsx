"use client";

import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import CourseList from "@/app/course-list";
import CourseCreator from "@/components/course-creator";

const CourseLibrary = lazy(() => import("@/components/course-library"));

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
          课业
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
          书阁
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
          <div className="space-y-6">
            {/* AI creator entry — at top */}
            {!showAICreator ? (
              <button
                onClick={() => setShowAICreator(true)}
                className="w-full p-4 rounded-2xl text-left transition-all hover:shadow-sm group"
                style={{
                  background: "var(--accent-bg)",
                  border: "1px solid var(--accent)",
                  borderColor: "var(--accent)",
                  opacity: 0.9,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>
                      ✦ 随性抒写
                    </span>
                    <span className="text-xs ml-3" style={{ color: "var(--text2)" }}>
                      不拘一格，随心描绘想练的场景
                    </span>
                  </div>
                  <span className="text-xs font-medium shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>
                    开始 →
                  </span>
                </div>
              </button>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold" style={{ color: "var(--accent)" }}>
                    ✦ 随性抒写
                  </h3>
                  <button
                    onClick={() => setShowAICreator(false)}
                    className="text-xs hover:opacity-70"
                    style={{ color: "var(--text2)" }}
                  >
                    收起
                  </button>
                </div>
                <div className="p-5 rounded-2xl mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <CourseCreator embedded />
                </div>
              </div>
            )}

            <Suspense fallback={<div className="text-center py-8 text-sm opacity-40">加载中...</div>}>
              <CourseLibrary />
            </Suspense>
          </div>
        )}
      </motion.div>
    </div>
  );
}
