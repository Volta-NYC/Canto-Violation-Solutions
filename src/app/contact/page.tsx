import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { IntakeForm } from "@/components/intake-form";
import {
  Container,
  Eyebrow,
  PlaceholderValue,
  Section,
} from "@/components/ui";
import { site, PLACEHOLDER } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a free review",
  description:
    "Send the property address and violation number for a free review of your NYC building violation. Pricing follows the review, once the case is understood.",
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <PageHero
        eyebrow="Free review"
        title="Clear your building violations with confidence."
        lede="Send the property address and the violation number. You’ll get a plain-English reading of what you’re holding — and if there’s a deadline on it, you’ll hear about that first."
      />

      <Section tone="paper">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-16">
            <Reveal>
              <IntakeForm />
            </Reveal>

            <aside className="space-y-10">
              <Reveal delay={100}>
                <div>
                  <Eyebrow>Direct contact</Eyebrow>
                  <dl className="mt-6 space-y-6 border-t border-rule pt-6 text-[0.9375rem]">
                    <div>
                      <dt className="text-muted">Phone</dt>
                      <dd className="mt-2">
                        {contact.phone === PLACEHOLDER ? (
                          <PlaceholderValue label="phone number" />
                        ) : (
                          <a href={`tel:${contact.phoneHref}`} className="text-ink">
                            {contact.phone}
                          </a>
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-6">
                      <dt className="text-muted">Email</dt>
                      <dd className="mt-2">
                        {contact.email === PLACEHOLDER ? (
                          <PlaceholderValue label="email address" />
                        ) : (
                          <a href={`mailto:${contact.email}`} className="text-ink">
                            {contact.email}
                          </a>
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-6">
                      <dt className="text-muted">Hours</dt>
                      <dd className="mt-2">
                        {contact.hours === PLACEHOLDER ? (
                          <PlaceholderValue label="business hours" />
                        ) : (
                          <span className="text-ink">{contact.hours}</span>
                        )}
                      </dd>
                    </div>
                    <div className="border-t border-rule-soft pt-6">
                      <dt className="text-muted">Service area</dt>
                      <dd className="mt-2 text-ink">{site.serviceArea}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="bg-mist p-7">
                  <Eyebrow tone="signal">If there&rsquo;s a hearing date</Eyebrow>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
                    A hearing date on your notice is the most time-sensitive
                    thing in this whole process. Failing to appear generally
                    produces a default at a higher penalty than the original
                    charge. Send it through as soon as you can, and say so in
                    the form.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div>
                  <Eyebrow>What happens next</Eyebrow>
                  <ol className="mt-6 space-y-4 border-t border-rule pt-6 text-[0.9375rem] leading-relaxed text-body">
                    <li className="flex gap-4">
                      <span className="field-label pt-1 text-muted">01</span>
                      <span>The record gets pulled and read against your notice.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="field-label pt-1 text-muted">02</span>
                      <span>
                        You get told what it means and what the real deadline is.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="field-label pt-1 text-muted">03</span>
                      <span>
                        Pricing follows, based on what the matter actually needs.
                      </span>
                    </li>
                  </ol>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
