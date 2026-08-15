import Link from "next/link";
import { ArrowRight, Button, Container, Eyebrow } from "@/components/ui";
import { services } from "@/content/services";

export default function NotFound() {
  return (
    <div className="bg-ink text-white">
      <Container size="wide">
        <div className="flex min-h-[70vh] flex-col justify-center py-20">
          <Eyebrow tone="signalOnDark">Error 404</Eyebrow>
          <h1 className="mt-6 max-w-2xl text-[clamp(2.25rem,5.2vw,3.75rem)] text-white">
            This page isn&rsquo;t on the record.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-dim">
            The page you were looking for doesn&rsquo;t exist. If you were
            trying to find a specific violation type, it&rsquo;s probably one of
            these.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="signal">
              Back to home
              <ArrowRight />
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-[3px] border border-ink-700 px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:border-dim"
            >
              Get a free review
            </Link>
          </div>

          <ul className="mt-14 flex flex-wrap gap-2 border-t border-ink-700 pt-10">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex rounded-[3px] border border-ink-700 px-3.5 py-2 font-mono text-[0.75rem] tracking-[0.08em] text-dim uppercase transition-colors hover:border-dim hover:text-white"
                >
                  {service.code}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
