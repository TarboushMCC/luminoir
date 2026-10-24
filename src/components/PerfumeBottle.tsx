'use client';

interface PerfumeBottleProps {
  name?: string;
  variant?: 'hero' | 'card' | 'spotlight';
  className?: string;
}

export default function PerfumeBottle({
  name = 'NOCTIS',
  variant = 'hero',
  className = '',
}: PerfumeBottleProps) {
  const sizes = {
    hero: { width: 220, height: 520, scale: 1 },
    card: { width: 120, height: 280, scale: 0.55 },
    spotlight: { width: 260, height: 600, scale: 1.18 },
  };

  const { width, height } = sizes[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`LUMINOIR ${name} perfume bottle`}
    >
      <defs>
        {/* Main glass gradient */}
        <linearGradient id={`glass-${name}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#080808" />
          <stop offset="15%" stopColor="#141414" />
          <stop offset="35%" stopColor="#222222" />
          <stop offset="50%" stopColor="#2E2E2E" />
          <stop offset="65%" stopColor="#1E1E1E" />
          <stop offset="85%" stopColor="#101010" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>

        {/* Gold cap gradient */}
        <linearGradient id={`cap-${name}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A3820" />
          <stop offset="20%" stopColor="#9A7A45" />
          <stop offset="45%" stopColor="#E8D5A8" />
          <stop offset="55%" stopColor="#F0DCA0" />
          <stop offset="75%" stopColor="#C9A96E" />
          <stop offset="90%" stopColor="#8B6A35" />
          <stop offset="100%" stopColor="#4A3820" />
        </linearGradient>

        {/* Cap side gradient (vertical) */}
        <linearGradient id={`cap-v-${name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </linearGradient>

        {/* Bottle highlight */}
        <linearGradient id={`highlight-${name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="40%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Inner liquid glow */}
        <radialGradient id={`liquid-${name}`} cx="35%" cy="40%" r="45%">
          <stop offset="0%" stopColor="rgba(201,169,110,0.07)" />
          <stop offset="60%" stopColor="rgba(201,169,110,0.03)" />
          <stop offset="100%" stopColor="rgba(201,169,110,0)" />
        </radialGradient>

        {/* Reflection on floor */}
        <radialGradient id={`floor-${name}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,169,110,0.12)" />
          <stop offset="100%" stopColor="rgba(201,169,110,0)" />
        </radialGradient>

        {/* Edge glow filter */}
        <filter id={`glow-${name}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Outer glow */}
        <filter id={`outer-glow-${name}`} x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur" />
          <feColorMatrix in="blur" values="1 0.8 0.5 0 0  1 0.8 0.5 0 0  0.5 0.4 0.2 0 0  0 0 0 0.15 0" />
        </filter>
      </defs>

      {/* Outer glow ambient light */}
      <ellipse cx="110" cy="340" rx="70" ry="250" fill="rgba(201,169,110,0.025)" filter={`url(#outer-glow-${name})`} />

      {/* ═══════════════════ CAP ═══════════════════ */}
      {/* Cap body */}
      <rect x="74" y="18" width="72" height="88" rx="7" fill={`url(#cap-${name})`} />
      {/* Cap vertical overlay */}
      <rect x="74" y="18" width="72" height="88" rx="7" fill={`url(#cap-v-${name})`} />
      {/* Cap highlight strip left */}
      <rect x="78" y="22" width="12" height="80" rx="4" fill="rgba(255,255,255,0.1)" />
      {/* Cap bottom band */}
      <rect x="74" y="98" width="72" height="8" rx="0" fill="#3A2C10" />
      <rect x="74" y="98" width="72" height="4" rx="0" fill="rgba(201,169,110,0.5)" />
      {/* Cap bottom rim */}
      <rect x="70" y="103" width="80" height="5" rx="1" fill="#C9A96E" opacity="0.7" />

      {/* ═══════════════════ NECK ═══════════════════ */}
      {/* Neck taper from cap to body */}
      <path
        d="M88 108 L88 140 Q88 148 80 150 L58 152 L58 155 L162 155 L162 152 L140 150 Q132 148 132 140 L132 108 Z"
        fill={`url(#glass-${name})`}
        stroke="rgba(201,169,110,0.08)"
        strokeWidth="0.5"
      />
      {/* Neck highlight */}
      <rect x="92" y="108" width="10" height="42" rx="3" fill="rgba(255,255,255,0.05)" />

      {/* Shoulder ornament line */}
      <line x1="58" y1="158" x2="162" y2="158" stroke="rgba(201,169,110,0.35)" strokeWidth="0.75" />
      <line x1="62" y1="161" x2="158" y2="161" stroke="rgba(201,169,110,0.15)" strokeWidth="0.5" />

      {/* ═══════════════════ BODY ═══════════════════ */}
      {/* Main bottle body */}
      <rect x="48" y="160" width="124" height="308" rx="6" fill={`url(#glass-${name})`} />
      {/* Liquid glow inside */}
      <rect x="48" y="160" width="124" height="308" rx="6" fill={`url(#liquid-${name})`} />
      {/* Left highlight strip */}
      <rect x="52" y="165" width="20" height="298" rx="4" fill={`url(#highlight-${name})`} />
      {/* Subtle right edge darkening */}
      <rect x="156" y="165" width="14" height="298" rx="3" fill="rgba(0,0,0,0.4)" />
      {/* Bottom edge detail */}
      <rect x="48" y="452" width="124" height="12" rx="0 0 6 6" fill="rgba(0,0,0,0.5)" />
      {/* Bottom shine */}
      <rect x="48" y="452" width="124" height="3" fill="rgba(201,169,110,0.08)" />

      {/* ═══════════════════ LABEL ═══════════════════ */}
      {/* Label background */}
      <rect x="60" y="220" width="100" height="130" rx="2"
        fill="rgba(8,8,8,0.6)"
        stroke="rgba(201,169,110,0.2)"
        strokeWidth="0.75"
      />
      {/* Label inner border */}
      <rect x="64" y="224" width="92" height="122" rx="1"
        fill="none"
        stroke="rgba(201,169,110,0.08)"
        strokeWidth="0.5"
      />

      {/* Brand name */}
      <text x="110" y="262" textAnchor="middle"
        fill="rgba(201,169,110,0.9)"
        fontSize="8"
        fontFamily="Georgia, serif"
        letterSpacing="5"
        fontWeight="400"
      >
        LUMINOIR
      </text>

      {/* Thin ornament line */}
      <line x1="78" y1="271" x2="142" y2="271" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
      <line x1="84" y1="273" x2="136" y2="273" stroke="rgba(201,169,110,0.12)" strokeWidth="0.5" />

      {/* Product name - italic serif */}
      <text x="110" y="303" textAnchor="middle"
        fill="rgba(245,240,232,0.85)"
        fontSize="18"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        letterSpacing="2"
        fontWeight="300"
      >
        {name}
      </text>

      {/* Subtitle */}
      <text x="110" y="324" textAnchor="middle"
        fill="rgba(201,169,110,0.45)"
        fontSize="5.5"
        fontFamily="Arial, sans-serif"
        letterSpacing="2.5"
        fontWeight="300"
      >
        EAU DE PARFUM
      </text>
      <text x="110" y="336" textAnchor="middle"
        fill="rgba(201,169,110,0.35)"
        fontSize="5"
        fontFamily="Arial, sans-serif"
        letterSpacing="1.5"
      >
        50 ML · 1.7 FL. OZ.
      </text>

      {/* ═══════════════════ FLOOR REFLECTION ═══════════════════ */}
      <ellipse cx="110" cy="490" rx="60" ry="10" fill={`url(#floor-${name})`} />
      <ellipse cx="110" cy="490" rx="38" ry="5" fill="rgba(201,169,110,0.05)" />
    </svg>
  );
}
