'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlurIn from '@/components/ui/BlurIn';

const worksPreviewImages = [
  '/images/fv/fv-slide-1.jpg',
  '/images/fv/fv-slide-2.jpg',
  '/images/fv/fv-slide-3.jpg',
  '/images/fv/fv-slide-4.jpg',
  '/images/fv/fv-slide-5.jpg',
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
        <BlurIn>
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

                {/* 左下：オレンジベージュの大きなにじみ */}
                <div className="absolute bottom-[-10%] left-[-6%] h-[820px] w-[680px] -rotate-[16deg] rounded-[44%_56%_48%_52%/58%_42%_60%_40%] bg-[#F1D4B8]/52 blur-[132px]" />

                {/* 左中央：オレンジの余韻 */}
                <div className="absolute left-[8%] top-[45%] h-[460px] w-[340px] rotate-[8deg] rounded-[46%_54%_52%_48%/50%_50%_42%_58%] bg-[#F3DDC7]/36 blur-[106px]" />

                {/* 中央下：ほんのりオレンジの広がり */}
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
<div
  className="
    absolute bottom-0 left-1/2 top-[14%] z-10
    w-[clamp(280px,60vw,390px)]
    -translate-x-1/2
    overflow-hidden
    shadow-[0_14px_42px_rgba(90,80,70,0.07)]
    2xl:top-[11%]
  "
>
  <div className="relative h-full w-full">
    <Image
      src="/images/fv/fv-main-sakura.jpg"
      alt="梅田実沙"
      fill
      priority
      className="scale-[1.02] object-cover object-center"
      sizes="(max-width: 1024px) 60vw, 390px"
    />
  </div>
</div>

              {/* 英語タイトル */}
              <div className="absolute left-6 top-7 z-20 md:left-10 md:top-10">
                <div className="inline-flex flex-col items-stretch">
                  <p className="font-aboreto text-[clamp(1.9rem,3.8vw,2.6rem)] font-normal leading-[1.02] tracking-[0.07em] text-[#5F5555]/90">
                    <span className="block">Misa Umeda</span>
                    <span className="block">Portfolio</span>
                  </p>

                  <div className="mt-4 flex w-full items-center gap-3">
                    <span className="h-px flex-1 bg-[#CFC6BE]" />

                    <p className="whitespace-nowrap text-right text-[10px] tracking-[0.22em] text-[#5F5555]/55 md:text-[11px]">
                      FRONT-END ENGINEER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右：FVナビゲーション */}
            <div
              className="group/fvWorks grid h-[100svh] gap-2 md:gap-3"
              style={{
                gridTemplateRows:
                  'minmax(0, 4.5fr) minmax(0, 3.5fr) minmax(0, 2fr)',
              }}
            >
              {/* Works */}
              <Link
                href="/works"
                aria-label="制作物一覧ページへ移動する"
                className="group relative isolate overflow-hidden bg-[#F6F3EE] text-[#FFFDF8] transition-all duration-500 ease-out group-hover/fvWorks:opacity-45 hover:z-10 hover:!opacity-100 hover:-translate-y-1 hover:brightness-[0.98] hover:shadow-[0_18px_44px_rgba(77,92,98,0.18)]"
              >
                {/* 背景画像スライド */}
                <div className="absolute inset-0 z-0">
                  {worksPreviewImages.map((src, index) => (
                    <div key={src} className="absolute inset-0">
                      <Image
                        src={src}
                        alt=""
                        fill
                        className={`pointer-events-none object-cover transition-all duration-[2200ms] ease-out ${
                          activeWorkImage === index
                            ? 'scale-100 opacity-100 blur-0'
                            : 'scale-[1.04] opacity-0 blur-[5px]'
                        }`}
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                  ))}
                </div>

                {/* 文字エリア用レイヤー */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-[#3F3732]/64 via-[#3F3732]/28 to-transparent" />

                <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h2 className="font-aboreto text-[34px] font-light leading-none tracking-[0.1em] text-[#FFFDF8] drop-shadow-[0_2px_14px_rgba(40,34,30,0.55)] md:text-[44px]">
                        Works
                      </h2>

                      <span className="mt-3 block h-px w-16 bg-[#4FA7B3]/90 transition-all duration-500 group-hover:w-24" />
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
                className="group relative isolate overflow-hidden bg-[#F7F5F0] text-[#FFFDF8] transition-all duration-500 ease-out group-hover/fvWorks:opacity-45 hover:z-10 hover:!opacity-100 hover:-translate-y-1 hover:brightness-[0.98] hover:shadow-[0_18px_44px_rgba(77,92,98,0.18)]"
              >
                {/* 背景画像 */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/about/profile.jpg"
                    alt="梅田実沙のプロフィール写真"
                    fill
                    className="pointer-events-none object-cover object-[center_67%] transition-transform duration-1000 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>

                {/* 文字エリア用レイヤー */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-[#3F3732]/62 via-[#3F3732]/26 to-transparent" />

                <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h2 className="font-aboreto text-[34px] font-light leading-none tracking-[0.1em] text-[#FFFDF8] drop-shadow-[0_2px_14px_rgba(40,34,30,0.55)] md:text-[44px]">
                        About
                      </h2>

                      <span className="mt-3 block h-px w-16 bg-[#d28a5a]/70 transition-all duration-500 group-hover:w-24" />
                    </div>

                    <span className="mb-[2px] flex h-8 w-8 items-center justify-center rounded-full border border-[#FFFDF8]/60 text-[18px] text-[#FFFDF8] drop-shadow-[0_1px_8px_rgba(50,42,36,0.4)] transition duration-500 group-hover:translate-x-1 group-hover:border-[#D28A5A] group-hover:text-[#D28A5A]">
                      →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Contact */}
              <a
                href="mailto:nakanomisa51@gmail.com"
                aria-label="メールを送る"
                className="group relative isolate overflow-hidden bg-[#F6F1EE] text-[#5F5555] transition-all duration-500 ease-out group-hover/fvWorks:opacity-45 hover:z-10 hover:!opacity-100 hover:-translate-y-1 hover:brightness-[1.01] hover:shadow-[0_18px_44px_rgba(77,92,98,0.18)]"
              >
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                  {/* Contactコンポーネント寄せのグラデーション */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#F5EFEF_2.88%,rgba(255,225,208,0.28)_53.85%,rgba(241,248,226,0.45)_99.99%)]" />

                  {/* 左上：淡いローズ */}
                  <div className="absolute left-[-22%] top-[-58%] h-[230px] w-[230px] rounded-full bg-[#EACFD3]/48 blur-[66px]" />

                  {/* 中央：ピーチベージュ */}
                  <div className="absolute left-[22%] top-[18%] h-[180px] w-[220px] rounded-full bg-[#F0CDBB]/30 blur-[62px]" />

                  {/* 右下：淡いグリーンベージュ */}
                  <div className="absolute bottom-[-68%] right-[-18%] h-[300px] w-[300px] rounded-full bg-[#E8F2D7]/48 blur-[78px]" />

                  {/* なじませ */}
                  <div className="absolute inset-0 bg-white/10" />
                </div>

                <div className="relative z-10 h-full">
                  <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2">
                    {/* hoverで文言切り替え */}
                    <div className="relative mb-3 h-[18px] overflow-hidden">
                      <p className="absolute left-0 top-0 text-[12px] tracking-[0.2em] text-[#5F5555]/75 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                        お問い合わせ
                      </p>

                      <p className="absolute left-0 top-0 translate-y-full text-[12px] tracking-[0.2em] text-[#5F5555]/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        メールを送る
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="font-aboreto text-[34px] font-normal leading-none tracking-[0.1em] text-[#5F5555] md:text-[46px]">
                          Contact
                        </h2>

                        <span className="mt-3 block h-px w-16 bg-[#C98A92]/80 transition-all duration-500 group-hover:w-24" />
                      </div>

                      <span className="mb-[2px] flex h-8 w-8 items-center justify-center rounded-full border border-[#5F5555]/45 text-[18px] text-[#5F5555] transition duration-500 group-hover:translate-x-1 group-hover:border-[#C98A92] group-hover:text-[#C98A92]">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </BlurIn>
    </section>
  );
}