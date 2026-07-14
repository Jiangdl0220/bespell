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

const levelStars: Record<string, number> = {
  A1: 1, A2: 2, B1: 3, B2: 4, C1: 5,
};

export default function PracticeHeader({
  title,
  difficulty,
  currentIndex,
  total,
  combo,
}: PracticeHeaderProps) {
  const stars = levelStars[difficulty] || 1;
  const pct = Math.round(((currentIndex) / total) * 100);

  return (
    <header className="bg-white border-b border-[#1a1a1a]/8">
      {/* Progress bar */}
      <div className="h-1 bg-[#1a1a1a]/5">
        <div
          className="h-full bg-[#c98a2b] transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href="/"
            className="text-xs text-[#1a1a1a]/25 hover:text-[#1a1a1a]/50 transition-colors shrink-0"
          >
            ←
          </Link>
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-[#1a1a1a] truncate">
              {title}
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs text-[#1a1a1a]/30 tabular-nums">
                {currentIndex + 1}/{total}
              </span>
              <span className="text-xs text-[#c98a2b]">
                {"★".repeat(stars)}{"☆".repeat(5 - stars)}
              </span>
            </div>
          </div>
        </div>

        {/* Combo */}
        <motion.div
          key={combo}
          initial={{ scale: combo > 0 ? 1.25 : 1 }}
          animate={{ scale: 1 }}
          className="flex items-baseline gap-1 shrink-0"
        >
          <span className={`text-2xl font-bold tabular-nums transition-colors ${combo >= 10 ? "text-amber-500" : combo >= 5 ? "text-[#c98a2b]" : "text-[#1a1a1a]/25"}`}>
            {combo}
          </span>
        </motion.div>
      </div>
    </header>
  );
}
