/**
 * Primary (full-color) vector marks on a white tile — correct for dark surrounding UI.
 * `public/brands/`: Lenovo + Acer from Wikimedia (TM applies). Norton composite — prefer Gen Digital newsroom for masters.
 * Lenovo: https://brandworld.lenovo.com/visual-identity/logo/ · Acer: https://infocenter.acer.com/us/downloads/branding.php
 */
const BASE = import.meta.env.BASE_URL;

const BRAND_LOGO_FILES = {
  acer: 'acer.svg',
  lenovo: 'lenovo.svg',
  norton: 'norton.svg'
};

function brandLogoUrl(brandKey) {
  const file = BRAND_LOGO_FILES[brandKey];
  if (!file) return null;
  return `${BASE}brands/${file}`;
}

export function BrandMark({ brand }) {
  const raw = String(brand || '');
  const normalized = raw.toLowerCase();

  if (normalized === 'team') {
    return <span className="brand-chip brand-chip-icon">♙</span>;
  }

  const logoSrc = brandLogoUrl(normalized);
  if (logoSrc) {
    return (
      <span className={`brand-chip brand-chip-logo brand-chip-${normalized}`} aria-hidden="true">
        <img src={logoSrc} alt="" className="brand-chip-img" loading="lazy" decoding="async" />
      </span>
    );
  }

  return <span className={`brand-chip brand-chip-${normalized}`}>{raw}</span>;
}
