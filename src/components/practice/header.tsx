"use client";

import { motion } from "framer-motion";

interface PracticeHeaderProps {
  title: string; difficulty: string; currentIndex: number; total: number; combo: number;
}

export default function PracticeHeader({ title, difficulty, currentIndex, total, combo }: PracticeHeaderProps) {
  const pct = Math.round((currentIndex/total)*100);

  return (
    <header className="sticky top-0 z-20" style={{background:"var(--bg)"}}>
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="min-w-0 flex-1 mr-4">
            <h1 className="text-sm font-semibold truncate">{title}</h1>
            <p className="text-xs" style={{color:"var(--text2)"}}>{difficulty} · {currentIndex+1}/{total}</p>
          </div>
          {combo >= 3 && (
            <motion.span key={combo} initial={{scale:1.3}} animate={{scale:1}}
              className="text-xl font-bold tabular-nums shrink-0" style={{color:"var(--accent)"}}>
              {combo}
            </motion.span>
          )}
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{background:"var(--border)"}}>
          <motion.div className="h-full rounded-full" animate={{width:`${pct}%`}}
            transition={{duration:.4}} style={{background:"var(--accent)"}}/>
        </div>
      </div>
    </header>
  );
}
