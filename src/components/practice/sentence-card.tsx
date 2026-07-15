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
          className="text-sm mb-4 font-mono" style={{color:"var(--text3)"}}>
          {ipa}
        </motion.p>
      )}

      <div className="flex items-center justify-center gap-3">
        <button onClick={onToggleIpa} className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
          style={{background: ipaVisible ? "var(--accent-bg)" : "var(--border)", color: ipaVisible ? "var(--accent)" : "var(--text2)"}}>
          {ipaVisible ? "\u9690\u85cf\u97f3\u6807" : "\u663e\u793a\u97f3\u6807"}
        </button>
        <button onClick={onSpeak} className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
          style={{background:"var(--border)",color:"var(--text2)"}}>
          \u64ad\u653e
        </button>
      </div>
    </motion.div>
  );
}
