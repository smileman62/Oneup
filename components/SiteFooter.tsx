import Link from "next/link";

type SiteFooterProps = {
  brandLabel?: string;
  brandAriaLabel?: string;
  copyright?: string;
};

export default function SiteFooter({
  brandLabel = "ONE UP",
  brandAriaLabel = "ONE UP 홈",
  copyright = "© 2026 ONE UP. ALL RIGHTS RESERVED.",
}: SiteFooterProps) {
  return (
    <footer>
      <Link className="brand" href="/" aria-label={brandAriaLabel}>
        {brandLabel.includes("JAY") ? (
          <>
            JAY<span>HOUSE</span>
          </>
        ) : (
          brandLabel
        )}
      </Link>
      <p>Creator · Brand · Content · Global</p>
      <p>{copyright}</p>
    </footer>
  );
}
