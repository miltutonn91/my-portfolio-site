"use client";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#E6DDD8] bg-[#F6F1EE] px-5 py-24 text-center text-[#5F5555] md:px-10 md:py-32"
    >
      {/* 背景グラデーション */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F5EFEF_2.88%,rgba(255,225,208,0.24)_53.85%,rgba(241,248,226,0.42)_99.99%)]" />

        {/* 左上：淡いローズ */}
        <div className="absolute top-[-35%] left-[-12%] h-[360px] w-[360px] rounded-full bg-[#EACFD3]/42 blur-[90px]" />

        {/* 中央：ピーチベージュ */}
        <div className="absolute top-[10%] left-[34%] h-[280px] w-[340px] rounded-full bg-[#F0CDBB]/24 blur-[88px]" />

        {/* 右下：淡いグリーンベージュ */}
        <div className="absolute right-[-10%] bottom-[-42%] h-[420px] w-[420px] rounded-full bg-[#E8F2D7]/42 blur-[100px]" />

        {/* なじませ */}
        <div className="absolute inset-0 bg-white/12" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[720px]">
        <h2 className="font-aboreto text-[2.5rem] leading-none font-light tracking-[0.14em] text-[#5F5555] md:text-[4rem]">
          Contact
        </h2>

        <span className="mx-auto mt-5 block h-px w-16 bg-[#C98A92]/75" />

        <p className="mx-auto mt-8 max-w-[420px] text-[0.8125rem] leading-[2] tracking-[0.06em] md:text-[0.9375rem]">
          ご覧いただきありがとうございます。
          <br />
          下記のメールアドレスより お気軽にご連絡ください。
        </p>

        <div className="mx-auto mt-10 max-w-[380px]">
          <Button
            asChild
            variant="white"
            className="w-full cursor-pointer rounded-full border border-[#C98A92]/35 bg-[#FFFDF8]/88 px-6 py-6 text-[0.8125rem] tracking-[0.08em] text-[#4F3A30] shadow-[0_8px_24px_rgba(95,85,85,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#C98A92]/65 hover:bg-[#FFF8F5] hover:shadow-[0_12px_30px_rgba(95,85,85,0.12)] md:text-[0.875rem]"
          >
            <a href="mailto:nakanomisa51@gmail.com">nakanomisa51@gmail.com</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
