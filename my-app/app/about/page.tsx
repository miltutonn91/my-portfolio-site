'use client';

import Image from 'next/image';
import { SectionTitle } from '@/components/section-title';
import { SectionSubtitle } from '@/components/section-subtitle';
import SkillAccordion from './components/SkillAccordion';
import Strengths from './components/Strengths';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu';
import ScrollTopButton from '@/components/ScrollTopButton';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function AboutPage() {
  return (
    <>
      <HamburgerMenu isAboutPage />
      <main className="relative overflow-hidden bg-white text-[#6A5C5C]">
        {/* 🌸 背景グラデーション */}
        <div className="soft-gradient soft-gradient--right about-gradient absolute inset-0 z-0" />

        {/* ===== 自己紹介 ===== */}
        <section id="top" className="relative z-[1] max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-32">
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
                <p className="text-[28px] font-normal leading-none font-['Noto_Sans']">梅田 実沙</p>
                <p className="text-[12px] font-normal tracking-[0.42px] leading-[24px]">
                  うめだ みさ
                </p>
              </div>

              <p className="body-text max-w-[520px] whitespace-pre-line mb-6">
                1998年生まれ。愛知県出身。職業は看護師です。
              </p>
              <p className="body-text max-w-[520px] whitespace-pre-line mb-6">
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

        {/* ===== スキル ===== */}
        <section
          className="relative overflow-visible py-20 text-[#6A5C5C]"
          style={{ background: '#FFE1D01A' }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-[1]">
            <div className="ml-[4px] mb-[40px]">
              <SectionSubtitle title="Skills" subtitle="スキル" />
            </div>
            <SkillAccordion />
          </div>
        </section>
        <Strengths />
        <Contact />
        <Footer />
        <ScrollTopButton />
        <ScrollIndicator />
      </main>
    </>
  );
}
