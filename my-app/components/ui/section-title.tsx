// components/ui/SectionTitle.tsx
"use client";

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
    <div className="mb-16 text-left">
      {/* 英語タイトル行（ライン＋タイトル） */}
        <div className="relative inline-block">
            {/* 左ライン（デザイン用） */}
            <span className="absolute -left-[55px] top-1/2 transform -translate-y-1/2 w-[50px] h-[1px] bg-[#A28686]"></span>

            {/* 英語タイトル */}
            <h2
            className="text-[55px] text-[#A28686] font-normal leading-none"
            style={{ fontFamily: "'Marcellus', serif" }}
            >
            {title}
            </h2>
        </div>

      {/* 日本語サブタイトル */}
        <p
            className="text-[16px] text-[#A28686] font-normal mt-[6px] ml-[2px]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
            {subtitle}
        </p>
        </div>
    );
}
