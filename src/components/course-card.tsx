"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CourseCardProps {
  id: string; title: string; scene: string; difficulty: string;
  sentenceCount: number; completed: number; progress: number;
}

const bar: Record<string,number> = { A1:1,A2:2,B1:3,B2:4,C1:5 };

export default function CourseCard({ id, title, scene, difficulty, sentenceCount, progress }: CourseCardProps) {
  const bars = bar[difficulty]||1;
  return (
    <Link href={`/course/${id}`}>
      <motion.div whileHover={{ y: -1 }} className="card p-5 group cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold group-hover:opacity-80 transition-opacity">{title}</h3>
            <p className="text-xs opacity-25 mt-0.5">{scene}</p>
          </div>
          <span className="text-xs font-semibold opacity-25 bg-white/5 px-2 py-0.5">{difficulty}</span>
        </div>
        <div className="flex gap-1 mb-3">
          {Array.from({length:5}).map((_, i) =>
            <span key={i} className="w-1.5 h-1.5 rounded-full" style={{background: i<bars ? "var(--accent)" : "var(--text3)"}}/>
          )}  
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 h-1 rounded-full overflow-hidden mr-4" style={{background:"var(--border)"}}>
            <div className="h-full rounded-full transition-all duration-500" style={{width:`${progress}%`,background:"var(--accent)"}}/>
          </div>
          <span className="text-xs opacity-25 tabular-nums">{progress}%</span>
        </div>
        <p className="text-xs opacity-15 mt-2">{sentenceCount} 句</p>
      </motion.div>
    </Link>
  );
}
