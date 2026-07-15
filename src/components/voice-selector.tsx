"use client";

import { useState, useEffect, useRef } from "react";

export default function VoiceSelector() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("bespell-voice");
    setSelected(stored || "");

    const load = () => {
      const v = speechSynthesis.getVoices().filter((v) => v.lang.startsWith("en"));
      setVoices(v);
      if (!stored && v.length > 0) {
        setSelected(v.find((x) => x.name.includes("Samantha") || x.name.includes("Female"))?.name || v[0].name);
      }
    };
    load();
    speechSynthesis.onvoiceschanged = load;
    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleChange = (name: string) => {
    setSelected(name);
    localStorage.setItem("bespell-voice", name);
  };

  if (voices.length === 0) return null;

  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm" style={{ color: "var(--text)" }}>🎙️ 发音人</span>
      <select
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
        className="text-sm px-3 py-1.5 rounded-lg border outline-none"
        style={{
          background: "var(--bg)",
          color: "var(--text)",
          borderColor: "var(--border)",
          fontFamily: "'Inter Tight', system-ui, sans-serif",
        }}
      >
        {voices.map((v) => (
          <option key={v.name} value={v.name}>
            {v.name} ({v.lang})
          </option>
        ))}
      </select>
    </div>
  );
}

// Helper to speak with stored voice preference
export function speak(text: string, rate = 0.85) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  const preferred = localStorage.getItem("bespell-voice");
  if (preferred) {
    const voices = speechSynthesis.getVoices();
    const match = voices.find((v) => v.name === preferred);
    if (match) utterance.voice = match;
  }
  speechSynthesis.speak(utterance);
}
