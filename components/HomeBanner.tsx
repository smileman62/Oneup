"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const LOGO_ROW_ONE = [
  { className: "logo-mark logo-1", label: "AESTURA" },
  { className: "logo-mark logo-2", label: "TORRIDEN" },
  { className: "logo-mark logo-3", label: "ROUND LAB" },
  { className: "logo-mark logo-4", label: "medicube" },
  { className: "logo-mark logo-5", label: "Anua" },
  { className: "logo-mark fashion-logo fashion-1", label: "MUSINSA STANDARD" },
  { className: "logo-mark fashion-logo fashion-2", label: "ADERERROR" },
  { className: "logo-mark fashion-logo fashion-3", label: "thisisneverthat" },
  { className: "logo-mark fashion-logo fashion-4", label: "WOOYOUNGMI" },
  { className: "logo-mark fashion-logo fashion-5", label: "JUUN.J" },
  { className: "logo-mark fashion-logo fashion-6", label: "MATIN KIM" },
  { className: "logo-mark fashion-logo fashion-7", label: "MARDI MERCREDI" },
  { className: "logo-mark fashion-logo fashion-8", label: "ANDERSSON BELL" },
  { className: "logo-mark fashion-logo fashion-9", label: "COVERNAT" },
  { className: "logo-mark fashion-logo fashion-10", label: "SPAO" },
  { className: "logo-mark fashion-logo fashion-11", label: "GENTLE MONSTER" },
];

const LOGO_ROW_TWO = [
  { className: "logo-mark logo-6", label: "Beauty of Joseon" },
  { className: "logo-mark logo-7", label: "Dr.G" },
  { className: "logo-mark logo-8", label: "COSRX" },
  { className: "logo-mark logo-9", label: "TIRTIR" },
  { className: "logo-mark logo-10", label: "JUNG SAEM MOOL" },
  { className: "logo-mark beauty-logo beauty-1", label: "SULWHASOO" },
  { className: "logo-mark beauty-logo beauty-2", label: "LANEIGE" },
  { className: "logo-mark beauty-logo beauty-3", label: "innisfree" },
  { className: "logo-mark beauty-logo beauty-4", label: "HERA" },
  { className: "logo-mark beauty-logo beauty-5", label: "IOPE" },
  { className: "logo-mark beauty-logo beauty-6", label: "ETUDE" },
  { className: "logo-mark beauty-logo beauty-7", label: "THE FACE SHOP" },
  { className: "logo-mark beauty-logo beauty-8", label: "MISSHA" },
  { className: "logo-mark beauty-logo beauty-9", label: "CLIO" },
  { className: "logo-mark beauty-logo beauty-10", label: "rom&nd" },
];

function LogoTrack({
  items,
  className,
}: {
  items: { className: string; label: string }[];
  className: string;
}) {
  return (
    <div className={`logo-track ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className={item.className}
          role="img"
          aria-label={item.label}
        />
      ))}
      {items.map((item) => (
        <div
          key={`${item.label}-clone`}
          className={item.className}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function HomeBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const locked = useRef(false);
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef(0);
  const slideCount = 5;

  const showSlide = useCallback((next: number) => {
    if (locked.current) return;
    const index = ((next % slideCount) + slideCount) % slideCount;
    locked.current = true;
    currentRef.current = index;
    setCurrent(index);
    if (autoTimer.current) clearTimeout(autoTimer.current);
    autoTimer.current = setTimeout(() => showSlide(index + 1), 6500);
    setTimeout(() => {
      locked.current = false;
    }, 1050);
  }, []);

  useEffect(() => {
    autoTimer.current = setTimeout(() => showSlide(1), 6500);
    return () => {
      if (autoTimer.current) clearTimeout(autoTimer.current);
    };
  }, [showSlide]);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 12) {
        showSlide(currentRef.current + (e.deltaY > 0 ? 1 : -1));
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const distance = touchStart.current - e.changedTouches[0].clientY;
      if (Math.abs(distance) > 45) {
        showSlide(currentRef.current + (distance > 0 ? 1 : -1));
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        showSlide(currentRef.current + 1);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        showSlide(currentRef.current - 1);
      }
    };

    banner.addEventListener("wheel", onWheel, { passive: false });
    banner.addEventListener("touchstart", onTouchStart, { passive: true });
    banner.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      banner.removeEventListener("wheel", onWheel);
      banner.removeEventListener("touchstart", onTouchStart);
      banner.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, [showSlide]);

  return (
    <main className="vertical-banner" aria-label="JAY HOUSE 주요 배너" ref={bannerRef}>
      <div
        className="banner-track"
        style={{ transform: `translateY(-${current * 100}svh)` }}
      >
        <section
          className={`hero banner-slide${current === 0 ? " is-active" : ""}`}
          data-slide="0"
        >
          <div className="hero-bg banner-bg-one" />
          <div className="noise" />
          <div className="hero-copy banner-primary">
            <h1>
              CREATOR
              <br />
              <em>BRAND</em>
            </h1>
          </div>
          <div className="hero-index">01 / 05</div>
        </section>

        <section
          className={`hero banner-slide${current === 1 ? " is-active" : ""}`}
          data-slide="1"
        >
          <div className="hero-bg banner-bg-two" />
          <div className="noise" />
          <div className="hero-copy statement-copy">
            <span className="eyebrow">JAY HOUSE CREATIVE BUSINESS</span>
            <h1>Beyond Ads.</h1>
            <h2>
              We Build
              <br />
              Brand eXperiences
              <br />
              That Matter.
            </h2>
            <p>
              광고를 넘어서 의미 있는
              <br />
              브랜드 경험을 만듭니다.
            </p>
            <Link className="arrow-link" href="/about">
              ABOUT US <b>↗</b>
            </Link>
          </div>
          <div className="hero-index">02 / 05</div>
        </section>

        <section
          className={`hero banner-slide${current === 2 ? " is-active" : ""}`}
          data-slide="3"
        >
          <div className="portfolio-banner-bg" />
          <div className="noise" />
          <div className="showcase-wrap portfolio-showcase">
            <h2>PORTFOLIO.</h2>
            <div className="portfolio-marquee">
              <div className="project-strip">
                <article>
                  <div className="project-image project-one" />
                </article>
                <article>
                  <div className="project-image project-two" />
                </article>
                <article>
                  <div className="project-image project-three" />
                </article>
                <article>
                  <div className="project-image project-four" />
                </article>
                <article aria-hidden="true">
                  <div className="project-image project-one" />
                </article>
                <article aria-hidden="true">
                  <div className="project-image project-two" />
                </article>
                <article aria-hidden="true">
                  <div className="project-image project-three" />
                </article>
                <article aria-hidden="true">
                  <div className="project-image project-four" />
                </article>
              </div>
            </div>
          </div>
          <div className="hero-index">03 / 05</div>
        </section>

        <section
          className={`hero banner-slide${current === 3 ? " is-active" : ""}`}
          data-slide="4"
        >
          <div className="showcase-wrap partner-showcase">
            <h2>WITH US.</h2>
            <div className="logo-marquee">
              <LogoTrack items={LOGO_ROW_ONE} className="logo-row-one" />
              <LogoTrack items={LOGO_ROW_TWO} className="logo-row-two" />
            </div>
          </div>
          <div className="hero-index">04 / 05</div>
        </section>

        <section
          className={`hero banner-slide${current === 4 ? " is-active" : ""}`}
          data-slide="5"
        >
          <div className="showcase-wrap contact-showcase">
            <span className="eyebrow">LET&apos;S WORK TOGETHER</span>
            <h2>CONTACT US.</h2>
            <p>크리에이터 및 브랜드 제휴 문의는 언제든지 환영합니다.</p>
            <Link className="arrow-link" href="/contact">
              문의하기 <b>↗</b>
            </Link>
          </div>
          <div className="hero-index">05 / 05</div>
        </section>
      </div>

      <div className="banner-dots" role="tablist" aria-label="배너 선택">
        {Array.from({ length: slideCount }, (_, i) => (
          <button
            key={i}
            className={current === i ? "active" : undefined}
            type="button"
            aria-label={`${i + 1}번째 배너`}
            aria-selected={current === i}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>
      <div className="scroll-mark">
        SCROLL TO EXPLORE <span />
      </div>
    </main>
  );
}
