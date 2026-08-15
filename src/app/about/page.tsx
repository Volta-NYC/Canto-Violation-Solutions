import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import { AssetImage } from "@/components/asset-image";
import {
  Container,
  Eyebrow,
  PlaceholderValue,
  Section,
} from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is run by ${site.owner}, working with New York City property owners on building violations, filings and OATH hearings.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The person who reads your notice is the person who handles it."
        lede={`${site.name} is a specialist practice run by ${site.owner}, based in ${site.basedIn} and working across ${site.serviceArea.toLowerCase()}.`}
      />

      <Section tone="paper">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <AssetImage
                id="owner-portrait"
                className="aspect-4/5 w-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </Reveal>

            <Reveal delay={100}>
              <Eyebrow>Nasacha Canto, owner</Eyebrow>

              <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
                Building compliance is a specialty, not a sideline.
              </h2>

              <div className="mt-8 space-y-6 text-[1.0625rem] leading-relaxed text-body">
                <p>
                  Most property owners meet the New York City violation system
                  exactly once, under pressure, with a deadline already running.
                  The agencies each have their own procedures, their own
                  paperwork, and their own idea of what counts as proof that a
                  problem has been fixed. Learning all of that while the clock
                  runs is not a fair fight.
                </p>
                <p>
                  Canto Violation Solutions exists to take that off your desk.
                  DOB, HPD, ECB and OATH, DOT, FDNY — the notices, the
                  corrections, the filings, and the hearings. That is the whole
                  practice. Nothing else competes with it for attention.
                </p>

                {/* ---------------------------------------------------------
                    PLACEHOLDER BLOCK — biography.
                    info.md: "Year established / bio / origin story: NOT FOUND
                    — gated LinkedIn sections weren’t accessible." Nothing is
                    invented here. The owner supplies this before launch.
                    --------------------------------------------------------- */}
                <div className="border-l-2 border-signal bg-signal-soft/40 p-6">
                  <p className="field-label text-signal">
                    Owner&rsquo;s story — to be supplied
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-700">
                    This is where Nasacha&rsquo;s background belongs: how she
                    came to this work, how long she has been doing it, and any
                    licences or credentials she holds. The research brief found
                    no verified biography — the LinkedIn profile sections were
                    gated, and its visible content is described as
                    AI-generated. Rather than invent a history, the space is
                    held open.
                  </p>
                  <p className="mt-4 text-[0.9375rem] text-body">
                    Status: <PlaceholderValue label="owner biography" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Principles — derived from the owner’s stated brand goal in info.md */}
      <Section tone="ink">
        <Container size="wide">
          <Reveal>
            <Eyebrow tone="light">How the work is run</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.6vw,2.5rem)] text-white">
              Trustworthy, credible, approachable — in that order.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
              Those are the owner&rsquo;s own words for what this business
              should feel like to someone who has just opened a violation
              notice. They translate into three concrete commitments.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-px bg-ink-700 md:grid-cols-3">
            {[
              {
                title: "Deadlines surface first",
                body: "If your notice carries a hearing date, that is the first thing you are told — before scope, before pricing, before anything else. A missed hearing is the most expensive mistake available in this process.",
              },
              {
                title: "No outcome is promised",
                body: "Whether a violation can be reduced or dismissed depends on facts nobody can assess without reading the record. You will get an honest read, including when it is not the one you were hoping for.",
              },
              {
                title: "Nothing is closed until it’s closed",
                body: "Submitting a filing is not the same as resolving a violation. The matter is tracked through agency acceptance, and you are told when the record is genuinely clear.",
              },
            ].map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="bg-ink p-8">
                <p className="font-display text-xl text-white">{item.title}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-dim">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Service area */}
      <Section tone="white">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <Eyebrow>Where we work</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
                New York City, and the agencies that only exist here.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-body">
                DOB, HPD, ECB, OATH, DOT and FDNY are city agencies running
                city-specific procedure. Familiarity with how each one actually
                behaves — what it accepts, what it rejects, and how long it
                takes — is most of the job.
              </p>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-body">
                The practice is based in {site.basedIn} and serves{" "}
                {site.serviceArea.toLowerCase()}.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <AssetImage
                id="brooklyn-rowhouses"
                className="aspect-16/10 w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
