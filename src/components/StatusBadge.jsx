export function StatusBadge({ tone, children }) {
  return <span className={`status-badge status-${tone}`}>{children}</span>;
}
