"use client";

import { useEffect, useState, useCallback } from "react";

interface ReviewWord {
  id: string;
  wordEn: string;
  wordZh: string;
  ipa: string | null;
  courseId: string;
  courseTitle: string;
  source: "peek" | "saved";
  createdAt: string;
}

export default function ReviewContent() {
  const [tab, setTab] = useState<"peek" | "saved">("peek");
  const [words, setWords] = useState<ReviewWord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWords = useCallback(() => {
    setLoading(true);
    fetch(`/api/review-words?source=${tab}`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setWords(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [tab]);

  useEffect(() => { fetchWords(); }, [fetchWords]);

  const handleRemove = async (id: string) => {
    await fetch("/api/review-words", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setWords((prev) => prev.filter((w) => w.id !== id));
  };

  const tabs = [
    { key: "peek" as const, label: "所思", desc: "练习中曾驻足的词" },
    { key: "saved" as const, label: "所念", desc: "想要反复回味的词" },
  ];

  return (
    <div className="page-container">
      <h1 className="display text-3xl mb-2" style={{ color: "var(--accent)" }}>
        温故
      </h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 mt-6" style={{ background: "var(--hover)", borderRadius: 12, padding: 4 }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="flex-1 py-2.5 text-sm font-medium rounded-[10px] transition-all"
            style={{
              background: tab === t.key ? "var(--card)" : "transparent",
              color: tab === t.key ? "var(--accent)" : "var(--text2)",
              boxShadow: tab === t.key ? "0 1px 3px rgba(0,0,0,.06)" : "none",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="text-xs mb-6" style={{ color: "var(--text2)" }}>
        {tabs.find((t) => t.key === tab)?.desc}
      </p>

      {/* Word list */}
      {loading ? (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-4 animate-pulse" style={{ background: "var(--hover)" }}>
              <div className="h-4 w-24 rounded mb-2" style={{ background: "var(--border)" }} />
              <div className="h-3 w-16 rounded" style={{ background: "var(--border)" }} />
            </div>
          ))}
        </div>
      ) : words.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-sm opacity-40">
            {tab === "peek"
              ? "练习中 Tab 窥探的单词会出现在这里"
              : "练习中收藏的单词会出现在这里"}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {words.map((w) => (
            <div
              key={w.id}
              className="card p-4 flex items-center justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-base">{w.wordEn}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-mono" style={{ background: "var(--hover)", color: "var(--text2)" }}>
                    {w.wordZh}
                  </span>
                  {w.ipa && (
                    <span className="text-xs" style={{ color: "var(--text3)" }}>
                      /{w.ipa}/
                    </span>
                  )}
                </div>
                <p className="text-xs" style={{ color: "var(--text3)" }}>
                  {w.courseTitle}
                </p>
              </div>
              <button
                onClick={() => handleRemove(w.id)}
                className="text-xs px-2 py-1 rounded-lg opacity-30 hover:opacity-100 hover:text-[var(--red)] transition-all"
              >
                移除
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
