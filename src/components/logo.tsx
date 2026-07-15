export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left page — vertical spine */}
      <path
        d="M10 4v24a1 1 0 0 0 1 1h7V4H10Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* B upper bowl — open book arc */}
      <path
        d="M17 4h7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spine line */}
      <path
        d="M17 4v26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* B middle divider */}
      <line
        x1="17" y1="17" x2="27" y2="17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* B lower bowl */}
      <path
        d="M17 17h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Diamond accent */}
      <path
        d="m30 6 2 2-2 2-2-2 2-2Z"
        fill="currentColor"
        opacity="0.6"
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
      <path
        d="M10 2v24a1 1 0 0 0 1 1h7V2H10Z"
        fill="#2d8a4e"
        opacity="0.18"
      />
      <path
        d="M17 2h7a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-7"
        stroke="#2d8a4e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 2v26" stroke="#2d8a4e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="15" x2="27" y2="15" stroke="#2d8a4e" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
      <path
        d="M17 15h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-8"
        stroke="#2d8a4e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m30 4 2 2-2 2-2-2 2-2Z" fill="#2d8a4e" opacity="0.6" />
    </svg>
  );
}
