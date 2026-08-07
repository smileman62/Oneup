"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor) return;

    const onMove = (e: PointerEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const grow = () => {
      cursor.style.width = "34px";
      cursor.style.height = "34px";
    };
    const shrink = () => {
      cursor.style.width = "14px";
      cursor.style.height = "14px";
    };

    const bindTargets = () => {
      document.querySelectorAll("a,button,.creator-card").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };

    window.addEventListener("pointermove", onMove);
    bindTargets();

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.querySelectorAll("a,button,.creator-card").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return <div className="cursor" ref={ref} aria-hidden="true" />;
}
