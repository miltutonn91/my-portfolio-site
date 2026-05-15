// components/ui/ScrollIndicator.tsx

"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

type ScrollIndicatorProps = {
  hideOnDesktopFv?: boolean;
  hideAfter?: number;
};

export default function ScrollIndicator({
  hideOnDesktopFv = false,
  hideAfter = 80,
}: ScrollIndicatorProps) {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPc = window.innerWidth >= 768;
      const isScrolled = window.scrollY > hideAfter;

      // 少しスクロールしたら、どのページでもスッと消す
      if (isScrolled) {
        setShouldHide(true);
        return;
      }

      // TOPページのPC FVだけは最初から出さない
      // スマホは isPc が false なので表示される
      if (hideOnDesktopFv && isPc) {
        setShouldHide(true);
        return;
      }

      // Works / About / Detail / スマホTOP は最初から表示
      setShouldHide(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [hideOnDesktopFv, hideAfter]);

  return (
    <div
      className={`
        fixed right-5 top-1/2 z-30
        flex w-10 -translate-y-1/2 flex-col items-center gap-3
        transition-all duration-500 ease-out
        ${
          shouldHide
            ? "pointer-events-none opacity-0"
            : "pointer-events-none opacity-100"
        }
      `}
    >
      <p
        className="
          mb-9 rotate-90 whitespace-nowrap
          text-[10px] tracking-[0.22em] text-[#5F5555]
        "
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        SCROLL
      </p>

      <div className="flex flex-col items-center gap-2">
        <div className="relative h-[52px] w-px overflow-hidden bg-[#CFC6BE]">
          <span className="absolute left-0 top-0 block h-[18px] w-px animate-scrollLine bg-[#5F5555]" />
        </div>

        <ChevronDown
          size={15}
          strokeWidth={1.4}
          className="animate-scrollArrow text-[#5F5555]"
        />
      </div>
    </div>
  );
}