"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll reveal. One effect, applied consistently — deliberately the only
 * scroll-triggered motion on the site.
 *
 * Falls back to visible immediately when IntersectionObserver is unavailable,
 * and the CSS honours prefers-reduced-motion independently, so content is
 * never gated behind an animation that may not run.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Trigger slightly BEFORE the element enters the viewport, so fast
      // scrolling never lands on a section that is still fading in.
      { threshold: 0.02, rootMargin: "0px 0px 120px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
