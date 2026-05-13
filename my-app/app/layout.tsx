import type { Metadata } from "next";
import { Geist, Geist_Mono, Hina_Mincho, Aboreto, } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hinaMincho = Hina_Mincho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hina-mincho",
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});

export const metadata: Metadata = {
  title: "Misa Umeda Portfolio",
  description: "梅田実沙のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${hinaMincho.variable}
          ${aboreto.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}