export function Icon({ name, className = '' }) {
  const icons = {
    star: (
      <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
    ),
    checkBox: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
    store: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" />
      </>
    ),
    warning: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </>
    ),
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    ),
    upload: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M17 8l-5-5-5 5" />
        <path d="M12 3v12" />
      </>
    ),
    x: (
      <>
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v3a4 4 0 01-8 0V4z" />
        <path d="M6 6H4a2 2 0 000 4h2M18 6h2a2 2 0 010 4h-2" />
        <path d="M12 11v4M9 20h6M10 15h4" />
      </>
    ),
    link: (
      <>
        <path d="M10 14l4-4" />
        <path d="M7 17a3 3 0 010-4l2-2a3 3 0 014 4l-1 1" />
        <path d="M17 7a3 3 0 010 4l-2 2a3 3 0 01-4-4l1-1" />
      </>
    )
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
