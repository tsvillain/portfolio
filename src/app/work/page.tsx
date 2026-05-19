import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../data/content";

export default function WorkExperience() {
  return (
    <Section title="Experience" subtitle="full history" kicker="experience">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp.company} index={index} {...exp} />
      ))}
    </Section>
  );
}
