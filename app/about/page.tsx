import type { Metadata } from "next";
import Link from "next/link";
import AboutEffects from "@/components/AboutEffects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "ABOUT",
  description: "크리에이터와 브랜드의 다음 단계를 만드는 ONE UP",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader inner />
      <AboutEffects />
      <main>
        <section className="about-v2-hero">
          <div className="about-hero-copy reveal">
            <span className="mini-label">ONE STEP HIGHER</span>
            <h1>
              ABOUT
              <br />
              <em>ONE UP</em>
            </h1>
            <p>
              크리에이터와 브랜드를 연결해
              <br />
              새로운 가능성을 만드는 크리에이티브 비즈니스 그룹
            </p>
            <a href="#identity" className="outline-btn">
              함께하는 가치 <b>↓</b>
            </a>
          </div>
          <div className="about-hero-visual" data-parallax="0.06">
            <div className="visual-image" />
            <span>CREATOR · BRAND · CONTENT</span>
          </div>
          <div className="hero-scroll">
            SCROLL <i />
          </div>
        </section>

        <section className="about-intro about-shell reveal">
          <span className="mini-label">ONE STEP HIGHER</span>
          <h2>
            원업은 크리에이터의 가능성을 발견하고,
            <br />
            콘텐츠와 비즈니스의 <em>다음 단계</em>를 함께 설계합니다.
          </h2>
        </section>

        <section className="identity about-shell" id="identity">
          <div className="about-title reveal">
            <span>01</span>
            <h2>Our Identity</h2>
            <p>우리가 일하는 이유와 지향하는 방향</p>
          </div>
          <div className="identity-grid">
            <article className="image-card reveal">
              <div className="card-photo identity-one" data-parallax="0.05" />
              <div className="card-gradient" />
              <div className="card-copy">
                <b>Mission</b>
                <p>
                  크리에이터의 성장을
                  <br />
                  브랜드의 가치로 연결합니다.
                </p>
              </div>
            </article>
            <article className="image-card reveal">
              <div className="card-photo identity-two" data-parallax="-0.04" />
              <div className="card-gradient" />
              <div className="card-copy">
                <b>Vision</b>
                <p>
                  콘텐츠 생태계의 연결점에서
                  <br />
                  새로운 기회를 만듭니다.
                </p>
              </div>
            </article>
            <article className="image-card reveal">
              <div className="card-photo identity-three" data-parallax="0.07" />
              <div className="card-gradient" />
              <div className="card-copy">
                <b>Values</b>
                <p>
                  신뢰 · 투명 · 협업 · 도전
                  <br />
                  모두가 함께 더 높이.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="journey about-shell">
          <div className="about-title reveal">
            <span>02</span>
            <h2>One Up Journey</h2>
            <p>한 단계씩 쌓아 올린 성장의 기록</p>
          </div>
          <div className="timeline">
            <article className="reveal">
              <time>2024</time>
              <i />
              <div>
                <b>06</b>
                <p>원업 설립 · 크리에이터 매니지먼트 시작</p>
                <b>11</b>
                <p>ONE STEP 브랜드 프로젝트 론칭</p>
              </div>
            </article>
            <article className="reveal">
              <time>2025</time>
              <i />
              <div>
                <b>02</b>
                <p>브랜드 파트너십 전담 조직 확대</p>
                <b>08</b>
                <p>데이터 기반 캠페인 솔루션 구축</p>
                <b>10</b>
                <p>자체 IP 프로젝트 ON STAGE 론칭</p>
              </div>
            </article>
            <article className="reveal">
              <time>2026</time>
              <i />
              <div>
                <b>01</b>
                <p>글로벌 시장 진출 준비</p>
                <b>07</b>
                <p>크리에이터 교육 및 커뮤니티 강화</p>
              </div>
            </article>
          </div>
        </section>

        <section className="strengths about-shell">
          <div className="about-title centered reveal">
            <span>03</span>
            <h2>Built for Creators</h2>
            <p>
              기획부터 제작, 성과까지 크리에이터가 성장할 수 있는 환경을
              만듭니다.
            </p>
          </div>
          <div className="strength-grid">
            <article className="reveal">
              <strong>01</strong>
              <h3>전문 매니지먼트</h3>
              <p>1:1 전담 매니저와 맞춤형 성장 전략</p>
            </article>
            <article className="reveal">
              <strong>02</strong>
              <h3>데이터 &amp; 인사이트</h3>
              <p>콘텐츠 성과 분석과 전략 인사이트</p>
            </article>
            <article className="reveal">
              <strong>03</strong>
              <h3>투명한 정산</h3>
              <p>정확하고 투명한 정산 시스템</p>
            </article>
          </div>
        </section>

        <section className="business about-shell">
          <div className="about-title reveal">
            <span>04</span>
            <h2>Business Areas</h2>
            <p>영향력을 지속 가능한 비즈니스로 확장합니다.</p>
          </div>
          <div className="business-grid">
            <article className="business-card large reveal">
              <div className="biz-photo biz-one" data-parallax="0.05" />
              <div className="card-gradient" />
              <div className="biz-copy">
                <span>01</span>
                <h3>크리에이터 매니지먼트</h3>
                <ul>
                  <li>전속·파트너 크리에이터 관리</li>
                  <li>콘텐츠 기획 및 성장 컨설팅</li>
                  <li>교육 및 네트워킹 프로그램</li>
                </ul>
              </div>
            </article>
            <article className="business-card reveal">
              <div className="biz-photo biz-two" data-parallax="-0.05" />
              <div className="card-gradient" />
              <div className="biz-copy">
                <span>02</span>
                <h3>콘텐츠 제작</h3>
                <ul>
                  <li>숏폼·유튜브·브랜디드 콘텐츠</li>
                  <li>전문 스튜디오 제작</li>
                </ul>
              </div>
            </article>
            <article className="business-card reveal">
              <div className="biz-photo biz-three" data-parallax="0.06" />
              <div className="card-gradient" />
              <div className="biz-copy">
                <span>03</span>
                <h3>브랜드 캠페인</h3>
                <ul>
                  <li>인플루언서 캠페인 기획</li>
                  <li>성과 분석 및 리포팅</li>
                </ul>
              </div>
            </article>
            <article className="business-card reveal">
              <div className="biz-photo biz-four" data-parallax="-0.04" />
              <div className="card-gradient" />
              <div className="biz-copy">
                <span>04</span>
                <h3>IP &amp; 커머스</h3>
                <ul>
                  <li>자체 IP 기획 및 운영</li>
                  <li>브랜드 공동 개발</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="performance">
          <div className="performance-bg" data-parallax="0.08" />
          <div className="performance-shade" />
          <div className="performance-inner about-shell">
            <div className="about-title centered reveal">
              <span>05</span>
              <h2>Our Performance</h2>
              <p>
                크리에이터와 브랜드의 성장을 데이터와 결과로 증명합니다.
              </p>
            </div>
            <div className="number-grid">
              <article>
                <strong data-count="48">0</strong>
                <span>CREATORS</span>
              </article>
              <article>
                <strong data-count="320">0</strong>
                <span>CAMPAIGNS</span>
              </article>
              <article>
                <strong data-count="1250">0</strong>
                <span>CONTENTS</span>
              </article>
              <article>
                <strong data-count="76">0</strong>
                <span>PARTNERS</span>
              </article>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <p>READY FOR THE NEXT STEP?</p>
          <h2>
            ONE UP과
            <br />
            함께 다음 단계로.
          </h2>
          <Link href="/contact">
            문의하기 <b>→</b>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
