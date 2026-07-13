"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Mode = "login" | "register";

export default function AuthForm({ mode: initialMode }: { mode: Mode }) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "操作失败");
        setLoading(false);
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("网络错误，请稍后重试");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f0e8]">
      {/* Left accent bar */}
      <div className="fixed left-0 top-0 h-full w-2 bg-[#c98a2b]" />

      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md px-8"
      >
        {/* Brand */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-bold text-[#1a1a1a] tracking-tight">
            BeSpell
          </h1>
          <p className="mt-2 text-sm text-[#1a1a1a]/50 font-medium tracking-wide">
            {mode === "login" ? "欢迎回来，继续练习" : "创建账号，开始学习"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-widest mb-2"
            >
              用户名
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a]/15 px-0 py-3 text-lg text-[#1a1a1a] placeholder-[#1a1a1a]/25 outline-none transition-colors focus:border-[#c98a2b]"
              placeholder="请输入用户名"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-widest mb-2"
            >
              密码
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a]/15 px-0 py-3 text-lg text-[#1a1a1a] placeholder-[#1a1a1a]/25 outline-none transition-colors focus:border-[#c98a2b]"
              placeholder="至少 6 位"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              required
            />
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-[#c94b3a] font-medium"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a1a1a] text-[#f5f0e8] py-4 text-base font-semibold tracking-wide 
                       hover:bg-[#c98a2b] transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "处理中..." : mode === "login" ? "登录" : "注册"}
          </button>
        </form>

        {/* Toggle */}
        <p className="mt-8 text-center text-sm text-[#1a1a1a]/50">
          {mode === "login" ? "还没有账号？" : "已有账号？"}
          <button
            onClick={toggleMode}
            className="ml-1 text-[#c98a2b] font-semibold hover:underline"
          >
            {mode === "login" ? "注册" : "登录"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
