// components/HamburgerMenu.tsx

"use client";

import { useState } from "react";
import Link from "next/link";

type HamburgerMenuProps = {
  isAboutPage?: boolean;
  isWorksDetailPage?: boolean;
};

export default function HamburgerMenu({
  isAboutPage = false,
  isWorksDetailPage = false,
}: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-[100] flex h-8 w-8 cursor-pointer flex-col items-center justify-center"
        aria-label="メニューを開く"
      >
        <span
          className={`absolute block h-[1.3px] w-8 bg-[#A8A5A5] transition-all duration-300 ${
            isMenuOpen ? "rotate-45" : "-translate-y-3"
          }`}
        />
        <span
          className={`absolute block h-[1.3px] w-8 bg-[#A8A5A5] transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-[1.3px] w-8 bg-[#A8A5A5] transition-all duration-300 ${
            isMenuOpen ? "-rotate-45" : "translate-y-3"
          }`}
        />
      </button>

      {/* 背景オーバーレイ
          スマホ：全面ホワイト系
          PC：全面ピンク系
      */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-[80]
          bg-[#F8F6F2]/90
          backdrop-blur-sm
          transition-opacity duration-500
          md:bg-[rgba(255,225,208,0.6)]
          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* 右から出るパネル：PCだけ表示 */}
      <div
        className={`
          fixed top-0 right-0 z-[90] hidden h-full w-1/2
          bg-[#F8F6F2]/80
          transition-transform duration-500 ease-out
          md:block
          ${
            isMenuOpen
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full"
          }
        `}
      />

      <nav
        className={`
          fixed top-32 right-10 z-[95]
          transition-all duration-500 ease-out
          md:right-20
          ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }
        `}
      >
        <ul className="flex flex-col gap-10 text-[1.25rem] tracking-[0.08em] text-[#5A5A5A] md:gap-12 md:text-[1.375rem]">
          {(isAboutPage || isWorksDetailPage) && (
            <li>
              <Link href="/#top" onClick={() => setIsMenuOpen(false)} className="menu-link">
                トップ
              </Link>
            </li>
          )}

          {!isWorksDetailPage && (
            <li>
              <Link href="/#works" onClick={() => setIsMenuOpen(false)} className="menu-link">
                制作物
              </Link>
            </li>
          )}

          {(!isAboutPage || isWorksDetailPage) && (
            <li>
              <Link href="/about#top" onClick={() => setIsMenuOpen(false)} className="menu-link">
                わたしのこと
              </Link>
            </li>
          )}

          <li>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="menu-link">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}