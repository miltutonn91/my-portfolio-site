'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import FvSlider from './FvSlider';

export default function FV() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (leftRef.current) setLeftHeight(leftRef.current.offsetHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* ===== ヘッダー（スマホは通常配置 / PCは左上固定） ===== */}
      <div className="relative z-10 px-5 pt-8 pb-4 md:absolute md:left-6 md:top-8 md:p-0">
        <p className="font-[Marcellus] text-[clamp(16px,1.5vw,22px)] tracking-[0.08em] text-[#A28686]">
          Umeda Misa Portfolio
        </p>
        <p className="mt-1 font-[Marcellus] text-[clamp(10px,0.9vw,14px)] text-[#A28686]">
          — Frontend Engineer
        </p>
      </div>

      <div
        className="
          relative z-[1]
          flex w-full flex-col justify-between
          pb-16 pt-4
          md:flex-row md:py-32
        "
      >
        {/* ===== 左ブロック（画像＋セリフ） ===== */}
        <div
          ref={leftRef}
          className="
            flex w-full justify-center
            bg-[rgba(255,225,208,0.25)]
            px-5 py-8
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            md:basis-[50%]
            md:flex-row md:items-end md:justify-start
            md:gap-8 md:p-10
          "
          >
          {/* 画像＋スマホ用セリフを重ねる枠 */}
          <div className="relative w-[min(78vw,320px)] flex-shrink-0 pb-24 md:w-[clamp(260px,27.6vw,398px)] md:pb-0">
            <div style={{ aspectRatio: '398 / 513' }} className="relative w-full">
              <Image
                src="/images/fv/fv-img.jpg"
                alt="プロフィール"
                fill
                priority
                className="object-contain transition-all duration-300"
                sizes="(max-width: 768px) 78vw, (max-width: 1200px) 50vw, 27.6vw"
              />
            </div>

            {/* スマホ用：写真右下に重ねる */}
            <div className="absolute bottom-4 right-[-6px] w-[88%] bg-[rgba(255,255,255,0.94)] px-4 py-4 text-left text-[#4F4A4A] shadow-[0_6px_18px_rgba(0,0,0,0.12)] md:hidden">
              <p className="text-[clamp(0.875rem,3.8vw,1rem)] leading-[1.75] tracking-[0.04em]">
                見える・動く、その先にある
                <br />
                <span className="font-bold text-[#3A3A3A]">伝わる</span> Web体験を形にしたい
              </p>
            </div>
          </div>
          {/* PC用 */}
          <div className="hidden justify-start items-end translate-y-[-8px] md:flex md:translate-y-0">
            <div className="h-fit self-end bg-[rgba(255,255,255,0.85)] px-8 py-6 text-[#6A5C5C] leading-[2.4] shadow-[0_3px_3px_rgba(0,0,0,0.08)]">
              <p
                className="[writing-mode:vertical-rl] [text-orientation:upright] flex flex-col items-end"
                style={{
                  justifyContent: 'flex-end',
                  fontSize: 'clamp(12px, 1.8vw, 20px)',
                }}
              >
                <span className="block">見える・動く、その先にある</span>
                <span className="block">
                  <span className="font-bold text-[#3A3A3A]">伝わる</span> Web体験を
                </span>
                <span className="block">形にしたい</span>
              </p>
            </div>
          </div>
        </div>

        {/* ===== 右ブロック（PCのみ） ===== */}
        <div
          className="
            hidden
            justify-center items-center
            bg-[rgba(255,225,208,0.25)]
            p-4
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            md:flex md:basis-[45%]
          "
          style={{
            height: leftHeight ? `${leftHeight}px` : 'auto',
            transition: 'height 0.3s ease',
          }}
        >
          <div className="flex w-full justify-center">
            <FvSlider />
          </div>
        </div>
      </div>
    </section>
  );
}