"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="ページ上部へ戻る"
      onClick={scrollToTop}
      className={`fixed right-4 bottom-24 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#9ABCB7]/80 bg-[#FFFCF8] text-[#5F5555] shadow-[0_10px_26px_rgba(95,85,85,0.16)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#E8F5F3] hover:shadow-[0_14px_32px_rgba(95,85,85,0.20)] md:right-8 md:bottom-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      } `}
    >
      <ChevronUp size={18} strokeWidth={1.5} />
    </button>
  );
}
