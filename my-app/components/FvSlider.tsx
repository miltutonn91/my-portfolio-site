"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// slick本体をクライアント限定で読み込み
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function FvSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[clamp(200px,19vw,266px)] h-[344px] flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

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
    centerPadding: "12%",
  };

  const slides = [
    { id: 1, img: "/images/fv/fv-slide-1.jpg", alt: "Work 1" },
    { id: 2, img: "/images/fv/fv-slide-2.jpg", alt: "Work 2" },
    { id: 3, img: "/images/fv/fv-slide-3.jpg", alt: "Work 3" },
    { id: 4, img: "/images/fv/fv-slide-4.jpg", alt: "Work 4" },
  ];

  return (
    <div className="w-[clamp(200px,19vw,266px)]">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id} className="px-3">
            <div
              className="relative w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: "266/344" }}
            >
            <Image
  src={s.img}
  alt={s.alt}
  fill
  className="object-cover"
  sizes="(max-width:1200px) 23vw, 310px"
/>

            </div>
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