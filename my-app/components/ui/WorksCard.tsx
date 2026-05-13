import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type WorkCardProps = {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  detailLink?: string;
  siteUrl?: string;
  github?: string;
};

export default function WorkCard({
  image,
  title,
  subtitle,
  description,
  detailLink,
  siteUrl,
  github,
}: WorkCardProps) {
  return (
    <article className="group relative cursor-pointer">
      {/* カード全体クリック用：実サイトへ */}
      {siteUrl && (
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title}のサイトを見る`}
          className="absolute inset-0 z-10"
        />
      )}

      <div className="relative aspect-[1.28/1] overflow-hidden bg-[#FFFDFC] p-6 transition duration-500 group-hover:shadow-[0_18px_40px_rgba(80,70,60,0.08)] md:p-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.025] md:p-8"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>

      <div className="relative mt-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] tracking-[0.08em] text-[#5F5F5F]">
          {subtitle && (
            <span className="bg-[#EFEAE2] px-3.5 py-1.5 text-[12px] tracking-[0.08em] text-[#6F6661]">
              {subtitle}
            </span>
          )}

          <span className="text-[12px] tracking-[0.1em] text-[#6F6661]">
            {description}
          </span>
        </div>

        <h3 className="text-[16px] font-normal leading-[1.75] tracking-[0.04em] text-[#2F2F2F] md:text-[17px]">
          {title}
        </h3>

        {/* 個別リンクはカード全体リンクより前面に出す */}
        <div className="relative z-20 mt-5 flex flex-wrap items-center gap-5 text-[12px] tracking-[0.08em] text-[#444]">
          {detailLink && (
            <Link
              href={detailLink}
              className="inline-flex cursor-pointer items-center gap-1 border-b border-transparent pb-1 transition hover:border-[#444]"
            >
              詳しくみる
              <span>→</span>
            </Link>
          )}

          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1 border-b border-transparent pb-1 transition hover:border-[#444]"
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
              className="inline-flex cursor-pointer items-center gap-1 border-b border-transparent pb-1 transition hover:border-[#444]"
            >
              GitHub
              <ExternalLink size={12} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}