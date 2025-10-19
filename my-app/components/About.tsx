"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title"; 
import { about } from "@/data/about";

export default function About() {
  return (
    <section className="relative overflow-visible py-20 text-[#726E6E] bg-white">
      {/* 背景グラデーション */}
      <div className="soft-gradient soft-gradient--right absolute inset-0" />

      <div className="max-w-6xl mx-auto w-full relative z-[1]">
        {/* タイトル */}
        <div className="ml-[4px] mb-[40px]">
          <SectionTitle title="About" subtitle="わたしについて" />
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-20">
          {/* 左側：テキスト */}
          <div className="md:w-1/2 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-baseline gap-[14px]">
                <p className="text-[28px] font-normal leading-none font-['Noto_Sans']">
                  {about.name}
                </p>
                <p className="text-[12px] font-normal tracking-[0.42px] leading-[24px]">
                  {about.kana}
                </p>
              </div>

              <p className="text-[14px] font-normal leading-loose tracking-[0.42px] max-w-[480px] mt-[70px] whitespace-pre-line">
                {about.description}
              </p>
            </div>

            {/* ✅ 詳しく見るボタン（asChild対応済み） */}
            <div className="flex justify-end mt-[40px]">
  <Button
    asChild
    variant="gray"
    className="text-[#726E6E] bg-transparent hover:bg-[#F5F5F5] font-normal cursor-pointer"
  >
    <Link href="/about" className="inline-flex items-center gap-2">
      <span>詳しく見る</span>
      <CircleChevronRight size={16} />
    </Link>
  </Button>
</div>
          </div>

          {/* 右側：画像 */}
          <div className="md:w-1/2 flex justify-center items-stretch">
            <div className="relative w-[280px] h-[370px]">
              <Image
                src={about.image}
                alt={about.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
