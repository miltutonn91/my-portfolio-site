"use client";

import { useMemo, useState } from "react";
import WorkCard from "@/components/ui/WorksCard";
import works from "@/data/works";

const filters = ["All", "Coding", "Design", "Direction"] as const;

type Filter = (typeof filters)[number];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    return works.filter((work) => work.categories?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section
      id="works"
      className="bg-[#F5F3EE] px-5 py-24 text-[#3F3A37] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-[12px] tracking-[0.22em] text-[#6F6661]">
            制作物
          </p>

          <div className="flex items-end gap-5">
            <h1 className="font-aboreto text-[40px] font-normal leading-none tracking-[0.12em] text-[#5F5555] md:text-[56px]">
              Works
            </h1>
            <span className="mb-3 h-px flex-1 bg-[#DCD8D0]" />
          </div>
        </div>

        <div className="mb-16 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`
                cursor-pointer rounded-full border px-5 py-2.5
                text-[12px] tracking-[0.12em]
                transition duration-300
                ${
                  activeFilter === filter
                    ? "border-[#5F5555] bg-[#5F5555] text-[#FFFDF8]"
                    : "border-[#D8D0C7] bg-[#FFFDFC]/70 text-[#5F5555] hover:border-[#8B7D73] hover:bg-[#FFFDFC]"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-24 md:grid-cols-2 lg:gap-x-16 lg:gap-y-28">
          {filteredWorks.map((work) => (
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