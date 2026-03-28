"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="px-6 md:px-12 py-24 md:py-32">
      {/* Back link */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft width={16} height={16} />
          Back to Journal
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-block text-xs capitalize py-1 px-3 rounded-full bg-white/10 border border-white/10 text-muted-foreground mb-6"
        >
          {post.category}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] leading-[1.1] tracking-tight"
        >
          {post.title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg text-muted-foreground leading-relaxed"
        >
          {post.excerpt}
        </motion.p>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-12 mb-16"
      >
        <div
          className="w-full aspect-[16/9] rounded-[20px] bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {post.content.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground leading-[1.9]"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-3xl mx-auto mt-16 pt-12 border-t border-theme"
      >
        <p className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] leading-snug">
          Ready to make your event unforgettable?
        </p>
        <Link
          href="/inquire"
          className="inline-block mt-4 text-sm uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors"
        >
          Get a Quote &rarr;
        </Link>
      </motion.div>
    </article>
  );
}
