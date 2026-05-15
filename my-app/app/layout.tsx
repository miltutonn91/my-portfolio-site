import type { Metadata } from "next";
import { Hina_Mincho, Aboreto, Marcellus,Noto_Sans_JP} from "next/font/google";
import "yakuhanjp/dist/css/yakuhanjp.css";
import "./globals.css";

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

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans-jp",
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
          ${hinaMincho.variable}
          ${aboreto.variable}
          ${marcellus.variable}
          ${notoSansJp.variable}   
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}