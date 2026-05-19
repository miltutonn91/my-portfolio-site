// components/ui/HamburgerMenu.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type HamburgerMenuProps = {
  isAboutPage?: boolean;
  isWorksPage?: boolean;
  isWorksDetailPage?: boolean;
  position?: "fixed" | "absolute";
};

export default function HamburgerMenu({
  isAboutPage = false,
  isWorksPage = false,
  isWorksDetailPage = false,
  position = "fixed",
}: HamburgerMenuProps) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const positionClass =
    position === "absolute"
      ? "absolute right-8 top-8"
      : "fixed right-5 top-5 md:right-6 md:top-6";

    const isWorksArea = isWorksPage || isWorksDetailPage;
const contactHref = isWorksDetailPage ? "/works#contact" : "#contact";

const menuLinkClass = `
  group inline-flex w-fit items-center gap-3
  text-[18px] leading-none tracking-[0.14em] text-[#4F4646]
  transition duration-300
  hover:text-[#9ABCB7]
`;

const menuDotClass = `
  h-1.5 w-1.5 rounded-full bg-[#9ABCB7]
  opacity-0 transition duration-300
  group-hover:opacity-100
`;

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="メニューを開く"
        className={`
          ${positionClass}
          z-[999]
          flex h-10 w-10 cursor-pointer items-center justify-center
        `}
      >
        <span
          className={`absolute block h-[1.3px] w-7 bg-[#5F5555] transition-all duration-300 ${
            isMenuOpen ? "rotate-45" : "-translate-y-2.5"
          }`}
        />
        <span
          className={`absolute block h-[1.3px] w-7 bg-[#5F5555] transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-[1.3px] w-7 bg-[#5F5555] transition-all duration-300 ${
            isMenuOpen ? "-rotate-45" : "translate-y-2.5"
          }`}
        />
      </button>

      {/* 背景オーバーレイ */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-[80]
          bg-[#FBF7F2]/45
          backdrop-blur-[2px]
          transition-opacity duration-500
          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

{/* メニュー本体 */}
<nav
  className={`
    fixed right-0 top-0 z-[95]
    h-screen w-full
    border-l-0 border-[#D8D1CC]/70
    bg-[#FFFDFC]/95
    px-8 pt-28
    shadow-[-18px_0_45px_rgba(95,85,85,0.08)]
    backdrop-blur-md
    transition-all duration-500 ease-out

    md:w-[370px]
    md:border-l
    md:px-10

    ${
      isMenuOpen
        ? "pointer-events-auto translate-x-0 opacity-100"
        : "pointer-events-none translate-x-full opacity-0"
    }
  `}
>
  {/* うっすら背景のにじみ */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute right-[-30%] top-[6%] h-[300px] w-[300px] rounded-full bg-[#9ABCB7]/24 blur-[80px]" />
  <div className="absolute bottom-[10%] left-[-30%] h-[340px] w-[340px] rounded-full bg-[#F1D4B8]/26 blur-[90px]" />
  <div className="absolute inset-0 bg-white/8" />
</div>

  <div className="relative z-[1]">

    <ul className="flex flex-col gap-10">
      {(isAboutPage || isWorksArea) && (
        <li
          className={`
            transition-all duration-500 ease-out
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100 delay-200"
                : "translate-x-4 opacity-0"
            }
          `}
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={menuLinkClass}>
  <span className={menuDotClass} />
  <span className="flex flex-col gap-1">
    <span className="text-[22px] tracking-[0.14em] mb-1">Top</span>
    <span className="text-[13px] tracking-[0.12em] text-[#9A8D8D]">
      ホーム
    </span>
  </span>
</Link>
        </li>
      )}

      {!isWorksArea && (
        <li
          className={`
            transition-all duration-500 ease-out
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100 delay-[260ms]"
                : "translate-x-4 opacity-0"
            }
          `}
        >
         <Link
  href="/works"
  onClick={() => setIsMenuOpen(false)}
  className={menuLinkClass}
>
  <span className={menuDotClass} />
  <span className="flex flex-col gap-2">
    <span className="text-[22px] tracking-[0.14em] mb-1">Works</span>
    <span className="text-[13px] tracking-[0.12em] text-[#A28686]">
      制作したもの
    </span>
  </span>
</Link>
        </li>
      )}

      {(!isAboutPage || isWorksArea) && (
        <li
          className={`
            transition-all duration-500 ease-out
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100 delay-[320ms]"
                : "translate-x-4 opacity-0"
            }
          `}
        >
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className={menuLinkClass}>
  <span className={menuDotClass} />
  <span className="flex flex-col gap-2">
    <span className="text-[22px] tracking-[0.14em] mb-1">About</span>
    <span className="text-[13px] tracking-[0.12em] text-[#A28686]">
      わたしのこと
    </span>
  </span>
</Link>
        </li>
      )}

      <li
        className={`
          transition-all duration-500 ease-out
          ${
            isMenuOpen
              ? "translate-x-0 opacity-100 delay-[380ms]"
              : "translate-x-4 opacity-0"
          }
        `}
      >
        <Link href="#contact" onClick={() => setIsMenuOpen(false)} className={menuLinkClass}>
  <span className={menuDotClass} />
  <span className="flex flex-col gap-2">
    <span className="text-[22px] tracking-[0.16em]">Contact</span>
    <span className="text-[13px] tracking-[0.12em] text-[#A28686]">
      お問い合わせ
    </span>
  </span>
</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
}