"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/logo";

interface AuthFormProps { mode: "login" | "register"; }

export default function AuthForm({ mode: initialMode }: AuthFormProps) {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<"username" | "password" | null>(null);
  const isLogin = mode === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(""); setLoading(true);
    const res = await fetch(isLogin ? "/api/auth/login" : "/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "请求失败"); setLoading(false); }
    else { router.push("/courses"); router.refresh(); }
  };

  const switchMode = (m: "login" | "register") => {
    setMode(m);
    setError("");
    router.push(m === "login" ? "/login" : "/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Logo size={36} />
            <h1
              className="text-3xl font-bold tracking-[.15em]"
              style={{
                fontFamily: "'ZCOOL QingKe HuangYou', serif",
                color: "var(--accent)",
              }}
            >
              补白
            </h1>
          </div>
          <p
            className="text-sm tracking-[.2em]"
            style={{
              fontFamily: "'Ma Shan Zheng', serif",
              color: "var(--text2)",
            }}
          >
            白处生词
          </p>
        </motion.div>

        {/* Mode tabs — unified style */}
        <div className="flex gap-1 mb-8" style={{ background: "var(--hover)", borderRadius: 12, padding: 4 }}>
          {(["login", "register"] as const).map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className="flex-1 py-2.5 text-sm font-medium rounded-[10px] transition-all"
              style={{
                background: mode === m ? "var(--card)" : "transparent",
                color: mode === m ? "var(--accent)" : "var(--text2)",
                boxShadow: mode === m ? "0 1px 3px rgba(0,0,0,.06)" : "none",
              }}
            >
              {m === "login" ? "叩门" : "落墨"}
            </button>
          ))}
        </div>

        {/* Form card */}
        <motion.form
          key={mode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="card px-8 py-10 space-y-6 overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8faf7 40%, #f0f5ee 100%)",
          }}
        >
          {/* Decorative "补" watermark */}
          <span
            className="absolute select-none pointer-events-none"
            style={{
              right: -12,
              top: -8,
              fontSize: 120,
              fontFamily: "'Ma Shan Zheng', 'Noto Serif SC', serif",
              color: "rgba(45,138,78,0.025)",
              lineHeight: 1,
              transform: "rotate(12deg)",
            }}
          >
            补
          </span>

          {/* Username */}
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(""); }}
              onFocus={() => setFocused("username")}
              onBlur={() => setFocused(null)}
              className="w-full pb-3 pt-1 text-base bg-transparent border-b-2 outline-none transition-all"
              style={{
                borderColor: focused === "username" ? "var(--accent)" : "var(--border)",
                color: "var(--text)",
                fontFamily: "'Inter Tight', system-ui, sans-serif",
              }}
              placeholder=" "
              required
              minLength={2}
              autoFocus={isLogin}
            />
            <label
              className="absolute left-0 transition-all pointer-events-none"
              style={{
                top: username ? -4 : 8,
                fontSize: username ? 11 : 14,
                color: focused === "username" ? "var(--accent)" : username ? "var(--text3)" : "var(--text3)",
                fontFamily: "'Inter Tight', system-ui, sans-serif",
              }}
            >
              用户名
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
              className="w-full pb-3 pt-1 text-base bg-transparent border-b-2 outline-none transition-all"
              style={{
                borderColor: focused === "password" ? "var(--accent)" : "var(--border)",
                color: "var(--text)",
                fontFamily: "'Inter Tight', system-ui, sans-serif",
              }}
              placeholder=" "
              required
              minLength={6}
              autoFocus={!isLogin}
            />
            <label
              className="absolute left-0 transition-all pointer-events-none"
              style={{
                top: password ? -4 : 8,
                fontSize: password ? 11 : 14,
                color: focused === "password" ? "var(--accent)" : password ? "var(--text3)" : "var(--text3)",
                fontFamily: "'Inter Tight', system-ui, sans-serif",
              }}
            >
              密码
            </label>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs font-medium"
                style={{ color: "var(--red)" }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-40"
            style={{ background: "var(--accent)", color: "white" }}
          >
            {loading ? "..." : isLogin ? "叩门" : "落墨"}
          </button>

          {/* Switch hint */}
          <p className="text-center text-xs pt-1" style={{ color: "var(--text3)" }}>
            {isLogin ? "尚无墨迹？" : "已有笔锋？"}
            <button
              type="button"
              onClick={() => switchMode(isLogin ? "register" : "login")}
              className="ml-1 font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              {isLogin ? "落墨于此" : "叩门而入"}
            </button>
          </p>
        </motion.form>
      </div>
    </div>
  );
}
