import WorkCard from "@/components/ui/WorksCard";
import works from "@/data/works";

export default function Works() {
  return (
    <section
      id="works"
      className="bg-[#F5F3EE] px-5 py-24 text-[#3F3A37] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-[12px] tracking-[0.22em] text-[#6F6661]">
            制作物
          </p>

          <div className="flex items-end gap-5">
            <h2 className="text-[32px] font-normal tracking-[0.08em] text-[#2F2F2F] md:text-[44px]">
              Works
            </h2>
            <span className="mb-4 h-px flex-1 bg-[#DCD8D0]" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 md:gap-y-24 lg:gap-x-16">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              image={work.image}
              title={work.title}
              subtitle={work.subtitle}
              description={work.description}
              detailLink={work.detailLink}
              siteUrl={work.siteUrl}
              github={work.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}