import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeSpell — AI 英语拼写练习",
  description: "AI 生成英语对话课程，看中文拼英文，沉浸式翻译练习",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
