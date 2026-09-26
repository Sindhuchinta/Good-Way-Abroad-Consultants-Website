// Simplified but recognizable national flag SVGs, viewBox 0 0 60 40 (3:2 ratio).
// National flags are public domain / not subject to copyright.

const flagPaths = {
  usa: (
    <g>
      <rect width="60" height="40" fill="#B22234" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} y={i * 6.15 + 3.08} width="60" height="3.08" fill="#fff" />
      ))}
      <rect width="26" height="21.5" fill="#3C3B6E" />
    </g>
  ),
  gb: (
    <g>
      <rect width="60" height="40" fill="#00247D" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#CF142B" strokeWidth="3" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#CF142B" strokeWidth="7" />
    </g>
  ),
  ca: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <rect width="15" height="40" fill="#FF0000" />
      <rect x="45" width="15" height="40" fill="#FF0000" />
      <path
        d="M30 8 L32 16 L38 13 L35.5 20 L41 22 L35 25 L37 32 L30 28 L23 32 L25 25 L19 22 L24.5 20 L22 13 L28 16 Z"
        fill="#FF0000"
      />
    </g>
  ),
  au: (
    <g>
      <rect width="60" height="40" fill="#00247D" />
      <g transform="scale(0.5)">
        <rect width="60" height="40" fill="#00247D" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#CF142B" strokeWidth="3" />
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
        <path d="M30,0 V40 M0,20 H60" stroke="#CF142B" strokeWidth="7" />
      </g>
      {[
        [46, 10],
        [50, 20],
        [45, 29],
        [38, 33],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" />
      ))}
      <circle cx="30" cy="34" r="1.1" fill="#fff" />
    </g>
  ),
  eu: (
    <g>
      <rect width="60" height="40" fill="#003399" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const cx = 30 + Math.cos(angle) * 11;
        const cy = 20 + Math.sin(angle) * 11;
        return <circle key={i} cx={cx} cy={cy} r="1.4" fill="#FFCC00" />;
      })}
    </g>
  ),
  nz: (
    <g>
      <rect width="60" height="40" fill="#00247D" />
      <g transform="scale(0.5)">
        <rect width="60" height="40" fill="#00247D" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#CF142B" strokeWidth="3" />
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
        <path d="M30,0 V40 M0,20 H60" stroke="#CF142B" strokeWidth="7" />
      </g>
      {[
        [44, 9],
        [50, 17],
        [46, 27],
        [39, 32],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.9" fill="#fff" stroke="#CF142B" strokeWidth="1" />
      ))}
    </g>
  ),
  fr: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </g>
  ),
  ie: (
    <g>
      <rect width="60" height="40" fill="#fff" />
      <rect width="20" height="40" fill="#169B62" />
      <rect x="40" width="20" height="40" fill="#FF883E" />
    </g>
  ),
};

function Flag({ code, className }) {
  return (
    <svg viewBox="0 0 60 40" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${code} flag`}>
      {flagPaths[code] || flagPaths.eu}
    </svg>
  );
}

export default Flag;
