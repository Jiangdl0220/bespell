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
    if (!res.ok) { setError(data.error || "请求失败"); setLoading(false); }
    else { router.push("/"); router.refresh(); }
  };

  return (
    <div className="min-h-screen bgdot flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="display text-4xl font-bold tracking-tight">BeSpell</h1>
          <p className="mt-2 text-sm opacity-40">AI 英语拼写练习</p>
        </div>
        <form onSubmit={handleSubmit} className="card px-8 py-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold opacity-45 uppercase tracking-[.15em] mb-2">用户名</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}
              className="input" placeholder="输入用户名" required minLength={2} autoFocus />
          </div>
          <div>
            <label className="block text-xs font-semibold opacity-45 uppercase tracking-[.15em] mb-2">密码</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="input" placeholder={isLogin ? "输入密码" : "6 位以上密码"} required minLength={6} />
          </div>
          {error && <p className="text-xs font-medium" style={{color:"var(--red)"}}>{error}</p>}
          <button type="submit" disabled={loading}
            className="btn btn-primary w-full py-3 text-sm disabled:opacity-30 tracking-wide">
            {loading ? "请稍候..." : isLogin ? "登录" : "注册"}
          </button>
          <div className="text-center">
            <button type="button"
              onClick={() => router.push(isLogin ? "/register" : "/login")}
              className="text-xs opacity-45 hover:opacity-50 transition-opacity">
              {isLogin ? "没有账号？注册" : "已有账号？登录"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
