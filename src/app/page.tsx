import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import { skills, experiences, projects, testimonials } from "../data/content";
import Link from "next/link";
import { ArrowRight, Code, Database, Cloud, Layers, Wallet, Server, ExternalLink, Calendar, Quote } from "lucide-react";
import { fetchMediumArticles, formatDate, extractExcerpt } from "../lib/medium";

export default async function Home() {
  // Filter for featured content
  const featuredExperiences = experiences.slice(0, 1);
  const featuredProjects = projects.filter(p => p.type === "Professional").slice(0, 2);
  const articles = await fetchMediumArticles();
  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const featuredTestimonial = testimonials[0];

  const skillCategories = [
    { name: "Frontend", items: skills.frontend, icon: <Layers size={24} /> },
    { name: "Backend & APIs", items: [...skills.backend, ...skills.payment_apis.slice(0, 3)], icon: <Server size={24} /> },
    { name: "Mobile", items: skills.languages.filter(l => l === "Dart").concat(skills.frontend.filter(f => f === "Flutter" || f === "Riverpod")), icon: <Code size={24} /> },
    { name: "Cloud & DevOps", items: skills.cloud, icon: <Cloud size={24} /> },
    { name: "Architecture", items: skills.architecture, icon: <Database size={24} /> },
    { name: "Payment Systems", items: skills.payment_apis.filter(p => p.includes("Stripe") || p.includes("RevenueCat")), icon: <Wallet size={24} /> },
  ];

  return (
    <div>
      <Hero />

      <Section 
        title="Expertise & Skills" 
        subtitle="A comprehensive toolkit for building scalable, high-performance applications."
        className="bg-stone-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="card border-t-4 border-t-primary">
              <div className="text-primary mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span key={skill} className="text-sm text-stone-600 bg-stone-100 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Featured Experience">
        <div className="space-y-8">
          {featuredExperiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
          
          <div className="text-center mt-8">
            <Link href="/work" className="btn btn-outline">
              View Full Career History <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section 
        title="Selected Work" 
        subtitle="Highlighting key projects that demonstrate technical depth and business impact."
        className="bg-stone-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/portfolio" className="btn btn-primary">
            View All Projects <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </Section>

      <Section title="Featured Insights & Recommendations" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ExternalLink size={20} className="text-primary" />
                Latest Article
              </h3>
              <div className="card h-full flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold hover:text-primary transition-colors">
                    <a href={featuredArticle.link} target="_blank" rel="noopener noreferrer">
                      {featuredArticle.title}
                    </a>
                  </h4>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
                  <Calendar size={14} />
                  <span>{formatDate(featuredArticle.pubDate)}</span>
                </div>

                <p className="text-stone-600 mb-4 flex-grow">
                  {extractExcerpt(featuredArticle.content, 150)}
                </p>
                
                <Link href="/articles" className="text-primary font-medium inline-flex items-center hover:underline mt-auto">
                  Read More Articles <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          )}

          {/* Featured Testimonial */}
          {featuredTestimonial && (
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Quote size={20} className="text-primary" />
                Recommendation
              </h3>
              <div className="card h-full flex flex-col">
                <blockquote className="flex-grow text-stone-600 italic mb-6 leading-relaxed relative z-10">
                  "{featuredTestimonial.text}"
                </blockquote>

                <div className="mt-auto border-t pt-4">
                  <div className="font-bold text-stone-900">{featuredTestimonial.author}</div>
                  {featuredTestimonial.role && (
                    <div className="text-sm text-stone-500">{featuredTestimonial.role}</div>
                  )}
                </div>
                
                <div className="mt-4">
                  <Link href="/recommendations" className="text-primary font-medium inline-flex items-center hover:underline">
                    View All Recommendations <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
