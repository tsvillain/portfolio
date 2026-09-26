import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO, e.g. "2026-09-26"
  summary: string;
  content: string; // raw markdown body (frontmatter stripped)
};

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// ponytail: minimal frontmatter parser — flat `key: value` lines between the
// first two `---` fences. No nested YAML, no quotes/multiline. Reach for
// gray-matter only if a post needs more than that.
function parse(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: m[2] };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { meta, body } = parse(fs.readFileSync(path.join(BLOG_DIR, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: meta.title ?? f,
        date: meta.date ?? "",
        summary: meta.summary ?? "",
        content: body.trim(),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) =>
  getAllPosts().find((p) => p.slug === slug);
