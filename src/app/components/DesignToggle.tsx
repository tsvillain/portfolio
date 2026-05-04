"use client";

import { useEffect, useState } from "react";

type Design = "brutal" | "minimal";

export default function DesignToggle() {
  const [design, setDesign] = useState<Design>("minimal");

  useEffect(() => {
    const stored = (localStorage.getItem("design") as Design) || "minimal";
    setDesign(stored);
  }, []);

  const toggle = () => {
    const next: Design = design === "brutal" ? "minimal" : "brutal";
    setDesign(next);
    document.documentElement.setAttribute("data-design", next);
    localStorage.setItem("design", next);
  };

  return (
    <button
      onClick={toggle}
      className="design-toggle"
      aria-label="Toggle design"
      title={design === "brutal" ? "Switch to minimal" : "Switch to brutal"}
    >
      {design === "brutal" ? "MIN" : "BRUTAL"}
    </button>
  );
}
