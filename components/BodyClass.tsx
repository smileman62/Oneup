"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PAGE_BODY_CLASS: Record<string, string> = {
  "/": "home-page",
  "/about": "oneup-about",
  "/with-us": "partners-page",
  "/portfolio": "portfolio-page-v2",
};

export default function BodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const nextClass = PAGE_BODY_CLASS[pathname] ?? "";
    document.body.className = nextClass;
    return () => {
      document.body.className = "";
    };
  }, [pathname]);

  return null;
}
