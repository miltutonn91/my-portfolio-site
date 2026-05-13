'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const worksPreviewImages = [
  '/images/fv/fv-slide-1.jpg',
  '/images/fv/fv-slide-2.jpg',
  '/images/fv/fv-slide-3.jpg',
  '/images/fv/fv-slide-4.jpg',
];

export default function FV() {
  const [activeWorkImage, setActiveWorkImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkImage((prev) => (prev + 1) % worksPreviewImages.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative bg-white text-white">
      <div className="grid grid-cols-1 items-start gap-2 md:gap-3 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
        {/* 左：メインビジュアル */}
        <div className="relative isolate h-[100svh] overflow-hidden bg-[#F6F3EE]">
          {/* アートっぽい背景レイヤー */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F6F3EE]">
            {/* ベース */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F9F4EE] via-[#F6F3EE] to-[#EEF4F4]" />

            {/* 右上：青のいびつなにじみ */}
            <div className="absolute right-[-20%] top-[-12%] h-[760px] w-[560px] rotate-[18deg] rounded-[58%_42%_55%_45%/44%_56%_40%_60%] bg-[#CFE7EA]/46 blur-[118px]" />

            {/* 右中：青の余韻 */}
            <div className="absolute right-[4%] top-[34%] h-[360px] w-[280px] -rotate-[10deg] rounded-[46%_54%_58%_42%/48%_52%_44%_56%] bg-[#D5EAEC]/24 blur-[95px]" />

            {/* 左下：オレンジベージュの大きなにじみ（少し控えめ） */}
            <div className="absolute bottom-[-10%] left-[-6%] h-[820px] w-[680px] -rotate-[16deg] rounded-[44%_56%_48%_52%/58%_42%_60%_40%] bg-[#F1D4B8]/52 blur-[132px]" />

            {/* 左中央：オレンジの余韻（少し控えめ） */}
            <div className="absolute left-[8%] top-[45%] h-[460px] w-[340px] rotate-[8deg] rounded-[46%_54%_52%_48%/50%_50%_42%_58%] bg-[#F3DDC7]/36 blur-[106px]" />

            {/* 中央下：ほんのりオレンジの広がり（控えめ） */}
            <div className="absolute bottom-[14%] left-[28%] h-[360px] w-[300px] rotate-[10deg] rounded-[52%_48%_46%_54%/48%_52%_56%_44%] bg-[#F4E2D0]/22 blur-[100px]" />

            {/* 中央左：ほんのりピンク */}
            <div className="absolute left-[18%] top-[30%] h-[460px] w-[330px] rotate-[12deg] rounded-[52%_48%_43%_57%/46%_54%_50%_50%] bg-[#EFD4D8]/38 blur-[108px]" />

            {/* 中央右：薄いピンクの余白感 */}
            <div className="absolute right-[20%] bottom-[18%] h-[300px] w-[260px] -rotate-[6deg] rounded-[50%_50%_58%_42%/44%_56%_48%_52%] bg-[#F2D8DA]/22 blur-[90px]" />

            {/* 左上：生成りのにじみ */}
            <div className="absolute left-[-12%] top-[6%] h-[420px] w-[360px] rotate-[6deg] rounded-[54%_46%_50%_50%/42%_58%_46%_54%] bg-[#F4E9DA]/30 blur-[100px]" />

            {/* 全体のなじませ */}
            <div className="absolute inset-0 bg-white/7" />

            {/* 粒感 */}
            <div className="noise-overlay absolute inset-0 z-10" />
          </div>

          {/* 中央の縦長写真 */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[78%] w-[min(30vw,390px)] min-w-[240px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_18px_50px_rgba(90,80,70,0.08)]">
            <Image
              src="/images/fv/fv-main-sakura.jpg"
              alt="梅田実沙"
              fill
              priority
              className="scale-[1.02] object-cover object-center"
              sizes="(max-width: 1024px) 70vw, 390px"
            />
          </div>

          {/* 縦書きタイトル */}
          <div className="absolute left-[9%] top-1/2 z-20 flex -translate-y-1/2 items-start gap-5 md:left-[10%] md:gap-7">
            <p
              className="
                font-hina text-[clamp(1.4rem,2.5vw,2.3rem)]
                font-normal leading-[1.4] tracking-[0.14em] text-[#5F5555]
                [writing-mode:vertical-rl]
              "
            >
              うめだみさの
            </p>

            <p
              className="
                mt-18 font-hina text-[clamp(1.4rem,2.5vw,2.3rem)]
                font-normal leading-[1.4] tracking-[0.14em] text-[#5F5555]
                [writing-mode:vertical-rl]
              "
            >
              ポートフォリオ
            </p>

            <p
              className="
                mt-3 hidden font-serif text-[13px]
                tracking-[0.18em] text-[#5F5555]/70
                [writing-mode:vertical-rl]
                md:block
              "
            >
              MISA UMEDA PORTFOLIO
            </p>
          </div>
        </div>

        {/* 右：FVナビゲーション */}
        <div
          className="grid h-[100svh] gap-2 md:gap-3"
          style={{
            gridTemplateRows:
              'minmax(0, 4.5fr) minmax(0, 3.5fr) minmax(0, 2fr)',
          }}
        >
          {/* Works */}
          <Link
            href="/works"
            aria-label="制作物一覧ページへ移動する"
            className="
              group relative isolate overflow-hidden
              bg-[#F6F3EE] text-[#FFFDF8]
              transition duration-500 hover:brightness-[0.98]
            "
          >
            {worksPreviewImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                className={`
                  pointer-events-none object-cover transition-all duration-[2200ms] ease-out
                  ${
                    activeWorkImage === index
                      ? 'scale-100 opacity-100 blur-0'
                      : 'scale-[1.04] opacity-0 blur-[5px]'
                  }
                `}
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            ))}

            {/* 文字エリア用レイヤー */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-[#3F3732]/64 via-[#3F3732]/28 to-transparent" />

            <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20">
              <p className="mb-3 text-[12px] tracking-[0.2em] text-[#FFFDF8]/92 drop-shadow-[0_2px_10px_rgba(40,34,30,0.55)]">
                制作物
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-aboreto text-[34px] font-normal leading-none tracking-[0.12em] text-[#FFFDF8] drop-shadow-[0_2px_12px_rgba(50,42,36,0.4)] md:text-[46px]">
                    <span className="text-[#4FA7B3]">W</span>orks
                  </h2>
                  <span className="mt-3 block h-px w-16 bg-[#4FA7B3]/85 transition-all duration-500 group-hover:w-24" />
                </div>

                <span className="mb-[2px] flex h-8 w-8 items-center justify-center rounded-full border border-[#FFFDF8]/60 text-[18px] text-[#FFFDF8] drop-shadow-[0_1px_8px_rgba(50,42,36,0.4)] transition duration-500 group-hover:translate-x-1 group-hover:border-[#4FA7B3] group-hover:text-[#4FA7B3]">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* About */}
          <Link
            href="/about#top"
            aria-label="わたしのことへ移動する"
            className="
              group relative isolate overflow-hidden
              bg-[#F7F5F0] text-[#FFFDF8]
              transition duration-500 hover:brightness-[0.98]
            "
          >
            <Image
              src="/images/about/profile.jpg"
              alt="梅田実沙のプロフィール写真"
              fill
              className="pointer-events-none z-0 object-cover object-[center_67%] transition-transform duration-1000 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 380px"
            />

            {/* 文字エリア用レイヤー */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-[#3F3732]/62 via-[#3F3732]/26 to-transparent" />

            <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20">
              <p className="mb-3 text-[12px] tracking-[0.2em] text-[#FFFDF8]/92 drop-shadow-[0_2px_10px_rgba(40,34,30,0.55)]">
                わたしのこと
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-aboreto text-[34px] font-normal leading-none tracking-[0.12em] text-[#FFFDF8] drop-shadow-[0_2px_12px_rgba(50,42,36,0.4)] md:text-[46px]">
                    <span className="text-[#C97758]">A</span>bout
                  </h2>
                  <span className="mt-3 block h-px w-16 bg-[#C97758]/55 transition-all duration-500 group-hover:w-24" />
                </div>

                <span className="mb-[2px] flex h-8 w-8 items-center justify-center rounded-full border border-[#FFFDF8]/60 text-[18px] text-[#FFFDF8] drop-shadow-[0_1px_8px_rgba(50,42,36,0.4)] transition duration-500 group-hover:translate-x-1 group-hover:border-[#C97758] group-hover:text-[#C97758]">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* Contact */}
          <Link
            href="/#contact"
            aria-label="お問い合わせへ移動する"
            className="
              group relative isolate overflow-hidden
              bg-[#F8F6F2] text-[#5F5555]
              transition duration-500 hover:brightness-[0.98]
            "
          >
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EEF5F5] via-[#F8F6F2] to-[#F8F3EC]" />

              {/* 左上：淡いブルー（頭文字側） */}
              <div className="absolute left-[-18%] top-[-60%] h-[220px] w-[220px] rounded-full bg-[#BFE5E8]/28 blur-[64px]" />

              {/* 右下：淡いオレンジ */}
              <div className="absolute bottom-[-60%] right-[-12%] h-[240px] w-[240px] rounded-full bg-[#EFD6BD]/42 blur-[72px]" />

              <div className="absolute inset-0 bg-white/18" />
            </div>

            <div className="relative z-10 h-full">
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2">
                <p className="mb-3 text-[12px] tracking-[0.2em] text-[#7C726C]">
                  お問い合わせ
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-aboreto text-[34px] font-normal leading-none tracking-[0.12em] text-[#5F5555] md:text-[46px]">
                      <span className="text-[#B96A72]">C</span>ontact
                    </h2>
                    <span className="mt-3 block h-px w-16 bg-[#B96A72]/65 transition-all duration-500 group-hover:w-24" />
                  </div>

                  <span className="mb-[2px] flex h-8 w-8 items-center justify-center rounded-full border border-[#7C726C]/45 text-[18px] text-[#7C726C] transition duration-500 group-hover:translate-x-1 group-hover:border-[#C96F7D] group-hover:text-[#C96F7D]">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}