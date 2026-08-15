import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui";
import { processSteps } from "@/content/process";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Five stages from first notice to closed record: review, quote, correction and contractor coordination, filings, and agency follow-up.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From the notice in your hand to a clear record."
        lede="Five stages. The order matters more than most owners expect — doing them out of sequence is the most common reason a correction is rejected months after the work was finished."
      />

      <Section tone="paper">
        <Container size="wide">
          <ol className="space-y-px bg-rule">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.id} delay={index * 60}>
                <article className="bg-paper py-12 first:pt-0">
                  <div className="grid gap-8 lg:grid-cols-[120px_1fr_300px] lg:gap-14">
                    {/* Numbering is honest here: this is a real sequence — so
                        the numeral has to be readable rather than ghosted.
                        `rule` was 1.28:1 against paper; `muted` is 5.21:1
                        and still recessive against the ink heading. */}
                    <div>
                      <span className="font-display text-[3.5rem] leading-none text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="field-label mt-2 text-signal">
                        {step.label}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-ink">
                        {step.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-body">
                        {step.body}
                      </p>
                    </div>

                    <div className="lg:pt-2">
                      <Eyebrow className="text-muted">Includes</Eyebrow>
                      <ul className="mt-5 space-y-3">
                        {step.detail.map((d) => (
                          <li
                            key={d}
                            className="flex gap-3 text-[0.9375rem] leading-relaxed text-body"
                          >
                            <span
                              className="mt-2.5 h-px w-3 shrink-0 bg-muted"
                              aria-hidden="true"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* What resolution does not mean — sets honest expectations */}
      <Section tone="ink" className="py-16 sm:py-20">
        <Container size="wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <Eyebrow tone="light">Worth being clear about</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] text-white">
                  What this doesn&rsquo;t include.
                </h2>
              </div>
              <ul className="space-y-px bg-ink-700">
                {[
                  {
                    term: "Guaranteed dismissal",
                    desc: "Whether a violation can be dismissed depends on the facts and the record. Anyone promising an outcome before reading your notice is guessing.",
                  },
                  {
                    term: "A fixed price list",
                    desc: "Pricing follows the review, because the work varies enormously between a documentation correction and a full permit resolution.",
                  },
                  {
                    term: "Control of agency timelines",
                    desc: "Filings, inspections and hearings sit in city queues. What can be controlled is that your submission is complete and correct the first time.",
                  },
                ].map((item) => (
                  <li key={item.term} className="bg-ink py-6">
                    <p className="font-sans text-[1.0625rem] font-medium text-white">
                      {item.term}
                    </p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-dim">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta
        eyebrow="Stage one"
        title="It starts with a free review."
        body="Send the property address and the violation number. Nothing is quoted, and nothing is owed, until you know what the matter actually involves."
      />
    </>
  );
}
