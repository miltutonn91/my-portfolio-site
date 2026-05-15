"use client";

export default function WebDesignAccordion() {
  return (
    <div className="flex flex-col gap-5 md:gap-7">
      {/* Illustrator */}
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-12">
          <p className="item-heading w-full md:w-[170px] md:flex-shrink-0">
            Illustrator
          </p>

          <p className="body-text flex-1">
            チラシ・名刺・イラスト・ロゴ・バナーなどの制作ができます
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* Photoshop */}
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-12">
          <p className="item-heading w-full md:w-[170px] md:flex-shrink-0">
            Photoshop
          </p>

          <p className="body-text flex-1">
            画像の補正、切り抜き、簡単なバナーの作成をすることができます
          </p>
        </div>

        <div className="h-[1px] bg-[#E0E0E0]" />
      </div>

      {/* Figma */}
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-12">
          <p className="item-heading w-full md:w-[170px] md:flex-shrink-0">
            Figma
          </p>

          <p className="body-text flex-1 whitespace-pre-line">
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