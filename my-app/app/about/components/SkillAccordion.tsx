"use client";
import FadeIn from "@/components/FadeIn";

const developmentSkills = [
  { name: "HTML", status: "basic" },
  { name: "CSS", status: "basic" },
  { name: "JavaScript", status: "basic" },
  { name: "TypeScript", status: "learning" },
  { name: "React", status: "learning" },
  { name: "Next.js", status: "learning" },
  { name: "Tailwind CSS", status: "learning" },
];

const designSkills = [
  { name: "Figma", status: "basic" },
  { name: "Photoshop", status: "basic" },
  { name: "Illustrator", status: "basic" },
];

export default function Skill() {
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

            <h3 className="category-heading mb-1">
              Web development
            </h3>
              <p className="mb-7 text-[12px] font-bold tracking-[0.14em] text-[#9ABCB7]">
              開発
            </p>

            <p className="body-text mb-7">
              デザインカンプをもとに、再現性・レスポンシブ対応・保守性を意識して実装しています。現在はReactやNext.jsなど、より実務に近いフロントエンド開発についても学習を進めています。
            </p>

            <div className="flex flex-wrap gap-2.5">
              {developmentSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-[#D8D1CC]/80 bg-[#FFFDFC]/80
                    px-3.5 py-1.5
                    text-[12px] tracking-[0.08em] text-[#5F5555]
                    shadow-[0_8px_20px_rgba(95,85,85,0.04)]
                  "
                >
                  {skill.name}

                  {skill.status === "learning" && (
                    <span className="rounded-full bg-[#9ABCB7]/12 px-2 py-[2px] text-[10px] font-medium tracking-[0.08em] text-[#6F9993]">
                      learning
                    </span>
                                      )}
                </span>
              ))}
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

            <h3 className="category-heading mb-1">
              Web design
            </h3>
            <p className="mb-7 text-[12px] font-bold tracking-[0.14em] text-[#9ABCB7]">
              デザイン
            </p>

            <p className="body-text mb-7">
              Webサイトやバナーの制作ができます。ユーザーが操作に迷わないシンプルでわかりやすい設計を意識しながら、余白や配色、細部の見え方まで丁寧に整えることを大切にしています。
            </p>

            <div className="flex flex-wrap gap-2.5">
              {designSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="
                    inline-flex items-center rounded-full
                    border border-[#D8D1CC]/80 bg-[#FFFDFC]/80
                    px-3.5 py-1.5
                    text-[12px] tracking-[0.08em] text-[#5F5555]
                    shadow-[0_8px_20px_rgba(95,85,85,0.04)]
                  "
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}