"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/with-us", label: "WITH US" },
  { href: "/contact", label: "CONTACT US" },
] as const;

type SiteHeaderProps = {
  brandLabel?: string;
  brandAriaLabel?: string;
  inner?: boolean;
};

export default function SiteHeader({
  brandLabel = "ONE UP",
  brandAriaLabel = "ONE UP 홈",
  inner = false,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`site-header${inner ? " inner-header" : ""}${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}
    >
      <Link className="brand" href="/" aria-label={brandAriaLabel}>
        {brandLabel.includes("JAY") ? (
          <>
            JAY<span>HOUSE</span>
          </>
        ) : (
          brandLabel
        )}
      </Link>
      <button
        className="menu-btn"
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i />
        <i />
      </button>
      <nav aria-label="주 메뉴">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
