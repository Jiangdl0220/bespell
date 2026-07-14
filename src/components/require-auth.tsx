"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => {
        if (!r.ok) throw new Error("not authed");
        setAuthed(true);
      })
      .catch(() => router.replace("/login"))
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
        <div className="animate-pulse opacity-35 text-lg">Loading...</div>
      </div>
    );
  }

  if (!authed) return null;
  return <>{children}</>;
}
