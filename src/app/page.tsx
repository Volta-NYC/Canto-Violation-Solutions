import Link from "next/link";
import { NoticeAnatomy } from "@/components/notice-anatomy";
import { EscalationClock } from "@/components/escalation-clock";
import { AgencyIndex } from "@/components/agency-index";
import { AssetImage } from "@/components/asset-image";
import { Reveal } from "@/components/reveal";
import { ClosingCta } from "@/components/closing-cta";
import { ArrowRight, Button, Container, Eyebrow } from "@/components/ui";
import { processSteps } from "@/content/process";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ==================================================================
          HERO — the object, annotated.
          Not a headline beside a card. The visitor is holding a piece of
          paper they can't read, so the page renders that paper and reads it
          for them, and only then asks for anything.
          ================================================================== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 60% at 78% 0%, #2e2a22 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <Container size="wide" className="relative">
          <div className="pt-16 pb-20 sm:pt-20 sm:pb-28">
            {/* Headline block — wide and loud, then it stops and gets out
                of the way of the document. */}
            <div className="max-w-4xl">
              <p
                className="field-label animate-rise text-signal-300"
                style={{ animationDelay: "40ms" }}
              >
                NYC building violations
              </p>
              <h1
                className="animate-rise mt-6 text-[clamp(2.75rem,7.5vw,5.75rem)] text-white"
                style={{ animationDelay: "100ms" }}
              >
                You can&rsquo;t read it.
                <br />
                <span className="text-dim">That&rsquo;s the whole problem.</span>
              </h1>
              <p
                className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-dim sm:text-xl"
                style={{ animationDelay: "180ms" }}
              >
                A city notice is written for the agency that issued it, not for
                the person who has to answer it. Here is what one actually says
                — and which two lines on it we need to help.
              </p>
            </div>

            {/* The document */}
            <div
              className="animate-rise mt-14"
              style={{ animationDelay: "260ms" }}
            >
              <NoticeAnatomy />
            </div>

            {/* CTA sits UNDER the lesson, not above it */}
            <div
              className="animate-rise mt-16 flex flex-col gap-6 border-t border-ink-700 pt-10 sm:flex-row sm:items-center sm:justify-between"
              style={{ animationDelay: "320ms" }}
            >
              <p className="max-w-md text-[1.0625rem] leading-relaxed text-dim">
                Send those two lines and get a plain-English reading of your
                notice, free.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="signal">
                  Get a free review
                  <ArrowRight />
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 rounded-[3px] border border-ink-700 px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:border-dim"
                >
                  Find your violation type
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================================
          ESCALATION — one continuous line that visibly gets worse
          ================================================================== */}
      <EscalationClock />

      {/* ==================================================================
          THE INDEX — dense reference, not nine identical cards
          ================================================================== */}
      <section className="py-20 sm:py-28">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-6 border-b border-rule pb-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>Everything handled</Eyebrow>
                <h2 className="mt-5 text-[clamp(2.1rem,5vw,3.4rem)]">
                  Find the name printed at the top.
                </h2>
              </div>
              <p className="max-w-sm text-[0.9375rem] leading-relaxed text-body">
                Nine matter types across five agencies. Scan for yours — the
                hearing column is the one that decides how fast you need to
                move.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-2">
              <AgencyIndex />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ==================================================================
          PROCESS — a spine with a held image, not five equal boxes
          ================================================================== */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <Eyebrow tone="light">How it works</Eyebrow>
                <h2 className="mt-5 text-[clamp(2.1rem,5vw,3.4rem)] text-white">
                  Five stages, and the order is the hard part.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-dim">
                  Doing these out of sequence is the most common reason a
                  correction gets rejected months after the work was finished.
                </p>

                <div className="mt-10">
                  <AssetImage
                    id="facade-scaffolding"
                    className="aspect-4/3 w-full opacity-90"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>

                <Link
                  href="/process"
                  className="group mt-8 inline-flex items-center gap-2.5 text-[0.9375rem] font-semibold text-white"
                >
                  <span className="link-underline">See the full process</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <ol className="space-y-px">
              {processSteps.map((step, index) => (
                <Reveal as="li" key={step.id} delay={index * 60}>
                  <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-ink-700 py-7 sm:grid-cols-[5rem_1fr] sm:gap-8">
                    <span className="font-display text-[2rem] leading-none font-semibold text-dim-700 sm:text-[2.75rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.25rem] text-white sm:text-[1.5rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-dim">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ==================================================================
          WHO — an actual person, with a photograph
          ================================================================== */}
      <section className="py-20 sm:py-28">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
            <Reveal>
              <AssetImage
                id="owner-portrait"
                className="aspect-4/5 w-full"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </Reveal>

            <Reveal delay={100}>
              <Eyebrow>Who you would be working with</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,5vw,3.4rem)]">
                One specialist, handling the whole matter.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
                {site.name} is run by {site.owner}, from {site.basedIn}. The
                person who reads your notice is the person who files the
                correction and appears at the hearing.
              </p>

              <dl className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
                {[
                  {
                    t: "Deadlines surface first",
                    d: "If your notice carries a hearing date, that is the first thing you are told — before scope, before pricing.",
                  },
                  {
                    t: "No outcome is promised",
                    d: "Whether a violation can be reduced or dismissed depends on facts nobody can assess without reading the record.",
                  },
                  {
                    t: "Priced per case, after review",
                    d: "A paperwork correction and a full permit resolution are not the same job, so they are not the same number.",
                  },
                  {
                    t: "Closed means closed",
                    d: "A submitted filing is not a resolved violation. You are told when the record is genuinely clear.",
                  },
                ].map((item) => (
                  <div key={item.t} className="border-t border-rule pt-5">
                    <dt className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
                      {item.t}
                    </dt>
                    <dd className="mt-2.5 text-[0.9375rem] leading-relaxed text-body">
                      {item.d}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <Button href="/about" variant="secondary">
                  About {site.owner.split(" ")[0]}
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
