'use client';

import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from '@/components/ui/HamburgerMenu';

const slideItems = [
  {
    id: '01',
    title: 'Webデザイン',
    img: '/images/fv/fv-slide-1.jpg',
    href: 'https://miltutonn91.github.io/branding_site/',
  },
  {
    id: '02',
    title: 'ECサイト',
    img: '/images/fv/fv-slide-2.jpg',
    href: 'https://miltutonn91.github.io/EC-site/',
  },
  {
    id: '03',
    title: '制作実績',
    img: '/images/fv/fv-slide-3.jpg',
    href: 'https://miltutonn91.github.io/sugutabe/',
  },
  {
    id: '04',
    title: '農園サイト',
    img: '/images/fv/fv-slide-4.jpg',
    href: 'https://miltutonn91.github.io/farm-branding-site/',
  },
];

export default function FV() {
  return (
    <section
      id="top"
      className="relative bg-white px-2 py-2 text-white md:px-3 md:py-3"
    >
      <HamburgerMenu />

      <div className="grid grid-cols-1 gap-2 md:gap-3 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
        {/* 左：メインビジュアル */}
        <div className="relative flex h-[120vh] items-center justify-center rounded-[6px] bg-[#FDFBF8] p-3 md:h-[110vh] md:p-5 lg:h-[108vh] xl:h-[112vh]">
          <div className="relative h-full w-full overflow-hidden rounded-[6px]">
            <Image
              src="/images/fv/fv-main-sakura.jpg"
              alt="FVの画像"
              fill
              priority
              className="scale-[1.03] object-cover object-[center_74%]"
              sizes="(max-width: 1024px) 100vw, calc(100vw - 400px)"
            />

            {/* 写真を少し読みやすくする薄いグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-black/8 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/8" />

            {/* 左上ロゴ */}
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 md:left-8 md:top-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-[18px] leading-none">
                梅
              </div>
              <p className="font-serif text-[18px] tracking-[0.14em] text-white md:text-[22px]">
                うめだみさ
              </p>
            </div>

            {/* 右上 日付風 */}
            <div className="absolute right-8 top-8 z-10 hidden items-center gap-5 font-serif text-[15px] tracking-[0.08em] text-white/90 md:flex">
              <span>Portfolio</span>
              <span className="h-6 w-px bg-white/60" />
              <span>2026</span>
            </div>

            {/* 縦書きタイトル */}
            <div className="absolute left-[9%] top-1/2 z-10 flex -translate-y-1/2 items-start gap-5 md:left-[14%] md:gap-7">
              <p
                className="
                  font-hina text-[clamp(1.5rem,2.8vw,2.6rem)]
                  font-normal leading-[1.35] tracking-[0.14em]
                  [text-shadow:0_2px_18px_rgba(0,0,0,0.22)]
                  [writing-mode:vertical-rl]
                "
              >
                うめだみさの
              </p>

              <p
                className="
                  mt-22 font-hina text-[clamp(1.5rem,2.8vw,2.6rem)]
                  font-normal leading-[1.35] tracking-[0.14em]
                  [text-shadow:0_2px_18px_rgba(0,0,0,0.22)]
                  [writing-mode:vertical-rl]
                "
              >
                ポートフォリオ
              </p>

              <p
                className="
                  mt-2 hidden font-serif text-[16px]
                  tracking-[0.18em] text-white/80
                  [writing-mode:vertical-rl]
                  md:block
                "
              >
                UMEDA MISA PORTFOLIO
              </p>
            </div>

            {/* 左下スクロール */}
            <div className="absolute bottom-8 left-6 z-10 hidden flex-col items-center gap-4 text-white/80 md:flex">
              <p className="font-serif text-[12px] tracking-[0.18em]">
                SCROLL
              </p>
              <span className="h-16 w-px bg-white/70" />
            </div>
          </div>
        </div>

        {/* 右：流れるWorksカード */}
<div className="relative min-h-[230px] overflow-hidden lg:h-[108vh] xl:h-[112vh] lg:min-h-0">
  <div className="works-flow flex w-max flex-row gap-3 lg:w-auto lg:flex-col">
    {[...slideItems, ...slideItems].map((item, index) => (
      <Link
        key={`${item.id}-${index}`}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.title}のサイトを見る`}
        className="
          group relative h-[180px] w-[72vw] shrink-0 cursor-pointer
          overflow-hidden rounded-[6px] bg-white
          md:w-[46vw]
          lg:h-[27vh] lg:w-auto
          xl:h-[34vh]
        "
      >
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 72vw, (max-width: 1024px) 46vw, 380px"
        />

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
      </Link>
    ))}
  </div>

  {/* スマホ：左右フェード / PC：上下フェード */}
  <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-10 bg-gradient-to-r from-white to-transparent lg:hidden" />
  <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-12 bg-gradient-to-l from-white to-transparent lg:hidden" />

  <div className="pointer-events-none absolute left-0 right-0 top-0 hidden h-16 bg-gradient-to-b from-white to-transparent lg:block" />
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-20 bg-gradient-to-t from-white to-transparent lg:block" />
</div>
      </div>
    </section>
  );
}