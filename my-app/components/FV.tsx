"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FvSlider from "./FvSlider";

export default function FV() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);

  // 左ブロックの高さを取得してstateに保存
  useEffect(() => {
    const updateHeight = () => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* ===== 背景 ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "rgba(255, 225, 208, 0.12)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        }}
      />

      <div
        className="
          relative z-[1]
          w-full 
          flex flex-col md:flex-row 
          justify-between
          py-16 md:py-32
        "
      >
        {/* ===== 左ブロック ===== */}
        <div
          ref={leftRef}
          className="
            flex flex-row items-end justify-center
            gap-4 md:gap-8
            p-6 md:p-10 
            md:basis-[60%]
            bg-[rgba(255,225,208,0.25)]
          "
        >
          {/* 画像 */}
          <div
            className="relative w-[clamp(260px,27.6vw,398px)] flex-shrink-0"
            style={{ aspectRatio: "398 / 513" }}
          >
            <Image
              src="/images/fv/fv-img.jpg"
              alt="プロフィール"
              fill
              priority
              className="object-contain transition-all duration-300"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 27.6vw"
            />
          </div>

          {/* 縦書きテキスト */}
          <div className="flex justify-start items-end translate-y-[-8px] md:translate-y-0">
            <div className="bg-[rgba(255,255,255,0.85)] shadow-[0_3px_3px_rgba(0,0,0,0.08)] px-4 md:px-8 py-3 md:py-6 text-[#726E6E] leading-[2.2] md:leading-[2.4] h-fit self-end">
              <p
                className="[writing-mode:vertical-rl] [text-orientation:upright] flex flex-col items-end"
                style={{
                  justifyContent: "flex-end",
                  fontSize: "clamp(12px, 1.8vw, 20px)",
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

        {/* ===== 右ブロック（高さを左に合わせる） ===== */}
        <div
          className="
            hidden md:block   /* ← flexをblockに変更！ */
    md:basis-[30%]
    bg-[rgba(255,225,208,0.25)]
    h-full
    overflow-hidden
          "
          style={{
            height: leftHeight ? `${leftHeight}px` : "auto",
            transition: "height 0.3s ease",
          }}
        >
          <FvSlider />
        </div>
      </div>
    </section>
  );
}
