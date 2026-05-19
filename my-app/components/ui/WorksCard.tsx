import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from '@/components/ui/button';

type WorkCardProps = {
  image: string;
  title: string;
  description: string;
  detailLink: string;
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
    <div className=" bg-[#FFFDFC] p-3 shadow-[0_14px_35px_rgba(120,90,75,0.10)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_55px_rgba(120,90,75,0.16)] md:p-4">
  <div className="relative aspect-[1.28/1] overflow-hidden rounded-[22px]">
    <Image
      src={image}
      alt={title}
      fill
      className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025] md:p-6"
      sizes="(max-width: 768px) 100vw, 480px"
    />
  </div>
</div>
  );

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
          <span className="text-[12px] font-medium tracking-[0.1em] text-[#9ABCB7] md:text-[14px]">
            {description}
          </span>
        </div>

        <Link
  href={detailLink}
  className="group/title inline-block cursor-pointer"
>
  <h3 className="item-heading">
    <span className="relative">
      {title}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#A28686]/60 transition-transform duration-300 group-hover/title:scale-x-100" />
    </span>
  </h3>
</Link>
<div className="mt-5 flex flex-col gap-4">
  {/* 外部リンク：左下にまとめる */}
  <div className="flex flex-wrap items-center gap-6">
    {siteUrl && (
      <Button asChild variant="works" size="sm">
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          サイトを見る
          <ExternalLink size={12} strokeWidth={1.5} />
        </a>
      </Button>
    )}

    {github && (
      <Button asChild variant="works" size="sm">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <ExternalLink size={12} strokeWidth={1.5} />
        </a>
      </Button>
    )}
  </div>

  {/* 詳細リンク：右下の主導線 */}
  {detailLink && (
    <div className="flex justify-end">
      <Link
        href={detailLink}
        className="
          group/detail inline-flex cursor-pointer items-center gap-1.5
          pb-1 text-[12px] tracking-[0.12em] text-[#5F5555]
          transition duration-300
          hover:text-[#A28686]
        "
      >
        <span className="relative">
          詳しくみる
          <span
            className="
              absolute -bottom-1 left-0 h-px w-full
              origin-left scale-x-100 bg-[#A28686]/60
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