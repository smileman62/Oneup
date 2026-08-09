export const siteConfig = {
  name: "ONE UP",
  shortName: "원업",
  legalName: "ONE UP",
  alternateNames: ["ONE UP", "원업", "oneup", "OneUp", "ONE:UP", "원 업"],
  description:
    "원업(ONE UP)은 크리에이터의 영향력을 브랜드와 비즈니스로 확장하는 크리에이티브 비즈니스 그룹입니다. 크리에이터 매니지먼트, 브랜드 협업, 숏폼·릴스 캠페인을 진행합니다.",
  tagline: "크리에이터의 영향력을 브랜드와 비즈니스로 확장하는 ONE UP",
  locale: "ko_KR",
  keywords: [
    "원업",
    "oneup",
    "ONE UP",
    "OneUp",
    "ONE:UP",
    "크리에이터",
    "크리에이터 매니지먼트",
    "브랜드 협업",
    "인플루언서",
    "숏폼",
    "릴스",
    "크리에이터 비즈니스",
  ],
} as const;

export const productionSiteUrl = "https://oneup-drab.vercel.app";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return productionSiteUrl;
}
