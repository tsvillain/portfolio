import React from "react";

interface ExperienceProps {
  index?: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  techStack: string[];
  url?: string;
}

export default function ExperienceCard({
  index,
  company,
  role,
  period,
  location,
  description,
  achievements,
  techStack,
  url,
}: ExperienceProps) {
  const num =
    typeof index === "number" ? `#${String(index + 1).padStart(2, "0")}` : null;

  return (
    <article className="entry">
      <div className="entry-meta">
        {num && <span className="entry-num">{num}</span>}
        <span className="entry-date">{period}</span>
        {location && <span className="badge">{location}</span>}
      </div>

      <h3 className="entry-title">{role}</h3>
      <p className="entry-sub">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          company
        )}
      </p>

      <p className="entry-body">{description}</p>

      {achievements.length > 0 && (
        <ul className="entry-list">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}

      <div className="tag-row">
        {techStack.map((tech) => (
          <span key={tech} className="badge badge-soft">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
