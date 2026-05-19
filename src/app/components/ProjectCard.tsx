import React from "react";

interface ProjectProps {
  index?: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string | null;
  impact?: string | null;
  type?: string;
}

export default function ProjectCard({
  index,
  title,
  description,
  techStack,
  link,
  impact,
  type,
}: ProjectProps) {
  const num =
    typeof index === "number" ? `#${String(index + 1).padStart(3, "0")}` : null;

  const content = (
    <article className="entry">
      <div className="entry-meta">
        {num && <span className="entry-num">{num}</span>}
        {type && (
          <span className={`badge ${type === "Professional" ? "badge-accent" : ""}`}>
            {type.toLowerCase()}
          </span>
        )}
      </div>

      <h3 className="entry-title">{title}</h3>
      <p className="entry-body">{description}</p>

      {impact && (
        <p className="entry-sub" style={{ marginBottom: "0.75rem" }}>
          <span className="mono muted" style={{ fontSize: "0.75rem" }}>
            impact ·{" "}
          </span>
          {impact}
        </p>
      )}

      <div className="tag-row">
        {techStack.map((tech) => (
          <span key={tech} className="badge badge-soft">
            {tech}
          </span>
        ))}
      </div>

      {link && (
        <p style={{ marginTop: "0.75rem" }}>
          <span className="link-arrow">
            visit project →
          </span>
        </p>
      )}
    </article>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
        {content}
      </a>
    );
  }

  return content;
}
