"use client";

import { useEffect, useRef, useState } from "react";

type StrengthNumberProps = {
  number: string;
  isVisible: boolean;
  delay?: number;
};

function StrengthNumber({ number, isVisible, delay = 0 }: StrengthNumberProps) {
  return (
    <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center md:h-[58px] md:w-[58px]">
      <svg
        viewBox="0 0 52 52"
        className="absolute inset-0 h-full w-full -rotate-90"
        aria-hidden="true"
      >
        {/* 下地の円 */}
        <circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="#9ABCB7"
          strokeWidth="1"
          opacity="0.28"
        />

        {/* なぞる円 */}
        <circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="#9ABCB7"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={isVisible ? "0" : "1"}
          style={{
            transition:
              "stroke-dashoffset 2400ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: `${delay}ms`,
          }}
        />
      </svg>

      <span
        className={`font-aboreto text-[1.25rem] leading-none font-bold tracking-[0.02em] text-[#9ABCB7] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[1.375rem] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"} `}
        style={{
          transitionDelay: `${delay + 500}ms`,
        }}
      >
        {number}
      </span>
    </div>
  );
}

const strengths = [
  {
    number: "1",
    title: "粘り強さ",
    body: "仕事に限らず、どんな内容でも一度決めたことには粘り強く努力してきました。その姿勢を通じて、「あなたを見て自分も頑張ろうと思えた」と言っていただいた経験もあり、挑戦する姿勢や成長への意欲は、周囲を前向きにする力にもなると実感しています。",
  },
  {
    number: "2",
    title: "洞察力",
    body: "看護師として、患者様のわずかな変化や兆候を正確に捉え、根拠をもって判断・対応する力を磨いてきました。その経験から、状況を多角的に観察し、問題の本質を見極める力が培われたと感じています。Web制作においてもその視点を活かし、デザインやコードの不整合・使いづらさを早期に発見し、改善へとつなげています。ユーザーとチーム双方の視点から、全体として機能する構造と体験を意識した実装を目指しています。",
  },
  {
    number: "3",
    title: "探究心",
    body: "分からないことはすぐに調べ、答えを得た時点で終わらせず、そこからさらに下層の仕組みや関連分野まで掘り下げます。何事においても原因を必ず突き止めようと努め、実装の課題や日常の失敗に対しても「なぜそうなったのか」を分析し、再発防止に向けた実行可能な対策を立てます。「プロとして人に自信を持って説明できるレベル」を目指し、理解を積み重ねることを探究の軸としています。",
  },
];

export default function Strengths() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(target);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="strengths"
      className="relative px-5 pt-14 pb-24 md:px-10 md:pt-22 md:pb-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* タイトル */}
        <div className="mb-12 md:mb-16">
          <h2 className="subsection-heading subsection-heading--after-line">
            Strengths
          </h2>
        </div>

        <div
          ref={ref}
          className="mx-auto flex max-w-[942px] flex-col gap-10 md:gap-20"
        >
          {strengths.map((strength, index) => {
            const delay = index * 1100;

            return (
              <div
                key={strength.number}
                className={`flex flex-col gap-5 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-9 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } `}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div className="h-[1px] bg-[rgba(0,0,0,0.1)]" />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[230px_1fr] md:items-start md:gap-x-[56px] md:gap-y-0">
                  {/* 左：ナンバー・線・題名 */}
                  <div className="flex items-center gap-4 md:h-[58px]">
                    <StrengthNumber
                      number={strength.number}
                      isVisible={isVisible}
                      delay={delay}
                    />

                    <span className="hidden h-px w-7 bg-[#A28686]/45 md:block" />

                    <h3 className="meta-heading m-0">{strength.title}</h3>
                  </div>

                  {/* 右：本文 */}
                  <p className="body-text m-0 md:pt-[13px]">{strength.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
