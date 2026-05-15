import type { Metadata } from "next";
import { Hina_Mincho, Aboreto, Marcellus,DM_Sans} from "next/font/google";
import "yakuhanjp/dist/css/yakuhanjp.css";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

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

const dmSans = DM_Sans({
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
          ${dmSans.variable}   
          antialiased
        `}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}