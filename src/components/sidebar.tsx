"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "课程", href: "/courses", icon: "📖" },
  { label: "复习", href: "/review", icon: "🔄" },
  { label: "竞技", href: "/battle", icon: "⚔️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="mobile-toggle-line" />
        <span className="mobile-toggle-line" />
        <span className="mobile-toggle-line" />
      </button>

      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand" onClick={() => router.push("/courses")}>
          <span className="sidebar-logo">BeSpell</span>
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
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="sidebar-item"
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              router.push("/login");
              router.refresh();
            }}
          >
            <span className="sidebar-icon">🚪</span>
            <span className="sidebar-label">退出</span>
          </button>
        </div>
      </aside>
    </>
  );
}
