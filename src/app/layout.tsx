import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import Layout from "./_components/Layout";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | eguchi.cc", default: "No title | eguchi.cc" },
  description: "Eguchi's portfolio site",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className="scroll-smooth dark:bg-slate-900">
      <body
        className={`${noto_sans_jp.className} text-slate-700 dark:text-slate-300`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
