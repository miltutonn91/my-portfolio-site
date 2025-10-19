// data/works.ts

export type Work = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  github?: string;
  detailLink?: string;
  tech?: string[];
  year?: number;
};

const works: Work[] = [
  {
    id: 1,
    image: "/images/works/pc1.jpg",
    title: "シフォンテ様　ブランディングサイト",
    subtitle: "#クライアントワーク",
    description: "direction / design / coding",
    github: "https://github.com/miltutonn91/branding_site",
    detailLink: "/works/1",
  },
  {
    id: 2,
    image: "/images/works/pc2.jpg",
    title: "シフォンテ様　ECサイト",
    subtitle: "#クライアントワーク",
    description: "direction / design / coding",
    github: "https://github.com/miltutonn91/EC-site",
    detailLink: "/works/1",
  },
  {
    id: 3,
    image: "/images/works/pc3.jpg",
    title: "宅配野菜　LPサイト",
    subtitle: "#架空サイト",
    description: "design / coding",
    github: "https://github.com/miltutonn91/sugutabe",
    detailLink: "/works/1",
  },
  {
    id: 4,
    image: "/images/works/pc4.jpg",
    title: "農園サイト",
    subtitle: "#架空サイト",
    description: "coding",
    github: "https://github.com/miltutonn91/farm-branding-site",
    detailLink: "/works/1",
  },
];


export default works;
