"use client";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden text-center text-[#726E6E]"
      style={{
        background:
          "linear-gradient(90deg, #F5EFEF 2.88%, rgba(255,225,208,0.19) 53.85%, rgba(241,248,226,0.42) 99.99%)",
        borderTopLeftRadius: "70% 30%",
        borderTopRightRadius: "70% 30%",
      }}
    >
      <div className="relative z-[1] py-32 md:py-40 px-5 md:px-10 max-w-[680px] mx-auto">
        {/* CONTACT タイトル */}
        <h2
          className="font-[400] text-[48px] md:text-[80px] tracking-[6.4px]"
          style={{
            color: "#A28686",
            fontFamily: '"Marcellus", serif',
            lineHeight: "1.1",
          }}
        >
          CONTACT
        </h2>

        {/* サブタイトル */}
        <p className="text-[18px] md:text-[20px] tracking-[0.3px] mt-4 md:mt-6">
          お問い合わせ
        </p>

        {/* 本文 */}
        <div className="max-w-[380px] mx-auto text-center mt-6 md:mt-8 mb-10 md:mb-12">
          <p className="text-[14px] leading-relaxed tracking-[0.3px] mb-8">
            ご覧いただきありがとうございます。
            <br />
            下記のメールアドレスまでお気軽にご連絡ください。
          </p>

          {/* メールボタン */}
          <Button
            variant="white"
            className="
              w-full 
              text-[#726E6E]
              bg-white
              border border-[rgba(0,0,0,0.05)]
              shadow-[0_4px_10px_rgba(0,0,0,0.08)]
              hover:bg-[#F5F5F5]
              hover:shadow-[0_6px_14px_rgba(0,0,0,0.12)]
              transition-all duration-300
            "
            onClick={() => (window.location.href = 'mailto:nakanomisa51@gmail.com')}
          >
            nakanomisa51@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
}
