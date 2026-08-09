import type { Metadata } from "next";
import HomeBanner from "@/components/HomeBanner";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    absolute: "ONE UP (원업) — Creator Business",
  },
  description:
    "원업(ONE UP, oneup)은 크리에이터의 영향력을 브랜드와 비즈니스로 확장하는 크리에이티브 비즈니스 그룹입니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ONE UP (원업) — Creator Business",
    description:
      "원업(ONE UP) — 크리에이터와 브랜드를 연결하는 크리에이티브 비즈니스",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader brandLabel="JAY HOUSE" brandAriaLabel="ONE UP 홈" />
      <HomeBanner />
    </>
  );
}
