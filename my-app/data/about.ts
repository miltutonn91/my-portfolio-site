// data/about.ts
export type About = {
    name: string;
    kana: string;
    image: string;
    description: string;
};

export const about: About = {
    name: "梅田 実沙",
    kana: "うめだ みさ",
    image: "/images/about/profile.jpg",
    description: `看護師として働いており、現在8年目です。\n
“ものづくりが好き” その思いでWEBデザインを学び初め、
ゼロから形にしていく創造の過程に強く惹かれました。
現在は、デザインの意図を正確にくみ取り、
丁寧に形にしていくフロントエンドエンジニアを目指し転職活動中です。`,
};
