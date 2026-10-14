import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { BlogArticle } from "./blog-article";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    ogTitle: post.title,
    images: [post.image],
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? blogPosts[index - 1] : null;
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return <BlogArticle post={post} prev={prev} next={next} />;
}
