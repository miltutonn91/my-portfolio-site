'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, CircleChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Work } from '@/data/works';

export function WorkCard({ work, index }: { work: Work; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col items-center justify-between gap-10 py-16 md:flex-row md:gap-20 md:py-20 ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* 左側：画像 */}
      <div className="relative flex w-full justify-center md:w-1/2">
        {/* 画像全体の枠 */}
        <div className="relative h-[220px] w-[92vw] max-w-[360px] rounded-lg md:h-[320px] md:w-[520px] md:max-w-none">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 92vw, 520px"
            />
          </div>
        </div>
      </div>

      {/* 右側：テキスト */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        {/* #クライアントワーク */}
        {work.subtitle && (
          <p className="mb-2 mt-2 text-[0.8125rem] font-medium tracking-[0.04em] text-[#5A86B9] md:text-[0.875rem]">
            {work.subtitle}
          </p>
        )}

        {/* タイトル */}
        <h3 className="text-[1.125rem] font-semibold tracking-[0.04em] text-[#5F5555] md:text-[1.5rem]">
          {work.title}
        </h3>

        {/* 説明文 */}
        <p className="body-text-small mt-4">{work.description}</p>

        {/* GitHubボタン */}
        {work.github && (
          <Link
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#726E6E] px-4 py-2 text-[0.8125rem] text-[#6A5C5C] transition hover:bg-[#f3f3f3] md:text-[0.875rem]"
          >
            <Github size={18} strokeWidth={2} />
            GitHubリポジトリ
          </Link>
        )}

        {/* 詳しく見るボタン */}
        <div className="mt-8 flex justify-center md:mt-10 md:justify-end">
          <Button
            asChild
            variant="gray"
            className="cursor-pointer bg-transparent text-[#6A5C5C] hover:bg-[#F5F5F5]"
          >
            <Link
              href={work.detailLink || '#'}
              className="inline-flex cursor-pointer items-center gap-2"
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