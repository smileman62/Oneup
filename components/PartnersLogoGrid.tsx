"use client";

const PARTNERS = [
  { className: "logo-mark logo-1", label: "AESTURA" },
  { className: "logo-mark logo-2", label: "TORRIDEN" },
  { className: "logo-mark logo-3", label: "ROUND LAB" },
  { className: "logo-mark logo-4", label: "medicube" },
  { className: "logo-mark logo-5", label: "Anua" },
  { className: "logo-mark logo-6", label: "Beauty of Joseon" },
  { className: "logo-mark logo-7", label: "Dr.G" },
  { className: "logo-mark logo-8", label: "COSRX" },
  { className: "logo-mark logo-9", label: "TIRTIR" },
  { className: "logo-mark logo-10", label: "JUNG SAEM MOOL" },
  { className: "logo-mark fashion-logo fashion-1", label: "MUSINSA STANDARD" },
  { className: "logo-mark fashion-logo fashion-2", label: "ADERERROR" },
  { className: "logo-mark fashion-logo fashion-3", label: "thisisneverthat" },
  { className: "logo-mark fashion-logo fashion-4", label: "WOOYOUNGMI" },
  { className: "logo-mark fashion-logo fashion-5", label: "JUUN.J" },
  { className: "logo-mark fashion-logo fashion-6", label: "MATIN KIM" },
  { className: "logo-mark fashion-logo fashion-7", label: "MARDI MERCREDI" },
  { className: "logo-mark fashion-logo fashion-8", label: "ANDERSSON BELL" },
  { className: "logo-mark fashion-logo fashion-9", label: "COVERNAT" },
  { className: "logo-mark fashion-logo fashion-10", label: "SPAO" },
  {
    className: "logo-mark fashion-logo fashion-11",
    label: "GENTLE MONSTER",
    wide: true,
  },
  { className: "logo-mark beauty-logo beauty-1", label: "SULWHASOO" },
  { className: "logo-mark beauty-logo beauty-2", label: "LANEIGE" },
  { className: "logo-mark beauty-logo beauty-3", label: "innisfree" },
  { className: "logo-mark beauty-logo beauty-4", label: "HERA" },
  { className: "logo-mark beauty-logo beauty-5", label: "IOPE" },
  { className: "logo-mark beauty-logo beauty-6", label: "ETUDE" },
  { className: "logo-mark beauty-logo beauty-7", label: "THE FACE SHOP" },
  { className: "logo-mark beauty-logo beauty-8", label: "MISSHA" },
  { className: "logo-mark beauty-logo beauty-9", label: "CLIO" },
  { className: "logo-mark beauty-logo beauty-10", label: "rom&nd" },
];

const ROW_SIZE = 7;

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

export default function PartnersLogoGrid() {
  const rows = chunk(PARTNERS, ROW_SIZE);

  return (
    <div className="partner-logo-grid reveal">
      {rows.map((group, rowIndex) => (
        <div
          key={rowIndex}
          className={`partner-roll-row${rowIndex % 2 ? " reverse" : ""}`}
        >
          <div className="partner-row-track">
            {Array.from({ length: 4 }, (_, repeat) =>
              group.map((partner) => (
                <div
                  key={`${partner.label}-${repeat}`}
                  className={`partner-logo-card${partner.wide ? " partner-logo-card-wide" : ""}`}
                  aria-hidden={repeat > 0 ? true : undefined}
                >
                  <div
                    className={partner.className}
                    role={repeat === 0 ? "img" : undefined}
                    aria-label={repeat === 0 ? partner.label : undefined}
                  />
                </div>
              )),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
