import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../data/content";

export default function WorkExperience() {
  return (
    <div className="pt-24 pb-12">
      <Section 
        title="Work Experience" 
        subtitle="A track record of delivering high-impact solutions and leading engineering initiatives."
      >
        <div className="space-y-12 relative">
          {/* Vertical Line for Timeline Effect on Desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-stone-200 -z-10"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
