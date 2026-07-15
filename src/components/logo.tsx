export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring — subtle, like a seal impression */}
      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      {/* Inner glow circle */}
      <circle cx="18" cy="18" r="14" fill="currentColor" opacity="0.06" />
      {/* Stylized 念 — left radical "今" */}
      <path
        d="M15 9v8a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="12" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Right part "心" — simplified as a meditative cascade */}
      <path
        d="M18 14v6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Three dots below — the three drops of 心 */}
      <circle cx="14" cy="23" r="1.4" fill="currentColor" opacity="0.55" />
      <circle cx="18" cy="24.5" r="1.8" fill="currentColor" opacity="0.8" />
      <circle cx="22" cy="23" r="1.4" fill="currentColor" opacity="0.55" />
      {/* Breath curl — the "murmuring" sound */}
      <path
        d="M25 8c1.5-1 3-.5 3.5 1s-1 3-2 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function LogoFavicon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" stroke="#2d8a4e" strokeWidth="1.5" opacity="0.3" />
      <circle cx="16" cy="16" r="13" fill="#2d8a4e" opacity="0.08" />
      <path
        d="M13 7v8a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7"
        fill="none"
        stroke="#2d8a4e"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="10" y1="7" x2="22" y2="7" stroke="#2d8a4e" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 12v6" stroke="#2d8a4e" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="12" cy="21" r="1.3" fill="#2d8a4e" opacity="0.55" />
      <circle cx="16" cy="22.5" r="1.6" fill="#2d8a4e" opacity="0.8" />
      <circle cx="20" cy="21" r="1.3" fill="#2d8a4e" opacity="0.55" />
      <path
        d="M23 6c1.5-1 3-.5 3.5 1s-1 3-2 2"
        stroke="#2d8a4e"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}
