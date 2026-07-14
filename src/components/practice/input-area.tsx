"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { WordToken } from "@/hooks/use-practice-engine";

interface InputAreaProps {
  words: WordToken[];
  currentWordIndex: number;
  inputValue: string;
  hintVisible: boolean;
  feedback: "correct" | "error" | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onKeyUp: (e: React.KeyboardEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export default function InputArea({
  words,
  currentWordIndex,
  inputValue,
  hintVisible,
  feedback,
  inputRef,
  onKeyDown,
  onKeyUp,
  onChange,
  onFocus,
}: InputAreaProps) {
  const currentWord = words[currentWordIndex];
  const totalWords = words.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .35, delay: .1, ease: [.16, 1, .3, 1] }}
      className="bg-white px-6 py-10 relative cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Word underlines */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {Array.from({ length: totalWords }).map((_, i) => {
          const isCompleted = i < currentWordIndex;
          const isCurrent = i === currentWordIndex;

          if (isCompleted) {
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: .7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-end justify-center min-w-[2ch] px-1 h-9 text-sm font-semibold text-[#3e8e4e]"
              >
                {words[i]?.en}
              </motion.span>
            );
          }

          if (isCurrent) {
            return (
              <motion.div
                key={i}
                className={`flex flex-col items-center ${feedback === "error" ? "shake" : ""}`}
                animate={feedback === "correct" ? { scale: [1, 1.12, 1] } : {}}
                transition={{ duration: .3 }}
              >
                <span
                  className="text-xl font-bold h-8 flex items-center tracking-wide"
                  style={{
                    color: feedback === "correct" ? "#3e8e4e" : feedback === "error" ? "#c94b3a" : "#1a1a1a",
                  }}
                >
                  {inputValue || (
                    <span className="inline-block w-1 h-5 bg-[#c98a2b] animate-pulse rounded-sm" />
                  )}
                </span>
                <span
                  className="block h-0.5 rounded-full transition-all duration-200"
                  style={{
                    width: inputValue ? `${Math.max(inputValue.length * 14, 48)}px` : "48px",
                    backgroundColor: feedback === "correct" ? "#3e8e4e" : feedback === "error" ? "#c94b3a" : "#c98a2b",
                  }}
                />
              </motion.div>
            );
          }

          return (
            <span key={i} className="inline-block w-14 h-0.5 bg-[#1a1a1a]/8 align-middle mt-8" />
          );
        })}
      </div>

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
      />

      {/* Hint bar */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-xs text-[#1a1a1a]/20">
          空格确认 · Tab 偷看
        </p>
        <div className="h-5">
          <AnimatePresence>
            {hintVisible && currentWord && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="text-sm font-semibold text-[#c98a2b]"
              >
                {currentWord.en}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Feedback badge */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: .4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .4 }}
            className="absolute top-4 right-4 text-lg font-bold pointer-events-none"
            style={{ color: feedback === "correct" ? "#3e8e4e" : "#c94b3a" }}
          >
            {feedback === "correct" ? "✓" : "✗"}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
