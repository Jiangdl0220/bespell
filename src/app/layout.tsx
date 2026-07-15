import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeSpell — 一词一世界",
  description: "AI 英语拼写练习 · 看中文拼英文 · 一词一世界",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='1' y='1' width='30' height='30' rx='8' fill='%232d8a4e'/><path d='M16 9v14M16 9h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5M16 17h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6' stroke='white' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='24' cy='8' r='1.6' fill='white' opacity='.7'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
