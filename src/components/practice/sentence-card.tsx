"use client";

import { motion } from "framer-motion";

interface SentenceCardProps {
  zh: string; ipa: string;
  ipaVisible: boolean; onToggleIpa: () => void; onSpeak: () => void;
}

export default function SentenceCard({ zh, ipa, ipaVisible, onToggleIpa, onSpeak }: SentenceCardProps) {
  return (
    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="card px-6 py-8 text-center">
      <p className="text-xl font-bold mb-4 leading-relaxed" style={{color:"var(--text)"}}>{zh}</p>

      {ipaVisible && (
        <motion.p initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}
          className="text-base mb-4 leading-loose tracking-wider font-mono"
          style={{ color: "var(--text2)", letterSpacing: "0.08em", wordSpacing: "0.4em" }}>
          {ipa}
        </motion.p>
      )}

      <div className="flex items-center justify-center gap-3">
        <button onClick={onToggleIpa} className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
          style={{background: ipaVisible ? "var(--accent-bg)" : "var(--border)", color: ipaVisible ? "var(--accent)" : "var(--text2)"}}>
          {ipaVisible ? "隐藏音标" : "显示音标"}
        </button>
        <button onClick={onSpeak} className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all hover:opacity-80 active:scale-95"
          style={{background: "var(--accent-bg)", color: "var(--accent)"}}>
          {'\u8046\u542c'}
        </button>
      </div>
    </motion.div>
  );
}
