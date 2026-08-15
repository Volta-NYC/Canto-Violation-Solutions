import type { Metadata } from "next";
import { Archivo, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";

/**
 * Type pairing:
 * - Archivo — display. A grotesque, set heavy and tight. Deliberately NOT a
 *   serif: warm neutrals plus a high-contrast display serif is the most
 *   over-produced look in circulation, and the grotesque is what keeps this
 *   palette reading modern and professional rather than trad-editorial.
 * - Public Sans — body. The typeface of the U.S. Web Design System: literally
 *   the face of American civic digital government. On-subject by construction,
 *   and humanist enough to stay clearly distinct from Archivo at text sizes.
 * - IBM Plex Mono — utility. Violation numbers, agency codes, field labels.
 *   The typed-form register.
 */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "NYC violation removal",
    "DOB violation help NYC",
    "HPD violation removal",
    "ECB OATH violation",
    "stop work order NYC",
    "Local Law 152",
    "certificate of correction",
    "Brooklyn violation specialist",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[3px] focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
