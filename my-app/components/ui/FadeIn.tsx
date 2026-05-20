"use client";

import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        window.setTimeout(() => {
          setIsVisible(true);
        }, delay);

        observer.unobserve(target);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${className} `}
    >
      {children}
    </div>
  );
}
