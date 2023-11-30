import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eguchi's Portfolio",
  description: "Eguchi's Portfolio",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className="dark:bg-slate-900">
      <body className={noto_sans_jp.className}>{children}</body>
    </html>
  );
}
