import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import BodyClass from "@/components/BodyClass";
import Cursor from "@/components/Cursor";
import RevealObserver from "@/components/RevealObserver";
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

export const metadata: Metadata = {
  title: {
    default: "ONE UP — Creator Business",
    template: "%s — ONE UP",
  },
  description:
    "크리에이터의 영향력을 브랜드와 비즈니스로 확장하는 ONE UP",
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
        <BodyClass />
        <Cursor />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
