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
        <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}
          className="mb-4 flex items-center justify-center gap-2 flex-wrap">
          {ipa
            .replace(/^\/|\/$/g, "")   // strip surrounding slashes
            .split(/\s*\|\|\s*|\s+/)   // split by || or whitespace
            .filter(Boolean)
            .map((token, i) => (
              <span key={i}
                className="text-xs font-mono px-2 py-0.5 rounded-md border"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                  borderColor: "var(--border)",
                }}>
                {token}
              </span>
            ))}
        </motion.div>
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
