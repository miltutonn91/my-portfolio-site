"use client";

import { useEffect, useRef, useState } from "react";

type BlurInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function BlurIn({
  children,
  className = "",
  delay = 0,
}: BlurInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const timer = window.setTimeout(() => {
          setIsVisible(true);
        }, delay);

        observer.unobserve(target);

        return () => window.clearTimeout(timer);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible
          ? "blur-0 scale-100 opacity-100"
          : "scale-[0.96] opacity-0 blur-[8px]"
      } ${className} `}
    >
      {children}
    </div>
  );
}
