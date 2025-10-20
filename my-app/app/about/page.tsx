"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSubtitle } from "@/components/ui/section-subtitle";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import SkillAccordion from "./components/SkillAccordion";



export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white text-[#726E6E]">
      {/* 🌸 背景グラデーション */}
      <div className="soft-gradient soft-gradient--right about-gradient absolute inset-0 z-0" />

      {/* ===== 自己紹介 ===== */}
      <section className="relative z-[1] max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="ml-[4px] mb-[40px]">
          <SectionTitle title="About" subtitle="わたしについて" />
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-20">
          {/* 画像 */}
          <div className="md:w-1/2 flex justify-center items-stretch">
            <div className="relative w-[280px] h-[370px]">
              <Image
                src="/images/about/profile-detail.jpg"
                alt="プロフィール写真"
                fill
                className="object-cover rounded-md shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="md:w-1/2 flex flex-col justify-center text-left leading-loose">
            <div className="flex items-baseline gap-[14px] mb-[50px]">
              <p className="text-[28px] font-normal leading-none font-['Noto_Sans']">
                梅田 実沙
              </p>
              <p className="text-[12px] font-normal tracking-[0.42px] leading-[24px]">
                うめだ みさ
              </p>
            </div>

            <p className="text-[15px] md:text-[16px] max-w-[520px] whitespace-pre-line mb-6">
              1998年生まれ。愛知県出身。前職は看護師です。
            </p>
            <p className="text-[15px] md:text-[16px] max-w-[520px] whitespace-pre-line mb-6">
              “ゼロから形にしていく創造の過程”に強く惹かれ、フロントエンドエンジニアを目指すことを決意。
              デザインの意味を正確に汲み取り、ユーザビリティを支えられるエンジニアを目指しています。
            </p>
            <p className="text-[15px] md:text-[16px] max-w-[520px] whitespace-pre-line">
              特技はギターと音楽鑑賞です。sumikaとポルノグラフィティが好きで、
              休日はライブ観戦やDVD鑑賞をしています。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 学びの記録 ===== */}
      <section className="relative overflow-visible py-20 bg-white text-[#726E6E]">
        <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-[1]">
          <div className="ml-[4px] mb-[40px]">
            <SectionSubtitle title="Learning" subtitle="学びの記録" />
          </div>

          <div className="w-full space-y-10 md:space-y-14 bg-[rgba(248,245,226,0.15)] border border-[rgba(0,0,0,0.3)] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border-b border-[#EAE7E0] pb-8 md:pb-10">
              <div className="md:w-[35%] tracking-wide">
                <p className="text-[16px] font-semibold text-[#A28686] leading-[22px] tracking-[0.48px]">
                  2024.09〜2025.05
                </p>
                <p className="mt-5 text-[14px] font-normal text-[#726E6E] leading-[22px] tracking-[0.42px]">
                  2024.12〜2025.01
                </p>
                <p className="mt-[10px] text-[14px] font-normal text-[#726E6E] leading-[22px] tracking-[0.42px]">
                  2025.03〜2025.04
                </p>
              </div>

              <div className="hidden md:block w-[1px] h-auto bg-[#C8BEB2]" />

              <div className="md:flex-1 text-[16px] leading-relaxed">
                <p className="font-semibold text-[#A86E5B] mb-2">
                  デジLIG Webデザイナー専攻
                </p>
                <p className="text-[14px]">デザイン集中講座</p>
                <p className="text-[14px]">卒業制作</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="md:w-[35%] tracking-wide">
                <p className="text-[16px] font-semibold text-[#A28686] leading-[22px] tracking-[0.48px]">
                  2025.06〜
                </p>
              </div>

              <div className="hidden md:block w-[1px] h-auto bg-[#C8BEB2]" />

              <div className="md:flex-1 text-[16px] leading-relaxed">
                <p className="font-semibold text-[#A86E5B] mb-2">
                  自主制作・学習
                </p>
                <p className="text-[14px]">デザインカンプをもとにコーディング練習</p>
                <p className="text-[14px]">ライブラリ・フレームワークの学習</p>

                <div className="flex flex-wrap gap-3 mt-3 text-[13px] text-[#726E6E]">
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#F4F1EA] border border-[#E2DDD2]">
                    <SiTailwindcss className="w-4 h-4 text-sky-500" />
                    Tailwind
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#F4F1EA] border border-[#E2DDD2]">
                    <SiReact className="w-4 h-4 text-sky-400" />
                    React
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#F4F1EA] border border-[#E2DDD2]">
                    <SiTypescript className="w-4 h-4 text-blue-500" />
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ===== スキル ===== */}
<section
  className="relative overflow-visible py-20 text-[#726E6E]"
  style={{ background: "#FFE1D01A" }}
>
  <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-[1]">
    <div className="ml-[4px] mb-[40px]">
      <SectionSubtitle title="Skills" subtitle="スキル" />
    </div>
    <SkillAccordion />
  </div>
</section>

    </main>
  );
}
