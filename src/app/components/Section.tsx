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
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-8">
            <h2>{title}</h2>
            {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}