"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHover(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHover(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* 通常時の小さい丸 */}
      <div
        className="
          pointer-events-none fixed left-0 top-0 z-[9999]
          hidden h-2.5 w-2.5 rounded-full bg-[#4F4646]
          transition-transform duration-75
          md:block
        "
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      />

      {/* hover時の大きい丸 */}
      <div
        className="
          pointer-events-none fixed left-0 top-0 z-[9998]
          hidden rounded-full bg-[#9ABCB7]/40
          transition-[width,height,transform,opacity] duration-300 ease-out
          md:block
        "
        style={{
          width: isHover ? 44 : 0,
          height: isHover ? 44 : 0,
          opacity: isHover ? 1 : 0,
          transform: `translate(${position.x - (isHover ? 33 : 0)}px, ${
            position.y - (isHover ? 33 : 0)
          }px)`,
        }}
      />
    </>
  );
}