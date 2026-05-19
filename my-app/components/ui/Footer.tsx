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
          className="text-[13px] hover:opacity-60 md:text-[15px]"
        >
          Top
        </Link>

        <Link
          href="/works"
          onClick={(e) => handlePageLinkClick(e, "/works")}
          className="text-[13px] hover:opacity-60 md:text-[15px]"
        >
          Works
        </Link>

        <Link
          href="/about"
          onClick={(e) => handlePageLinkClick(e, "/about")}
          className="text-[13px] hover:opacity-60 md:text-[15px]"
        >
          About
        </Link>
      </nav>

      <p className="text-[10.5px] tracking-[0.04em] text-gray-400">
        © 2026 MISA UMEDA
      </p>
    </footer>
  );
}