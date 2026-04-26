import Section from "../components/Section";
import { testimonials } from "../../data/content";

export default function Recommendations() {
  return (
    <div className="pt-20">
      <Section title="Recommendations" subtitle="What people say">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <blockquote>"{t.text}"</blockquote>
              <div className="mt-4">
                <strong>{t.author}</strong>
                {t.role && <p className="text-sm">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}