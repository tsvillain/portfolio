import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  kicker?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  subtitle,
  kicker,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(title || kicker) && (
          <div className="section-head">
            <h2 className="section-title">
              {title}
              {subtitle && <em> — {subtitle}</em>}
            </h2>
            {kicker && <span className="section-kicker">{kicker}</span>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
