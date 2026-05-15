'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CircleChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { about } from '@/data/about';

export default function About() {
  return (
    <section
  id="top"
  className="relative z-[1] mx-auto max-w-6xl px-5 py-[72px] md:px-10 md:py-[88px]"
>
      {/* 背景グラデーション */}
      <div className="soft-gradient soft-gradient--right absolute inset-0" />

      <div className="relative z-[1] mx-auto w-full max-w-6xl">
        {/* タイトル */}
        <div className="mb-10 md:mb-14 md:ml-[4px]">
          <p className="item-heading mb-3">
            わたしについて
          </p>

          <h2 className="section-heading">
            About
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:justify-between md:gap-20">
          {/* 左側：テキスト */}
          <div className="flex flex-col text-left md:w-1/2 md:justify-between">
            <div>
              {/* 名前 */}
              <div className="flex flex-wrap items-baseline gap-x-[14px] gap-y-2">
                <p className="font-['Noto_Sans'] text-[24px] font-normal leading-none md:text-[28px]">
                  {about.name}
                </p>
                <p className="text-[12px] font-normal leading-[1.8] tracking-[0.42px]">
                  {about.kana}
                </p>
              </div>

              {/* スマホ用画像：名前の下に表示 */}
              <div className="mt-8 flex justify-center md:hidden">
                <div className="relative h-[320px] w-[240px] sm:h-[360px] sm:w-[270px]">
                  <Image
                    src={about.image}
                    alt={about.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 240px"
                  />
                </div>
              </div>

              {/* 説明文 */}
              <p className="body-text mt-8 max-w-[480px] whitespace-pre-line md:mt-10">
                {about.description}
              </p>
            </div>

            <div className="mt-10 flex justify-center md:justify-end">
              <Button
                asChild
                variant="gray"
                className="cursor-pointer bg-transparent font-normal hover:bg-[#F5F5F5]"
              >
                <Link href="/about" className="inline-flex cursor-pointer items-center gap-2">
                  <span>詳しく見る</span>
                  <CircleChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>

          {/* 右側：PC用画像 */}
          <div className="hidden justify-center md:flex md:w-1/2 md:items-stretch">
            <div className="relative h-[370px] w-[280px]">
              <Image
                src={about.image}
                alt={about.name}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
