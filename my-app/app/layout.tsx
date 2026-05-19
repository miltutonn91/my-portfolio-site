import type { Metadata } from "next";
import { Hina_Mincho, Aboreto,DM_Sans,Noto_Sans_JP, Montserrat} from "next/font/google";
import "yakuhanjp/dist/css/yakuhanjp.css";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

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

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
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
          ${dmSans.variable}   
          ${notoSansJp.variable}
          ${montserrat.variable}
          antialiased
        `}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}