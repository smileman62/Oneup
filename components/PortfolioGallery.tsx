"use client";

import Image from "next/image";
import { useState } from "react";

const FILTERS = ["전체", "메이크업", "스킨케어", "헤어·향"] as const;

const CARDS = [
  {
    src: "/assets/portfolio-person-01.jpg",
    alt: "새봄결 웜 블러셔 발색 릴스",
    copy: "웜톤 블러셔\n한 번에 찾기",
    category: "메이크업 · 릴스",
    brand: "새봄결",
    desc: "웜 블러셔 발색 비교",
    views: "조회 18.4만",
  },
  {
    src: "/assets/portfolio-person-02.jpg",
    alt: "느린빛 촉촉 립틴트 릴스",
    copy: "촉촉 틴트\n세 가지 발색",
    category: "메이크업 · 릴스",
    brand: "느린빛",
    desc: "수분 립틴트 컬러 비교",
    views: "조회 12.7만",
  },
  {
    src: "/assets/portfolio-person-03.jpg",
    alt: "온리프 진정 세럼 후기 릴스",
    copy: "민감한 날엔\n이 루틴",
    category: "스킨케어 · 릴스",
    brand: "온리프",
    desc: "진정 세럼 일주일 후기",
    views: "조회 21.3만",
  },
  {
    src: "/assets/portfolio-person-04.jpg",
    alt: "담소화 쿠션 밀착 테스트 릴스",
    copy: "쿠션 하나로\n출근 준비 끝",
    category: "메이크업 · 릴스",
    brand: "담소화",
    desc: "쿠션 밀착력 테스트",
    views: "조회 9.8만",
  },
  {
    src: "/assets/portfolio-person-05.jpg",
    alt: "여린결 선크림 모닝 루틴 릴스",
    copy: "밀림 없는\n아침 선크림",
    category: "스킨케어 · 릴스",
    brand: "여린결",
    desc: "무기자차 모닝 루틴",
    views: "조회 15.1만",
  },
  {
    src: "/assets/portfolio-person-06.jpg",
    alt: "무화 데일리 아이 팔레트 릴스",
    copy: "매일 쓰는\n음영 조합",
    category: "메이크업 · 릴스",
    brand: "무화",
    desc: "데일리 아이 팔레트",
    views: "조회 11.6만",
  },
  {
    src: "/assets/portfolio-person-07.jpg",
    alt: "소요 수분 마스크 릴스",
    copy: "메마른 밤\n10분 수분 충전",
    category: "스킨케어 · 릴스",
    brand: "소요",
    desc: "수분 마스크 나이트 케어",
    views: "조회 8.9만",
  },
  {
    src: "/assets/portfolio-person-08.jpg",
    alt: "포근 헤어 에센스 릴스",
    copy: "푸석한 머릿결\n이렇게 달라져요",
    category: "헤어·향 · 릴스",
    brand: "포근",
    desc: "헤어 에센스 사용 전후",
    views: "조회 17.2만",
  },
  {
    src: "/assets/portfolio-person-09.jpg",
    alt: "결담 클렌징 밤 릴스",
    copy: "진한 메이크업도\n한 번에",
    category: "스킨케어 · 릴스",
    brand: "결담",
    desc: "클렌징 밤 세정력 실험",
    views: "조회 13.5만",
  },
  {
    src: "/assets/portfolio-person-10.jpg",
    alt: "하루결 토너 패드 릴스",
    copy: "붓기 있는 아침\n패드 한 장",
    category: "스킨케어 · 릴스",
    brand: "하루결",
    desc: "토너 패드 모닝 루틴",
    views: "조회 10.4만",
  },
  {
    src: "/assets/portfolio-person-11.jpg",
    alt: "누아담 향수 레이어링 릴스",
    copy: "둘이 같이 쓰는\n살냄새 향수",
    category: "헤어·향 · 릴스",
    brand: "누아담",
    desc: "퍼퓸 레이어링 데이트",
    views: "조회 19.7만",
  },
  {
    src: "/assets/portfolio-person-12.jpg",
    alt: "오브온 비건 핸드크림 릴스",
    copy: "끈적임 없는\n보송한 보습",
    category: "스킨케어 · 릴스",
    brand: "오브온",
    desc: "비건 핸드크림 텍스처",
    views: "조회 7.6만",
  },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("전체");

  return (
    <>
      <div className="pf-filter reveal" aria-label="포트폴리오 카테고리">
        {FILTERS.map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : undefined}
            type="button"
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="pf-card-grid">
        {CARDS.map((card) => {
          const show = filter === "전체" || card.category.includes(filter);
          return (
            <article
              key={card.brand}
              className={`pf-card reveal${show ? "" : " is-filtered-out"}`}
            >
              <div className="pf-card-image">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={480}
                  height={854}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <span className="pf-reel-copy">
                  {card.copy.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
                <i className="pf-play">▶</i>
              </div>
              <div className="pf-card-meta">
                <span>{card.category}</span>
                <h3>{card.brand}</h3>
                <p>{card.desc}</p>
                <b>{card.views}</b>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
