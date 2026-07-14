"use client";

import { motion } from "framer-motion";

interface WordToken { en: string; zh: string; }

interface SentenceCardProps {
  zh: string; ipa: string; words: WordToken[];
  ipaVisible: boolean; onToggleIpa: () => void; onSpeak: () => void;
}

export default function SentenceCard({ zh, ipa, ipaVisible, onToggleIpa, onSpeak }: SentenceCardProps) {
  const ipaWords = ipa ? ipa.replace(/^\//,"").replace(/\/$/,"").split(/\s+/) : [];

  return (
    <motion.div key={zh} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
      transition={{duration:.35}} className="card px-8 py-10 text-center">
      <h2 className="text-2xl font-bold leading-relaxed mb-6 tracking-wide">{zh}</h2>

      <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
        <div className={`flex items-center gap-1.5 flex-wrap justify-center transition-opacity duration-300 ${ipaVisible?"opacity-100":"opacity-0"}`}>
          {ipaWords.map((w,i)=>(
            <span key={i} className="inline-flex text-xs opacity-45 font-mono px-1.5 py-0.5 bg-white/6">{w}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button onClick={onToggleIpa}
          className={`text-xs px-2.5 py-1 transition-colors ${ipaVisible?"bg-[var(--accent)]/15 text-[var(--accent)]":"opacity-35 hover:opacity-45"}`}>
          {ipaVisible?"隐藏音标":"显示音标"}
        </button>
        <button onClick={onSpeak}
          className="text-xs px-2.5 py-1 opacity-35 hover:opacity-45 hover:bg-white/6 transition-colors">
          朗读 🔊
        </button>
      </div>
    </motion.div>
  );
}
