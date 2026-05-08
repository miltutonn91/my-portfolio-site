import works from '@/data/works';
import { WorkCard } from '@/components/WorksCard';
import { SectionTitle } from '@/components/section-title';

export default function Works() {
  return (
    <section id="works" className="relative overflow-visible py-20 bg-white text-[#6A5C5C]">
      {/* 柔らかいライトのグラデーション */}
      <div className="soft-gradient soft-gradient--right absolute inset-0" />
      <div className="soft-gradient soft-gradient--left absolute inset-0" />

      {/* ▼ コンテンツ全体（中央寄せ） */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-[1]">
        {/* ▼ セクションタイトル */}
        <SectionTitle title="Works" subtitle="制作物" />

        {/* ▼ 作品カード（交互配置） */}
        <div className="flex flex-col">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
