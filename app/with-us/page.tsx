import type { Metadata } from "next";
import Link from "next/link";
import PartnersLogoGrid from "@/components/PartnersLogoGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "WITH US",
  description:
    "원업(ONE UP)과 함께하는 브랜드 파트너를 소개합니다. 국내외 브랜드와 크리에이터를 연결합니다.",
  alternates: {
    canonical: "/with-us",
  },
  openGraph: {
    title: "WITH US — ONE UP (원업)",
    description: "ONE UP과 함께 성장하는 브랜드 파트너",
    url: "/with-us",
  },
};

export default function WithUsPage() {
  return (
    <>
      <SiteHeader inner />
      <main>
        <section className="partners-hero">
          <div className="partners-hero-copy reveal">
            <span className="mini-label">BRANDS WITH ONE UP</span>
            <h1>
              함께 성장하는 파트너
              <br />
              <em>Our Partners.</em>
            </h1>
            <p>
              ONE UP은 국내외 다양한 브랜드와 크리에이터를 연결해
              <br />
              오래 기억되는 콘텐츠와 새로운 비즈니스 기회를 만듭니다.
            </p>
            <div className="partners-wordmark">ONE UP</div>
          </div>
        </section>

        <section className="partners-gallery" aria-labelledby="partners-title">
          <div className="partners-gallery-head reveal">
            <span>OUR PARTNERS</span>
            <h2 id="partners-title">
              BRANDS
              <br />
              WITH US.
            </h2>
            <p>BEAUTY · FASHION · LIFESTYLE</p>
          </div>
          <PartnersLogoGrid />
        </section>

        <section className="partners-cta reveal">
          <p>BUILD THE NEXT IMPACT</p>
          <h2>
            ONE UP과
            <br />
            함께 다음 단계로.
          </h2>
          <Link href="/contact">
            문의하기 <span>→</span>
          </Link>
        </section>
      </main>
      <SiteFooter copyright="© 2026 ONE UP." />
    </>
  );
}
