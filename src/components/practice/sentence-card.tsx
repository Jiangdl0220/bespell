"use client";

import { motion } from "framer-motion";

interface WordToken {
  en: string;
  zh: string;
}

interface SentenceCardProps {
  zh: string;
  ipa: string;
  words: WordToken[];
  ipaVisible: boolean;
  onToggleIpa: () => void;
  onSpeak: () => void;
}

export default function SentenceCard({
  zh,
  ipa,
  words,
  ipaVisible,
  onToggleIpa,
  onSpeak,
}: SentenceCardProps) {
  // Split IPA into word-level chunks by matching spaces
  const ipaWords = ipa ? ipa.replace(/^\//, "").replace(/\/$/, "").split(/\s+/) : [];

  return (
    <motion.div
      key={zh}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-[#1a1a1a]/8 px-6 py-6 text-center"
    >
      {/* Chinese */}
      <h2 className="text-xl font-semibold text-[#1a1a1a] leading-relaxed mb-5">
        {zh}
      </h2>

      {/* IPA row — word by word with separators */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <div
          className={`flex items-center gap-1.5 transition-opacity duration-200 flex-wrap justify-center ${
            ipaVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {ipaWords.map((w, i) => (
            <span
              key={i}
              className="inline-flex items-center text-sm text-[#1a1a1a]/40 font-mono px-1.5 py-0.5 rounded bg-[#1a1a1a]/3"
            >
              {w}
            </span>
          ))}
        </div>

        {/* Controls */}
        <span className="inline-flex items-center gap-1.5 ml-2">
          <button
            onClick={onToggleIpa}
            className={`text-sm px-1.5 py-0.5 rounded transition-colors ${
              ipaVisible
                ? "bg-[#c98a2b]/10 text-[#c98a2b]"
                : "text-[#1a1a1a]/20 hover:text-[#1a1a1a]/40"
            }`}
            title={ipaVisible ? "隐藏音标" : "显示音标"}
          >
            {ipaVisible ? "👁️" : "👁️‍🗨️"}
          </button>
          <button
            onClick={onSpeak}
            className="text-sm px-1.5 py-0.5 rounded text-[#1a1a1a]/25 hover:text-[#1a1a1a]/50 hover:bg-[#1a1a1a]/5 transition-colors"
            title="播放发音"
          >
            🔊
          </button>
        </span>
      </div>
    </motion.div>
  );
}
