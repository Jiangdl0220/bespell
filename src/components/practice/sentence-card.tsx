"use client";

import { motion } from "framer-motion";

interface SentenceCardProps {
  zh: string;
  ipa: string;
  ipaVisible: boolean;
  onToggleIpa: () => void;
  onSpeak: () => void;
}

export default function SentenceCard({
  zh,
  ipa,
  ipaVisible,
  onToggleIpa,
  onSpeak,
}: SentenceCardProps) {
  return (
    <motion.div
      key={zh}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-[#1a1a1a]/8 px-8 py-8 text-center"
    >
      {/* Sentence label */}
      <p className="text-xs font-semibold text-[#1a1a1a]/30 uppercase tracking-[0.2em] mb-6">
        句子
      </p>

      {/* Chinese */}
      <h2 className="text-2xl font-medium text-[#1a1a1a] leading-relaxed mb-4">
        {zh}
      </h2>

      {/* IPA row */}
      <div className="flex items-center justify-center gap-3">
        <p
          className={`text-sm text-[#1a1a1a]/40 font-mono transition-opacity duration-200 ${
            ipaVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {ipa}
        </p>
        <button
          onClick={onToggleIpa}
          className={`text-sm transition-colors ${
            ipaVisible
              ? "text-[#c98a2b]"
              : "text-[#1a1a1a]/25 hover:text-[#1a1a1a]/50"
          }`}
          title={ipaVisible ? "隐藏音标" : "显示音标"}
        >
          {ipaVisible ? "👁️" : "👁️‍🗨️"}
        </button>
        <button
          onClick={onSpeak}
          className="text-sm text-[#1a1a1a]/25 hover:text-[#1a1a1a]/50 transition-colors"
          title="播放发音"
        >
          🔊
        </button>
      </div>
    </motion.div>
  );
}
