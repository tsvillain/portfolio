import { Suspense } from "react";
import * as xml2js from "xml2js";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  categories?: string[];
}

async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    const response = await fetch("https://tsvillain.medium.com/feed", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed");
    }

    const xmlText = await response.text();

    // Parse the XML content using xml2js
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlText);

    const items = result.rss?.channel?.[0]?.item || [];
    const articles: MediumArticle[] = [];

    items.forEach((item: any) => {
      const title = item.title?.[0] || "";
      const link = item.link?.[0] || "";
      const pubDate = item.pubDate?.[0] || "";
      const content =
        item.description?.[0] || item["content:encoded"]?.[0] || "";

      // Extract categories
      const categories: string[] = [];
      if (item.category) {
        item.category.forEach((cat: any) => {
          if (typeof cat === "string") {
            categories.push(cat);
          } else if (cat._) {
            categories.push(cat._);
          }
        });
      }

      articles.push({
        title,
        link,
        pubDate,
        content,
        categories,
      });
    });

    return articles;
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

function extractExcerpt(content: string, maxLength: number = 200): string {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, "");

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + "...";
}

async function ArticlesList() {
  const articles = await fetchMediumArticles();

  if (articles.length === 0) {
    return (
      <div className="terminal-card">
        <p>Unable to load articles at the moment. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <h2>technical writing</h2>
        <p>
          I regularly write about full-stack development, mobile development,
          <span className="code">Flutter</span>, serverless architectures, and emerging technologies. Here are
          my latest published articles on Medium.
        </p>

        {articles.map((article, index) => (
          <div key={index} className="terminal-card">
            <h3>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h3>
            <p>{extractExcerpt(article.content)}</p>
            <p>
              <strong>Published:</strong> {formatDate(article.pubDate)}
            </p>
            {article.categories && article.categories.length > 0 && (
              <p>
                <strong>Categories:</strong>{" "}
                {article.categories.slice(0, 3).map(cat => (
                  <span key={cat} className="code">{cat}</span>
                )).reduce((prev, curr, index) => [
                  ...prev,
                  index === 0 ? curr : <span key={index}> {curr}</span>
                ], [] as React.ReactNode[])}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default function MediumArticles() {
  return (
    <div>
      <h1>articles</h1>

      <Suspense
        fallback={
          <div className="terminal-card">
            <p>Loading articles...</p>
          </div>
        }
      >
        <ArticlesList />
      </Suspense>

    </div>
  );
}
