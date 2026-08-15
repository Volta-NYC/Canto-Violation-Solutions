/**
 * MEDIA MANIFEST — the shot list to send the owner.
 *
 * info.md found NO usable imagery: the logo was blocked by bot detection, the
 * LinkedIn photo is an explicit AI-generated placeholder, and as a service
 * business there is no storefront or product photography to draw on.
 *
 * So every image on this site is a locally-generated SVG placeholder in
 * /public/media. Nothing loads from an external CDN. Each entry below records
 * what the real photograph should be, so the owner can be briefed precisely.
 *
 * This manifest is also rendered as a human-readable checklist at
 * ASSETS-NEEDED.md in the repo root, and each usage site carries a
 * `data-asset` attribute in the DOM so placeholders can be found by
 * inspecting the live page:
 *
 *     document.querySelectorAll('[data-asset]')
 */

export type MediaAsset = {
  id: string;
  /** Local placeholder currently rendered. */
  src: string;
  width: number;
  height: number;
  /** Alt text — written for the REAL photo, so it needs no edit on swap. */
  alt: string;
  /** Where it appears. */
  usedOn: string;
  /** The brief to hand the owner or photographer. */
  brief: string;
  priority: "critical" | "high" | "nice-to-have";
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "owner-portrait",
    src: "/media/owner-portrait.svg",
    width: 800,
    height: 1000,
    alt: "Nasacha Canto, owner of Canto Violation Solutions",
    usedOn: "/about, and the trust panel on /",
    brief:
      "A real photograph of Nasacha to replace the AI-generated LinkedIn image, which info.md confirms is an explicit placeholder. Vertical 4:5 crop. Natural light, plain or softly blurred background, professional but warm — approachable rather than corporate-stiff, since the whole brand goal is that someone who just got a violation feels comfortable reaching out. Shot at chest-up. Avoid a hard studio white background.",
    priority: "critical",
  },
  {
    id: "owner-working",
    src: "/media/owner-working.svg",
    width: 1200,
    height: 900,
    alt: "Nasacha Canto reviewing violation paperwork",
    usedOn: "/about",
    brief:
      "Candid working shot — reviewing paperwork at a desk, or on the phone. Landscape. This is the image that makes the business feel like a real person doing real work rather than a web template. Documents can be blurred or turned away from camera for confidentiality.",
    priority: "high",
  },
  {
    id: "brooklyn-rowhouses",
    src: "/media/brooklyn-rowhouses.svg",
    width: 1600,
    height: 1000,
    alt: "Brooklyn row houses",
    usedOn: "/ hero panel, /about",
    brief:
      "Brooklyn residential streetscape — brownstone or row-house facades, ideally in flat overcast light. This grounds the business in its actual service area (LinkedIn lists Brooklyn specifically). Owner-shot on a phone is fine and arguably better than stock. Landscape, wide.",
    priority: "high",
  },
  {
    id: "facade-scaffolding",
    src: "/media/facade-scaffolding.svg",
    width: 1200,
    height: 1500,
    alt: "Sidewalk shed and scaffolding on a New York building facade",
    usedOn: "/services",
    brief:
      "Sidewalk shed / scaffolding on a NYC building — the single most recognizable visual shorthand for building compliance work in this city. Vertical crop preferred. Easy to capture anywhere in NYC on any given day.",
    priority: "nice-to-have",
  },
  {
    id: "notice-document",
    src: "/media/notice-document.svg",
    width: 1000,
    height: 1250,
    alt: "A New York City notice of violation",
    usedOn: "/ decoder panel",
    brief:
      "A photograph of an actual notice of violation — REDACTED. Every address, name, BIN, and violation number must be blacked out or blurred before use, and it must not be a live client’s document. The purpose is texture and recognition: a visitor should recognize the shape of the paper in their own hand. If no safe document is available, keep the generated placeholder.",
    priority: "nice-to-have",
  },
  {
    id: "logo-mark",
    src: "/media/logo-mark.svg",
    width: 512,
    height: 512,
    alt: "Canto Violation Solutions",
    usedOn: "Header, footer, favicon, Open Graph",
    brief:
      "There is no confirmed logo — info.md could not view the Google Sites header image due to bot detection, so it was never described. The current mark is an original wordmark-and-monogram built for this site. If the owner has existing branding, supply it; if not, this can be developed further. Needed as SVG plus a square PNG for social.",
    priority: "critical",
  },
];

export const getAsset = (id: string): MediaAsset => {
  const asset = mediaAssets.find((a) => a.id === id);
  if (!asset) throw new Error(`Unknown media asset: ${id}`);
  return asset;
};
