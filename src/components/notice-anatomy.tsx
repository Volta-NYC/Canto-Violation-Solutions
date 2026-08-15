"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { annotations, noticeSamples } from "@/content/notice";
import { ArrowRight } from "@/components/ui";

/**
 * THE SIGNATURE.
 *
 * Not a card next to the headline — the actual object. A visitor arrives
 * holding a piece of paper they cannot read, so the hero renders that piece
 * of paper and annotates it.
 *
 * Hovering or focusing an annotation lights up the corresponding field on the
 * sheet, and switching agency re-issues the whole document. By the time the
 * visitor reaches the CTA they already know what a violation number is and
 * where to find it — which is exactly what the intake form asks for.
 *
 * Deliberately NO leader lines: they need pixel geometry that breaks at every
 * breakpoint. Numbered markers on the fields plus a linked list is as legible
 * and survives any width.
 */
export function NoticeAnatomy() {
  const [agency, setAgency] = useState(noticeSamples[1].slug); // ECB — the one with a hearing
  const [active, setActive] = useState<string | null>(null);
  const sheetId = useId();

  const sample =
    noticeSamples.find((n) => n.slug === agency) ?? noticeSamples[0];

  const markerFor = (fieldId: string) =>
    annotations.findIndex((a) => a.field === fieldId);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
      {/* ---------------------------------------------------------------- */}
      {/* The document                                                      */}
      {/* ---------------------------------------------------------------- */}
      <div>
        {/* Agency selector — re-issues the notice */}
        <div
          role="tablist"
          aria-label="Which agency issued your notice"
          className="mb-5 flex flex-wrap gap-x-5 gap-y-2"
        >
          {noticeSamples.map((n) => {
            const selected = n.slug === agency;
            return (
              <button
                key={n.slug}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={sheetId}
                onClick={() => {
                  setAgency(n.slug);
                  setActive(null);
                }}
                className={`field-label pb-1 transition-colors ${
                  selected
                    ? "border-b border-signal-300 text-white"
                    : "border-b border-transparent text-dim hover:text-white"
                }`}
              >
                {n.tab}
              </button>
            );
          })}
        </div>

        <div
          id={sheetId}
          role="tabpanel"
          key={sample.slug}
          className="animate-fade relative"
        >
          {/* The sheet */}
          <article className="relative bg-white text-ink shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)]">
            <div className="perforated-top h-2 text-white" aria-hidden="true" />

            {/* Masthead */}
            <header className="border-b-2 border-ink px-6 pt-5 pb-4 sm:px-8">
              <p className="field-label text-muted">
                The City of New York
              </p>
              <p className="mt-2 font-display text-lg leading-tight font-semibold tracking-[-0.02em] sm:text-xl">
                {sample.issuer}
              </p>
              <p className="mt-3 font-mono text-[0.8125rem] tracking-[0.18em] uppercase">
                {sample.title}
              </p>
            </header>

            {/* Field grid — the form itself */}
            <div className="grid grid-cols-2 gap-px bg-rule">
              {sample.fields.map((f) => {
                const idx = markerFor(f.id);
                const annotated = idx >= 0;
                const isActive = active === f.id;
                return (
                  <div
                    key={f.id}
                    data-field={f.id}
                    // Conditional, never additive: emitting both `bg-white`
                    // and `bg-signal-soft` lets stylesheet order decide the
                    // winner rather than the state.
                    className={`relative px-6 py-4 transition-colors duration-200 sm:px-8 ${
                      f.wide ? "col-span-2" : ""
                    } ${isActive ? "bg-signal-soft" : "bg-white"}`}
                  >
                    <div className="flex items-center gap-2">
                      {annotated ? (
                        <span
                          aria-hidden="true"
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-mono text-[0.5625rem] font-semibold transition-colors ${
                            isActive
                              ? "bg-signal text-white"
                              : "bg-ink text-white"
                          }`}
                        >
                          {idx + 1}
                        </span>
                      ) : null}
                      <span className="field-label text-muted">{f.label}</span>
                    </div>
                    <p
                      className={`mt-2 font-mono text-[0.875rem] tracking-wide sm:text-[0.9375rem] ${
                        f.urgent ? "font-semibold text-signal" : "text-ink"
                      }`}
                    >
                      {f.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Footer rule + sample stamp */}
            <div className="flex items-end justify-between gap-6 border-t border-rule px-6 py-5 sm:px-8">
              <p className="max-w-[22ch] font-mono text-[0.625rem] leading-relaxed tracking-wider text-muted uppercase">
                Respondent must correct and certify, or appear as directed.
              </p>
              <p
                aria-hidden="true"
                className="shrink-0 -rotate-6 border-2 border-signal px-3 py-1 font-mono text-[0.6875rem] font-bold tracking-[0.2em] text-signal uppercase opacity-80"
              >
                Sample
              </p>
            </div>
          </article>
        </div>

        <p className="mt-4 font-mono text-[0.6875rem] tracking-wider text-dim uppercase">
          Illustration — not a real notice. No genuine case data shown.
        </p>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* The annotations                                                   */}
      {/* ---------------------------------------------------------------- */}
      <div className="lg:pt-11">
        <p className="field-label mb-5 text-dim">How to read it</p>

        <ul className="space-y-px">
          {annotations.map((a, i) => (
            <li key={a.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(a.field)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(a.field)}
                onBlur={() => setActive(null)}
                className={`group w-full border-l-2 py-3.5 pl-4 text-left transition-colors ${
                  active === a.field
                    ? "border-signal-300 bg-white/5"
                    : "border-ink-700 hover:border-dim"
                }`}
              >
                <span className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[0.625rem] font-semibold text-signal-300"
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-[0.9375rem] font-semibold ${
                      a.urgent ? "text-signal-300" : "text-white"
                    }`}
                  >
                    {a.label}
                  </span>
                </span>
                <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-dim">
                  {a.body}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${sample.slug}`}
          className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-white"
        >
          <span className="link-underline">What to do about {sample.code}</span>
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
