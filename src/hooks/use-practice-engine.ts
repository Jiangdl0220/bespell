"use client";

import { useState, useCallback, useRef } from "react";

export interface WordToken {
  en: string;
  zh: string;
}

export interface PracticeSentence {
  zh: string;
  en: string;
  ipa: string;
  words: WordToken[];
}

type SentenceStatus = "pending" | "correct" | "error";
type FeedbackType = "correct" | "error" | null;

const PUNCTUATION = new Set([",", ".", "!", "?", ";", ":", "\u2014", "\u2013", "\u2026", "...", "\u201c", "\u201d", "\u2018", "\u2019", "\u0022", "\u0027", "\u002d"]);

export function isPunct(token: WordToken): boolean {
  return PUNCTUATION.has(token.en);
}

export function usePracticeEngine(sentences: PracticeSentence[], onPeek?: (word: WordToken) => void, startIndex = 0, completedSet?: Set<number>) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [sentenceStatuses, setSentenceStatuses] = useState<SentenceStatus[]>(
    () => sentences.map((_, i) => completedSet?.has(i) ? "correct" : "pending")
  );
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(() => Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
  const lastPeeked = useRef("");

  const currentSentence = sentences[currentIndex] ?? null;
  const words = currentSentence?.words ?? [];

  // Skip initial punctuation
  const effectiveStart = (() => {
    let i = 0;
    while (i < words.length && isPunct(words[i])) i++;
    return i;
  })();

  // Find next non-punct starting from idx+1
  const nextRealWord = useCallback((from: number): number | null => {
    for (let i = from + 1; i < words.length; i++) {
      if (!isPunct(words[i])) return i;
    }
    return null;
  }, [words.length, currentIndex]);

  const currentWord = words[currentWordIndex] ?? null;
  const isLastSentence = currentIndex === sentences.length - 1;
  const isLastWord = nextRealWord(currentWordIndex) === null;

  // Submit current word on space/enter
  const submitWord = useCallback(() => {
    if (!currentWord || feedback || isPunct(currentWord)) return;

    const trimmed = inputValue.trim();
    const target = currentWord.en;

    const normalized = trimmed.replace(/\s+/g, " ").toLowerCase();
    const normalizedTarget = target.toLowerCase();

    setTotalAttempts((p) => p + 1);

    if (normalized === normalizedTarget) {
      setFeedback("correct");
      setCombo((c) => {
        const next = c + 1;
        setMaxCombo((m) => Math.max(m, next));
        return next;
      });
      setTotalCorrect((p) => p + 1);

      setTimeout(() => {
        setFeedback(null);
        setInputValue("");

        if (isLastWord) {
          setSentenceStatuses((prev) => {
            const next = [...prev];
            next[currentIndex] = "correct";
            return next;
          });
          if (isLastSentence) {
            setIsComplete(true);
          } else {
            setTimeout(() => {
              setCurrentIndex((i) => i + 1);
              setCurrentWordIndex(0);
            }, 400);
          }
        } else {
          const nxt = nextRealWord(currentWordIndex);
          if (nxt !== null) setCurrentWordIndex(nxt);
          else setCurrentWordIndex(currentWordIndex + 1);
        }
      }, 500);
    } else {
      setFeedback("error");
      setCombo(0);
      setTimeout(() => {
        setFeedback(null);
        setInputValue("");
      }, 600);
    }
  }, [
    currentWord, currentWordIndex, inputValue, feedback,
    isLastWord, isLastSentence, currentIndex, nextRealWord,
  ]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setHintVisible(true);
        if (currentWord && !isPunct(currentWord) && onPeek && lastPeeked.current !== currentWord.en) {
          lastPeeked.current = currentWord.en;
          onPeek(currentWord);
        }
        return;
      }
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        submitWord();
        return;
      }
    },
    [submitWord]
  );

  const handleKeyUp = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Tab") setHintVisible(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (feedback) return;
      setInputValue(e.target.value);
    },
    [feedback]
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  // Jump to a sentence index (only if completed or current next)
  const completed = sentenceStatuses.map((s, i) => s === "correct" || (completedSet?.has(i) ?? false));
  const nextUncompleted = completed.lastIndexOf(false) >= 0 ? completed.lastIndexOf(false) : sentences.length;
  const canJumpTo = (i: number) => i === currentIndex || completed[i] || i === nextUncompleted;

  const jumpTo = useCallback((i: number) => {
    if (i < 0 || i >= sentences.length || !canJumpTo(i)) return;
    setCurrentIndex(i);
    setCurrentWordIndex(0);
    setInputValue("");
    setHintVisible(false);
    setFeedback(null);
  }, [sentences.length, canJumpTo]);

  // Check completeness whenever statuses change
  const allCorrect = sentenceStatuses.every(s => s === "correct");

  return {
    currentIndex, currentWordIndex, inputValue, combo, maxCombo,
    hintVisible, feedback, sentenceStatuses, currentSentence, currentWord,
    isLastSentence, isLastWord, totalCorrect, totalAttempts,
    accuracy, elapsed, isComplete: isComplete || allCorrect, total: sentences.length,
    inputRef, completed, nextUncompleted, jumpTo,
    handleKeyDown, handleKeyUp, handleInputChange, focusInput, setCurrentIndex,
  };
}
