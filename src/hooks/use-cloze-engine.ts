"use client";

import { useState, useCallback, useRef } from "react";
import type { PracticeSentence, WordToken } from "./use-practice-engine";
import { isPunct } from "./use-practice-engine";

// Generate cloze blanks: randomly pick ~35% of non-punct words to hide
function generateCloze(words: WordToken[]): { words: WordToken[]; blanks: Set<number> } {
  const nonPunct = words
    .map((w, i) => ({ i, w }))
    .filter(({ w }) => !isPunct(w));
  const count = Math.max(1, Math.ceil(nonPunct.length * 0.35));
  const shuffled = [...nonPunct].sort(() => Math.random() - 0.5);
  const blankSet = new Set(shuffled.slice(0, count).map(({ i }) => i));
  return { words, blanks: blankSet };
}

export interface ClozeState {
  currentIndex: number;
  total: number;
  input: string;
  currentWord: WordToken | null;
  wordIndex: number;
  blankIndices: number[];
  blanks: Set<number>;
  feedbackToken: "correct" | "error" | null;
  hintVisible: boolean;
  done: boolean;
  currentWords: WordToken[];
  submittedWords: WordToken[];
}

export function useClozeEngine(sentences: PracticeSentence[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blanks, setBlanks] = useState<Set<number>>(new Set());
  const [blankIndices, setBlankIndices] = useState<number[]>([]);
  const [wordIndex, setWordIndex] = useState(0); // index within blankIndices
  const [input, setInput] = useState("");
  const [feedbackToken, setFeedbackToken] = useState<"correct" | "error" | null>(null);
  const [hintVisible, setHintVisible] = useState(false);
  const [done, setDone] = useState(false);
  const [submittedWords, setSubmittedWords] = useState<WordToken[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const currentSentence = sentences[currentIndex] ?? null;

  // Init blanks for current sentence
  const lastIdx = useRef(-1);
  if (currentIndex !== lastIdx.current && currentSentence) {
    lastIdx.current = currentIndex;
    const { blanks: b, words } = generateCloze(currentSentence.words);
    const indices = currentSentence.words
      .map((_, i) => i)
      .filter((i) => b.has(i));
    setBlanks(b);
    setBlankIndices(indices);
    setWordIndex(0);
    setInput("");
    setFeedbackToken(null);
    setHintVisible(false);
    setSubmittedWords([]);
  }

  const currentWord = currentSentence?.words[blankIndices[wordIndex]] ?? null;

  const submitWord = useCallback(() => {
    if (!currentWord) return;
    const trimmed = input.trim();
    if (!trimmed) return;
    const correct = trimmed.toLowerCase() === currentWord.en.toLowerCase();
    if (correct) {
      setFeedbackToken("correct");
      setSubmittedWords((prev) => [...prev, currentWord]);
      setTimeout(() => {
        if (wordIndex + 1 >= blankIndices.length) {
          // All blanks filled
          // move to next sentence
          if (currentIndex + 1 >= sentences.length) {
            setDone(true);
          } else {
            setCurrentIndex((i) => i + 1);
          }
        } else {
          setWordIndex((i) => i + 1);
        }
        setInput("");
        setFeedbackToken(null);
        setHintVisible(false);
      }, 300);
    } else {
      setFeedbackToken("error");
      setTimeout(() => setFeedbackToken(null), 600);
    }
  }, [currentWord, input, wordIndex, blankIndices.length, currentIndex, sentences.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        submitWord();
      } else if (e.key === "Tab") {
        e.preventDefault();
        setHintVisible(true);
      }
    },
    [submitWord]
  );

  const currentWords = currentSentence?.words ?? [];

  return {
    currentSentence,
    currentIndex,
    total: sentences.length,
    input,
    setInput,
    currentWord,
    wordIndex,
    blankIndices,
    blanks,
    feedbackToken,
    hintVisible,
    done,
    currentWords,
    submittedWords,
    submitWord,
    handleKeyDown,
    inputRef,
  };
}
