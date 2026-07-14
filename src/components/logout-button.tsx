"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const logout = async () => {
    await fetch("/api/auth/logout", { method:"POST" });
    router.push("/login"); router.refresh();
  };
  return <button onClick={logout} className="text-xs opacity-15 hover:text-[var(--red)] transition-colors">退出</button>;
}
