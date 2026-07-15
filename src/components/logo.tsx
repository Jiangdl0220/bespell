export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded outer frame */}
      <rect
        x="2" y="2" width="28" height="28" rx="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      {/* Filled bottom-right triangle — the "补" (completed) */}
      <path
        d="M2 30 L16 16 L30 2 L30 30 Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Diagonal divider — separates blank from filled */}
      <line
        x1="4" y1="28" x2="28" y2="4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Accent dot — the focal point in the filled area */}
      <circle cx="22" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}
