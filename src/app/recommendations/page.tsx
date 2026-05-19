import Section from "../components/Section";
import { testimonials } from "../../data/content";

export default function Recommendations() {
  return (
    <Section title="Refs" subtitle="what people say" kicker="references">
      {testimonials.map((t, i) => {
        const num = `#${String(i + 1).padStart(2, "0")}`;
        return (
          <article key={i} className="entry">
            <div className="entry-meta">
              <span className="entry-num">{num}</span>
              {t.type && <span className="badge">{t.type.toLowerCase()}</span>}
            </div>
            <blockquote
              style={{
                margin: 0,
                fontSize: "1.05rem",
                lineHeight: 1.6,
                color: "var(--fg-soft)",
                fontStyle: "italic",
                borderLeft: "2px solid var(--border)",
                paddingLeft: "1rem",
              }}
            >
              {t.text}
            </blockquote>
            <p
              className="entry-sub"
              style={{ marginTop: "0.75rem", marginBottom: 0 }}
            >
              <strong style={{ color: "var(--fg)" }}>{t.author}</strong>
              {t.role && ` · ${t.role}`}
            </p>
          </article>
        );
      })}
    </Section>
  );
}
