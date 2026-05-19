import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/content";

export default function Portfolio() {
  const pro = projects.filter((p) => p.type === "Professional");
  const per = projects.filter((p) => p.type === "Personal");

  return (
    <div>
      <Section title="Professional" subtitle="shipped at companies" kicker="work · pro">
        {pro.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </Section>

      <Section title="Personal" subtitle="open source &amp; side" kicker="work · personal">
        {per.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </Section>
    </div>
  );
}
