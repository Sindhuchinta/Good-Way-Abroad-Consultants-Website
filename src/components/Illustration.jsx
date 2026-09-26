const TONES = [
  ["#0d5d6e", "#13778c"], // teal
  ["#3f1c6b", "#5b2a94"], // purple
  ["#12213e", "#24365a"], // navy
  ["#b9791a", "#f2a93b"], // gold
];

// Simple, consistent line-icon set drawn around a 200,150 center on a 400x300 canvas.
const ICONS = {
  globe: (
    <g stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
      <circle cx="200" cy="150" r="62" />
      <ellipse cx="200" cy="150" rx="62" ry="24" />
      <ellipse cx="200" cy="150" rx="24" ry="62" />
      <line x1="138" y1="150" x2="262" y2="150" />
    </g>
  ),
  plane: (
    <g fill="#fff" opacity="0.95">
      <path d="M270 118 L142 156 L182 172 L196 214 L214 180 L232 192 L270 118 Z" />
      <path d="M196 214 L214 180 L200 176 Z" opacity="0.5" />
    </g>
  ),
  cap: (
    <g fill="#fff" opacity="0.95">
      <path d="M200 108 L280 140 L200 172 L120 140 Z" />
      <path d="M148 152 L148 182 C148 194 172 204 200 204 C228 204 252 194 252 182 L252 152 L200 172 Z" opacity="0.85" />
      <circle cx="272" cy="146" r="4" />
      <line x1="272" y1="146" x2="272" y2="182" stroke="#fff" strokeWidth="3" />
    </g>
  ),
  counsel: (
    <g stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
      <circle cx="156" cy="126" r="22" />
      <path d="M114 196 C114 164 132 152 156 152 C180 152 198 164 198 196" />
      <circle cx="246" cy="132" r="18" />
      <path d="M212 194 C212 168 227 158 246 158 C265 158 280 168 280 194" />
    </g>
  ),
  documents: (
    <g opacity="0.95">
      <rect x="146" y="98" width="86" height="112" rx="6" fill="#fff" opacity="0.9" />
      <rect x="170" y="122" width="110" height="112" rx="6" fill="none" stroke="#fff" strokeWidth="5" />
      <line x1="188" y1="150" x2="262" y2="150" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <line x1="188" y1="170" x2="262" y2="170" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <line x1="188" y1="190" x2="240" y2="190" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    </g>
  ),
  piggybank: (
    <g opacity="0.95">
      <ellipse cx="192" cy="160" rx="56" ry="38" fill="none" stroke="#fff" strokeWidth="5" />
      <ellipse cx="246" cy="164" rx="15" ry="11" fill="none" stroke="#fff" strokeWidth="5" />
      <circle cx="252" cy="161" r="2" fill="#fff" />
      <circle cx="252" cy="168" r="2" fill="#fff" />
      <path d="M158 128 L170 122 L172 138 Z" fill="#fff" />
      <path d="M138 152 C130 152 126 162 132 168" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <line x1="170" y1="196" x2="170" y2="210" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <line x1="196" y1="198" x2="196" y2="212" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <line x1="222" y1="196" x2="222" y2="210" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <line x1="182" y1="124" x2="200" y2="124" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    </g>
  ),
  suitcase: (
    <g opacity="0.95">
      <rect x="150" y="140" width="100" height="72" rx="8" fill="#fff" />
      <rect x="178" y="122" width="44" height="24" rx="4" fill="none" stroke="#fff" strokeWidth="5" />
      <line x1="150" y1="168" x2="250" y2="168" stroke="#0d1a30" strokeWidth="4" opacity="0.35" />
      <rect x="192" y="168" width="16" height="10" rx="2" fill="#0d1a30" opacity="0.35" />
    </g>
  ),
  building: (
    <g opacity="0.95">
      <rect x="140" y="110" width="60" height="104" fill="#fff" opacity="0.92" />
      <rect x="205" y="80" width="66" height="134" fill="#fff" />
      {[0,1,2,3].map((row) => (
        <g key={row}>
          <rect x="152" y={124 + row * 20} width="12" height="12" fill="#12213e" opacity="0.5" />
          <rect x="172" y={124 + row * 20} width="12" height="12" fill="#12213e" opacity="0.5" />
        </g>
      ))}
      {[0,1,2,3,4].map((row) => (
        <g key={row}>
          <rect x="217" y={96 + row * 20} width="12" height="12" fill="#12213e" opacity="0.4" />
          <rect x="237" y={96 + row * 20} width="12" height="12" fill="#12213e" opacity="0.4" />
          <rect x="257" y={96 + row * 20} width="12" height="12" fill="#12213e" opacity="0.4" />
        </g>
      ))}
    </g>
  ),
  book: (
    <g opacity="0.95">
      <path d="M200 118 C186 108 158 104 140 108 L140 196 C158 192 186 196 200 206 Z" fill="#fff" opacity="0.92" />
      <path d="M200 118 C214 108 242 104 260 108 L260 196 C242 192 214 196 200 206 Z" fill="#fff" />
      <line x1="200" y1="118" x2="200" y2="206" stroke="#0d1a30" strokeWidth="3" opacity="0.25" />
    </g>
  ),
};

function Illustration({ type = "globe", tone = 0, className, id }) {
  const [c1, c2] = TONES[tone % TONES.length];
  const gradId = `illus-${type}-${id ?? tone}`;
  return (
    <svg viewBox="0 0 400 300" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${type} illustration`}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${gradId})`} />
      <path
        d="M10,240 C110,275 260,150 390,55"
        stroke="#f2a93b"
        strokeWidth="7"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <circle cx="365" cy="45" r="5" fill="#f2a93b" opacity="0.7" />
      {ICONS[type] || ICONS.globe}
    </svg>
  );
}

export default Illustration;
