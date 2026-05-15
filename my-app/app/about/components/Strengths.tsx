"use client";

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative bg-white px-5 py-20 text-[#6A5C5C] md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* タイトル */}
        <div className="mb-12 md:mb-20">
          <p className="category-heading mb-3">
            わたしの強み
          </p>

          <h2 className="section-heading">
            Strengths
          </h2>
        </div>

        <div className="mx-auto flex max-w-[942px] flex-col gap-10 md:gap-20">
          {/* 粘り強さ */}
          <div className="flex flex-col gap-5 md:gap-9">
            <div className="h-[1px] bg-[rgba(0,0,0,0.1)]" />

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-[120px]">
              <h3 className="w-full text-[1.125rem] font-semibold leading-[1.5] tracking-[0.06em] text-[#A28686] md:w-[110px] md:shrink-0 md:text-[1.5rem]">
                粘り強さ
              </h3>

              <p className="body-text">
                仕事に限らず、どんな内容でも一度決めたことには粘り強く努力してきました。
                その姿勢を通じて、「あなたを見て自分も頑張ろうと思えた」と言っていただいた経験もあり、
                挑戦する姿勢や成長への意欲は、周囲を前向きにする力にもなると実感しています。
              </p>
            </div>
          </div>

          {/* 洞察力 */}
          <div className="flex flex-col gap-5 md:gap-9">
            <div className="h-[1px] bg-[rgba(0,0,0,0.1)]" />

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-[120px]">
              <h3 className="w-full text-[1.125rem] font-semibold leading-[1.5] tracking-[0.06em] text-[#A28686] md:w-[110px] md:shrink-0 md:text-[1.5rem]">
                洞察力
              </h3>

              <p className="body-text">
                看護師として、患者のわずかな変化や兆候を正確に捉え、根拠をもって判断・対応する力を磨いてきました。
                その経験から、状況を多角的に観察し、問題の本質を見極める力が培われたと感じています。
                Web制作においてもその視点を活かし、デザインやコードの不整合・使いづらさを早期に発見し、改善へとつなげています。
                ユーザーとチーム双方の視点から、全体として機能する構造と体験を意識した実装を目指しています。
              </p>
            </div>
          </div>

          {/* 探究心 */}
          <div className="flex flex-col gap-5 md:gap-9">
            <div className="h-[1px] bg-[rgba(0,0,0,0.1)]" />

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-[120px]">
              <h3 className="w-full text-[1.125rem] font-semibold leading-[1.5] tracking-[0.06em] text-[#A28686] md:w-[110px] md:shrink-0 md:text-[1.5rem]">
                探究心
              </h3>

              <p className="body-text">
                分からないことはすぐに調べ、答えを得た時点で終わらせず、そこからさらに下層の仕組みや関連分野まで掘り下げます。
                何事においても原因を必ず突き止めようと努め、実装の課題や日常の失敗に対しても「なぜそうなったのか」を分析し、
                再発防止に向けた実行可能な対策を立てます。
                「プロとして人に自信を持って説明できるレベル」を目指し、理解を積み重ねることを探究の軸としています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}