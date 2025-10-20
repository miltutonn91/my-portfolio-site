"use client";

import { useState } from "react";
import WebDesignAccordion from "./WebDesignAccordion";
import WebDevelopmentAccordion from "./WebDevelopmentAccordion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function SkillAccordion() {
  // ✅ 複数同時に開けるように変更（配列で管理）
  const [open, setOpen] = useState<string[]>([]);

  const toggle = (key: string) => {
    setOpen((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="max-w-[620px] mx-auto flex flex-col gap-[157px] pt-[100px]">
      {/* Web Design */}
      <div className="flex flex-col gap-[50px] items-center">
        <div className="flex items-center gap-[36px]">
          <div className="relative w-[253px] h-[169px]">
            <img
              src="/images/about/skill-1.jpg"
              alt="Web Design"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[329px] text-left">
            <h3 className="text-[#A28686] text-[22px] font-semibold tracking-[0.66px] leading-[24px] mb-[31px]">
              Web design
            </h3>
            <p className="text-[#726F6F] text-[12px] leading-[24px] tracking-[0.36px]">
              Webサイト、バナーの制作をすることができます。ユーザーが操作に迷うことのないシンプルでわかりやすいデザインを心がけながら、些細なところまで丁寧に作り込むようにしています。
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-[36px] cursor-pointer"
          onClick={() => toggle("design")}
        >
          <div
            className="
              border border-[rgba(0,0,0,0.3)]
              rounded-full w-[51px] h-[51px]
              flex items-center justify-center
              text-[#5A86B9] text-[28px]
              transition-transform duration-200
            "
          >
            {open.includes("design") ? <FiMinus /> : <FiPlus />}
          </div>
          <p className="text-[14px] tracking-[0.42px] text-[#726F6F]">
            スキルを詳しくみる
          </p>
        </div>

        {open.includes("design") && (
          <div className="mt-[40px]">
            <WebDesignAccordion />
          </div>
        )}
      </div>

      {/* Web Development */}
      <div className="flex flex-col gap-[50px] items-center">
        <div className="flex items-center gap-[36px]">
          <div className="relative w-[254px] h-[169px]">
            <img
              src="/images/about/skill-2.jpg"
              alt="Web Development"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[329px] text-left">
            <h3 className="text-[#A28686] text-[22px] font-semibold tracking-[0.66px] leading-[24px] mb-[31px]">
              Web development
            </h3>
            <p className="text-[#726F6F] text-[12px] leading-[24px] tracking-[0.36px]">
              デザインカンプを忠実に再現することができます。規則性のある命名をし、誰が見てもわかりやすいコードを書くことを心がけています。
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-[36px] cursor-pointer"
          onClick={() => toggle("dev")}
        >
          <div
            className="
              border border-[rgba(0,0,0,0.3)]
              rounded-full w-[51px] h-[51px]
              flex items-center justify-center
              text-[#5A86B9] text-[28px]
              transition-transform duration-200
            "
          >
            {open.includes("dev") ? <FiMinus /> : <FiPlus />}
          </div>
          <p className="text-[14px] tracking-[0.42px] text-[#726F6F]">
            スキルを詳しくみる
          </p>
        </div>

        {open.includes("dev") && (
          <div className="mt-[40px]">
            <WebDevelopmentAccordion />
          </div>
        )}
      </div>
    </div>
  );
}
