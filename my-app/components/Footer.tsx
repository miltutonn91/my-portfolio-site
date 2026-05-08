// components/Footer.tsx

"use client";

import Link from "next/link";

export default function Footer() {
  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // TOPページにいる時は、その場で上へスクロール
    if (window.location.pathname === "/") {
      const topElement = document.getElementById("top");

      if (topElement) {
        topElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      return;
    }

    // Aboutページなど別ページにいる時は、TOPページの#topへ移動
    window.location.href = "/#top";
  };

  return (
    <footer className="px-5 py-12 text-center">
      <nav className="mb-6 flex justify-center gap-8">
        <Link
          href="/#top"
          onClick={handleTopClick}
          className="global-nav-text hover:opacity-60"
        >
          Top
        </Link>

        <Link href="/#works" className="global-nav-text hover:opacity-60">
          Works
        </Link>

        <Link href="/about#top" className="global-nav-text hover:opacity-60">
          About
        </Link>
      </nav>

      <p className="text-[0.75rem] tracking-[0.04em] text-gray-400">
        © 2026 MISA UMEDA
      </p>
    </footer>
  );
}