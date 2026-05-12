"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slick本体をクライアント限定で読み込み
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function FvSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "6%",
  };

  const slides = [
    {
      id: 1,
      img: "/images/fv/fv-slide-1.jpg",
      alt: "Branding Site",
      link: "https://miltutonn91.github.io/branding_site/",
    },
    {
      id: 2,
      img: "/images/fv/fv-slide-2.jpg",
      alt: "EC Site",
      link: "https://miltutonn91.github.io/EC-site/",
    },
    {
      id: 3,
      img: "/images/fv/fv-slide-3.jpg",
      alt: "Sugutabe",
      link: "https://miltutonn91.github.io/sugutabe/",
    },
    {
      id: 4,
      img: "/images/fv/fv-slide-4.jpg",
      alt: "Farm Branding Site",
      link: "https://miltutonn91.github.io/farm-branding-site/",
    },
  ];

  return (
    <div className="w-full max-w-[300px] lg:max-w-[360px] xl:max-w-[420px]">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id} className="px-2 lg:px-3">
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <div
                className="relative w-full overflow-hidden rounded-sm"
                style={{ aspectRatio: "266/344" }}
              >
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 300px, (max-width: 1280px) 360px, 420px"
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>

      {/* slick ドットのカスタム */}
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 14px;
          color: #bfa7a0;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #726e6e;
          font-size: 16px;
        }
        .slick-dots {
          bottom: -25px;
        }
      `}</style>
    </div>
  );
}