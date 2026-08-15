import { Reveal } from "@/components/reveal";
import { ArrowRight, Button, Container, Eyebrow, Section } from "@/components/ui";

export function ClosingCta({
  eyebrow = "Free initial review",
  title = "Send the address and the violation number.",
  body = "That’s genuinely all it takes to find out what you’re dealing with. If there’s a deadline on your notice, you’ll hear about that first.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <Section tone="mist" className="border-t border-rule">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow tone="signal">{eyebrow}</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.25rem)] text-ink">
                {title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
                {body}
              </p>
            </div>
            <Button href="/contact" className="shrink-0">
              Get a free review
              <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
