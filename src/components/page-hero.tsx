import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

/**
 * Interior page header. Deliberately quieter than the home hero — the
 * signature belongs to one screen only, and repeating it would spend the
 * page's boldness twice.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="border-b border-rule bg-ink text-white">
      <Container size="wide">
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow tone="light" className="animate-rise">
            {eyebrow}
          </Eyebrow>
          <h1
            className="mt-6 max-w-3xl text-[clamp(2.25rem,5.2vw,3.75rem)] text-white animate-rise"
            style={{ animationDelay: "70ms" }}
          >
            {title}
          </h1>
          {lede ? (
            <p
              className="mt-7 max-w-2xl text-lg leading-relaxed text-dim animate-rise"
              style={{ animationDelay: "140ms" }}
            >
              {lede}
            </p>
          ) : null}
          {meta ? (
            <div
              className="mt-9 animate-rise"
              style={{ animationDelay: "210ms" }}
            >
              {meta}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
