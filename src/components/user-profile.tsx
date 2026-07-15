"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconLogOut } from "@/components/icons";
import VoiceSelector from "@/components/voice-selector";

interface Stats {
  courseCount: number;
  sentenceDone: number;
  reviewCount: number;
}

export default function UserProfile() {
  const [profile, setProfile] = useState<{ username: string; nickname: string | null; avatar: string | null; createdAt: string } | null>(null);
  const [stats, setStats] = useState<Stats>({ courseCount: 0, sentenceDone: 0, reviewCount: 0 });
  const [editingNickname, setEditingNickname] = useState(false);
  const [nicknameInput, setNicknameInput] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/user/profile").then((r) => r.json()).then(setProfile).catch(() => {});
    // Fetch stats in parallel
    Promise.all([
      fetch("/api/courses").then((r) => r.json()),
      fetch("/api/review-words").then((r) => r.json()),
    ])
      .then(([coursesData, reviewData]) => {
        const courses = Array.isArray(coursesData) ? coursesData : [];
        const reviews = Array.isArray(reviewData) ? reviewData : [];
        const totalDone = courses.reduce((sum: number, c: any) => sum + (c.completed || 0), 0);
        setStats({
          courseCount: courses.length,
          sentenceDone: totalDone,
          reviewCount: reviews.length,
        });
      })
      .catch(() => {});
  }, []);

  const handleSaveNickname = async () => {
    await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: nicknameInput }),
    });
    setProfile((prev) => (prev ? { ...prev, nickname: nicknameInput || null } : prev));
    setEditingNickname(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 200 * 1024) {
      alert("图片不能超过 200KB");
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;
      setAvatarPreview(base64);
      await fetch("/api/user/profile/avatar", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatar: base64 }),
      });
      setProfile((prev) => (prev ? { ...prev, avatar: base64 } : prev));
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const avatarSrc = avatarPreview || profile?.avatar;
  const displayName = profile?.nickname || profile?.username || "";
  const initial = displayName.charAt(0).toUpperCase();

  const joinedDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "long" })
    : "";
  const daysSince = profile?.createdAt
    ? Math.max(1, Math.floor((Date.now() - new Date(profile.createdAt).getTime()) / 86400000))
    : 0;

  return (
    <div className="max-w-lg mx-auto px-4 py-10 space-y-8">
      {/* Identity Card */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-8 text-center">
        <div className="relative mx-auto w-24 h-24 mb-5">
          {avatarSrc ? (
            <img src={avatarSrc} alt="" className="w-24 h-24 rounded-full object-cover border-2" style={{ borderColor: "var(--accent)" }} />
          ) : (
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold"
              style={{
                background: "linear-gradient(135deg, var(--accent), rgba(45,138,78,.3))",
                color: "white",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {initial}
            </div>
          )}
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-110 shadow-md"
            style={{ background: "var(--accent)", color: "white" }}
          >
            {uploading ? "..." : "+"}
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
        </div>

        <div className="flex items-center justify-center gap-2 mb-1">
          {editingNickname ? (
            <input
              autoFocus
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSaveNickname(); if (e.key === "Escape") setEditingNickname(false); }}
              onBlur={handleSaveNickname}
              maxLength={20}
              className="text-xl font-bold text-center bg-transparent border-b-2 outline-none"
              style={{ borderColor: "var(--accent)", color: "var(--text)", fontFamily: "'Playfair Display', serif" }}
            />
          ) : (
            <h2 className="text-xl font-bold" style={{ color: "var(--text)", fontFamily: "'Playfair Display', serif" }}>
              {displayName}
            </h2>
          )}
          <button
            onClick={() => { setEditingNickname(true); setNicknameInput(displayName); }}
            className="text-xs opacity-40 hover:opacity-100 transition-opacity"
            style={{ color: "var(--text2)" }}
          >
            ✎
          </button>
        </div>
        <p className="text-xs mb-4" style={{ color: "var(--text2)" }}>@{profile?.username}</p>
        <p className="text-xs" style={{ color: "var(--text3)" }}>
          {joinedDate} 加入 · 已学习 {daysSince} 天
        </p>
      </motion.div>

      {/* Stats Cards */}
      {stats.courseCount > 0 && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-3 gap-3">
          {[
            { label: "课业", value: stats.courseCount },
            { label: "所练", value: `${stats.sentenceDone} 句` },
            { label: "所思", value: `${stats.reviewCount} 词` },
          ].map(({ label, value }) => (
            <div key={label} className="card p-4 text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>{value}</div>
              <div className="text-xs" style={{ color: "var(--text2)" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Settings */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card p-6 space-y-1">
        <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text)" }}>设置</h3>
        <VoiceSelector />
        <div className="h-px" style={{ background: "var(--border)" }} />
        <button
          onClick={async () => { await fetch("/api/auth/logout", { method: "POST" }); window.location.href = "/login"; }}
          className="flex items-center gap-2 w-full py-3 text-sm hover:opacity-70 transition-opacity"
          style={{ color: "var(--red)" }}
        >
          <IconLogOut size={16} />
          <span>拂袖</span>
        </button>
      </motion.div>
    </div>
  );
}
