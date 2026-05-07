export function BrandMark({ brand }) {
  const normalized = String(brand || '').toLowerCase();

  if (normalized === 'team') {
    return <span className="brand-chip brand-chip-icon">♙</span>;
  }

  return <span className={`brand-chip brand-chip-${normalized}`}>{brand}</span>;
}
