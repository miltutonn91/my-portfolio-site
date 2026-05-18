// components/ui/Footer.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handlePageLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <footer className="px-5 py-12 text-center">
      <nav className="mb-6 flex justify-center gap-8">
        <Link
          href="/"
          onClick={(e) => handlePageLinkClick(e, "/")}
          className="global-nav-text hover:opacity-60"
        >
          Top
        </Link>

        <Link
          href="/works"
          onClick={(e) => handlePageLinkClick(e, "/works")}
          className="global-nav-text hover:opacity-60"
        >
          Works
        </Link>

        <Link
          href="/about"
          onClick={(e) => handlePageLinkClick(e, "/about")}
          className="global-nav-text hover:opacity-60"
        >
          About
        </Link>
      </nav>

      <p className="text-[0.75rem] tracking-[0.04em] text-gray-400">
        © 2026 MISA UMEDA
      </p>
    </footer>
  );
}