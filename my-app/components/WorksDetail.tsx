// components/WorksDetail.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CircleChevronLeft,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import type { Work } from "@/data/works";

const techIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  Figma: SiFigma,
  Photoshop: SiAdobephotoshop,
  Illustrator: SiAdobeillustrator,
};

type PeriodItem = {
  label: string;
  duration: string | string[];
};

export default function WorksDetail({ work }: { work: Work }) {
  const periodItems: PeriodItem[] = work.period
    ? Array.isArray(work.period)
      ? work.period
      : [work.period]
    : [];

  return (
    <main className="relative overflow-hidden bg-[#FBF6F6] text-[#6A5C5C]">
      {/* Detail用：ピンク寄りだけど控えめなグラデーション */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* 全体のベースグラデーション */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FBF6F6_0%,#FAF7F5_46%,#F8EFF1_100%)]" />

        {/* 左上：淡いピンク */}
        <div className="absolute left-[-20%] top-[-8%] h-[680px] w-[680px] rounded-full bg-[#EFD4D8]/42 blur-[150px]" />

        {/* 右上：ピーチベージュ */}
        <div className="absolute right-[-20%] top-[4%] h-[560px] w-[560px] rounded-full bg-[#F1D4B8]/24 blur-[135px]" />

        {/* 中央：ローズベージュ */}
        <div className="absolute left-[20%] top-[38%] h-[620px] w-[620px] rounded-full bg-[#EACFD3]/30 blur-[150px]" />

        {/* 左下：クリームピンク */}
        <div className="absolute bottom-[-24%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[#F4E2D0]/24 blur-[140px]" />

        {/* 右下：淡いブルーで抜け感 */}
        <div className="absolute bottom-[-18%] right-[-12%] h-[460px] w-[460px] rounded-full bg-[#D5EAEC]/16 blur-[130px]" />

        {/* なじませ */}
        <div className="absolute inset-0 bg-white/8" />
      </div>

      <section className="relative z-[1] px-5 py-[72px] md:px-10 md:py-[88px]">
        <div className="mx-auto w-full max-w-[1120px]">
          {/* タイトル */}
          <div className="mb-16 text-center md:mb-20">
            <h1 className="section-heading">
              Works
            </h1>
          </div>

          {/* 詳細エリア */}
          <div className="mx-auto max-w-6xl border-t border-[#DCD8D0] pt-10 md:pt-14">
          <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
             {/* 左：情報 */}
<div className="order-2 flex h-full flex-col md:order-1">
  {/* 作品名 */}
  <div className="mb-8">
      <p className="mb-1 text-[12px] font-midium leading-[1.6] tracking-[0.1em] text-[#9ABCB7]">
        {work.subtitle || "Project"}
      </p>

    <h2 className="category-heading text-[#5F5555]">
      {work.title}
    </h2>

  </div>

  {/* 説明文 */}
  <p className="body-text whitespace-pre-line">
    {work.detail || work.description}
  </p> {/* 外部リンク：説明文の上に右寄せ */}
    <div className="mt-5 flex flex-wrap justify-end gap-3">
      {work.siteUrl && (
        <Button asChild variant="works" size="sm">
          <Link
            href={work.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            サイトを見る
            <ExternalLink size={16} strokeWidth={1.5} />
          </Link>
        </Button>
      )}

      {work.github && (
        <Button asChild variant="works" size="sm">
          <Link
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <Github size={16} strokeWidth={1.5} />
          </Link>
        </Button>
      )}
    </div>


  {/* 概要情報 */}
  {(periodItems.length > 0 || work.tech) && (
    <dl className="mt-12 grid gap-6 border-t border-[#DCD8D0] pt-8 md:mt-auto md:grid-cols-2">
      {periodItems.length > 0 && (
        <div className="border border-[#DCD8D0]/80 bg-white/35 px-5 py-5">
          <dt className="item-heading mb-3">
            制作期間
          </dt>

          <dd className="space-y-1">
            {periodItems.map((item) => (
              <p key={item.label} className="body-text">
                {item.label}：
                {Array.isArray(item.duration)
                  ? item.duration.join(" / ")
                  : item.duration}
              </p>
            ))}
          </dd>
        </div>
      )}

      {work.tech && (
        <div className="border border-[#DCD8D0]/80 bg-white/35 px-5 py-5">
          <dt className="item-heading mb-4">
            使用ツール
          </dt>

          <dd>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {work.tech.map((tech) => {
                const Icon = techIcons[tech];

                return (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-[0.875rem] leading-[1.8] tracking-[0.04em] text-[#6A5C5C]"
                  >
                    {Icon && (
                      <Icon className="text-[1rem] text-[#B99A9E]" />
                    )}
                    <span>{tech}</span>
                  </li>
                );
              })}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  )}
</div>
        {/* 右：画像 */}
<div className="order-1 flex justify-center md:order-2 md:justify-end">
  {work.siteUrl ? (
    <Link
      href={work.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full max-w-[390px] cursor-pointer p-5 shadow-[0_24px_60px_rgba(120,90,75,0.14)] md:max-w-[500px] md:p-7"
    >
      <div className="relative aspect-[266/344] w-full overflow-hidden">
        <Image
          src={work.detailImage || work.image}
          alt={work.title}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 92vw, 470px"
        />
      </div>
    </Link>
  ) : (
    <div className="relative w-full max-w-[390px] p-5 shadow-[0_24px_60px_rgba(120,90,75,0.14)] md:max-w-[500px] md:p-7">
      <div className="relative aspect-[266/344] w-full overflow-hidden">
        <Image
          src={work.detailImage || work.image}
          alt={work.title}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 92vw, 470px"
        />
      </div>
    </div>
  )}
</div>
            </div>

            {/* 一覧へ戻る */}

      <div className="mt-16">
 <Link
  href="/#works"
  scroll={true}
  className="
    group/back inline-flex w-fit items-center gap-4
    text-[12px] tracking-[0.12em] text-[#5F5555]
    transition duration-300
    hover:text-[#A28686]
  "
>
    <span
      className="
        flex h-[76px] w-[76px] items-center justify-center rounded-full
        border border-[#D8D1CC] bg-[#FFFDFC]
        shadow-[0_12px_30px_rgba(95,85,85,0.08)]
        transition duration-500
        group-hover/back:-translate-y-[1px]
        group-hover/back:border-[#A28686]/50
        group-hover/back:bg-[#F8F4F2]
        group-hover/back:shadow-[0_18px_42px_rgba(95,85,85,0.12)]
      "
    >
      <span
        className="
          relative block h-px w-6 bg-[#5F5555]
          transition duration-300
          group-hover/back:bg-[#A28686]
        "
      >
        <span
          className="
            absolute left-0 top-1/2 h-px w-3
            origin-left -translate-y-1/2 rotate-[-35deg]
            bg-[#5F5555]
            transition duration-300
            group-hover/back:bg-[#A28686]
          "
        />
      </span>
    </span>

    <span className="relative transition duration-300 group-hover/back:-translate-x-1">
      一覧へもどる
      <span
        className="
          absolute -bottom-1 left-0 h-px w-full
          origin-left scale-x-100 bg-[#A28686]/60
          transition-transform duration-300
          group-hover/back:scale-x-110
        "
      />
    </span>
  </Link>
</div>
          </div>
        </div>
      </section>
    </main>
  );
}