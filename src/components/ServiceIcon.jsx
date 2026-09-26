const ICONS = {
  counsel: (
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M13.5 20c0-3 2-5 4.5-5s4.5 2 4.5 5" />
    </g>
  ),
  book: (
    <g fill="currentColor">
      <path d="M12 6.5c-1.6-1.1-4-1.6-6.5-1.2v12.5c2.5-0.4 4.9 0.1 6.5 1.2Z" opacity="0.9" />
      <path d="M12 6.5c1.6-1.1 4-1.6 6.5-1.2v12.5c-2.5-0.4-4.9 0.1-6.5 1.2Z" />
    </g>
  ),
  documents: (
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="10" height="14" rx="1.5" opacity="0.5" />
      <rect x="8" y="6" width="10" height="14" rx="1.5" />
      <path d="M10.5 10h5M10.5 13h5M10.5 16h3" />
    </g>
  ),
  piggybank: (
    <g>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.14" />
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        ₹
      </text>
    </g>
  ),
  passport: (
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M8.5 17c0.6-2 1.9-3 3.5-3s2.9 1 3.5 3" />
    </g>
  ),
  interview: (
    <g stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6.5h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9l-3 2.5V14.5H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" opacity="0.55" />
      <path d="M10 9.5h10a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-1v2.3l-2.8-2.3H10a2 2 0 0 1-2-2V15" />
    </g>
  ),
  suitcase: (
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="9" width="14" height="10" rx="1.5" />
      <path d="M9 9V7a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 7v2" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </g>
  ),
  globe: (
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <ellipse cx="12" cy="12" rx="8" ry="3.4" />
      <ellipse cx="12" cy="12" rx="3.4" ry="8" />
    </g>
  ),
};

function ServiceIcon({ type = "globe", className }) {
  return (
    <span className={`service-icon ${className || ""}`}>
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        {ICONS[type] || ICONS.globe}
      </svg>
    </span>
  );
}

export default ServiceIcon;
