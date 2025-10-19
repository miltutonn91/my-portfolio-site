"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, CircleChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Work } from "@/data/works";

export function WorkCard({ work, index }: { work: Work; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center justify-between gap-10 md:gap-20 py-20`}
    >
      {/* 左側：画像＋ナンバリング */}
      <div className="relative md:w-1/2 flex justify-center">
        {/* ✅ ナンバリング（背景三角付き） */}
        <div className="absolute top-[-25px] left-[-30px] z-10">
          <div className="relative w-[120px] h-[120px]">
            {/* 三角背景 */}
            <div
              className="absolute top-[-17px] left-10"
              style={{
                width: 0,
                height: 0,
                borderLeft: "100px solid #D3E0D357",
                borderBottom: "100px solid transparent",
              }}
            ></div>

            {/* 数字 */}
            <p
              className="absolute top-[-20px] left-[40px] text-[65px] text-[#726E6E] leading-[1] font-[100]"
              style={{
                fontFamily: "'Noto Serif', serif",
              }}
            >
              0{work.id}
            </p>
          </div>
        </div>

        {/* 画像 */}
        <div className="relative w-[400px] h-[250px] md:w-[520px] md:h-[320px] rounded-lg overflow-hidden">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 右側：テキスト */}
      <div className="md:w-1/2 text-center md:text-left">
        {/* #クライアントワーク */}
        {work.subtitle && (
          <p className="text-[#5A86B9] font-medium mb-[8px] mt-[8px]">
            {work.subtitle}
          </p>
        )}

        {/* タイトル */}
        <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-[#3a3a3a]">
          {work.title}
        </h3>

        {/* 説明文 */}
        <p className="text-gray-500 leading-relaxed mt-[18px]">
          {work.description}
        </p>

        {/* ✅ GitHubボタン */}
        {work.github && (
          <Link
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#726E6E] rounded-full text-[#726E6E] text-sm hover:bg-[#f3f3f3] transition mt-[25px]"
          >
            <Github size={18} strokeWidth={2} />
            GitHubリポジトリ
          </Link>
        )}

        {/* ✅ 詳しく見るボタン（asChild対応済み） */}
        <div className="flex justify-center md:justify-end mt-[40px]">
  <Button
    asChild
    variant="gray"
    className="text-[#726E6E] bg-transparent hover:bg-[#F5F5F5] cursor-pointer"
  >
    <Link
      href={work.detailLink || "#"}
      className="inline-flex items-center gap-2 cursor-pointer"
    >
      <span>詳しくみる</span>
      <CircleChevronRight size={16} />
    </Link>
  </Button>
</div>

      </div>
    </div>
  );
}
