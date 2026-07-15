"use client";

import { useRef, useEffect } from "react";

interface SentenceNavProps {
  total: number;
  currentIndex: number;
  completed: boolean[];
  nextUncompleted: number;
  onJump: (index: number) => void;
}

export default function SentenceNav({ total, currentIndex, completed, nextUncompleted, onJump }: SentenceNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dotWidth = 28; // 20px dot + 8px gap

  // Auto-scroll to keep current index visible
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = currentIndex * dotWidth - el.clientWidth / 2 + 10;
    el.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  }, [currentIndex, dotWidth]);

  if (total <= 1) return null;

  const canJump = (i: number) =>
    i === currentIndex || completed[i] || i === nextUncompleted;

  return (
    <div className="flex justify-center mb-2">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto px-4 py-2 max-w-full no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {Array.from({ length: total }, (_, i) => {
          const isCurrent = i === currentIndex;
          const isDone = completed[i];
          const isNext = i === nextUncompleted && !isDone;
          const clickable = canJump(i) && !isCurrent;

          return (
            <button
              key={i}
              onClick={() => clickable && onJump(i)}
              disabled={!clickable}
              className="shrink-0 rounded-full transition-all duration-200"
              style={{
                width: 20,
                height: 20,
                background: isCurrent
                  ? "var(--accent)"
                  : isDone
                  ? "var(--accent-bg)"
                  : isNext
                  ? "var(--border-f)"
                  : "var(--border)",
                border: isCurrent ? "2px solid var(--accent)" : "2px solid transparent",
                opacity: clickable ? 1 : isCurrent || isDone || isNext ? 1 : 0.35,
                cursor: clickable ? "pointer" : "default",
                transform: isCurrent ? "scale(1.25)" : "scale(1)",
                boxShadow: isCurrent ? "0 0 0 3px var(--accent-bg)" : "none",
              }}
              title={`第 ${i + 1} 句${isDone ? "（已完成）" : isNext ? "（当前）" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
}
