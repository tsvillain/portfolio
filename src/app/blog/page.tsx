import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../../data/posts";

export const metadata: Metadata = {
  title: "Blog — Tekeshwar Singh",
  description: "Notes on backend, payments, AI, and things I broke in production.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const byNewest = getAllPosts();

  return (
    <div className="max-w-[68ch] mx-auto px-5 py-16">
      <p className="font-mono text-[13px] text-muted">
        <Link href="/">← home</Link>
      </p>

      <h2 className="font-mono text-base font-semibold lowercase mt-8 mb-8">
        blog
      </h2>

      <section className="space-y-8">
        {byNewest.map((p) => (
          <article key={p.slug}>
            <p className="font-mono text-xs text-muted tabular-nums">
              {p.date}
            </p>
            <p className="mt-1">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </p>
            <p className="mt-1 text-muted">{p.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
