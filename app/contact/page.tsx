import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "CONTACT US",
  description:
    "원업(ONE UP)에 문의하기 — 브랜드 협업, 크리에이터 섭외, 커머스 및 글로벌 진출 상담",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "CONTACT US — ONE UP (원업)",
    description:
      "브랜드 협업, 크리에이터 섭외, 커머스 및 글로벌 진출에 대해 문의해 주세요.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader
        brandLabel="JAY HOUSE"
        brandAriaLabel="ONE UP 홈"
        inner
      />
      <main>
        <section className="contact section contact-page">
          <div className="contact-copy reveal">
            <div className="section-tag">CONTACT US</div>
            <h1 className="display">
              LET&apos;S CREATE
              <br />
              <span>SOMETHING</span>
              <br />
              GREAT.
            </h1>
            <p>
              브랜드 협업, 크리에이터 섭외, 커머스 및 글로벌 진출에 대해
              문의해 주세요.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
      <SiteFooter
        brandLabel="JAY HOUSE"
        copyright="© 2026 JAY HOUSE."
      />
    </>
  );
}
