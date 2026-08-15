import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container, Field, PlaceholderValue } from "@/components/ui";
import { site, PLACEHOLDER } from "@/content/site";
import { services } from "@/content/services";

const year = new Date().getFullYear();

export function SiteFooter() {
  const { contact } = site;

  return (
    <footer className="bg-ink text-mist">
      <Container size="wide">
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-10">
          {/* Identity */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-dim">
              Helping New York City property owners resolve building violations
              — from the first notice through the certificate of correction.
            </p>

            <Field label="Service area" tone="dark" className="mt-9">
              <p className="text-sm text-mist">{site.serviceArea}</p>
              <p className="mt-1 text-sm text-dim">
                Based in {site.basedIn}
              </p>
            </Field>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <Field label="Services" tone="dark">
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-dim transition-colors hover:text-white"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Field>
          </nav>

          {/* Contact */}
          <div>
            <Field label="Contact" tone="dark">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-dim">Phone</dt>
                  <dd className="mt-1">
                    {contact.phone === PLACEHOLDER ? (
                      <PlaceholderValue label="phone number" />
                    ) : (
                      <a
                        href={`tel:${contact.phoneHref}`}
                        className="text-white"
                      >
                        {contact.phone}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-dim">Email</dt>
                  <dd className="mt-1">
                    {contact.email === PLACEHOLDER ? (
                      <PlaceholderValue label="email address" />
                    ) : (
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-white"
                      >
                        {contact.email}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-dim">Hours</dt>
                  <dd className="mt-1">
                    {contact.hours === PLACEHOLDER ? (
                      <PlaceholderValue label="business hours" />
                    ) : (
                      <span className="text-white">{contact.hours}</span>
                    )}
                  </dd>
                </div>
              </dl>
            </Field>

            <Field label="More" tone="dark" className="mt-10">
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/process"
                    className="text-dim transition-colors hover:text-white"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-dim transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-dim transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-dim transition-colors hover:text-white"
                  >
                    Get a free review
                  </Link>
                </li>
              </ul>
            </Field>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-700 py-8 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.owner}, owner.
          </p>
          <p className="max-w-xl leading-relaxed">
            Canto Violation Solutions provides violation resolution and filing
            services. Nothing on this site is legal advice, and no attorney–client
            relationship is created by contacting us.
          </p>
        </div>
      </Container>
    </footer>
  );
}
