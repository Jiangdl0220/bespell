"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PracticeHeaderProps {
  title: string; difficulty: string;
  currentIndex: number; total: number; combo: number;
}
const stars: Record<string,number> = { A1:1,A2:2,B1:3,B2:4,C1:5 };

export default function PracticeHeader({ title, difficulty, currentIndex, total, combo }: PracticeHeaderProps) {
  const s = stars[difficulty]||1;
  const pct = Math.round((currentIndex/total)*100);

  return (
    <header style={{background:"var(--card)",borderBottom:"1px solid var(--border)"}}>
      <div className="h-1 bg-white/10">
        <div className="h-full transition-all duration-500 ease-out" style={{width:`${pct}%`,background:"var(--accent)"}}/>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <Link href="/" className="text-xs opacity-40 hover:opacity-40 transition-opacity shrink-0">←</Link>
          <div className="min-w-0">
            <h2 className="text-sm font-semibold truncate">{title}</h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs opacity-45 tabular-nums">{currentIndex+1}/{total}</span>
              <span className="text-xs" style={{color:"var(--accent)"}}>
                {"★".repeat(s)}{"☆".repeat(5-s)}
              </span>
            </div>
          </div>
        </div>
        <motion.div key={combo} initial={{scale:combo>0?1.25:1}} animate={{scale:1}}
          className="flex items-baseline gap-1 shrink-0">
          <span className={`text-2xl font-bold tabular-nums transition-colors ${combo>=10?"text-amber-500":combo>=5?"text-[var(--accent)]":"opacity-35"}`}>
            {combo}
          </span>
        </motion.div>
      </div>
    </header>
  );
}
