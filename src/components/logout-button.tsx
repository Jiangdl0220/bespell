"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-xs text-[#1a1a1a]/20 hover:text-[#c94b3a] transition-colors"
    >
      退出
    </button>
  );
}
