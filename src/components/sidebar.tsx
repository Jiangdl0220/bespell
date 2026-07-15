"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IconBook, IconRefresh, IconSwords, IconUser, IconLogOut } from "@/components/icons";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "词海", href: "/courses", Icon: IconBook },
  { label: "温故", href: "/review", Icon: IconRefresh },
  { label: "对弈", href: "/battle", Icon: IconSwords },
  { label: "印迹", href: "/profile", Icon: IconUser },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    fetch("/api/user/profile")
      .then(r => r.json())
      .then(data => {
        if (data.nickname) setNickname(data.nickname);
      })
      .catch(() => {});
  }, [pathname]); // re-fetch on route change in case profile updated

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const avatarLetter = (nickname || "?").charAt(0).toUpperCase();

  return (
    <>
      {/* Top bar: hamburger + avatar */}
      <div className="mobile-topbar">
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="mobile-toggle-line" />
          <span className="mobile-toggle-line" />
          <span className="mobile-toggle-line" />
        </button>

        {/* Avatar + nickname next to hamburger */}
        <button
          className="mobile-avatar"
          onClick={() => { router.push("/profile"); setOpen(false); }}
          title={nickname || "用户中心"}
        >
          <span className="mobile-avatar-letter">{avatarLetter}</span>
          {nickname && <span className="mobile-avatar-name">{nickname}</span>}
        </button>
      </div>

      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand" onClick={() => router.push("/courses")}>
          <div className="sidebar-brand-row">
            <Logo size={26} />
            <span className="sidebar-logo">BeSpell</span>
          </div>
          <span className="sidebar-slogan">一词一世界</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`sidebar-item ${isActive(item.href) ? "active" : ""}`}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
              }}
            >
              <span className="sidebar-icon"><item.Icon size={18} /></span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          {/* User profile */}
          <button
            className="sidebar-user"
            onClick={() => { router.push("/profile"); setOpen(false); }}
          >
            <span className="sidebar-user-avatar">{avatarLetter}</span>
            <span className="sidebar-user-name">{nickname || "未设置"}</span>
          </button>

          <button
            className="sidebar-item"
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              router.push("/login");
              router.refresh();
            }}
          >
            <span className="sidebar-icon"><IconLogOut size={18} /></span>
            <span className="sidebar-label">拂袖</span>
          </button>
        </div>
      </aside>
    </>
  );
}
