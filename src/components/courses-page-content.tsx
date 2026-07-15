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
      <div className="flex gap-1 mb-8 mt-2" style={{ background: "var(--hover)", borderRadius: 12, padding: 4 }}>
        {(["mine", "library"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className="flex-1 py-2.5 text-sm font-medium rounded-[10px] transition-all"
            style={{
              background: tab === key ? "var(--card)" : "transparent",
              color: tab === key ? "var(--accent)" : "var(--text2)",
              boxShadow: tab === key ? "0 1px 3px rgba(0,0,0,.06)" : "none",
            }}
          >
            {key === "mine" ? "课业" : "书阁"}
          </button>
        ))}
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
