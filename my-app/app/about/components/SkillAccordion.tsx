"use client";

import { useState } from "react";
import WebDesignAccordion from "./WebDesignAccordion";
import WebDevelopmentAccordion from "./WebDevelopmentAccordion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Skill() {
  const [open, setOpen] = useState<string[]>([]);

  const toggle = (key: string) => {
    setOpen((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key)
        : [...prev, key]
    );
  };

  return (
    <section
      id="skill"
      className="relative px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        {/* タイトル */}
        <div className="mb-12 md:mb-16">
          <h2 className="subsection-heading subsection-heading--after-line">
            Skills
          </h2>
        </div>

        <div className="mx-auto flex max-w-[720px] flex-col gap-14 md:gap-24">
          {/* Web Design */}
          <div className="flex flex-col items-center gap-6 md:gap-9">
            <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-center md:gap-12">
              <div className="relative h-[150px] w-[225px] overflow-hidden bg-[#FFFDF8] md:h-[190px] md:w-[285px]">
                <img
                  src="/images/about/skill-1.jpg"
                  alt="Web Design"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full max-w-[380px] text-left">
                <h3 className="category-heading mb-4 md:mb-6">
                  Web design
                </h3>

                <p className="body-text">
                  Webサイト、バナーの制作をすることができます。ユーザーが操作に迷うことのないシンプルでわかりやすいデザインを心がけながら、些細なところまで丁寧に作り込むようにしています。
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex cursor-pointer items-center gap-4 text-[#5F5555] transition hover:text-[#A28686] md:gap-6"
              onClick={() => toggle("design")}
            >
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#DCD8D0] text-[24px] transition md:h-[52px] md:w-[52px] md:text-[28px]">
                {open.includes("design") ? <FiMinus /> : <FiPlus />}
              </span>

              <span className="body-text">
                スキルを詳しくみる
              </span>
            </button>

            {open.includes("design") && (
              <div className="mt-1 w-full md:mt-3">
                <WebDesignAccordion />
              </div>
            )}
          </div>

          {/* Web Development */}
          <div className="flex flex-col items-center gap-6 md:gap-9">
            <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-center md:gap-12">
              <div className="relative h-[150px] w-[225px] overflow-hidden bg-[#FFFDF8] md:h-[190px] md:w-[285px]">
                <img
                  src="/images/about/skill-2.jpg"
                  alt="Web Development"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full max-w-[380px] text-left">
                <h3 className="category-heading mb-4 md:mb-6">
                  Web development
                </h3>

                <p className="body-text">
                  デザインカンプを忠実に再現することができます。規則性のある命名をし、誰が見てもわかりやすいコードを書くことを心がけています。
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex cursor-pointer items-center gap-4 text-[#5F5555] transition hover:text-[#A28686] md:gap-6"
              onClick={() => toggle("dev")}
            >
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#DCD8D0] text-[24px] transition md:h-[52px] md:w-[52px] md:text-[28px]">
                {open.includes("dev") ? <FiMinus /> : <FiPlus />}
              </span>

              <span className="body-text">
                スキルを詳しくみる
              </span>
            </button>

            {open.includes("dev") && (
              <div className="mt-1 w-full md:mt-3">
                <WebDevelopmentAccordion />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}