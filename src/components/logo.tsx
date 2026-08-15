/**
 * Wordmark + monogram.
 *
 * ASSET NOTE: info.md could not view the existing Google Sites logo (bot
 * detection blocked it) and therefore never described it. This mark is
 * original work built for this site, not a reproduction. If the owner has
 * existing branding, it should replace this. See media.ts → `logo-mark`.
 *
 * The mark is a C built from a stamped seal arc and a rule — the two
 * artifacts of a filed municipal record.
 */

/**
 * The tile is drawn in `currentColor`; the C is knocked out of it. The
 * knockout must therefore match whatever sits BEHIND the mark, which flips
 * between the light header and the dark footer — hence the explicit prop
 * rather than a fixed colour.
 */
export function LogoMark({
  className = "",
  knockout = "#faf8f4",
  accent = "#cf9550",
}: {
  className?: string;
  knockout?: string;
  /** Bronze underscore. Flips with the tile for the same reason the
   *  knockout does — it sits ON the tile, not on the page. */
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
      data-asset="logo-mark"
    >
      <rect width="32" height="32" rx="2" fill="currentColor" />
      <path
        d="M22.5 11.4A7.2 7.2 0 0 0 9.4 16a7.2 7.2 0 0 0 13.1 4.6"
        stroke={knockout}
        strokeWidth="2.1"
        strokeLinecap="square"
      />
      <path
        d="M16 24.4h7.4"
        stroke={accent}
        strokeWidth="2.1"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark
        knockout={tone === "dark" ? "#faf8f4" : "#17150f"}
        accent={tone === "dark" ? "#cf9550" : "#9c5d1c"}
        className={`h-7 w-7 shrink-0 ${tone === "dark" ? "text-ink" : "text-white"}`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] font-semibold tracking-[-0.02em] ${
            tone === "dark" ? "text-ink" : "text-white"
          }`}
        >
          Canto
        </span>
        <span
          className={`field-label mt-1 text-[0.5625rem] ${
            tone === "dark" ? "text-muted" : "text-dim"
          }`}
        >
          Violation Solutions
        </span>
      </span>
    </span>
  );
}
