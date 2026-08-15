import { escalation } from "@/content/notice";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";

/**
 * The escalation line.
 *
 * Owners consistently do not know what an unresolved violation *becomes*, and
 * that ignorance is the whole reason matters sit. So this is drawn as one
 * continuous line that visibly worsens left to right, rather than as six
 * equal cards — the shape is the argument.
 *
 * Horizontal on desktop, vertical on mobile, same markup.
 *
 * States no day counts and no dollar figures anywhere: both vary by agency
 * and class, and inventing them would be the genuinely harmful thing to do.
 */

const severityTint = [
  "bg-rule", // 0 — neutral
  "bg-accent/45", // 1
  "bg-signal/55", // 2
  "bg-signal", // 3
] as const;

const severityText = [
  "text-muted",
  "text-accent",
  "text-signal",
  "text-signal",
] as const;

export function EscalationClock() {
  return (
    <section className="border-y border-rule bg-white py-20 sm:py-28">
      <Container size="wide">
        <Reveal>
          <div className="grid gap-8 border-b border-rule pb-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>What happens if it sits</Eyebrow>
              <h2 className="mt-5 text-[clamp(2.1rem,5vw,3.4rem)]">
                A violation doesn&rsquo;t expire. It matures.
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-lg leading-relaxed text-body">
                Every stage to the right of where you are now costs more than
                the one before it. Exact timings vary by agency and by class —
                the shape does not.
              </p>
              <p className="mt-5 border-l-2 border-signal pl-4 text-[0.9375rem] leading-relaxed font-medium text-ink">
                The earliest stage you can act at is always the cheapest one
                available to you.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---- The line ------------------------------------------------ */}
        <Reveal delay={100}>
          <ol className="mt-14 grid gap-y-10 md:grid-cols-6 md:gap-y-0">
            {escalation.map((stage, i) => (
              <li
                key={stage.id}
                className="relative grid grid-cols-[auto_1fr] gap-x-5 md:block"
              >
                {/* Rail: vertical on mobile, horizontal on desktop */}
                <div
                  className="relative flex w-4 justify-center md:mb-6 md:h-4 md:w-full md:justify-start"
                  aria-hidden="true"
                >
                  {/* the track */}
                  <span
                    className={`absolute top-0 bottom-0 w-px md:top-1/2 md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto md:-translate-y-1/2 ${
                      severityTint[stage.severity]
                    } ${i === escalation.length - 1 ? "md:hidden" : ""}`}
                  />
                  {/* the tick */}
                  <span
                    className={`relative mt-1 h-2.5 w-2.5 shrink-0 rotate-45 md:mt-0 ${
                      stage.severity === 0 ? "bg-ink" : severityTint[stage.severity]
                    }`}
                  />
                </div>

                <div className="pb-2 md:pr-8">
                  <p
                    className={`field-label ${severityText[stage.severity]}`}
                  >
                    {stage.marker}
                  </p>
                  <h3 className="mt-3 text-[1.0625rem] leading-snug font-semibold tracking-[-0.02em]">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-body">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

      </Container>
    </section>
  );
}
