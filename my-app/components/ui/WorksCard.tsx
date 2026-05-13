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
          className="absolute inset-0 z-10 rounded-[16px]"
        />
      )}

      <div className="relative aspect-[1.28/1] overflow-hidden rounded-[16px] bg-[#FFFDFC] p-8 transition duration-500 group-hover:shadow-[0_18px_40px_rgba(80,70,60,0.08)] md:p-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.025]"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>

      <div className="relative mt-4">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] tracking-[0.08em] text-[#5F5F5F]">
          {subtitle && (
            <span className="rounded-full bg-[#EFEAE2] px-3 py-1 text-[10px] tracking-[0.08em] text-[#6F6661]">
              {subtitle}
            </span>
          )}

          <span>{description}</span>
        </div>

        <h3 className="text-[14px] font-normal leading-[1.7] tracking-[0.04em] text-[#2F2F2F] md:text-[15px]">
          {title}
        </h3>

        {/* 個別リンクはカード全体リンクより前面に出す */}
        <div className="relative z-20 mt-4 flex flex-wrap items-center gap-4 text-[11px] tracking-[0.08em] text-[#444]">
          {detailLink && (
            <Link
              href={detailLink}
              className="inline-flex items-center gap-1 border-b border-transparent pb-1 transition hover:border-[#444]"
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
              className="inline-flex items-center gap-1 border-b border-transparent pb-1 transition hover:border-[#444]"
            >
              サイトを見る
              <ExternalLink size={11} strokeWidth={1.5} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border-b border-transparent pb-1 transition hover:border-[#444]"
            >
              GitHub
              <ExternalLink size={11} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}