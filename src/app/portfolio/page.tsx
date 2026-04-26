import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/content";

export default function Portfolio() {
  const pro = projects.filter(p => p.type === "Professional");
  const per = projects.filter(p => p.type === "Personal");

  return (
    <div className="pt-20">
      <Section title="Work" subtitle="What I've built">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pro.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </Section>

      <Section title="Personal" subtitle="Side projects">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {per.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </Section>
    </div>
  );
}