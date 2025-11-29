import React from 'react';
import { Building2, Calendar } from 'lucide-react';

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
    <div className="card relative border-l-4 border-l-primary border-y-stone-200 border-r-stone-200">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-stone-900">{role}</h3>
          <div className="flex items-center gap-2 text-lg font-medium text-primary mt-1">
            <Building2 size={18} />
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {company}
              </a>
            ) : (
              <span>{company}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-stone-500 text-sm font-medium mt-2 md:mt-0 bg-stone-100 px-3 py-1 rounded-full w-fit">
          <Calendar size={14} />
          {period}
        </div>
      </div>

      <p className="mb-6 text-stone-700 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-3 text-stone-600">
              <span className="text-primary mt-1.5">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
