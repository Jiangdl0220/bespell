export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded container */}
      <rect x="2" y="2" width="36" height="36" rx="10" stroke="currentColor" strokeWidth="2" opacity="0.15" />
      {/* Book spine + B letterform */}
      <path
        d="M12 10v18c0 1 .8 2 2 2h14V12H15a2 2 0 0 1 0-4h13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* B counter (inner arc) */}
      <path
        d="M18 17h5a2 2 0 0 0 0-4h-5v10h6a2.5 2.5 0 0 0 0-5h-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0"
      />
      {/* Clean B letterform */}
      <path
        d="M20 13v14M20 13h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5M20 21h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spark accent */}
      <circle cx="30" cy="11" r="1.8" fill="currentColor" opacity="0.5" />
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
      <rect x="1" y="1" width="30" height="30" rx="8" fill="#2d8a4e" />
      <path
        d="M16 9v14M16 9h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5M16 17h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="8" r="1.6" fill="white" opacity="0.7" />
    </svg>
  );
}
