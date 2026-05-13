"use client";

interface SectionSubtitleProps {
  title: string;
  subtitle: string;
}

export function SectionSubtitle({ title, subtitle }: SectionSubtitleProps) {
  return (
    <div className="mb-8 text-left md:mb-10">
      {/* 英語タイトル行（ライン＋タイトル） */}
      <div className="relative inline-block">
        {/* 左ライン（デザイン用） */}
        <span className="absolute -left-[30px] top-1/2 h-[1px] w-[25px] -translate-y-1/2 bg-[#A28686] md:-left-[40px] md:w-[35px]" />

        {/* 英語タイトル */}
        <h3
          className="subsection-heading font-normal"
          style={{ fontFamily: "'Marcellus', serif" }}
        >
          {title}
        </h3>
      </div>

      {/* 日本語サブタイトル */}
      <p
        className="mt-[4px] ml-[2px] text-[0.8125rem] font-normal tracking-[0.04em] text-[#A28686] md:text-[0.9375rem]"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}