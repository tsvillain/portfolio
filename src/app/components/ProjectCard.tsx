import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
    <div className="card flex flex-col h-full group">
      <div className="mb-4 flex justify-between items-start">
        <div>
          {type && <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2 block">{type}</span>}
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary">
            {link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
          </a>
        )}
      </div>
      
      <p className="text-stone-600 mb-4 flex-grow">
        {description}
      </p>

      {impact && (
        <div className="mb-6 p-3 bg-stone-50 rounded-md border-l-2 border-primary text-sm text-stone-700">
          <strong>Impact:</strong> {impact}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
