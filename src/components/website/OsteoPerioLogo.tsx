'use client';

import { cn } from '@/lib/utils';

/* ─── Design Tokens ────────────────────────────────────────────────── */
const COLORS = {
  charcoal: '#1A1A1A',
  deepGreen: '#2D4A3E',
  stone: '#8C8C7E',
  ivory: '#FAFAF5',
  white: '#FFFFFF',
};

/* ─── SVG Symbol — Stylized dental implant + soft tissue ───────────── */
function LogoSymbol({
  size = 36,
  color = COLORS.charcoal,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Abutment crown — rounded top shape */}
      <path
        d="M42 24 L42 18 Q42 12 50 12 Q58 12 58 18 L58 24"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Implant fixture body — tapered cylinder */}
      <path
        d="M40 24 L40 68 Q40 78 50 78 Q60 78 60 68 L60 24"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Screw threads — left side (tapered, wider at top) */}
      <line x1="40" y1="34" x2="34" y2="35" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="44" x2="33" y2="45" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="54" x2="34" y2="55" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="64" x2="36" y2="65" stroke={color} strokeWidth="1.3" strokeLinecap="round" />

      {/* Screw threads — right side (tapered, wider at top) */}
      <line x1="60" y1="34" x2="66" y2="35" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="60" y1="44" x2="67" y2="45" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="60" y1="54" x2="66" y2="55" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="60" y1="64" x2="64" y2="65" stroke={color} strokeWidth="1.3" strokeLinecap="round" />

      {/* Soft tissue / mucogingival scallop — flowing curve over the top */}
      <path
        d="M22 24 Q28 16 38 22 Q44 18 50 24 Q56 18 62 22 Q72 16 78 24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Cortical bone line — subtle horizontal at tissue-bone junction */}
      <path
        d="M28 28 Q38 24 50 28 Q62 24 72 28"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

/* ─── Text Wordmark ───────────────────────────────────────────────── */
function LogoWordmark({
  size = 'md',
  color = COLORS.charcoal,
  showTagline = false,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  showTagline?: boolean;
}) {
  const sizeClasses = {
    sm: { wordmark: 'text-lg', tagline: 'text-[8px]', gap: 'gap-1' },
    md: { wordmark: 'text-xl', tagline: 'text-[9px]', gap: 'gap-1.5' },
    lg: { wordmark: 'text-2xl', tagline: 'text-[10px]', gap: 'gap-2' },
    xl: { wordmark: 'text-3xl md:text-4xl', tagline: 'text-xs', gap: 'gap-2.5' },
  };

  const s = sizeClasses[size];

  return (
    <div className={cn('flex flex-col', s.gap)}>
      {/* Main wordmark */}
      <div
        className={cn(
          'font-serif font-semibold tracking-tight leading-none',
          s.wordmark,
        )}
        style={{ color }}
      >
        <span className="font-normal" style={{ color }}>
          Osteo
        </span>
        <span
          className="font-semibold"
          style={{ color }}
        >
          Perio
        </span>
      </div>

      {/* Tagline */}
      {showTagline && (
        <span
          className={cn(
            'uppercase tracking-[0.25em] font-medium leading-none',
            s.tagline,
          )}
          style={{ color: COLORS.stone }}
        >
          Periodontal &amp; Implant Surgery
        </span>
      )}
    </div>
  );
}

/* ─── Main Logo Component ─────────────────────────────────────────── */
interface LogoProps {
  /** Layout variant */
  variant?: 'horizontal' | 'vertical' | 'wordmark-only' | 'icon-only';
  /** Size scale */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Text color - defaults to charcoal */
  color?: string;
  /** Whether to show the tagline under the name */
  showTagline?: boolean;
  /** For dark backgrounds */
  inverted?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export default function OsteoPerioLogo({
  variant = 'horizontal',
  size = 'md',
  color,
  showTagline = false,
  inverted = false,
  className,
}: LogoProps) {
  const textColor = color || (inverted ? COLORS.white : COLORS.charcoal);
  const symbolColor = inverted
    ? COLORS.white
    : COLORS.deepGreen;

  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 44,
    xl: 56,
  };

  const gapSizes = {
    sm: 'gap-2',
    md: 'gap-2.5',
    lg: 'gap-3',
    xl: 'gap-4',
  };

  if (variant === 'icon-only') {
    return (
      <LogoSymbol size={iconSizes[size]} color={symbolColor} />
    );
  }

  if (variant === 'wordmark-only') {
    return (
      <LogoWordmark
        size={size}
        color={textColor}
        showTagline={showTagline}
      />
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={cn('flex flex-col items-center', gapSizes[size], className)}>
        <LogoSymbol size={iconSizes[size]} color={symbolColor} />
        <LogoWordmark
          size={size}
          color={textColor}
          showTagline={showTagline}
        />
      </div>
    );
  }

  // Horizontal (default)
  return (
    <div
      className={cn(
        'flex items-center',
        gapSizes[size],
        className,
      )}
    >
      <LogoSymbol size={iconSizes[size]} color={symbolColor} />
      <LogoWordmark
        size={size}
        color={textColor}
        showTagline={showTagline}
      />
    </div>
  );
}
