"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PracticeHeaderProps {
  title: string;
  difficulty: string;
  currentIndex: number;
  total: number;
  combo: number;
}

export default function PracticeHeader({
  title,
  difficulty,
  currentIndex,
  total,
  combo,
}: PracticeHeaderProps) {
  const stars = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 }[difficulty] || 1;

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a]/10">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60 transition-colors"
        >
          ← 课程列表
        </Link>
        <div>
          <h2 className="text-sm font-medium text-[#1a1a1a]">{title}</h2>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs text-[#1a1a1a]/40">
              {currentIndex + 1} / {total}
            </span>
            <span className="text-xs text-[#c98a2b] ml-2">
              {"★".repeat(stars)}{"☆".repeat(5 - stars)}
            </span>
          </div>
        </div>
      </div>

      {/* Combo */}
      <motion.div
        key={combo}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        className="flex items-center gap-1.5"
      >
        <span className="text-xs text-[#1a1a1a]/40 font-medium uppercase tracking-wider">
          Combo
        </span>
        <span className="text-lg font-bold text-[#c98a2b] tabular-nums">
          ×{combo}
        </span>
      </motion.div>
    </header>
  );
}
