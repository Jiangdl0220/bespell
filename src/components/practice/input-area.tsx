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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-[#1a1a1a]/8 px-6 py-8 relative cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Word underlines — one per word, current one shows typed chars */}
      <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
        {Array.from({ length: totalWords }).map((_, i) => {
          const isCompleted = i < currentWordIndex;
          const isCurrent = i === currentWordIndex;

          if (isCompleted) {
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center justify-center min-w-[2ch] px-1 h-7 text-sm font-semibold text-[#4a9c5d]"
              >
                {words[i]?.en}
              </motion.span>
            );
          }

          if (isCurrent) {
            return (
              <motion.div
                key={i}
                className={`flex flex-col items-center ${
                  feedback === "error" ? "shake" : ""
                }`}
                animate={
                  feedback === "correct"
                    ? { scale: [1, 1.15, 1] }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                {/* Typed characters above the underline */}
                <span
                  className="text-lg font-bold transition-colors h-7 flex items-center tracking-wide"
                  style={{
                    color:
                      feedback === "correct"
                        ? "#4a9c5d"
                        : feedback === "error"
                        ? "#c94b3a"
                        : "#1a1a1a",
                  }}
                >
                  {inputValue || (
                    <span className="inline-block w-1.5 h-5 bg-[#c98a2b] animate-pulse rounded-sm" />
                  )}
                </span>
                {/* Underline */}
                <span
                  className="block h-0.5 rounded-full transition-all duration-200"
                  style={{
                    width: inputValue
                      ? `${Math.max(inputValue.length * 11, 28)}px`
                      : "28px",
                    backgroundColor:
                      feedback === "correct"
                        ? "#4a9c5d"
                        : feedback === "error"
                        ? "#c94b3a"
                        : "#c98a2b",
                  }}
                />
              </motion.div>
            );
          }

          // Upcoming word — just an underline placeholder
          return (
            <span
              key={i}
              className="inline-block w-7 h-0.5 bg-[#1a1a1a]/10 align-middle mt-6"
            />
          );
        })}
      </div>

      {/* Hidden input for keyboard capture */}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />

      {/* Hint bar at bottom */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-xs text-[#1a1a1a]/25">
          空格确认 · Tab 偷看提示
        </p>
        <div className="h-4">
          <AnimatePresence>
            {hintVisible && currentWord && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="text-xs text-[#c98a2b] font-semibold"
              >
                {currentWord.zh || currentWord.en}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Feedback icon */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-3 right-3 text-lg font-bold pointer-events-none"
            style={{
              color: feedback === "correct" ? "#4a9c5d" : "#c94b3a",
            }}
          >
            {feedback === "correct" ? "✓" : "✗"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shake animation */}
      <style jsx>{`
        .shake {
          animation: shake 0.3s ease-in-out;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          16% { transform: translateX(-6px); }
          33% { transform: translateX(6px); }
          50% { transform: translateX(-4px); }
          66% { transform: translateX(4px); }
          83% { transform: translateX(-2px); }
        }
      `}</style>
    </motion.div>
  );
}
