import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import {
  ArrowRight,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} · ${site.name}`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`${service.code} · ${service.agency}`}
        title={service.name}
        lede={service.decoded}
        meta={
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-dim transition-colors hover:text-white"
          >
            <ArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            All services
          </Link>
        }
      />

      <Section tone="paper" className="py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
            {/* Main column */}
            <div>
              <Reveal>
                <Eyebrow>What it is</Eyebrow>
                <p className="mt-6 text-[1.1875rem] leading-relaxed text-ink-700">
                  {service.whatItIs}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <div className="mt-16 border-t border-rule pt-10">
                  <Eyebrow tone="signal">If it&rsquo;s left alone</Eyebrow>
                  <ul className="mt-7 space-y-px bg-rule">
                    {service.ifIgnored.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 bg-paper py-5 sm:gap-5"
                      >
                        <span
                          className="mt-2.5 h-px w-6 shrink-0 bg-signal sm:w-8"
                          aria-hidden="true"
                        />
                        <span className="text-[1.0625rem] leading-relaxed text-body">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-16 border-t border-rule pt-10">
                  <Eyebrow>How we resolve it</Eyebrow>
                  <ol className="mt-7 grid gap-px bg-rule sm:grid-cols-2">
                    {service.whatWeDo.map((item, index) => (
                      <li key={item} className="bg-white p-6">
                        {/* Bronze = structural emphasis. Never urgency —
                            that distinction is what keeps the two warm
                            colours from being confused with each other. */}
                        <span className="field-label text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-700">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>

            {/* Aside — record card + inline CTA */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={100}>
                <div className="document p-7">
                  <p className="field-label text-muted">Record</p>

                  <dl className="mt-6 space-y-5 text-sm">
                    <div>
                      <dt className="text-muted">Agency code</dt>
                      <dd className="mt-1.5 font-mono text-base tracking-wider text-ink">
                        {service.code}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-5">
                      <dt className="text-muted">Issued by</dt>
                      <dd className="mt-1.5 leading-snug text-ink">
                        {service.agency}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-5">
                      <dt className="text-muted">Service area</dt>
                      <dd className="mt-1.5 leading-snug text-ink">
                        {site.serviceArea}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 border-t border-rule pt-7">
                    <p className="text-[0.9375rem] leading-relaxed text-body">
                      Send the property address and the violation number for a
                      free review of this matter.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-ink px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
                    >
                      Get a free review
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Related */}
      <Section tone="white" className="border-t border-rule py-16 sm:py-20">
        <Container size="wide">
          <Reveal>
            <Eyebrow>Other violation types</Eyebrow>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex h-full flex-col border border-rule p-5 transition-all duration-300 hover:border-ink"
                  >
                    <span className="field-label text-muted">
                      {other.code}
                    </span>
                    <span className="mt-3.5 font-display text-lg leading-snug text-ink">
                      {other.name}
                    </span>
                    <ArrowRight className="mt-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
