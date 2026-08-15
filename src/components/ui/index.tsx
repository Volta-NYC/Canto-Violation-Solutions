import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* -------------------------------------------------------------------------
   Layout primitives
   ------------------------------------------------------------------------- */

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tone = "paper",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "mist" | "ink" | "white";
} & Omit<ComponentProps<"section">, "className">) {
  const tones = {
    paper: "bg-paper text-ink",
    white: "bg-white text-ink",
    mist: "bg-mist text-ink",
    ink: "bg-ink text-mist",
  };
  return (
    <section className={`py-20 sm:py-28 ${tones[tone]} ${className}`} {...rest}>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------
   The field label — this site’s core structural device.
   Mono, tracked, uppercase: the language of a government form field.
   ------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  /**
   * `signal` is for light grounds only — the brick fails contrast on ink.
   * Use `signalOnDark` for urgency labels sitting on a dark section.
   */
  tone?: "default" | "signal" | "signalOnDark" | "light";
}) {
  const tones = {
    default: "text-body",
    signal: "text-signal",
    signalOnDark: "text-signal-300",
    light: "text-dim",
  };
  return (
    <p className={`field-label ${tones[tone]} ${className}`}>{children}</p>
  );
}

/** Label + hairline rule + content — a literal form field. */
export function Field({
  label,
  children,
  className = "",
  tone = "light",
}: {
  label: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={className}>
      <div
        className={`flex items-center gap-3 pb-2 ${
          tone === "dark" ? "text-dim" : "text-muted"
        }`}
      >
        <span className="field-label shrink-0">{label}</span>
        <span
          className={`h-px flex-1 ${
            tone === "dark" ? "bg-ink-700" : "bg-rule"
          }`}
          aria-hidden="true"
        />
      </div>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------
   Typography
   ------------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "dark" ? "light" : "default"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`text-[clamp(1.9rem,4.4vw,3rem)] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            tone === "dark" ? "text-dim" : "text-body"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------
   Actions
   ------------------------------------------------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "signal";

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] px-6 py-3.5 text-[0.9375rem] font-semibold tracking-[-0.01em] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-700 shadow-[0_1px_2px_rgb(23_21_15/0.15)] hover:shadow-[0_4px_14px_rgb(23_21_15/0.22)]",
  signal:
    "bg-signal text-white hover:bg-[#a52f23] shadow-[0_1px_2px_rgb(192_57_43/0.2)] hover:shadow-[0_4px_14px_rgb(192_57_43/0.28)]",
  secondary:
    "border border-rule bg-white text-ink hover:border-ink hover:bg-white",
  ghost: "text-ink hover:bg-mist",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path
        d="M1 8h13m0 0-4.5-4.5M14 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------
   Placeholder-value guard.

   Renders contact details only when the owner has supplied them. Until then
   it shows an explicit, visible placeholder rather than a plausible-looking
   fake — a fake phone number on a trust-driven site is worse than none.
   ------------------------------------------------------------------------- */

export function PlaceholderValue({ label }: { label: string }) {
  return (
    <span
      // Solid, not translucent: the chip appears on both the paper and the
      // ink footer, and a semi-transparent fill muddies to ~2:1 over the dark
      // ground. A PLACEHOLDER marker is the last thing that should be subtle.
      className="inline-flex items-center gap-1.5 border border-dashed border-signal/50 bg-signal-soft px-2 py-0.5 font-mono text-[0.7rem] font-medium tracking-[0.1em] text-signal uppercase"
      data-placeholder={label}
      title={`Awaiting ${label} from the owner — see ASSETS-NEEDED.md`}
    >
      PLACEHOLDER
    </span>
  );
}
