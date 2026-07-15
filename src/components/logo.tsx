export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Seal outer ring — subtle */}
      <rect x="2" y="2" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      {/* Inner glow */}
      <rect x="4" y="4" width="28" height="28" rx="3" fill="currentColor" opacity="0.06" />
      {/* Stylized 补 — left radical 衤 simplified */}
      <path
        d="M10 8v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 12h4M8 16h4M8 20h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Right part 卜 — the stroke that "fills the blank" */}
      <path
        d="M18 8v18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* The dot of 卜 */}
      <circle cx="18" cy="8" r="2" fill="currentColor" opacity="0.7" />
      {/* Flying white (飞白) — the unfinished brush stroke fading out at bottom-right */}
      <path
        d="M28 25c-2-1-3-3-2-5.5s4-2.5 3.5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M29 22c1.5-.8 2-.5 2.5 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
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
      <rect x="1" y="1" width="30" height="30" rx="4" stroke="#2d8a4e" strokeWidth="1.5" opacity="0.3" />
      <rect x="3" y="3" width="26" height="26" rx="3" fill="#2d8a4e" opacity="0.08" />
      <path d="M9 6v16" stroke="#2d8a4e" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 10h4M7 14h4M7 18h3" stroke="#2d8a4e" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <path d="M16 6v18" stroke="#2d8a4e" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="16" cy="6" r="1.8" fill="#2d8a4e" opacity="0.7" />
      <path d="M26 23c-2-1-3-3-2-5.5s4-2.5 3.5-5" stroke="#2d8a4e" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M27 20c1.5-.8 2-.5 2.5 1" stroke="#2d8a4e" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}
