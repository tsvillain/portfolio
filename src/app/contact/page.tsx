import Section from "../components/Section";
import { personalInfo } from "../../data/content";

export default function Contact() {
  const channels = [
    { label: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: "github", value: "@tsvillain", href: personalInfo.social.github },
    { label: "linkedin", value: "in/tsvillain", href: personalInfo.social.linkedin },
    { label: "x", value: "@tsvillain", href: personalInfo.social.twitter },
  ];

  return (
    <Section title="Contact" subtitle="let&apos;s build something" kicker="contact">
      <p className="lede" style={{ marginTop: 0 }}>
        Open to senior IC roles, contract work, and interesting collaborations.
        Based in {personalInfo.location} · {personalInfo.timezone}.
      </p>

      <div className="feature-grid" style={{ marginTop: "2rem" }}>
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="feature"
            style={{ display: "block" }}
          >
            <div className="feature-label">{c.label}</div>
            <div className="feature-title mono" style={{ fontSize: "0.95rem" }}>
              {c.value}
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
          Send email →
        </a>
      </div>
    </Section>
  );
}
