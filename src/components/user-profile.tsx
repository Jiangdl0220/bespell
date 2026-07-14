"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface UserProfile {
  id: string;
  username: string;
  nickname: string;
  createdAt: string;
}

export default function UserProfileCard() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [nickname, setNickname] = useState("");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/profile")
      .then(r => r.json())
      .then(data => {
        if (data.id) { setProfile(data); setNickname(data.nickname); }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    if (!nickname.trim() || nickname === profile?.nickname) { setEditing(false); return; }
    setSaving(true);
    const r = await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: nickname.trim() }),
    });
    const data = await r.json();
    if (data.success) {
      setProfile(prev => prev ? { ...prev, nickname: data.nickname } : null);
    }
    setSaving(false);
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-20">
        <div className="card p-8 animate-pulse space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full" style={{ background: "var(--border)" }} />
          <div className="h-5 w-32 mx-auto rounded" style={{ background: "var(--border)" }} />
          <div className="h-3 w-24 mx-auto rounded" style={{ background: "var(--border)" }} />
        </div>
      </div>
    );
  }

  const joinDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })
    : "";

  return (
    <div className="max-w-md mx-auto mt-12 sm:mt-20 p-4">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-8 text-center">
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center text-2xl font-bold"
          style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>
          {(profile?.nickname || profile?.username || "?").charAt(0).toUpperCase()}
        </div>

        {/* Nickname */}
        {editing ? (
          <div className="flex items-center justify-center gap-2 mb-1">
            <input
              autoFocus
              value={nickname}
              onChange={e => setNickname(e.target.value.slice(0, 20))}
              onKeyDown={e => { if (e.key === "Enter") handleSave(); if (e.key === "Escape") setEditing(false); }}
              className="input text-center text-lg font-bold w-40"
              style={{ fontSize: "1.125rem" }}
              maxLength={20}
            />
            <button onClick={handleSave} disabled={saving} className="text-sm font-semibold px-2 py-1 rounded-lg transition-opacity"
              style={{ color: "var(--accent)" }}>
              {saving ? "..." : "保存"}
            </button>
          </div>
        ) : (
          <h2
            className="text-xl font-bold mb-1 cursor-pointer hover:opacity-70 transition-opacity flex items-center justify-center gap-1"
            style={{ color: "var(--text)" }}
            onClick={() => setEditing(true)}
          >
            {profile?.nickname || profile?.username}
            <span className="text-xs opacity-40 ml-1">✎</span>
          </h2>
        )}

        {/* Username */}
        <p className="text-sm mb-4" style={{ color: "var(--text2)" }}>
          @{profile?.username}
        </p>

        {/* Stats placeholder */}
        <div className="flex justify-center gap-8 mb-6">
          <div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>—</div>
            <div className="text-xs" style={{ color: "var(--text2)" }}>课程</div>
          </div>
          <div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>—</div>
            <div className="text-xs" style={{ color: "var(--text2)" }}>句子</div>
          </div>
          <div>
            <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>—</div>
            <div className="text-xs" style={{ color: "var(--text2)" }}>复习</div>
          </div>
        </div>

        {/* Join date */}
        <p className="text-xs" style={{ color: "var(--text2)" }}>
          加入于 {joinDate}
        </p>
      </motion.div>
    </div>
  );
}
