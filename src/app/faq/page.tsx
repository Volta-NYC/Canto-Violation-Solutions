import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, Eyebrow, Section } from "@/components/ui";
import { faqs, faqGroups } from "@/content/faq";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Straight answers about NYC building violations: what to do first, whether a violation follows you or the property, how hearings work, and what resolution actually costs.",
};

/**
 * FAQPage structured data. Only questions with real answers are included —
 * the one awaiting the owner's input is deliberately excluded rather than
 * shipped to search engines as a placeholder.
 */
function FaqJsonLd() {
  const answerable = faqs.filter((f) => !f.needsOwnerInput);
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answerable.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />

      <PageHero
        eyebrow="FAQ"
        title="The questions people ask in the first ten minutes."
        lede="Usually in this order, and usually before they’re ready to talk to anyone."
      />

      <Section tone="paper">
        <Container size="wide">
          <div className="space-y-16">
            {faqGroups.map((group, gi) => {
              const items = faqs.filter((f) => f.group === group.id);
              if (items.length === 0) return null;
              return (
                <Reveal key={group.id} delay={gi * 60}>
                  <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                      <Eyebrow>{group.label}</Eyebrow>
                    </div>
                    <FaqAccordion items={items} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Acronym decoder — the reference table people actually want */}
      <Section tone="ink">
        <Container size="wide">
          <Reveal>
            <Eyebrow tone="light">Decoder</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.6vw,2.5rem)] text-white">
              What the letters on your notice stand for.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <caption className="sr-only">
                  New York City agency acronyms and what each one handles
                </caption>
                <thead>
                  <tr className="border-b border-ink-700">
                    <th scope="col" className="field-label py-4 pr-6 text-dim">
                      Code
                    </th>
                    <th scope="col" className="field-label py-4 pr-6 text-dim">
                      Stands for
                    </th>
                    <th scope="col" className="field-label py-4 text-dim">
                      Handles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.slug} className="border-b border-ink-700">
                      <td className="py-5 pr-6 align-top">
                        <Link
                          href={`/services/${service.slug}`}
                          className="font-mono text-sm tracking-wider text-white transition-colors hover:text-signal-300"
                        >
                          {service.code}
                        </Link>
                      </td>
                      <td className="py-5 pr-6 align-top text-[0.9375rem] text-mist">
                        {service.agency}
                      </td>
                      <td className="max-w-md py-5 align-top text-[0.9375rem] leading-relaxed text-dim">
                        {service.summary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta
        eyebrow="Still unclear"
        title="Ask about your specific notice."
        body="General answers only go so far. Send the property address and the violation number and get one that applies to your actual situation."
      />
    </>
  );
}
