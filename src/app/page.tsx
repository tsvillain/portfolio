import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import { experiences, projects } from "../data/content";
import Link from "next/link";

export default async function Home() {
  const featuredExp = experiences.slice(0, 1);
  const featuredPro = projects.filter(p => p.type === "Professional").slice(0, 2);

  return (
    <div>
      <Hero />
      
      <Section title="Skills" subtitle="What I work with">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "FRONTEND", items: ["React", "Next.js", "Flutter"] },
            { name: "BACKEND", items: ["Node.js", "Express", "TypeScript"] },
            { name: "CLOUD", items: ["AWS", "GCP", "Firebase"] },
            { name: "PAYMENTS", items: ["Stripe", "RevenueCat"] },
          ].map(cat => (
            <div key={cat.name} className="card-flat">
              <div className="card-title">{cat.name}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {cat.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" subtitle="Where I've worked">
        <div className="space-y-6">
          {featuredExp.map((exp, i) => <ExperienceCard key={i} {...exp} />)}
          <Link href="/work" className="btn btn-outline">View All</Link>
        </div>
      </Section>

      <Section title="Selected Work" subtitle="Key projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPro.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
        <Link href="/portfolio" className="btn btn-primary mt-8">View All Projects</Link>
      </Section>
    </div>
  );
}