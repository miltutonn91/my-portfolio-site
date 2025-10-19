"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function FvSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-400">
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
    centerMode: false,
    centerPadding: "0px",
  };

  const slides = [
    { id: 1, img: "/images/fv/fv-slide-1.jpg", alt: "Work 1" },
    { id: 2, img: "/images/fv/fv-slide-2.jpg", alt: "Work 2" },
    { id: 3, img: "/images/fv/fv-slide-3.jpg", alt: "Work 3" },
    { id: 4, img: "/images/fv/fv-slide-4.jpg", alt: "Work 4" },
  ];

  return (
    <div className="w-full h-full min-h-[340px] relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id} className="w-full h-full">
            <div className="relative w-full h-full min-h-[340px]">
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-slider,
        .slick-list,
        .slick-track,
        .slick-slide,
        .slick-slide > div {
          width: 100% !important;
          height: 100% !important;
          min-height: 340px !important;
        }
        .slick-list {
          margin: 0 !important;
          padding: 0 !important;
        }
        .slick-slide {
          display: block !important;
        }
        .slick-dots {
          bottom: 10px;
        }
      `}</style>
    </div>
  );
}
