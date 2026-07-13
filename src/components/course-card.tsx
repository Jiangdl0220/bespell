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
  createdAt?: string | Date;
}

const difficultyColor: Record<string, string> = {
  A1: "bg-green-100 text-green-800",
  A2: "bg-blue-100 text-blue-800",
  B1: "bg-amber-100 text-amber-800",
  B2: "bg-orange-100 text-orange-800",
  C1: "bg-red-100 text-red-800",
};

export default function CourseCard({
  id,
  title,
  scene,
  difficulty,
  sentenceCount,
  completed,
  progress: progressPercent,
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/course/${id}`}
        className="block bg-white border border-[#1a1a1a]/10 p-6 hover:border-[#c98a2b]/30 transition-colors"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a]">{title}</h3>
            <p className="text-sm text-[#1a1a1a]/50 mt-1">{scene}</p>
          </div>
          <span
            className={`px-2 py-0.5 text-xs font-semibold rounded ${
              difficultyColor[difficulty] || "bg-gray-100 text-gray-800"
            }`}
          >
            {difficulty}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-[#1a1a1a]/50 mb-1.5">
            <span>
              {completed} / {sentenceCount} 句已完成
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-1.5 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#c98a2b] rounded-full"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
