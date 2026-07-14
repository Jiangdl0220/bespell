"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CourseCardProps {
  id: string;
  title: string;
  scene: string;
  difficulty: string;
  sentenceCount: number;
  completed: number;
  progress: number;
}

const difficultyLabel: Record<string, string> = {
  A1: "入门",
  A2: "初级",
  B1: "中级",
  B2: "中高级",
  C1: "高级",
};

const difficultyBar: Record<string, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
};

export default function CourseCard({
  id,
  title,
  scene,
  difficulty,
  sentenceCount,
  progress,
}: CourseCardProps) {
  const bars = difficultyBar[difficulty] || 1;

  return (
    <Link href={`/course/${id}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="card p-5 group cursor-pointer"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-[#1a1a1a] group-hover:text-[#c98a2b] transition-colors">
              {title}
            </h3>
            <p className="text-xs text-[#1a1a1a]/40 mt-0.5">{scene}</p>
          </div>
          <span className="text-xs font-semibold text-[#1a1a1a]/30 bg-[#1a1a1a]/5 px-2 py-0.5">
            {difficulty}
          </span>
        </div>

        {/* Difficulty dots */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i < bars ? "bg-[#c98a2b]" : "bg-[#1a1a1a]/10"
              }`}
            />
          ))}
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between">
          <div className="flex-1 h-1 bg-[#1a1a1a]/5 rounded-full overflow-hidden mr-4">
            <div
              className="h-full bg-[#c98a2b] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-[#1a1a1a]/40 tabular-nums">
            {progress}%
          </span>
        </div>

        <p className="text-xs text-[#1a1a1a]/25 mt-2">
          {sentenceCount} 句
        </p>
      </motion.div>
    </Link>
  );
}
