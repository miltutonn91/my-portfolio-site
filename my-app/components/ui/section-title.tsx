// components/section-title.tsx

"use client";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 text-left md:mb-16">
      <div className="relative inline-block">
        <span className="absolute -left-[36px] top-1/2 h-[1px] w-[30px] -translate-y-1/2 bg-[#A28686] md:-left-[55px] md:w-[50px]" />

        <h2
          className="section-heading font-normal"
          style={{ fontFamily: "'Marcellus', serif" }}
        >
          {title}
        </h2>
      </div>

      <p
        className="mt-[6px] ml-[2px] text-[0.8125rem] font-normal tracking-[0.04em] text-[#A28686] md:text-[1rem]"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}