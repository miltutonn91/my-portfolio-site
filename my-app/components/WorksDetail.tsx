// components/WorksDetail.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CircleChevronLeft,
  CircleChevronRight,
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
import works from "@/data/works";
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

export default function WorksDetail({ work }: { work: Work }) {
  const currentIndex = works.findIndex((item) => item.id === work.id);
  const nextWork =
    currentIndex >= 0 ? works[(currentIndex + 1) % works.length] : null;

  return (
    <main className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF7F5_42%,#FFFFFF_100%)] text-[#6A5C5C]">
      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="soft-gradient soft-gradient--right absolute inset-0 opacity-70" />
        <div className="soft-gradient soft-gradient--left absolute inset-0 opacity-50" />

        <div className="relative z-[1] mx-auto max-w-7xl">
          {/* 戻る */}
          <Link
            href="/#works"
            className="mb-12 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3D7D2] bg-white px-4 py-2 text-[0.8125rem] tracking-[0.04em] text-[#6A5C5C] shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:-translate-y-[1px] hover:bg-[#FAF4F1] hover:text-[#3F3A3A] md:mb-16"
          >
            <CircleChevronLeft size={16} />
            Worksへ戻る
          </Link>

          {/* 詳細：右に縦長画像 */}
          <div className="mx-auto mb-20 max-w-6xl md:mb-28">
            <div className="relative overflow-hidden rounded-[20px] border border-[#EADDD8] bg-[linear-gradient(180deg,#FFFDFD_0%,#FFF7F5_100%)] px-6 py-8 shadow-[0_18px_48px_rgba(162,134,134,0.14)] md:px-10 md:py-10">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
                {/* 左：タイトル＋詳細情報 */}
                <div className="order-2 md:order-1">
                  <h1 className="font-['Noto_Sans'] text-[1.25rem] font-semibold leading-[1.6] tracking-[0.06em] text-[#A28686] md:text-[1.5rem]">
                    {work.title}
                  </h1>

                  <p className="body-text mt-6 whitespace-pre-line">
                    {work.detail || work.description}
                  </p>

                  {/* 概要情報 */}
                  <dl className="mt-8 space-y-6 border-t border-[#E6D8D2] pt-6">
                    {work.period && (
                      <div>
                        <dt className="mb-2 text-[13px] uppercase tracking-[0.12em] text-[#5A86B9]">
                          制作期間
                        </dt>
                        <dd className="space-y-1">
                          {work.period.map((item) => (
                            <p key={item.label} className="text-[14px] leading-[1.8] tracking-[0.04em] text-[#6A5C5C]">
                              {item.label}：{item.duration}
                            </p>
                          ))}
                        </dd>
                      </div>
                    )}

                    {work.tech && (
                      <div>
                        <dt className="mb-3 text-[13px] uppercase tracking-[0.12em] text-[#5A86B9]">
                          使用ツール
                        </dt>

                        <dd>
                          <ul className="flex flex-wrap gap-3">
                            {work.tech.map((tech) => {
                              const Icon = techIcons[tech];

                              return (
                                <li
                                  key={tech}
                                  className="flex items-center gap-2 text-[14px] leading-[1.6] tracking-[0.04em] text-[#6A5C5C]"
                                >
                                  {Icon && <Icon className="text-[1rem] text-[#B86F7A]" />}
                                  <span>{tech}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </dd>
                      </div>
                    )}
                  </dl>

                  {/* リンク */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {work.siteUrl && (
                      <Button
                        asChild
                        variant="gray"
                        className="cursor-pointer border border-[#D8C8C2] bg-white text-[#6A5C5C] transition hover:bg-[#FAF4F1]"
                      >
                        <Link
                          href={work.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex cursor-pointer items-center gap-2"
                        >
                          サイトを見る
                          <ExternalLink size={16} />
                        </Link>
                      </Button>
                    )}

                    {work.github && (
                      <Button
                        asChild
                        variant="gray"
                        className="cursor-pointer border border-[#D8C8C2] bg-white text-[#6A5C5C] transition hover:bg-[#FAF4F1]"
                      >
                        <Link
                          href={work.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex cursor-pointer items-center gap-2"
                        >
                          GitHub
                          <Github size={16} />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* 右：縦長画像を右寄せ・背景なしでぴたっと */}
                <div className="order-1 flex justify-center md:order-2 md:justify-end">
                  <div className="relative aspect-[266/344] w-full max-w-[360px] overflow-hidden md:max-w-[470px]">
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
              </div>
            </div>
          </div>

          {/* 次の作品
          {nextWork && nextWork.id !== work.id && (
            <section className="mx-auto max-w-5xl border-t border-[#E6D8D2] pt-12 md:pt-16">
              <Link
                href={nextWork.detailLink || `/works/${nextWork.id}`}
                className="group flex flex-col gap-6 rounded-[18px] bg-[rgba(255,225,208,0.2)] p-6 transition hover:-translate-y-[2px] hover:bg-[rgba(255,225,208,0.3)] md:flex-row md:items-center md:justify-between md:p-8"
              >
                <div>
                  <p className="mb-2 text-[0.75rem] uppercase tracking-[0.14em] text-[#9A8D88]">
                    Next work
                  </p>

                  <h2
                    className={`${marcellus.className} text-[1.5rem] tracking-[0.04em] text-[#A28686] md:text-[2rem]`}
                  >
                    {nextWork.title}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 text-[0.875rem] tracking-[0.04em] text-[#6A5C5C] transition group-hover:text-[#3F3A3A]">
                  次の作品を見る
                  <CircleChevronRight size={18} />
                </div>
              </Link>
            </section>
          )} */}
        </div>
      </section>
    </main>
  );
}