import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "利益率計算ツール【無料】販売利益率を自動計算",
description:
  "販売価格と仕入れ価格から利益率を無料で自動計算。メルカリ販売・Amazon販売・せどりで収益性を確認したい方に便利です。",
keywords: [
  "利益率計算",
  "販売利益率",
  "メルカリ利益率",
  "Amazon販売",
  "せどり",
  "収益性",
],
  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  ></script>
</head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
