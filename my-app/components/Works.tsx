import WorkCard from "@/components/ui/WorksCard";
import works from "@/data/works";
import FadeIn from "@/components/FadeIn";

export default function Works() {
  return (
    <section
      id="works"
      className="
        relative overflow-hidden
        bg-[#FBFAF7] px-5 py-[72px] 
        md:px-10 md:py-[88px]
      "
    >
      {/* FVとつながる淡いぼかし */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* 右上：淡いブルー */}
        <div className="absolute right-[-10%] top-[-16%] h-[480px] w-[480px] rounded-full bg-[#D5EAEC]/48 blur-[115px]" />

        {/* 左下：淡いオレンジベージュ */}
        <div className="absolute bottom-[-20%] left-[-10%] h-[580px] w-[580px] rounded-full bg-[#F1D4B8]/42 blur-[130px]" />

        {/* 中央左：ほんのりピンク */}
        <div className="absolute left-[22%] top-[28%] h-[380px] w-[380px] rounded-full bg-[#EFD4D8]/34 blur-[110px]" />

        {/* 右下：淡い生成りグリーン */}
        <div className="absolute bottom-[8%] right-[8%] h-[340px] w-[340px] rounded-full bg-[#E8F2D7]/28 blur-[105px]" />

        {/* 全体をなじませる白 */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1120px]">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="section-heading">
            Works
          </h2>
        </div>
<div className="grid grid-cols-1 gap-x-14 gap-y-[72px] md:grid-cols-2 md:gap-y-[80px] lg:gap-x-16 lg:gap-y-[88px]">
  {works.map((work, index) => (
    <FadeIn key={work.id} delay={(index % 2) * 120}>
      <WorkCard
        image={work.image}
        title={work.title}
        description={work.description}
        detailLink={work.detailLink}
        siteUrl={work.siteUrl}
        github={work.github}
      />
    </FadeIn>
  ))}
</div>
      </div>
    </section>
  );
}