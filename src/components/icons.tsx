"use client";

// 词海 — wave-like pages flowing from an open book
export function IconSea({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 8h0M8 12h0" opacity="0.4" strokeWidth="2" />
      <path d="M16 8.5c.8.8 1.2 1.8 1.2 3s-.4 2.2-1.2 3" opacity="0.55" />
      <path d="M18.5 7c1.2 1.2 1.8 2.8 1.8 4.5s-.6 3.3-1.8 4.5" opacity="0.3" />
    </svg>
  );
}

// 温故 — gentle flame rekindling knowledge from the past
export function IconRecall({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" opacity="0.15" fill="currentColor" stroke="none" />
      <path d="M12 5v7" />
      <path d="M9 9.5C9 7 11 5 12 5s3 2 3 4.5-2 5-3 6" opacity="0.5" />
      <path d="M7 17c1-1 2.5-1.5 5-1.5s4 .5 5 1.5" />
      <path d="M9 13c.8 1 2 1.5 3 1.5s2.2-.5 3-1.5" opacity="0.35" />
    </svg>
  );
}

// 对弈 — crossed elegant strokes evoking a Go stone placement
export function IconDuel({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="2.5" opacity="0.18" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="2.5" opacity="0.18" fill="currentColor" stroke="none" />
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
      <path d="M8 8v3a1 1 0 0 0 1 1h1" opacity="0.5" />
      <path d="M16 16v-3a1 1 0 0 0-1-1h-1" opacity="0.5" />
      <line x1="7" y1="12" x2="11" y2="16" opacity="0.25" />
      <line x1="13" y1="8" x2="17" y2="4" opacity="0.25" />
    </svg>
  );
}

// 印迹 — fingerprint-like concentric traces
export function IconTrace({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" opacity="0.25" fill="currentColor" stroke="none" />
      <path d="M12 10v4" />
      <path d="M10 12h4" />
      <path d="M12 6.5a5.5 5.5 0 0 1 5.5 5.5" opacity="0.6" />
      <path d="M6.5 12A5.5 5.5 0 0 1 12 6.5" opacity="0.4" />
      <path d="M12 17.5A5.5 5.5 0 0 1 6.5 12" opacity="0.5" />
      <path d="M17.5 12A5.5 5.5 0 0 1 12 17.5" opacity="0.35" />
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17" opacity="0.25" />
      <path d="M12 20.5a8.5 8.5 0 0 0 0-17" opacity="0.2" />
    </svg>
  );
}

// Legacy exports kept for existing usage
export { IconSea as IconBook };
export { IconRecall as IconRefresh };
export { IconDuel as IconSwords };
export { IconTrace as IconUser };

export function IconLogOut({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export function IconPlus({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
