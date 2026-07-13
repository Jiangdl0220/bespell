"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function DonePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [course, setCourse] = useState<{ title: string; difficulty: string } | null>(null);

  const correct = Number(searchParams.get("correct")) || 0;
  const attempts = Number(searchParams.get("attempts")) || 0;
  const accuracy = Number(searchParams.get("accuracy")) || 0;
  const combo = Number(searchParams.get("combo")) || 0;
  const time = Number(searchParams.get("time")) || 0;

  const stars = accuracy >= 90 ? 5 : accuracy >= 75 ? 4 : accuracy >= 60 ? 3 : accuracy >= 40 ? 2 : 1;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Get course info from path
  useEffect(() => {
    const match = window.location.pathname.match(/\/course\/([^/]+)\/done/);
    if (match) {
      fetch(`/api/courses/${match[1]}`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.error) setCourse({ title: data.title, difficulty: data.difficulty });
        })
        .catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="fixed left-0 top-0 h-full w-2 bg-[#c98a2b]" />

      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Star rating */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="text-5xl mb-6 text-[#c98a2b]"
        >
          {"★".repeat(stars)}{"☆".repeat(5 - stars)}
        </motion.div>

        <h1 className="font-serif text-3xl font-bold text-[#1a1a1a] mb-2">
          练习完成！
        </h1>
        {course && (
          <p className="text-sm text-[#1a1a1a]/50 mb-10">
            {course.title} · 难度 {course.difficulty}
          </p>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {[
            { label: "正确率", value: `${accuracy}%` },
            { label: "正确 / 尝试", value: `${correct} / ${attempts}` },
            { label: "最高连击", value: `×${combo}` },
            {
              label: "用时",
              value: `${minutes}:${seconds.toString().padStart(2, "0")}`,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#1a1a1a]/8 p-4"
            >
              <p className="text-xs text-[#1a1a1a]/40 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={() => router.back()}
            className="w-full bg-[#1a1a1a] text-[#f5f0e8] py-4 text-base font-semibold tracking-wide
                       hover:bg-[#c98a2b] transition-colors duration-200"
          >
            再来一次
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60 transition-colors py-3"
          >
            返回课程列表
          </button>
        </div>
      </div>
    </div>
  );
}
