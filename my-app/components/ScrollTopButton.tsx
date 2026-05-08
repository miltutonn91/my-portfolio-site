// components/ScrollTopButton.tsx

"use client";

export default function ScrollTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed right-8 bottom-8 z-50
        w-14 h-14
        rounded-full
        border border-[#A28686]/50
        bg-white/85 backdrop-blur-sm
        text-[#A28686]
        shadow-[0_6px_18px_rgba(0,0,0,0.12)]
        cursor-pointer
        flex flex-col items-center justify-center
        hover:bg-[#A28686] hover:text-white
        transition-all duration-300
      "
      style={{ fontFamily: "'Marcellus', serif" }}
    >
      <span className="text-[14px] leading-none">↑</span>
      <span className="text-[10px] tracking-[0.12em] mt-1">TOP</span>
    </button>
  );
}