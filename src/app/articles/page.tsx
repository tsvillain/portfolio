import { Suspense } from "react";
import Section from "../components/Section";

const sampleArticles = [
  {
    title: "Building Scalable Flutter Apps with Clean Architecture",
    link: "https://medium.com/@tsvillain",
    pubDate: "2024-01-15",
    content:
      "A comprehensive guide to structuring large Flutter applications using Clean Architecture principles, separating concerns into presentation, domain, and data layers for maintainable code.",
  },
  {
    title: "Node.js Performance Optimization Tips",
    link: "https://medium.com/@tsvillain",
    pubDate: "2023-11-20",
    content:
      "Practical techniques for optimizing Node.js backend performance, including proper caching strategies, database query optimizations, and efficient memory management.",
  },
  {
    title: "Stripe Payment Integration Best Practices",
    link: "https://medium.com/@tsvillain",
    pubDate: "2023-08-10",
    content:
      "A deep dive into integrating Stripe payments securely, handling webhooks, managing subscriptions, and implementing proper error handling for production apps.",
  },
];

interface Article {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

function ArticleEntry({ article, index }: { article: Article; index: number }) {
  const num = `#${String(index + 1).padStart(3, "0")}`;
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block" }}
    >
      <article className="entry">
        <div className="entry-meta">
          <span className="entry-num">{num}</span>
          <span className="entry-date">{article.pubDate}</span>
          <span className="badge">writing</span>
        </div>
        <h3 className="entry-title">{article.title}</h3>
        <p className="entry-body">{article.content}</p>
        <span className="link-arrow">Read on Medium →</span>
      </article>
    </a>
  );
}

async function ArticlesList() {
  try {
    const { fetchMediumArticles, formatDate, extractExcerpt } = await import(
      "../../lib/medium"
    );
    const articles = await fetchMediumArticles();

    if (articles.length > 0) {
      return (
        <>
          {articles.map((a, i) => (
            <ArticleEntry
              key={i}
              index={i}
              article={{
                title: a.title,
                link: a.link,
                pubDate: formatDate(a.pubDate),
                content: extractExcerpt(a.content),
              }}
            />
          ))}
        </>
      );
    }
  } catch {
    // fall through to sample
  }

  return (
    <>
      {sampleArticles.map((a, i) => (
        <ArticleEntry key={i} index={i} article={a} />
      ))}
    </>
  );
}

export default function Articles() {
  return (
    <Section title="Writing" subtitle="thoughts on shipping" kicker="archive">
      <Suspense
        fallback={
          <p className="muted mono" style={{ fontSize: "0.875rem" }}>
            loading…
          </p>
        }
      >
        <ArticlesList />
      </Suspense>
    </Section>
  );
}
