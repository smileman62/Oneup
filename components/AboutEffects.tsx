"use client";

import { useEffect } from "react";

export default function AboutEffects() {
  useEffect(() => {
    const motionItems = [
      ...document.querySelectorAll<HTMLElement>("[data-parallax]"),
    ];
    let ticking = false;

    const updateParallax = () => {
      const viewHeight = window.innerHeight;
      motionItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < viewHeight) {
          const speed = Number(item.dataset.parallax || 0);
          const offset = (rect.top - viewHeight / 2) * speed;
          item.style.transform = `translate3d(0,${offset}px,0) scale(1.06)`;
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    const counterObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting || el.dataset.done) return;
          el.dataset.done = "true";
          const target = Number(el.dataset.count);
          const start = performance.now();
          const duration = 1500;
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased).toLocaleString();
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }),
      { threshold: 0.65 },
    );

    document
      .querySelectorAll("[data-count]")
      .forEach((counter) => counterObserver.observe(counter));

    const cards = [
      ...document.querySelectorAll<HTMLElement>(".image-card,.business-card"),
    ];
    const onMove = (e: PointerEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    };
    const onLeave = (e: PointerEvent) => {
      (e.currentTarget as HTMLElement).style.transform = "";
    };
    cards.forEach((card) => {
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      counterObserver.disconnect();
      cards.forEach((card) => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
    };
  }, []);

  return null;
}
