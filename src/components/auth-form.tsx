"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuthFormProps { mode: "login" | "register"; }

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isLogin = mode === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(""); setLoading(true);
    const res = await fetch(isLogin ? "/api/auth/login" : "/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error || "\u8bf7\u6c42\u5931\u8d25"); setLoading(false); }
    else { router.push("/"); router.refresh(); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-12">
          <h1 className="display text-5xl tracking-tight" style={{color:"var(--accent)"}}>BeSpell</h1>
          <p className="mt-3 text-sm" style={{color:"var(--text2)"}}>AI 英语拼写练习</p>
        </div>
        <form onSubmit={handleSubmit} className="card px-8 py-10 space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[.12em] mb-2.5" style={{color:"var(--text2)"}}>
              {isLogin ? "\u7528\u6237\u540d" : "\u7528\u6237\u540d"}
            </label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}
              className="input" placeholder={isLogin ? "\u8f93\u5165\u7528\u6237\u540d" : "\u8f93\u5165\u7528\u6237\u540d"} required minLength={2} autoFocus />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[.12em] mb-2.5" style={{color:"var(--text2)"}}>
              {isLogin ? "\u5bc6\u7801" : "\u5bc6\u7801"}
            </label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="input" placeholder={isLogin ? "\u8f93\u5165\u5bc6\u7801" : "6 \u4f4d\u4ee5\u4e0a\u5bc6\u7801"} required minLength={6} />
          </div>
          {error && <p className="text-xs font-medium" style={{color:"var(--red)"}}>{error}</p>}
          <button type="submit" disabled={loading}
            className="btn btn-primary w-full py-3 text-sm disabled:opacity-30">
            {loading ? "\u8bf7\u7a0d\u5019..." : isLogin ? "\u767b\u5f55" : "\u6ce8\u518c"}
          </button>
          <div className="text-center pt-1">
            <button type="button"
              onClick={() => router.push(isLogin ? "/register" : "/login")}
              className="text-xs hover:opacity-70 transition-opacity" style={{color:"var(--text2)"}}>
              {isLogin ? "\u6ca1\u6709\u8d26\u53f7\uff1f\u6ce8\u518c" : "\u5df2\u6709\u8d26\u53f7\uff1f\u767b\u5f55"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
