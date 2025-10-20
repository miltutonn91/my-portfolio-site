"use client";

import Image from "next/image";

export default function WebDesignAccordion() {
  return (
    <div className="flex flex-col gap-[30px] items-start text-[#726F6F] text-[16px] tracking-[0.48px] leading-[24px] font-['Noto_Sans']">
      {/* Illustrator */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-start gap-[48px]">
          <p className="flex-shrink-0 w-[160px] text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            Illustrator
          </p>
          <p className="flex-1 text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
            チラシ・名刺・イラスト・ロゴ・バナーなどの制作ができます
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* Photoshop */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-start gap-[48px]">
          <p className="flex-shrink-0 w-[160px] text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            Photoshop
          </p>
          <p className="flex-1 text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px]">
            画像の補正、切り抜き、簡単なバナーの作成をすることができます
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* Figma */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="flex items-start gap-[48px]">
          <p className="flex-shrink-0 w-[160px] text-[#A28686] font-semibold text-[16px] tracking-[0.48px]">
            Figma
          </p>
          <p className="flex-1 text-[#726F6F] text-[14px] leading-[24px] tracking-[0.42px] whitespace-pre-line">
            Webデザイン制作はFigmaを使用しています。
            <br />
            プロトタイプ機能を使い、動きのあるWebサイトを事前に再現することができます。
          </p>
        </div>
        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>
    </div>
  );
}
