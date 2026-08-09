import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import BodyClass from "@/components/BodyClass";
import Cursor from "@/components/Cursor";
import RevealObserver from "@/components/RevealObserver";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ONE UP (원업) — Creator Business",
    template: "%s — ONE UP (원업)",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: `${siteConfig.name} (${siteConfig.shortName})`,
    title: "ONE UP (원업) — Creator Business",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "ONE UP (원업) — Creator Business",
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      alternateName: [...siteConfig.alternateNames],
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: siteConfig.description,
      foundingDate: "2024",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.name,
      alternateName: [...siteConfig.alternateNames],
      url: siteUrl,
      description: siteConfig.description,
      inLanguage: "ko-KR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body
        style={{
          fontFamily:
            'var(--font-inter), var(--font-noto), Inter, "Noto Sans KR", sans-serif',
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BodyClass />
        <Cursor />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
