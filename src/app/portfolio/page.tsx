import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/content";

export default function Portfolio() {
  // Group projects by type if desired, or just list them all
  const professionalProjects = projects.filter(p => p.type === "Professional");
  const personalProjects = projects.filter(p => p.type === "Personal");

  return (
    <div className="pt-24 pb-12">
      <Section 
        title="Professional Projects" 
        subtitle="Enterprise-grade applications and systems built for clients and employers."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      <Section 
        title="Open Source & Personal Projects" 
        subtitle="Tools, libraries, and applications developed to solve problems and explore new technologies."
        className="bg-stone-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
