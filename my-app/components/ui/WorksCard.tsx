import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type WorkCardProps = {
  image: string;
  title: string;
  description: string;
  detailLink?: string;
  siteUrl?: string;
  github?: string;
};

export default function WorkCard({
  image,
  title,
  description,
  detailLink,
  siteUrl,
  github,
}: WorkCardProps) {
  const ImageContent = (
    <div className="relative aspect-[1.28/1] overflow-hidden bg-[#FFFDFC] p-6 transition duration-500 group-hover:shadow-[0_18px_40px_rgba(80,70,60,0.08)] md:p-8">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.025] md:p-8"
        sizes="(max-width: 768px) 100vw, 480px"
      />
    </div>
  );

  const externalButtonClass = `
  className="
  inline-flex cursor-pointer items-center gap-1.5 rounded-full
  border border-[#D9B89F] bg-[#F8EFE7] px-3.5 py-1.5
  text-[#5A3E31]
  shadow-[0_4px_10px_rgba(150,95,65,0.05)]
  transition duration-300
  hover:-translate-y-[1px]
  hover:border-[#CFA17F]
  hover:bg-[#F1DFD1]
  hover:text-[#443027]
  hover:shadow-[0_7px_16px_rgba(150,95,65,0.11)]
"
`;

  return (
    <article className="group relative">
      {detailLink ? (
        <Link
          href={detailLink}
          aria-label={`${title}の詳細を見る`}
          className="block cursor-pointer"
        >
          {ImageContent}
        </Link>
      ) : (
        ImageContent
      )}

      <div className="relative mt-5">
        <div className="mb-3">
          <span className="text-[12px] tracking-[0.1em] text-[#7A6A61]">
            {description}
          </span>
        </div>

        <h3 className="text-[16px] font-normal leading-[1.75] tracking-[0.04em] text-[#2F2F2F] md:text-[17px]">
          {title}
        </h3>

       <div className="mt-5 flex flex-col gap-4">
  {/* 外部リンク：左下にまとめる */}
  <div className="flex flex-wrap items-center gap-3 text-[12px] tracking-[0.08em]">
    {siteUrl && (
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={externalButtonClass}
      >
        サイトを見る
        <ExternalLink size={12} strokeWidth={1.5} />
      </a>
    )}

    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={externalButtonClass}
      >
        GitHub
        <ExternalLink size={12} strokeWidth={1.5} />
      </a>
    )}
  </div>

  {/* 詳細リンク：右下の主導線 */}
  {detailLink && (
    <div className="flex justify-end">
      <Link
        href={detailLink}
        className="
          group/detail inline-flex cursor-pointer items-center gap-1.5
          pb-1 text-[12px] tracking-[0.12em] text-[#4F3A30]
          transition duration-300
          hover:text-[#9F5C3C]
        "
      >
        <span className="relative">
          詳しくみる
          <span
            className="
              absolute -bottom-1 left-0 h-px w-full
              origin-left scale-x-100 bg-[#C9825D]/70
              transition-transform duration-300
              group-hover/detail:scale-x-110
            "
          />
        </span>

        <span className="transition duration-300 group-hover/detail:translate-x-1">
          →
        </span>
      </Link>
    </div>
  )}
</div> 
      </div>
    </article>
  );
}