import * as xml2js from "xml2js";

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  categories?: string[];
}

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
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

export function formatDate(dateString: string): string {
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

export function extractExcerpt(content: string, maxLength: number = 200): string {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, "");

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + "...";
}

