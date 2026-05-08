// app/fonts.ts

import { Marcellus, Noto_Sans_JP } from "next/font/google";

export const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
});

export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans-jp",
});