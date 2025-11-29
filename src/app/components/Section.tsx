import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-12">
            {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
            {subtitle && <p className="text-lg max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

