import works from "@/data/works";
import Contact from "@/components/Contact";
import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/ui/Footer";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import WorksCard from "./components/WorksCard";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#5F5555]">
      <HamburgerMenu isWorksPage />

      <section
        id="works"
        className="relative overflow-hidden bg-[#FBFAF7] px-5 py-[72px] md:px-10 md:py-[88px]"
      >
        {/* FVとつながる淡いぼかし */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* 右上：淡いブルー */}
          <div className="absolute top-[-16%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#D5EAEC]/48 blur-[115px]" />

          {/* 左下：淡いオレンジベージュ */}
          <div className="absolute bottom-[-20%] left-[-10%] h-[580px] w-[580px] rounded-full bg-[#F1D4B8]/42 blur-[130px]" />

          {/* 中央左：ほんのりピンク */}
          <div className="absolute top-[28%] left-[22%] h-[380px] w-[380px] rounded-full bg-[#EFD4D8]/34 blur-[110px]" />

          {/* 右下：淡い生成りグリーン */}
          <div className="absolute right-[8%] bottom-[8%] h-[340px] w-[340px] rounded-full bg-[#E8F2D7]/28 blur-[105px]" />

          {/* 全体をなじませる白 */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <div className="relative z-[1] mx-auto max-w-[1120px]">
          <div className="mb-16 text-center md:mb-20">
            <h2 className="section-heading">Works</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-14 gap-y-[72px] md:grid-cols-2 md:gap-y-[80px] lg:gap-x-16 lg:gap-y-[88px]">
            {works.map((work, index) => (
              <FadeIn key={work.id} delay={(index % 2) * 120}>
                <WorksCard
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

      <ScrollTopButton />

      <Contact />

      <Footer />
    </main>
  );
}