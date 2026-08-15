import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ClosingCta } from "@/components/closing-cta";
import {
  ArrowRight,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui";
import { categories, servicesByCategory } from "@/content/services";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DOB, HPD, ECB/OATH, DOT and FDNY violations, Stop Work Orders, Local Law 152 gas piping, OATH hearing representation, and certificate of correction filings for NYC property owners.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Start with the name on your notice."
        lede="Every NYC agency runs its own process, its own paperwork and its own clock. Find the one that issued yours and you’ll know what you’re dealing with."
      />

      {categories.map((category) => {
        const items = servicesByCategory(category.id);
        if (items.length === 0) return null;

        return (
          <Section
            key={category.id}
            tone="paper"
            className="border-b border-rule py-16 sm:py-20"
          >
            <Container size="wide">
              <Reveal>
                <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <Eyebrow>{category.label}</Eyebrow>
                    <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
                      {category.description}
                    </p>
                  </div>

                  <ul className="space-y-px bg-rule">
                    {items.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex flex-col gap-4 bg-paper px-1 py-7 transition-colors hover:bg-white sm:flex-row sm:items-baseline sm:gap-8 sm:px-6"
                        >
                          <span className="field-label w-20 shrink-0 pt-1 text-muted transition-colors group-hover:text-signal">
                            {service.code}
                          </span>
                          <span className="flex-1">
                            <span className="block font-display text-2xl leading-snug text-ink">
                              {service.name}
                            </span>
                            <span className="mt-2.5 block max-w-xl text-[0.9375rem] leading-relaxed text-body">
                              {service.summary}
                            </span>
                          </span>
                          <ArrowRight className="mt-2 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Container>
          </Section>
        );
      })}

      <ClosingCta
        eyebrow="Not sure which one you have"
        title="Send it over and we’ll tell you."
        body="If you can’t work out which agency issued your notice, that’s a normal place to start. Send the address and whatever number is printed on it."
      />
    </>
  );
}
