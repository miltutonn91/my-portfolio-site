// components/ui/HamburgerMenu.tsx

"use client";

import { useState } from "react";
import Link from "next/link";

type HamburgerMenuProps = {
  isAboutPage?: boolean;
  isWorksDetailPage?: boolean;
  position?: "fixed" | "absolute";
};

export default function HamburgerMenu({
  isAboutPage = false,
  isWorksDetailPage = false,
  position = "fixed",
}: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const positionClass =
    position === "absolute"
      ? "absolute right-8 top-8"
      : "fixed right-5 top-5 md:right-6 md:top-6";

  return (
    <>
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
          className={`absolute block h-[1.1px] w-6 bg-[#5F5555] transition-all duration-300 ${
            isMenuOpen ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute block h-[1.1px] w-6 bg-[#5F5555] transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-[1.1px] w-6 bg-[#5F5555] transition-all duration-300 ${
            isMenuOpen ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

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

      <div
        className={`
          fixed right-0 top-0 z-[90] hidden h-full w-1/2
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
          fixed right-10 top-32 z-[95]
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
              <Link
                href="/#top"
                onClick={() => setIsMenuOpen(false)}
                className="menu-link"
              >
                トップ
              </Link>
            </li>
          )}

          {!isWorksDetailPage && (
            <li>
              <Link
                href="/#works"
                onClick={() => setIsMenuOpen(false)}
                className="menu-link"
              >
                制作物
              </Link>
            </li>
          )}

          {(!isAboutPage || isWorksDetailPage) && (
            <li>
              <Link
                href="/about#top"
                onClick={() => setIsMenuOpen(false)}
                className="menu-link"
              >
                わたしのこと
              </Link>
            </li>
          )}

          <li>
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="menu-link"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}