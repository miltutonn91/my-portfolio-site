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

      <main className="relative overflow-hidden bg-[#FBF7F2] text-[#6A5C5C]">
      {/* About用：全体にオレンジを感じる淡いグラデーション */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* 全体のベースグラデーション */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FBF3EC_0%,#FAF6F1_42%,#F8EFE7_100%)]" />

        {/* 左上〜中央：オレンジベージュ */}
        <div className="absolute left-[-18%] top-[-6%] h-[760px] w-[760px] rounded-full bg-[#F1D4B8]/54 blur-[145px]" />

        {/* 右上：ピーチピンク */}
        <div className="absolute right-[-18%] top-[4%] h-[600px] w-[600px] rounded-full bg-[#EFD4D8]/34 blur-[130px]" />

        {/* 中央：クリームオレンジを広めに */}
        <div className="absolute left-[20%] top-[34%] h-[680px] w-[680px] rounded-full bg-[#F4E2D0]/44 blur-[140px]" />

        {/* 左下：あたたかい余韻 */}
        <div className="absolute bottom-[-22%] left-[-10%] h-[620px] w-[620px] rounded-full bg-[#F1D4B8]/38 blur-[135px]" />

        {/* 右下：ほんの少し抜け感 */}
        <div className="absolute bottom-[-16%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[#E8F2D7]/18 blur-[120px]" />

        {/* 白なじませは弱め */}
        <div className="absolute inset-0 bg-white/3" />
      </div>

        {/* ===== 自己紹介 ===== */}
        <section
          id="top"
          className="relative z-[1] px-5 py-[72px] md:px-10 md:py-[88px]"
        >
          <div className="mx-auto w-full max-w-[1120px]">
            <div className="mb-16 text-center md:mb-20">
              <h1 className="section-heading">
                About
              </h1>
            </div>

            <div className="flex flex-col items-stretch justify-between gap-12 md:flex-row md:gap-20">
              {/* 画像 */}
              <div className="flex items-stretch justify-center md:w-1/2">
                <div className="relative h-[370px] w-[280px] overflow-hidden bg-[#FFFDF8]">
                  <Image
                    src="/images/about/profile-detail.jpg"
                    alt="プロフィール写真"
                    fill
                    priority
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>

              {/* テキスト */}
              <div className="flex flex-col justify-center text-left md:w-1/2">
                <div className="mb-12 flex items-baseline gap-[14px]">
                  <p className="text-[24px] font-bold leading-none tracking-[0.04em] text-[#5F5555]">
                    梅田 実沙
                  </p>

                  <p className="text-[13px] font-normal leading-[24px] tracking-[0.12em] text-[#6A5C5C]">
                    MISA UMEDA
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