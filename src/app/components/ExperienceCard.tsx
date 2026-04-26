import React from 'react';

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
  url?: string;
}

export default function ExperienceCard({ company, role, period, description, achievements, techStack, url }: ExperienceProps) {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3>{role}</h3>
          <a href={url} target="_blank" rel="noopener noreferrer">{company}</a>
        </div>
        <span className="tag">{period}</span>
      </div>

      <p className="mb-4">{description}</p>

      {achievements.length > 0 && (
        <ul className="space-y-2 mb-4">
          {achievements.map((a, i) => (
            <li key={i} className="flex gap-3">
              <span>→</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}