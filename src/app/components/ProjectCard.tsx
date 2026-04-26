import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string | null;
  impact?: string | null;
  type?: string;
}

export default function ProjectCard({ title, description, techStack, link, impact, type }: ProjectProps) {
  return (
    <div className="card">
      <div className="card-title" style={{borderBottom: '3px solid black'}}>{title}</div>
      <p className="mb-4">{description}</p>

      {impact && (
        <div className="mb-4 p-3 accent-bg" style={{border: '2px solid black'}}>
          <strong>Impact: </strong>
          <span>{impact}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}