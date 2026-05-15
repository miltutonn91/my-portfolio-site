// data/works.ts

export type Work = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  github?: string;
  detailLink: string;
  tech?: string[];
  year?: number;

  categories?: ("Coding" | "Design" | "Direction")[];

  detail?: string;
  point?: string;
  role?: string;
  siteUrl?: string;
  detailImage?: string;
  spImage?: string;

  siteType?: string;
  target?: string;
  concept?: string;

  period?: {
    label: string;
    duration: string;
  }[];
};

const works: Work[] = [
  {
    id: 1,

    image: "/images/works/pc1.jpg",
    detailImage: "/images/fv/fv-slide-1.jpg",

    title: "CHIFFONTE  ブランディングサイト",

    subtitle: "#クライアントワーク",

    description: "direction / design / coding",

    categories: ["Direction", "Design", "Coding"],

    siteType: "ブランディングサイト",

    target: "子育て中のママ",

    concept: "安心・ナチュラル",

    detail:
      "企画からデザイン、コーディングまで一貫して担当しました。スマホファーストで操作性を意識し、ハンバーガーメニューやスライダーを実装。同時制作したECサイトと紐づけ、ブランド全体として統一感のある世界観を表現しました。",

    role: "企画 / デザイン / コーディング",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Photoshop",
      "Illustrator",
      "Figma",
    ],

    period: [
      {
        label: "ヒアリング・企画",
        duration: "5日間",
      },
      {
        label: "情報整理",
        duration: "5日間",
      },
      {
        label: "デザイン",
        duration: "1週間",
      },
      {
        label: "コーディング",
        duration: "1週間",
      },
    ],

    github: "https://github.com/miltutonn91/branding_site",

    siteUrl: "https://miltutonn91.github.io/branding_site/",

    detailLink: "/works/1",
  },

  {
  id: 2,

  image: "/images/works/pc2.jpg",
  detailImage: "/images/fv/fv-slide-2.jpg",

  title: "CHIFFONTE ECサイト",

  subtitle: "#クライアントワーク",

  description: "direction / design / coding",

  categories: ["Direction", "Design", "Coding"],

  detail:
    "同時制作したブランディングサイトとの一貫性を意識しつつ、購入導線を重視した設計を意識しました。数年以内のEC展開を見据えており、実務に近い構成で実装をしました。",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Photoshop",
    "Illustrator",
    "Figma",
  ],

  period: [
    {
      label: "情報整理",
      duration: "5日間",
    },
    {
      label: "デザイン",
      duration: "1週間",
    },
    {
      label: "コーディング",
      duration: "1週間",
    },
  ],

  github: "https://github.com/miltutonn91/EC-site",

  siteUrl: "https://miltutonn91.github.io/EC-site/",

  detailLink: "/works/2",
},

{
  id: 3,

  image: "/images/works/pc3.jpg",
  detailImage: "/images/fv/fv-slide-3.jpg",

  title: "宅配野菜 LPサイト",

  subtitle: "#架空サイト",

  description: "design / coding",

  categories: ["Design", "Coding"],

  detail:
    "直感的に新鮮さ・安心感が伝わるようなファーストビューのデザインを意識し、品質保証や「届くまでの流れ」を簡潔に整理しました。また、行動喚起しやすいUI設計を重視し、購入意欲を高める導線を設計しました。",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Photoshop",
    "Illustrator",
    "Figma",
  ],

  period: [
    {
      label: "情報整理",
      duration: "3日間",
    },
    {
      label: "デザイン",
      duration: "1週間",
    },
    {
      label: "コーディング",
      duration: "1週間",
    },
  ],

  github: "https://github.com/miltutonn91/sugutabe",

  siteUrl: "https://miltutonn91.github.io/sugutabe/",

  detailLink: "/works/3",
},

{
  id: 4,

  image: "/images/works/pc4.jpg",
  detailImage: "/images/fv/fv-slide-4.jpg",

  title: "蓼科ごとう農園サイト",

  subtitle: "#架空サイト",

  description: "coding",

  categories: ["Coding"],

  detail:
    "フリーデザインカンプを使用し、コーディングを実施しました。実務に近いコーディングスキルを磨くことを目的とし、デザインを忠実に再現することに加え、レスポンシブ対応やUI表現の細部にもこだわりを持ち実装をしました。FAQやSwiper、Googleフォーム連携など、ユーザビリティを意識したUIを導入しました。",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Photoshop",
    "Illustrator",
    "Figma",
  ],

  period: [
    {
      label: "情報整理",
      duration: "3日間",
    },
    {
      label: "デザイン",
      duration: "1週間",
    },
    {
      label: "コーディング",
      duration: "1週間",
    },
  ],

  github: "https://github.com/miltutonn91/farm-branding-site",

  siteUrl: "https://miltutonn91.github.io/farm-branding-site/",

  detailLink: "/works/4",
},

 
];

export default works;