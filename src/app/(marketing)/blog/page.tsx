"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocation } from "@/components/location-provider";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

const blogPosts = [
  {
    title: "Why Trident Music is the Perfect Choice for Your Regina Wedding",
    excerpt:
      "Discover Why Saskatchewan Couples Choose Manitoba's Premier DJ Service",
    category: "Weddings",
    image:
      "https://framerusercontent.com/images/N7YHOrvApkBAJM5UaVPtxvwJUBQ.webp?width=1600&height=1010",
    slug: "regina-wedding",
  },
  {
    title: "Best Wedding Venues in Regina for Your Perfect Day",
    excerpt:
      "The Ultimate Guide to Regina Wedding Venues from Saskatchewan's Premier DJ Service",
    category: "Venues",
    image:
      "https://framerusercontent.com/images/zR9r5CJ56r5ck2Xc6sH3aiI8ezE.webp?width=1336&height=751",
    slug: "regina-venues",
  },
  {
    title: "Planning Your Winnipeg Wedding: DJ Timeline and Music Guide",
    excerpt:
      "Your Complete Guide to Wedding Entertainment Planning in Manitoba",
    category: "Planning",
    image:
      "https://framerusercontent.com/images/yZg0faxngMsHKWBfLdzZHhRzak.webp?width=1000&height=667",
    slug: "winnipeg-timeline",
  },
  {
    title: "Top 10 Wedding Venues in Winnipeg We Love Working With",
    excerpt: "Our top 10 favorite Winnipeg wedding venues",
    category: "Venues",
    image:
      "https://framerusercontent.com/images/8FxAMW3iIeXfGczdzs3wAtW5g38.jpg?width=1400&height=851",
    slug: "winnipeg-venues",
  },
  {
    title: "Best DJ Service In Brandon? Trident Music",
    excerpt:
      "If you're searching for the best DJ service in Brandon, Manitoba, your search ends here!",
    category: "Brandon",
    image:
      "https://framerusercontent.com/images/x5334o4bG5vQHuHuk1efPc7zs.jpg?width=750&height=500",
    slug: "brandon-best",
  },
  {
    title:
      "Top 10 Reasons to Choose Trident Music for Your Manitoba Event",
    excerpt:
      "Planning a wedding, social, graduation party, or corporate event in Manitoba?",
    category: "Events",
    image:
      "https://framerusercontent.com/images/GqczSXUS9PqYlZ84LTFroKLZ40.webp?width=1000&height=667",
    slug: "top-10-reasons",
  },
  {
    title: "Why Trident Music is the Best DJ Service in Brandon",
    excerpt:
      "People across Brandon, Winnipeg, and Manitoba choose Trident Music. Here's why.",
    category: "Brandon",
    image:
      "https://framerusercontent.com/images/57QszomWEqCBDiWJDPLPv55lQ.webp?width=2000&height=1333",
    slug: "brandon-best-dj",
  },
  {
    title: "Why You Shouldn't Hire Just Based on Price",
    excerpt:
      "While budget matters, hiring based only on price can lead to stress and unmet expectations.",
    category: "Advice",
    image:
      "https://framerusercontent.com/images/dRnpfFfEVluQCFFcxC1UZmJrImA.jpg?width=750&height=500",
    slug: "price-vs-quality",
  },
  {
    title: "Why a Playlist Can't Replace a Pro DJ",
    excerpt:
      "A Spotify playlist can't match the energy, flow, and experience a professional DJ brings.",
    category: "Advice",
    image:
      "https://framerusercontent.com/images/kpBTMuRfzVwtHD0Aiqv2p0ze9lY.png?width=500&height=623",
    slug: "playlist-vs-dj",
  },
  {
    title: "Top 25 Songs For Your Wedding Day!",
    excerpt:
      "Top 25 songs for your groomsmen to walk down the aisle to.",
    category: "Music",
    image:
      "https://framerusercontent.com/images/riAr7RpZCXn4fKvzqPGGvbtsA.jpg?width=500&height=500",
    slug: "top-25-songs",
  },
];

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
          <Link href="#" className="group block h-full">
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
            <Link href="#" className="group block h-full">
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
            <Link href="#" className="group block">
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
