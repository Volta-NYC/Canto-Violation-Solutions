"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";
import { PlaceholderValue } from "@/components/ui";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="border-t border-rule">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <li key={item.question} className="border-b border-rule">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-sans text-[1.0625rem] font-medium tracking-[-0.01em] text-ink sm:text-lg">
                  {item.question}
                </span>
                <span
                  className="relative mt-1.5 h-3.5 w-3.5 shrink-0 text-body transition-colors group-hover:text-ink"
                  aria-hidden="true"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                      open ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-[1.0625rem] leading-relaxed text-body">
                  {item.needsOwnerInput ? (
                    <>
                      <PlaceholderValue label="answer to this question" />{" "}
                      <span className="text-body">
                        {item.answer.replace("PLACEHOLDER — ", "")}
                      </span>
                    </>
                  ) : (
                    item.answer
                  )}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
