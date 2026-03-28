"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocation } from "@/components/location-provider";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function BlogPage() {
  const { location } = useLocation();

  const sortedPosts = [...blogPosts].sort((a, b) => {
    const aRelevant = location.blogCityKeywords.some(
      (kw) =>
        a.title.toLowerCase().includes(kw) ||
        a.excerpt.toLowerCase().includes(kw)
    );
    const bRelevant = location.blogCityKeywords.some(
      (kw) =>
        b.title.toLowerCase().includes(kw) ||
        b.excerpt.toLowerCase().includes(kw)
    );
    if (aRelevant && !bRelevant) return -1;
    if (!aRelevant && bRelevant) return 1;
    return 0;
  });

  const [featured, ...rest] = sortedPosts;

  return (
    <section className="relative px-6 md:px-12 py-24 md:py-32">
      {/* ─── Background label ─── */}
      <span className="absolute -top-10 -left-[18%] -z-50 select-none text-[180px] font-extrabold leading-[1] text-foreground/[0.025] md:text-[250px] lg:text-[400px]">
        Blog
      </span>

      {/* ─── HEADER ─── */}
      <motion.div
        className="text-center mb-16 md:mb-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] leading-[1.4] tracking-tight"
        >
          Notes From the Dance Floor
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-[800px] mt-4 text-xl md:text-2xl text-muted-foreground leading-[2]"
        >
          Real advice from hundreds of weddings, socials, and late nights
          across Manitoba and Saskatchewan.
        </motion.p>
      </motion.div>

      {/* ─── FEATURED + SIDE GRID ─── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr]"
      >
        {/* Featured — large card */}
        <motion.div variants={fadeUp} className="col-span-1 md:col-span-2 lg:col-span-1 md:row-span-2">
          <Link href={`/blog/${featured.slug}`} className="group block h-full">
            <div
              style={{ backgroundImage: `url(${featured.image})` }}
              className="relative flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-6 md:p-8 text-white min-h-[400px] md:min-h-full transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg]"
            >
              <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:h-full" />
              <article className="relative z-0 flex items-end">
                <div className="flex flex-1 flex-col gap-3">
                  <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight">
                    {featured.title}
                  </h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm capitalize py-px px-2.5 rounded-md bg-white/20 w-fit backdrop-blur-md">
                      {featured.category}
                    </span>
                    <p className="text-sm text-white/70 max-w-md leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>
                </div>
                <MoveRight
                  className="shrink-0 transition-all duration-300 group-hover:translate-x-2"
                  color="white"
                  width={40}
                  height={40}
                  strokeWidth={1.25}
                />
              </article>
            </div>
          </Link>
        </motion.div>

        {/* Side cards — first two from rest */}
        {rest.slice(0, 2).map((post, i) => (
          <motion.div key={post.slug} variants={fadeUp} custom={i + 1}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <div
                style={{ backgroundImage: `url(${post.image})` }}
                className="relative flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white min-h-[280px] transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg]"
              >
                <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:h-full" />
                <article className="relative z-0 flex items-end">
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] leading-snug">
                      {post.title}
                    </h3>
                    <span className="text-xs capitalize py-px px-2 rounded-md bg-white/20 w-fit backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                  <MoveRight
                    className="shrink-0 transition-all duration-300 group-hover:translate-x-2"
                    color="white"
                    width={32}
                    height={32}
                    strokeWidth={1.25}
                  />
                </article>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ─── REMAINING POSTS GRID ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {rest.slice(2).map((post, i) => (
          <motion.div
            key={post.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={i}
            variants={fadeUp}
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <div
                style={{ backgroundImage: `url(${post.image})` }}
                className={cn(
                  "relative flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white min-h-[300px] transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg]"
                )}
              >
                <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:h-full" />
                <article className="relative z-0 flex items-end">
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs capitalize py-px px-2 rounded-md bg-white/20 w-fit backdrop-blur-md">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/50">
                        {post.excerpt.length > 60
                          ? post.excerpt.slice(0, 60) + "..."
                          : post.excerpt}
                      </span>
                    </div>
                  </div>
                  <MoveRight
                    className="shrink-0 transition-all duration-300 group-hover:translate-x-2"
                    color="white"
                    width={28}
                    height={28}
                    strokeWidth={1.25}
                  />
                </article>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
