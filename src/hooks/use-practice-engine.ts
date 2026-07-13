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

export function usePracticeEngine(sentences: PracticeSentence[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [sentenceStatuses, setSentenceStatuses] = useState<SentenceStatus[]>(
    () => sentences.map(() => "pending")
  );
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(() => Date.now());
  const inputRef = useRef<HTMLInputElement>(null);

  const currentSentence = sentences[currentIndex] ?? null;
  const currentWord = currentSentence?.words[currentWordIndex] ?? null;
  const isLastSentence = currentIndex === sentences.length - 1;
  const isLastWord =
    currentSentence &&
    currentWordIndex === currentSentence.words.length - 1;

  // Submit current word on space/enter
  const submitWord = useCallback(() => {
    if (!currentWord || feedback) return;

    const trimmed = inputValue.trim();
    const target = currentWord.en;

    // Case-insensitive comparison, collapse multiple spaces
    const normalized = trimmed.replace(/\s+/g, " ").toLowerCase();
    const normalizedTarget = target.toLowerCase();

    setTotalAttempts((p) => p + 1);

    if (normalized === normalizedTarget) {
      // Correct
      setFeedback("correct");
      setCombo((c) => {
        const next = c + 1;
        setMaxCombo((m) => Math.max(m, next));
        return next;
      });
      setTotalCorrect((p) => p + 1);

      // Move to next word after animation
      setTimeout(() => {
        setFeedback(null);
        setInputValue("");

        if (isLastWord) {
          // Sentence complete
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
          setCurrentWordIndex((i) => i + 1);
        }
      }, 500);
    } else {
      // Error
      setFeedback("error");
      setCombo(0);

      setTimeout(() => {
        setFeedback(null);
        setInputValue("");
      }, 600);
    }
  }, [
    currentWord,
    inputValue,
    feedback,
    isLastWord,
    isLastSentence,
    currentIndex,
  ]);

  // Reveal hint on Tab hold
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setHintVisible(true);
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
    if (e.key === "Tab") {
      setHintVisible(false);
    }
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (feedback) return;
      setInputValue(e.target.value);
    },
    [feedback]
  );

  // Focus input on mount and after sentence change
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Accuracy
  const accuracy =
    totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  // Time elapsed
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  return {
    // State
    currentIndex,
    currentWordIndex,
    inputValue,
    combo,
    maxCombo,
    hintVisible,
    feedback,
    sentenceStatuses,
    currentSentence,
    currentWord,
    isLastSentence,
    isLastWord,
    totalCorrect,
    totalAttempts,
    accuracy,
    elapsed,
    isComplete,
    total: sentences.length,

    // Refs
    inputRef,

    // Handlers
    handleKeyDown,
    handleKeyUp,
    handleInputChange,
    focusInput,
    setCurrentIndex,
  };
}
