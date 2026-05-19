import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import { experiences, projects } from "../data/content";
import Link from "next/link";

export default async function Home() {
  const featuredExp = experiences.slice(0, 2);
  const featuredPro = projects.filter((p) => p.type === "Professional").slice(0, 3);

  const focus = [
    {
      label: "Backend",
      title: "Production-grade",
      body: "Multi-tenant SaaS, payments infra, event-driven pipelines. Built on AWS ECS, GCP, Firebase.",
    },
    {
      label: "Mobile",
      title: "Cross-platform",
      body: "Flutter apps for fleets, farms, wellness. Offline-first, Clean Architecture, Riverpod / MobX.",
    },
    {
      label: "AI",
      title: "Ship the pipeline",
      body: "Vector embeddings, semantic search, Gemini reranking. Real-time indexing on Firestore + BigQuery.",
    },
  ];

  return (
    <div>
      <Hero />

      <Section title="What I focus on" kicker="focus">
        <div className="feature-grid">
          {focus.map((f) => (
            <div key={f.title} className="feature">
              <div className="feature-label">{f.label}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" subtitle="where I&apos;ve shipped" kicker="experience">
        {featuredExp.map((exp, i) => (
          <ExperienceCard key={exp.company} index={i} {...exp} />
        ))}
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/work" className="link-arrow">
            View all experience →
          </Link>
        </div>
      </Section>

      <Section title="Selected work" subtitle="key projects" kicker="work">
        {featuredPro.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/portfolio" className="link-arrow">
            View all projects →
          </Link>
        </div>
      </Section>
    </div>
  );
}
