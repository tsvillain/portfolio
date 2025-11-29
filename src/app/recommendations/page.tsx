import Section from "../components/Section";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/content";

export default function LinkedInRecommendations() {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Recommendations"
        subtitle="What others say about working with me."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="card relative flex flex-col">
              <blockquote className="flex-grow text-stone-600 italic mb-6 leading-relaxed relative z-10">
                "{t.text}"
              </blockquote>

              <div className="mt-auto">
                <div className="font-bold text-stone-900">{t.author}</div>
                {t.role && (
                  <div className="text-sm text-stone-500">{t.role}</div>
                )}
                <div className="mt-2 inline-block px-2 py-0.5 rounded text-xs font-medium bg-stone-100 text-stone-500 uppercase tracking-wide">
                  {t.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
