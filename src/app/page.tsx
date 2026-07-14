import Image from "next/image";
import {
  personalInfo,
  experiences,
  projects,
  education,
  testimonials,
} from "../data/content";

const { social, email } = personalInfo;

const socialLinks = [
  { label: "github", href: social.github },
  { label: "linkedin", href: social.linkedin },
  { label: "x", href: social.twitter },
  { label: "medium", href: social.medium },
  { label: "newsletter", href: social.newsletter },
  { label: "email", href: `mailto:${email}` },
];

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="max-w-[68ch] mx-auto px-5 py-16">
      {/* header */}
      <header className="flex flex-col sm:flex-row sm:items-center gap-6">
        <Image
          src={personalInfo.headshot}
          alt={personalInfo.name}
          width={112}
          height={112}
          priority
          className="w-28 h-28 rounded-full"
        />
        <div>
          <h1 className="font-mono text-3xl font-bold tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="font-mono text-sm text-muted mt-1">
            {personalInfo.tagline}
          </p>
          <p className="font-mono text-[13px] text-muted mt-3">
            {socialLinks.map((s, i) => (
              <span key={s.label}>
                {i > 0 && " · "}
                <A href={s.href}>{s.label}</A>
              </span>
            ))}
          </p>
        </div>
      </header>

      {/* bio */}
      <section className="mt-12 space-y-4">
        <p>
          I&apos;m a senior software engineer with 5+ years shipping full-stack
          products: payments infrastructure, AI search pipelines, multi-tenant
          SaaS, and offline-first mobile apps. I like systems that survive
          contact with production.
        </p>
        <p>
          Currently at <A href="https://www.xfarm.ag/en">xFarm Technologies</A>,
          building Flutter apps for a farm management platform serving 600,000+
          farms across 14M+ hectares. Before that I owned the backend platform
          at <A href="https://breakthroughapps.io/">Breakthrough</A>, where I
          built Stripe billing on AWS ECS, AI semantic search on Vertex AI, and
          a Next.js paywall serving 60+ brands from one codebase. Earlier:{" "}
          <A href="https://pixelapps.io/">PixelApps</A> and{" "}
          <A href="https://www.lingopanda.app/">Pingolearn</A>.
        </p>
        <p>
          On the side I ship open source, most recently{" "}
          <A href="https://www.pglens.org/">pglens</A>, a PostgreSQL viewer, and{" "}
          <A href="https://github.com/tsvillain/Wallbay">Wallbay</A>, a Flutter
          wallpaper app with 114+ GitHub stars. I have strong opinions about
          webhook idempotency and will share them unprompted.
        </p>
      </section>

      {/* work */}
      <h2 className="font-mono text-base font-semibold lowercase mt-14 mb-5">
        work
      </h2>
      <section className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company}>
            <p className="font-mono text-xs text-muted tabular-nums">
              {exp.period}
            </p>
            <p className="mt-1">
              <A href={exp.url}>{exp.company}</A>{" "}
              <span className="text-muted">· {exp.role}</span>
            </p>
            <p className="mt-1">{exp.description}</p>
            {exp.achievements.length > 0 && (
              <ul className="mt-2 space-y-1 list-disc pl-5 marker:text-muted">
                {exp.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* projects */}
      <h2 className="font-mono text-base font-semibold lowercase mt-14 mb-5">
        projects
      </h2>
      <section className="space-y-4">
        <p className="text-muted">
          Work projects live in the entries above; these are the ones where I
          also own the repo.
        </p>
        {projects.map((p) => (
          <p key={p.title}>
            <A href={p.link}>{p.title}</A>: {p.description}
          </p>
        ))}
      </section>

      {/* writing */}
      <h2 className="font-mono text-base font-semibold lowercase mt-14 mb-5">
        writing
      </h2>
      <section className="space-y-4">
        <p>
          <A href={social.newsletter}>First Token</A>: my newsletter on AI and
          engineering, one useful idea at a time.
        </p>
        <p>
          <A href={social.medium}>Medium</A>: longer-form posts on Flutter,
          backend architecture, and things I broke in production.
        </p>
      </section>

      {/* testimonials */}
      <h2 className="font-mono text-base font-semibold lowercase mt-14 mb-5">
        nice things people said
      </h2>
      <section className="space-y-5">
        {testimonials.map((t) => (
          <blockquote key={t.author} className="border-l-2 border-rule pl-4">
            <p>&ldquo;{t.text}&rdquo;</p>
            <p className="font-mono text-xs text-muted mt-1">
              {t.author}, {t.role}
            </p>
          </blockquote>
        ))}
      </section>

      {/* footer */}
      <hr className="border-rule mt-14" />
      <footer className="font-mono text-xs text-muted mt-5 space-y-1">
        <p>{education}</p>
        <p>
          © 2026 · built with next.js · no tracking scripts ·{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </footer>
    </div>
  );
}
