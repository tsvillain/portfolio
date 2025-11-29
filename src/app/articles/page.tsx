import { Suspense } from "react";
import Section from "../components/Section";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { fetchMediumArticles, formatDate, extractExcerpt } from "../../lib/medium";

async function ArticlesList() {
  const articles = await fetchMediumArticles();

  if (articles.length === 0) {
    return (
      <div className="card p-8 text-center text-stone-500">
        <p>Unable to load articles at the moment. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {articles.map((article, index) => (
        <div key={index} className="card group">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h3>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary">
              <ExternalLink size={20} />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
            <Calendar size={14} />
            <span>{formatDate(article.pubDate)}</span>
          </div>

          <p className="text-stone-600 mb-4">
            {extractExcerpt(article.content)}
          </p>
          
          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              <Tag size={14} className="text-stone-400 mt-1" />
              {article.categories.slice(0, 3).map((cat) => (
                <span key={cat} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MediumArticles() {
  return (
    <div className="pt-24 pb-12">
      <Section 
        title="Technical Writing" 
        subtitle="Thoughts on full-stack development, mobile architecture, and emerging technologies."
      >
        <Suspense
          fallback={
            <div className="card p-8 text-center text-stone-500 animate-pulse">
              <p>Loading articles...</p>
            </div>
          }
        >
          <ArticlesList />
        </Suspense>
      </Section>
    </div>
  );
}
