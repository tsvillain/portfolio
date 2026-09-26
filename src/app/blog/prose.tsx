"use client";

import { useEffect, useRef } from "react";

// ponytail: mermaid is heavy, so import it lazily and only when the post
// actually contains a diagram. Static posts pay nothing.
export default function Prose({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const nodes = el?.querySelectorAll<HTMLElement>(".mermaid");
    if (!nodes || nodes.length === 0) return;

    // Pull the e-ink palette straight from the CSS tokens so diagrams match
    // the rest of the site and there's no second copy of the colors to drift.
    const css = getComputedStyle(document.documentElement);
    const tok = (n: string) => css.getPropertyValue(n).trim() || undefined;
    const paper = tok("--color-paper");
    const ink = tok("--color-ink");
    const muted = tok("--color-muted");

    let cancelled = false;
    import("mermaid").then(({ default: mermaid }) => {
      if (cancelled) return;
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily: "var(--font-mono), monospace",
        themeVariables: {
          background: paper,
          primaryColor: paper,
          primaryBorderColor: ink,
          primaryTextColor: ink,
          secondaryColor: paper,
          tertiaryColor: paper,
          lineColor: ink,
          textColor: ink,
          // sequence diagram
          actorBkg: paper,
          actorBorder: ink,
          actorTextColor: ink,
          signalColor: ink,
          signalTextColor: ink,
          labelBoxBkgColor: paper,
          labelBoxBorderColor: ink,
          labelTextColor: ink,
          noteBkgColor: paper,
          noteBorderColor: muted,
          noteTextColor: ink,
        },
        flowchart: { curve: "linear" },
      });
      mermaid.run({ nodes });
    });
    return () => {
      cancelled = true;
    };
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose-eink mt-10"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
