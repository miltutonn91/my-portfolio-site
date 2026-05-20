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
    detailImage: "/images/works/pc1.jpg",

    title: "CHIFFONTE  ブランディングサイト",

    subtitle: "#クライアントワーク",

    description: "direction / design / coding",

    siteType: "ブランディングサイト",

    target: "子育て中のママ",

    concept: "安心・ナチュラル",

    detail:
      "実店舗を持たず、現在は受注生産を中心に活動されているクライアント様に向けて、今後のEC展開を見据えたブランディングサイトを制作しました。スマホファーストで操作性を意識し、同時制作したECサイトと紐づけることで、ブランド全体として統一感のある世界観を表現しました。",

    role: "企画 / デザイン / コーディング",

    tech: ["HTML", "CSS", "JavaScript", "Photoshop", "Illustrator", "Figma"],

    period: [
      {
        label: "企画 / 情報設計 / WF",
        duration: "1週間",
      },
      {
        label: "デザイン",
        duration: "1週間",
      },
      {
        label: "コーディング",
        duration: "10日間",
      },
    ],

    github: "https://github.com/miltutonn91/branding_site",

    siteUrl: "https://miltutonn91.github.io/branding_site/",

    detailLink: "/works/1",
  },

  {
    id: 2,

    image: "/images/works/pc2.jpg",
    detailImage: "/images/works/pc2.jpg",

    title: "CHIFFONTE ECサイト",

    subtitle: "#クライアントワーク",

    description: "direction / design / coding",

    detail:
      "同時制作したブランディングサイトとの一貫性を意識しながら、商品の魅力が伝わり、購入まで自然につながる導線設計を行いました。クライアント様の今後のEC展開を見据え、実務に近い構成で実装しています。",

    tech: ["HTML", "CSS", "JavaScript", "Photoshop", "Illustrator", "Figma"],

    period: [
      {
        label: "企画 / 情報設計 / WF",
        duration: "1週間",
      },
      {
        label: "デザイン",
        duration: "1週間",
      },
      {
        label: "コーディング",
        duration: "10日間",
      },
    ],

    github: "https://github.com/miltutonn91/EC-site",

    siteUrl: "https://miltutonn91.github.io/EC-site/",

    detailLink: "/works/2",
  },

  {
    id: 3,

    image: "/images/works/pc3.jpg",
    detailImage: "/images/works/pc3.jpg",

    title: "ポートフォリオサイト",

    subtitle: "#自主制作",

    description: "direction / design / coding",

    detail:
      "転職活動のためのポートフォリオサイトを制作しました。採用担当者の視点を意識し、情報をわかりやすく整理し、作品の魅力や自身の制作姿勢が伝わる導線設計を行いました。Next.jsとTypeScriptを使用し、操作性や保守性も意識して制作しました。",

    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],

    period: [
      {
        label: "WF",
        duration: "1週間",
      },
      {
        label: "デザイン",
        duration: "2週間",
      },
      {
        label: "コーディング",
        duration: "2週間",
      },
    ],

    github: "https://github.com/miltutonn91/my-portfolio-site",

    siteUrl: "https://my-portfolio-site-sage-tau.vercel.app/",

    detailLink: "/works/3",
  },

  {
    id: 4,

    image: "/images/works/pc4.jpg",
    detailImage: "/images/works/pc4.jpg",

    title: "宅配野菜 LP（スクール課題）",

    subtitle: "#架空サイト",

    description: "design / coding",

    detail:
      "直感的に新鮮さや安心感が伝わるよう、ファーストビューから購入導線まで一貫した情報設計を意識して制作しました。また、ユーザーが購入前に知りたい情報を整理し、行動喚起につながるUI設計を行いました。",

    tech: ["HTML", "CSS", "JavaScript", "Photoshop", "Illustrator", "Figma"],

    period: [
      {
        label: "WF",
        duration: "3日間",
      },
      {
        label: "デザイン",
        duration: "1週間",
      },
      {
        label: "コーディング",
        duration: "10日間",
      },
    ],

    github: "https://github.com/miltutonn91/sugutabe",

    siteUrl: "https://miltutonn91.github.io/sugutabe/",

    detailLink: "/works/4",
  },

  {
    id: 5,

    image: "/images/works/pc5.jpg",
    detailImage: "/images/works/pc5.jpg",

    title: "蓼科ごとう農園 紹介サイト",

    subtitle: "#架空サイト",

    description: "coding",

    categories: ["Coding"],

    detail:
      "フリーデザインカンプをもとに、実務に近いコーディング力を高めることを目的に制作しました。デザインの再現性に加え、レスポンシブ対応やUI表現の細部まで丁寧に調整し、ユーザビリティを意識した実装を行いました。",

    tech: ["HTML", "CSS", "JavaScript", "Photoshop", "Illustrator", "Figma"],

    period: [
      {
        label: "コーディング",
        duration: "1週間",
      },
    ],

    github: "https://github.com/miltutonn91/farm-branding-site",

    siteUrl: "https://miltutonn91.github.io/farm-branding-site/",

    detailLink: "/works/5",
  },
];

export default works;
