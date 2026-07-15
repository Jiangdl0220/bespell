"use client";

import { useState, useCallback, useRef } from "react";
import type { PracticeSentence } from "./use-practice-engine";

export interface DictationState {
  currentIndex: number;
  total: number;
  input: string;
  submitted: boolean;
  isCorrect: boolean | null;
  feedbackToken: "correct" | "error" | null;
  done: boolean;
}

export function useDictationEngine(sentences: PracticeSentence[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedbackToken, setFeedbackToken] = useState<"correct" | "error" | null>(null);
  const [done, setDone] = useState(false);

  const currentSentence = sentences[currentIndex] ?? null;

  const submitAndCheck = useCallback(() => {
    if (!currentSentence || submitted) return;
    const trimmed = input.trim();
    const target = currentSentence.en.trim();
    // Case-insensitive, normalize spaces
    const correct = trimmed.toLowerCase().replace(/\s+/g, " ") === target.toLowerCase().replace(/\s+/g, " ");
    setIsCorrect(correct);
    setFeedbackToken(correct ? "correct" : "error");
    setSubmitted(true);
  }, [currentSentence, input, submitted]);

  const nextSentence = useCallback(() => {
    if (currentIndex + 1 >= sentences.length) {
      setDone(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setInput("");
    setSubmitted(false);
    setIsCorrect(null);
    setFeedbackToken(null);
  }, [currentIndex, sentences.length]);

  // Reset when sentences change
  const lastSentencesRef = useRef(sentences);
  if (lastSentencesRef.current !== sentences) {
    lastSentencesRef.current = sentences;
    // Don't reset inside render — handled by key on page
  }

  return {
    currentSentence,
    currentIndex,
    total: sentences.length,
    input,
    setInput,
    submitted,
    isCorrect,
    feedbackToken,
    done,
    submitAndCheck,
    nextSentence,
  } satisfies DictationState & {
    currentSentence: PracticeSentence | null;
    setInput: (v: string) => void;
    submitAndCheck: () => void;
    nextSentence: () => void;
  };
}
