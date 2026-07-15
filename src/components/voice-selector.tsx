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

  const handlePreview = () => {
    if (!selected) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance("Hello, this is a sample of my voice.");
    u.lang = "en-US";
    u.rate = 0.9;
    const voice = voices.find((v) => v.name === selected);
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  };

  if (voices.length === 0) return null;

  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm" style={{ color: "var(--text)" }}>嗓音</span>
      <div className="flex items-center gap-2">
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
        <button
          onClick={handlePreview}
          className="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all hover:scale-105"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          title="试听"
        >
          🔊
        </button>
      </div>
    </div>
  );
}

// Helper to speak with stored voice preference
export function speak(text: string, rate = 0.85) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  // Small delay to let cancel flush before queuing new utterance
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    const preferred = localStorage.getItem("bespell-voice");
    if (preferred) {
      const voices = synth.getVoices();
      const match = voices.find((v) => v.name === preferred);
      if (match) utterance.voice = match;
    }
    synth.speak(utterance);
  }, 50);
}
