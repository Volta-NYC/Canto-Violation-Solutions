/**
 * Global site configuration.
 *
 * PROVENANCE: every value here traces back to `raw messy data/info.md`.
 * Anything the research brief lists as NOT FOUND is set to the literal
 * string `PLACEHOLDER` so it is impossible to ship by accident.
 *
 * To audit before launch:  grep -rn "PLACEHOLDER" src/
 */

export const PLACEHOLDER = "PLACEHOLDER" as const;

export const site = {
  name: "Canto Violation Solutions",
  shortName: "Canto",
  owner: "Nasacha Canto",
  /** LinkedIn headline, verbatim from info.md. Drives the <title> template. */
  role: "NYC DOB · ECB · OATH Violation Specialist",
  tagline: "Clear your building violations with confidence.",
  description:
    "Canto Violation Solutions helps NYC property owners resolve DOB, HPD, ECB/OATH, DOT and FDNY violations, Stop Work Orders, and Local Law 152 gas piping issues — from first notice through certificate of correction.",

  /** info.md: "Service area: New York City (client email); Brooklyn specifically (LinkedIn)." */
  serviceArea: "New York City — all five boroughs",
  basedIn: "Brooklyn, New York",

  /**
   * NOT FOUND in any source. The brief is explicit: no phone, email, address,
   * or hours came through from the Google Sites draft, LinkedIn, or the
   * owner's email. Collect these before launch — see ASSETS-NEEDED.md.
   */
  contact: {
    phone: PLACEHOLDER,
    phoneHref: PLACEHOLDER,
    email: PLACEHOLDER,
    addressLine1: PLACEHOLDER,
    addressLine2: PLACEHOLDER,
    hours: PLACEHOLDER,
  },

  /**
   * No social presence exists yet (info.md: Yelp / Instagram / Facebook /
   * TikTok / X all NOT FOUND). LinkedIn exists but the URL was not captured
   * in the brief. Rendered only when a value stops being PLACEHOLDER.
   */
  social: {
    linkedin: PLACEHOLDER,
  },

  /** Used for canonical URLs, sitemap and Open Graph. */
  url: "https://cantoviolationsolutions.com",
} as const;

/**
 * What the intake form asks for, per info.md:
 * "Contact page asks for 'the property address and violation number for a
 * free quote'." That line is the entire basis for the intake design.
 */
export const intakeBasis =
  "the property address and violation number for a free quote";

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;
