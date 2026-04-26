import { Suspense } from "react";
import Section from "../components/Section";

const sampleArticles = [
  {
    title: "Building Scalable Flutter Apps with Clean Architecture",
    link: "https://medium.com/@tsvillain",
    pubDate: "2024-01-15",
    content: "A comprehensive guide to structuring large Flutter applications using Clean Architecture principles, separating concerns into presentation, domain, and data layers for maintainable code.",
  },
  {
    title: "Node.js Performance Optimization Tips",
    link: "https://medium.com/@tsvillain",
    pubDate: "2023-11-20",
    content: "Practical techniques for optimizing Node.js backend performance, including proper caching strategies, database query optimizations, and efficient memory management.",
  },
  {
    title: "Stripe Payment Integration Best Practices",
    link: "https://medium.com/@tsvillain",
    pubDate: "2023-08-10",
    content: "A deep dive into integrating Stripe payments securely, handling webhooks, managing subscriptions, and implementing proper error handling for production apps.",
  }
];

async function ArticlesList() {
  try {
    const { fetchMediumArticles, formatDate, extractExcerpt } = await import("../../lib/medium");
    const articles = await fetchMediumArticles();
    
    if (articles.length > 0) {
      return (
        <div className="space-y-4">
          {articles.map((a, i) => (
            <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="block card card-title" style={{cursor: 'pointer'}}>
              <div>{a.title}</div>
              <p className="text-sm mt-2 font-normal">{extractExcerpt(a.content)}</p>
              <p className="text-xs mt-2" style={{border: 'none'}}>{formatDate(a.pubDate)}</p>
            </a>
          ))}
        </div>
      );
    }
  } catch (e) {
    console.log("Using fallback articles");
  }
  
  return (
    <div className="space-y-4">
      {sampleArticles.map((a, i) => (
        <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="block card card-title" style={{cursor: 'pointer'}}>
          <div>{a.title}</div>
          <p className="text-sm mt-2 font-normal">{a.content}</p>
          <p className="text-xs mt-2" style={{border: 'none'}}>{a.pubDate}</p>
        </a>
      ))}
    </div>
  );
}

export default function Articles() {
  return (
    <div className="pt-20">
      <Section title="Articles" subtitle="Thoughts on tech">
        <Suspense fallback={<div className="card">Loading...</div>}>
          <ArticlesList />
        </Suspense>
      </Section>
    </div>
  );
}