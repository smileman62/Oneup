import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "../styles/portfolio-v2.css";

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description:
    "ONE UP이 브랜드와 함께 만든 숏폼·릴스 캠페인 포트폴리오입니다.",
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader inner />
      <main>
        <section className="pf-hero">
          <div className="pf-hero-copy">
            <span>BRAND CONTENT · SHORT FORM</span>
            <h1>
              작지만
              <br />
              <em>선명한 영향력.</em>
            </h1>
            <p>
              브랜드의 이야기를 가장 자연스러운
              <br />
              릴스 콘텐츠로 완성합니다.
            </p>
          </div>
          <div className="pf-hero-marquee" aria-hidden="true">
            <div className="pf-hero-track">
              <div className="pf-hero-shot" />
              <div className="pf-hero-shot" />
            </div>
          </div>
          <div className="pf-scroll">
            SCROLL TO EXPLORE <i />
          </div>
        </section>

        <section className="pf-intro reveal">
          <span>OUR PORTFOLIO</span>
          <h2>
            광고보다 자연스럽게,
            <br />
            브랜드는 더 기억되게.
          </h2>
          <p>
            제품을 실제로 써보는 순간부터 솔직한 발색과 사용 후기까지.
            <br />
            사람들이 끝까지 보게 되는 세로형 콘텐츠를 만듭니다.
          </p>
        </section>

        <section className="pf-gallery-section">
          <div className="pf-gallery-head reveal">
            <span>SELECTED REELS</span>
            <h2>
              브랜드와 만든
              <br />
              릴스 캠페인.
            </h2>
            <p>
              국내 인디 뷰티 브랜드의 제품과 매력을
              <br />
              크리에이터의 일상 안에 자연스럽게 담았습니다.
              <small>
                아래 브랜드와 성과는 화면 구성을 위한 가상 예시입니다.
              </small>
            </p>
          </div>
          <PortfolioGallery />
        </section>

        <section className="pf-cta reveal">
          <span>NEXT PROJECT</span>
          <h2>
            다음에 기억될
            <br />
            브랜드가 되어보세요.
          </h2>
          <Link href="/contact">
            프로젝트 문의 <b>→</b>
          </Link>
        </section>
      </main>
      <SiteFooter copyright="© 2026 ONE UP." />
    </>
  );
}
