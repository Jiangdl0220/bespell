"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconSwords } from "@/components/icons";

interface CourseCardProps {
  id: string; title: string; scene: string; difficulty: string;
  sentenceCount: number; completed: number; progress: number;
  onDelete?: (id: string) => void;
}

const bar: Record<string,number> = { A1:1,A2:2,B1:3,B2:4,C1:5 };

export default function CourseCard({ id, title, scene, difficulty, sentenceCount, completed, progress, onDelete }: CourseCardProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const bars = bar[difficulty]||1;

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("\u786e\u5b9a\u5220\u9664\u8fd9\u95e8\u8bfe\u7a0b\uff1f")) return;
    setDeleting(true);
    await fetch(`/api/courses/${id}`, { method: "DELETE" });
    onDelete?.(id);
    router.refresh();
  };

  return (
    <div onClick={() => router.push(`/course/${id}`)} className="block relative group/card cursor-pointer">
      <motion.div whileHover={{ y: -2 }} className="card p-5 relative">
        <div className="flex items-start justify-between mb-4 pr-8">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base truncate group-hover/card:opacity-80 transition-opacity">{title}</h3>
            <p className="text-xs mt-0.5 truncate" style={{color:"var(--text2)"}}>{scene}</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full ml-3 shrink-0"
            style={{background: "var(--accent-bg)", color: "var(--accent)"}}>
            {difficulty}
          </span>
        </div>
        <div className="flex gap-1.5 mb-3">
          {Array.from({length:5}).map((_, i) =>
            <span key={i} className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{background: i<bars ? "var(--accent)" : "var(--text3)"}}/>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 h-1.5 rounded-full overflow-hidden mr-4" style={{background:"var(--border)"}}>
            <motion.div className="h-full rounded-full"
              initial={{width:0}} animate={{width:`${progress}%`}}
              transition={{duration:.6,ease:"easeOut"}}
              style={{background:"var(--accent)"}}/>
          </div>
          <span className="text-xs font-semibold tabular-nums" style={{color: progress>0?"var(--accent)":"var(--text3)"}}>
            {progress}%
          </span>
        </div>
        <p className="text-xs mt-3" style={{color:"var(--text2)"}}>{sentenceCount} 句 · 已阅 {completed} 句</p>

        {/* Battle button */}
        <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/battle?course=${id}`);
            }}
            className="text-xs flex items-center gap-1.5 opacity-40 hover:opacity-100 hover:text-[var(--accent)] transition-all"
          >
            <IconSwords size={14} />
            <span>邀弈</span>
          </button>
        </div>

        {/* Delete: top-right, no overlap with badge due to pr-8 */}
        <button onClick={handleDelete} disabled={deleting}
          className="absolute top-4 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold
            opacity-0 group-hover/card:opacity-40 hover:opacity-100! transition-all
            hover:bg-black/5"
          style={{color:"var(--red)"}}>
          {deleting ? "\u00b7\u00b7\u00b7" : "\u2715"}
        </button>
      </motion.div>
    </div>
  );
}
