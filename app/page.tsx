import type { Metadata } from "next";
import HomeBanner from "@/components/HomeBanner";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "ONE UP — Creator Business",
  description:
    "크리에이터의 영향력을 브랜드와 비즈니스로 확장하는 ONE UP",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader brandLabel="JAY HOUSE" brandAriaLabel="ONE UP 홈" />
      <HomeBanner />
    </>
  );
}
