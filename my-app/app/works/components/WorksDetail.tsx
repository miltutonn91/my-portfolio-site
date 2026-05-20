import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
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
import works from "@/data/works";
import BlurIn from "@/components/ui/BlurIn";

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

  const currentIndex = works.findIndex((item) => item.id === work.id);

  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork =
    currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <main className="relative overflow-hidden bg-[#FBF6F6] text-[#6A5C5C]">
      {/* Detail用：ピンク寄りだけど控えめなグラデーション */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* 全体のベースグラデーション */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FBF6F6_0%,#FAF7F5_46%,#F8EFF1_100%)]" />

        {/* 左上：淡いピンク */}
        <div className="absolute top-[-8%] left-[-20%] h-[680px] w-[680px] rounded-full bg-[#EFD4D8]/42 blur-[150px]" />

        {/* 右上：ピーチベージュ */}
        <div className="absolute top-[4%] right-[-20%] h-[560px] w-[560px] rounded-full bg-[#F1D4B8]/24 blur-[135px]" />

        {/* 中央：ローズベージュ */}
        <div className="absolute top-[38%] left-[20%] h-[620px] w-[620px] rounded-full bg-[#EACFD3]/30 blur-[150px]" />

        {/* 左下：クリームピンク */}
        <div className="absolute bottom-[-24%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[#F4E2D0]/24 blur-[140px]" />

        {/* 右下：淡いブルーで抜け感 */}
        <div className="absolute right-[-12%] bottom-[-18%] h-[460px] w-[460px] rounded-full bg-[#D5EAEC]/16 blur-[130px]" />

        {/* なじませ */}
        <div className="absolute inset-0 bg-white/8" />
      </div>

      <section className="relative z-[1] px-5 py-[72px] md:px-10 md:py-[88px]">
        <div className="mx-auto w-full max-w-[1120px]">
          {/* タイトル */}
          <div className="mb-16 text-center md:mb-20">
            <h1 className="section-heading">Works</h1>
          </div>

          <BlurIn>
            <div className="mx-auto max-w-6xl border-t border-[#DCD8D0] pt-10 md:pt-14">
              {/* 大きい画像 */}
              <div className="mx-auto w-full max-w-[980px]">
                <div className="relative w-full overflow-hidden bg-[#FFFDFC] p-4 shadow-[0_24px_60px_rgba(120,90,75,0.12)] md:p-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 768px) 92vw, 980px"
                    />
                  </div>
                </div>
              </div>

              {/* 説明エリア */}
              <div className="mx-auto mt-12 max-w-[860px] md:mt-14">
                {/* 作品名 */}
                <div className="mb-8">
                  <p className="mb-1 text-[0.75rem] leading-[1.6] font-medium tracking-[0.1em] text-[#9ABCB7]">
                    {work.subtitle || "Project"}
                  </p>

                  <h2 className="category-heading text-[#5F5555]">
                    {work.title}
                  </h2>
                </div>

                {/* 説明文 */}
                <p className="body-text whitespace-pre-line">
                  {work.detail || work.description}
                </p>

                {/* ボタン */}
                <div className="mt-5 flex flex-wrap justify-end gap-6">
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
                  <dl className="mt-10 grid gap-6 border-t border-[#DCD8D0] pt-8 md:grid-cols-2">
                    {periodItems.length > 0 && (
                      <div className="border border-[#DCD8D0]/80 bg-white/35 px-5 py-5 md:px-6">
                        <dt className="works-heading mb-3">制作期間</dt>

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
                      <div className="border border-[#DCD8D0]/80 bg-white/35 px-5 py-5 md:px-6">
                        <dt className="works-heading mb-4">使用ツール</dt>

                        <dd>
                          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
                            {work.tech.map((tech) => {
                              const Icon = techIcons[tech];

                              return (
                                <li
                                  key={tech}
                                  className="flex items-center gap-2 text-[0.8125rem] leading-[1.8] tracking-[0.04em] text-[#6A5C5C] md:text-[0.9375rem]"
                                >
                                  {Icon && (
                                    <Icon className="text-[0.875rem] text-[#B99A9E] md:text-[1rem]" />
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

              {/* Prev / Next */}
              <div className="mt-16 border-t border-[#DCD8D0] pt-10">
                <div className="flex items-center justify-between gap-4">
                  {/* PREV */}
                  {prevWork ? (
                    <Link
                      href={prevWork.detailLink}
                      className="group/prev inline-flex items-center gap-3 rounded-full border border-[#9ABCB7]/80 bg-[#FFFCF8] px-4 py-3 text-[#5F5555] shadow-[0_12px_28px_rgba(95,85,85,0.12)] transition duration-300 hover:-translate-y-[1px] hover:border-[#7FA7A1] hover:bg-[#E8F5F3] hover:shadow-[0_16px_36px_rgba(95,85,85,0.16)] md:px-5 md:py-3.5"
                    >
                      <span className="relative block h-px w-7 bg-[#6A5C5C] transition duration-300 group-hover/prev:w-9">
                        <span className="absolute top-1/2 left-0 h-px w-2.5 origin-left -translate-y-1/2 rotate-[-35deg] bg-[#6A5C5C]" />
                      </span>

                      <span className="font-montserrat text-[0.8125rem] leading-none tracking-[0.14em] md:text-[0.9375rem]">
                        PREV
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {/* NEXT */}
                  {nextWork ? (
                    <Link
                      href={nextWork.detailLink}
                      className="group/next inline-flex items-center gap-3 rounded-full border border-[#9ABCB7]/80 bg-[#FFFCF8] px-4 py-3 text-[#5F5555] shadow-[0_12px_28px_rgba(95,85,85,0.12)] transition duration-300 hover:-translate-y-[1px] hover:border-[#7FA7A1] hover:bg-[#E8F5F3] hover:shadow-[0_16px_36px_rgba(95,85,85,0.16)] md:px-5 md:py-3.5"
                    >
                      <span className="font-montserrat text-[0.8125rem] leading-none tracking-[0.14em] md:text-[0.9375rem]">
                        NEXT
                      </span>

                      <span className="relative block h-px w-7 bg-[#6A5C5C] transition duration-300 group-hover/next:w-9">
                        <span className="absolute top-1/2 right-0 h-px w-2.5 origin-right -translate-y-1/2 rotate-[35deg] bg-[#6A5C5C]" />
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </BlurIn>
        </div>
      </section>
    </main>
  );
}