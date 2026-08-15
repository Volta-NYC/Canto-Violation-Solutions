"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { nav } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-rule bg-paper/92 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <Container size="wide">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Canto Violation Solutions — home"
          >
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[0.9375rem] font-medium transition-colors ${
                    active ? "text-ink" : "text-body hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-[3px] bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-700 sm:inline-flex"
            >
              Get a free review
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-rule bg-paper md:hidden"
      >
        <Container size="wide">
          <nav className="flex flex-col py-3" aria-label="Primary, mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule-soft py-4 text-lg font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 mb-4 inline-flex items-center justify-center rounded-[3px] bg-ink px-5 py-4 text-base font-semibold text-white"
            >
              Get a free review
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
