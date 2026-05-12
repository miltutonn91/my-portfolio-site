'use client';

import Image from 'next/image';
import FvSlider from './FvSlider';

export default function FV() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* ===== ヘッダー：1000px以下は通常配置 ===== */}
      <div className="relative z-10 bg-white px-6 pb-5 pt-8 lg:hidden">
        <p className="font-[Marcellus] text-[clamp(16px,4.2vw,22px)] tracking-[0.08em] text-[#A28686]">
          Umeda Misa Portfolio
        </p>
        <p className="mt-1 font-[Marcellus] text-[clamp(10px,2.8vw,14px)] text-[#A28686]">
          — Frontend Engineer
        </p>
      </div>

      {/* ===== ヘッダー：PCのみabsolute ===== */}
      <div className="absolute left-6 top-8 z-10 hidden lg:block">
        <p className="font-[Marcellus] text-[clamp(16px,1.5vw,22px)] tracking-[0.08em] text-[#A28686]">
          Umeda Misa Portfolio
        </p>
        <p className="mt-1 font-[Marcellus] text-[clamp(10px,0.9vw,14px)] text-[#A28686]">
          — Frontend Engineer
        </p>
      </div>

      {/* ===== 背景全体 ===== */}
      <div className="absolute inset-0 z-0" />

      <div
        className="
          relative z-[1]
          grid w-full grid-cols-1
          py-0
          lg:grid-cols-2 lg:py-32
        "
      >
        {/* ===== 左ブロック（画像＋メッセージ） ===== */}
        <div
          className="
            flex items-center justify-center
            bg-[rgba(255,225,208,0.25)]
            px-4 py-6
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            min-[480px]:p-6
            lg:p-10
          "
        >
          <div
  className="
    grid w-full max-w-[560px]
    grid-cols-[60%_40%]
    items-end justify-center
    gap-2
    min-[480px]:grid-cols-[64%_36%]
    min-[480px]:gap-4
    md:flex md:gap-4
    lg:gap-8
  "
>
  {/* 画像 */}
  <div className="relative w-full min-w-0 md:w-[min(58vw,300px)] md:flex-shrink-0 lg:w-[clamp(260px,27.6vw,398px)]">
    <div style={{ aspectRatio: '398 / 513' }} className="relative w-full">
      <Image
        src="/images/fv/fv-img.jpg"
        alt="プロフィール"
        fill
        priority
        className="object-contain transition-all duration-300"
        sizes="(max-width: 480px) 55vw, (max-width: 768px) 58vw, (max-width: 1200px) 50vw, 27.6vw"
      />
    </div>
  </div>

  {/* メッセージ */}
  <div className="flex w-full items-end justify-center md:w-auto">
    <div
      className="
        h-fit w-full
        bg-[rgba(255,255,255,0.85)]
        px-3 py-3
        text-[#6A5C5C]
        shadow-[0_3px_3px_rgba(0,0,0,0.08)]
        min-[480px]:px-4 min-[480px]:py-4
        md:w-auto md:px-5 md:py-5
        lg:px-6 lg:py-5
        xl:px-8 xl:py-6
      "
    >
      <p
        className="
          [writing-mode:vertical-rl]
          [text-orientation:upright]
          mx-auto
          flex flex-col items-end
          text-[12px]
          leading-[1.9]
          min-[390px]:text-[13px]
          min-[480px]:text-[14px]
          sm:text-[15px]
          md:text-[16px]
          lg:text-[17px]
          xl:text-[20px]
          lg:leading-[2.35]
        "
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
        </div>

        {/* ===== 右ブロック（PCのみスライダー） ===== */}
        <div
          className="
            hidden
            items-center justify-center
            bg-[rgba(255,225,208,0.25)]
            p-6
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            lg:flex lg:p-10
          "
        >
          <div className="flex w-full justify-center">
            <FvSlider />
          </div>
        </div>
      </div>
    </section>
  );
}