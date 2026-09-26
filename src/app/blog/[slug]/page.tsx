import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Marked } from "marked";
import { getAllPosts, getPost } from "../../../data/posts";
import Prose from "../prose";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// mermaid code fences pass through as-is for the client to render; everything
// else is standard markdown. Content is the author's own, so no sanitizer.
const md = new Marked({
  renderer: {
    code({ text, lang }) {
      if (lang === "mermaid") return `<pre class="mermaid">${text}</pre>`;
      return false; // fall back to default renderer
    },
  },
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} — Tekeshwar Singh`,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const html = md.parse(post.content) as string;

  return (
    <div className="max-w-[68ch] mx-auto px-5 py-16">
      <p className="font-mono text-[13px] text-muted">
        <Link href="/blog">← blog</Link>
      </p>

      <h1 className="font-mono text-2xl font-bold tracking-tight mt-8 leading-snug">
        {post.title}
      </h1>
      <p className="font-mono text-xs text-muted tabular-nums mt-2">
        {post.date}
      </p>

      <Prose html={html} />

      <hr className="border-rule mt-14" />
      <footer className="font-mono text-xs text-muted mt-5">
        <Link href="/blog">← more posts</Link>
      </footer>
    </div>
  );
}
