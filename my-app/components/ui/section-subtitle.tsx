"use client";

interface SectionSubtitleProps {
  title: string;
  subtitle: string;
}

export function SectionSubtitle({ title, subtitle }: SectionSubtitleProps) {
  return (
    <div className="mb-10 text-left">
      {/* 英語タイトル行（ライン＋タイトル） */}
      <div className="relative inline-block">
        {/* 左ライン（デザイン用） */}
        <span className="absolute -left-[40px] top-1/2 transform -translate-y-1/2 w-[35px] h-[1px] bg-[#A28686]" />

        {/* 英語タイトル */}
        <h3
          className="text-[36px] md:text-[40px] text-[#A28686] font-normal leading-none"
          style={{ fontFamily: "'Marcellus', serif" }}
        >
          {title}
        </h3>
      </div>

      {/* 日本語サブタイトル */}
      <p
        className="text-[14px] md:text-[15px] text-[#A28686] font-normal mt-[4px] ml-[2px]"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
