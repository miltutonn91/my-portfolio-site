'use client';

import Image from 'next/image';
import Skill from './components/SkillAccordion';
import Strengths from './components/Strengths';
import Contact from '@/components/Contact';
import Footer from '@/components/ui/Footer';
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function AboutPage() {
  return (
    <>
      <HamburgerMenu isAboutPage />

      <main className="relative overflow-hidden bg-white text-[#6A5C5C]">
        {/* 背景グラデーション */}
        <div className="soft-gradient soft-gradient--right about-gradient absolute inset-0 z-0" />

        {/* ===== 自己紹介 ===== */}
        <section
          id="top"
          className="relative z-[1] mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-32"
        >
          <div className="mb-10 ml-[4px] md:mb-14">
            <p className="category-heading mb-3">
              わたしについて
            </p>

            <h1 className="section-heading">
              About
            </h1>
          </div>

          <div className="flex flex-col items-stretch justify-between gap-10 md:flex-row md:gap-20">
            {/* 画像 */}
            <div className="flex items-stretch justify-center md:w-1/2">
              <div className="relative h-[370px] w-[280px]">
                <Image
                  src="/images/about/profile-detail.jpg"
                  alt="プロフィール写真"
                  fill
                  className="rounded-md object-cover shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>

            {/* テキスト */}
            <div className="flex flex-col justify-center text-left leading-loose md:w-1/2">
              <div className="mb-[50px] flex items-baseline gap-[14px]">
                <p className="font-['Noto_Sans'] text-[28px] font-normal leading-none">
                  梅田 実沙
                </p>

                <p className="text-[12px] font-normal leading-[24px] tracking-[0.42px]">
                  うめだ みさ
                </p>
              </div>

              <p className="body-text mb-6 max-w-[520px] whitespace-pre-line">
                1998年生まれ。愛知県出身。職業は看護師です。
              </p>

              <p className="body-text mb-6 max-w-[520px] whitespace-pre-line">
                “ゼロから形にしていく創造の過程”に強く惹かれ、フロントエンドエンジニアを目指すことを決意。
                デザインの意味を正確に汲み取り、ユーザビリティを支えられるエンジニアを目指しています。
              </p>

              <p className="body-text max-w-[520px] whitespace-pre-line">
                特技はギターと音楽鑑賞です。sumikaとポルノグラフィティが好きで、
                休日はライブ観戦やDVD鑑賞をしています。
              </p>
            </div>
          </div>
        </section>

        <Skill />

        <Strengths />

        <Contact />

        <Footer />

        <ScrollTopButton />

        <ScrollIndicator />
      </main>
    </>
  );
}