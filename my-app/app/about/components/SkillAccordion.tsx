"use client";

import FadeIn from "@/components/FadeIn";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import type { IconType } from "react-icons";

type SkillItem = {
  name: string;
  status: "basic" | "learning";
  icon: IconType;
};

const developmentSkills: SkillItem[] = [
  { name: "HTML", status: "basic", icon: SiHtml5 },
  { name: "CSS", status: "basic", icon: SiCss3 },
  { name: "JavaScript", status: "basic", icon: SiJavascript },
  { name: "TypeScript", status: "learning", icon: SiTypescript },
  { name: "React", status: "learning", icon: SiReact },
  { name: "Next.js", status: "learning", icon: SiNextdotjs },
  { name: "Tailwind CSS", status: "learning", icon: SiTailwindcss },
];

const designSkills: SkillItem[] = [
  { name: "Figma", status: "basic", icon: SiFigma },
  { name: "Photoshop", status: "basic", icon: SiAdobephotoshop },
  { name: "Illustrator", status: "basic", icon: SiAdobeillustrator },
];

export default function Skill() {
  return (
    <section id="skill" className="relative px-5 py-14 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-[1120px]">
        {/* タイトル */}
        <div className="mb-12 md:mb-16">
          <h2 className="subsection-heading subsection-heading--after-line">
            Skills
          </h2>
        </div>

        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {/* Web Development */}
            <div
              className="
                border border-[#DCD8D0]/80 bg-[#FFFDFC]/55
                px-6 py-8
                shadow-[0_18px_45px_rgba(95,85,85,0.06)]
                md:px-8 md:py-10
              "
            >
              <h3 className="category-heading mb-1">Web development</h3>

              <p className="mb-7 text-[12px] font-bold tracking-[0.14em] text-[#9ABCB7]">
                開発
              </p>

              <p className="body-text mb-7">
                デザインカンプをもとに、再現性・レスポンシブ対応・保守性を意識して実装しています。現在はReactやNext.jsなど、より実務に近いフロントエンド開発についても学習を進めています。
              </p>

              <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-2.5">
                {developmentSkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="
                        inline-flex min-h-[34px] min-w-0 flex-wrap items-center justify-center
                        gap-x-1.5 gap-y-1
                        rounded-full border border-[#D8D1CC]/80 bg-[#FFFDFC]/80
                        px-2.5 py-1.5
                        text-[12px] tracking-[0.08em] text-[#5F5555]
                        shadow-[0_8px_20px_rgba(95,85,85,0.04)]
                        md:flex-nowrap md:justify-start md:gap-2 md:px-3.5
                      "
                    >
                      <Icon className="shrink-0 text-[13px] text-[#B99A9E] md:text-[14px]" />

                      <span className="whitespace-nowrap">{skill.name}</span>

                      {skill.status === "learning" && (
                        <span
                          className="
                            shrink-0 rounded-full bg-[#9ABCB7]/12
                            px-1.5 py-[2px]
                            text-[9px] font-medium tracking-[0.06em] text-[#6F9993]
                            md:px-2 md:text-[10px]
                          "
                        >
                          learning
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Web Design */}
            <div
              className="
                border border-[#DCD8D0]/80 bg-[#FFFDFC]/55
                px-6 py-8
                shadow-[0_18px_45px_rgba(95,85,85,0.06)]
                md:px-8 md:py-10
              "
            >
              <h3 className="category-heading mb-1">Web design</h3>

              <p className="mb-7 text-[12px] font-bold tracking-[0.14em] text-[#9ABCB7]">
                デザイン
              </p>

              <p className="body-text mb-7">
                Webサイトやバナーの制作ができます。ユーザーが操作に迷わないシンプルでわかりやすい設計を意識しながら、余白や配色、細部の見え方まで丁寧に整えることを大切にしています。
              </p>

              <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-2.5">
                {designSkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="
                        inline-flex min-h-[34px] min-w-0 items-center justify-center
                        gap-1.5
                        rounded-full border border-[#D8D1CC]/80 bg-[#FFFDFC]/80
                        px-2.5 py-1.5
                        text-[12px] tracking-[0.08em] text-[#5F5555]
                        shadow-[0_8px_20px_rgba(95,85,85,0.04)]
                        md:justify-start md:gap-2 md:px-3.5
                      "
                    >
                      <Icon className="shrink-0 text-[13px] text-[#B99A9E] md:text-[14px]" />

                      <span className="whitespace-nowrap">{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}