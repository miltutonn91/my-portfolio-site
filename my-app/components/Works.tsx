import WorkCard from "@/components/ui/WorksCard";
import works from "@/data/works";

export default function Works() {
  return (
    <section
      id="works"
      className="
        relative overflow-hidden
        bg-[#F5F3EE] px-5 py-[72px] text-[#3F3A37]
        md:px-10 md:py-[88px]
      "
    >
      <div className="mx-auto max-w-[1120px]">
  <div className="mb-10 md:mb-12">
    <p className="item-heading mb-3">
      制作物
    </p>

    <div className="flex items-end gap-5">
      <h2 className="section-heading">
        Works
      </h2>

      <span className="mb-3 h-px flex-1 bg-[#DCD8D0]" />
    </div>
  </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-[72px] md:grid-cols-2 md:gap-y-[80px] lg:gap-x-16 lg:gap-y-[88px]">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              image={work.image}
              title={work.title}
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