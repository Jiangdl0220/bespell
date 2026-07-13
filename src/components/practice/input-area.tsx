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

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Word progress display */}
      <div className="flex flex-wrap items-center gap-2 mb-5 min-h-[28px]">
        {words.map((word, i) => {
          const isCompleted = i < currentWordIndex;
          const isCurrent = i === currentWordIndex;

          return (
            <AnimatePresence key={i} mode="popLayout">
              {isCompleted && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-sm text-[#4a9c5d] font-medium"
                >
                  {word.en}
                </motion.span>
              )}
              {isCurrent && (
                <motion.span
                  layout
                  className={`inline-flex items-center text-sm font-medium transition-colors ${
                    feedback === "correct"
                      ? "text-[#4a9c5d]"
                      : feedback === "error"
                      ? "text-[#c94b3a]"
                      : "text-[#1a1a1a]/30"
                  }`}
                >
                  {/* Show typed characters with underline for remaining */}
                  {inputValue ? (
                    <>
                      <span
                        className={
                          word.en.toLowerCase().startsWith(inputValue.toLowerCase())
                            ? "text-[#1a1a1a]"
                            : "text-[#c94b3a]"
                        }
                      >
                        {inputValue}
                      </span>
                      <span className="border-b-2 border-[#c98a2b] text-transparent">
                        {word.en.slice(inputValue.length)}
                      </span>
                    </>
                  ) : (
                    <span className="border-b-2 border-[#c98a2b] inline-block min-w-[2ch]">
                      💀
                    </span>
                  )}
                </motion.span>
              )}
              {!isCompleted && !isCurrent && (
                <span className="text-sm text-[#1a1a1a]/15">
                  {word.en}
                </span>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* Input field */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a]/15 px-0 py-4 text-2xl text-[#1a1a1a] 
                     placeholder-[#1a1a1a]/15 outline-none font-mono tracking-wide
                     focus:border-[#c98a2b] transition-colors"
          placeholder="输入英文..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* Feedback overlay */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className={`text-2xl font-bold ${
                  feedback === "correct" ? "text-[#4a9c5d]" : "text-[#c94b3a]"
                }`}
              >
                {feedback === "correct" ? "✓" : "✗"}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hint bar */}
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-[#1a1a1a]/25">
          按空格确认单词，按 Tab 偷看提示
        </p>
        {hintVisible && currentWord && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-[#c98a2b] font-medium"
          >
            {currentWord.zh || currentWord.en}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
