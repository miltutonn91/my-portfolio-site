// components/ui/ScrollTopButton.tsx

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
  className={`
    fixed bottom-24 right-4 z-40 md:bottom-8 md:right-8 
    flex h-11 w-11 cursor-pointer items-center justify-center
    rounded-full border border-[#CFC6BE]
    bg-[#FFFDFC]/85 text-[#5F5555]
    backdrop-blur-sm
    transition-all duration-500
    hover:-translate-y-1 hover:border-[#BCAFA5] hover:bg-[#F8F3EC]
    ${
      isVisible
        ? "pointer-events-auto translate-y-0 opacity-100"
        : "pointer-events-none translate-y-3 opacity-0"
    }
  `}
>
  <ChevronUp size={18} strokeWidth={1.5} />
</button>
  );
}