import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../data/content";

export default function WorkExperience() {
  return (
    <div className="pt-20">
      <Section title="Experience" subtitle="My journey">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Section>
    </div>
  );
}