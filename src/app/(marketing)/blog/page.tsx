"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocation } from "@/components/location-provider";

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
    image:
      "https://framerusercontent.com/images/N7YHOrvApkBAJM5UaVPtxvwJUBQ.webp?width=1600&height=1010",
    slug: "regina-wedding",
  },
  {
    title: "Best Wedding Venues in Regina for Your Perfect Day",
    excerpt:
      "The Ultimate Guide to Regina Wedding Venues from Saskatchewan's Premier DJ Service",
    image:
      "https://framerusercontent.com/images/zR9r5CJ56r5ck2Xc6sH3aiI8ezE.webp?width=1336&height=751",
    slug: "regina-venues",
  },
  {
    title: "Planning Your Winnipeg Wedding: DJ Timeline and Music Guide",
    excerpt:
      "Your Complete Guide to Wedding Entertainment Planning in Manitoba",
    image:
      "https://framerusercontent.com/images/yZg0faxngMsHKWBfLdzZHhRzak.webp?width=1000&height=667",
    slug: "winnipeg-timeline",
  },
  {
    title: "Top 10 Wedding Venues in Winnipeg We Love Working With",
    excerpt: "Our top 10 favorite Winnipeg wedding venues",
    image:
      "https://framerusercontent.com/images/8FxAMW3iIeXfGczdzs3wAtW5g38.jpg?width=1400&height=851",
    slug: "winnipeg-venues",
  },
  {
    title: "Best DJ Service In Brandon? Trident Music",
    excerpt:
      "If you're searching for the best DJ service in Brandon, Manitoba, your search ends here!",
    image:
      "https://framerusercontent.com/images/x5334o4bG5vQHuHuk1efPc7zs.jpg?width=750&height=500",
    slug: "brandon-best",
  },
  {
    title:
      "Top 10 Reasons to Choose Trident Music for Your Manitoba Event",
    excerpt:
      "Planning a wedding, social, graduation party, or corporate event in Manitoba?",
    image:
      "https://framerusercontent.com/images/GqczSXUS9PqYlZ84LTFroKLZ40.webp?width=1000&height=667",
    slug: "top-10-reasons",
  },
  {
    title: "Why Trident Music is the Best DJ Service in Brandon",
    excerpt:
      "People across Brandon, Winnipeg, and Manitoba choose Trident Music. Here's why.",
    image:
      "https://framerusercontent.com/images/57QszomWEqCBDiWJDPLPv55lQ.webp?width=2000&height=1333",
    slug: "brandon-best-dj",
  },
  {
    title: "Why You Shouldn't Hire Just Based on Price",
    excerpt:
      "While budget matters, hiring based only on price can lead to stress and unmet expectations.",
    image:
      "https://framerusercontent.com/images/dRnpfFfEVluQCFFcxC1UZmJrImA.jpg?width=750&height=500",
    slug: "price-vs-quality",
  },
  {
    title: "Why a Playlist Can't Replace a Pro DJ",
    excerpt:
      "A Spotify playlist can't match the energy, flow, and experience a professional DJ brings.",
    image:
      "https://framerusercontent.com/images/kpBTMuRfzVwtHD0Aiqv2p0ze9lY.png?width=500&height=623",
    slug: "playlist-vs-dj",
  },
  {
    title: "Top 25 Songs For Your Wedding Day!",
    excerpt:
      "Top 25 songs for your groomsmen to walk down the aisle to.",
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
    <section className="px-6 md:px-12 py-24 md:py-32">
      {/* ─── HEADER ─── */}
      <motion.div
        className="max-w-4xl mb-16 md:mb-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Journal
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
        >
          Notes From the Dance Floor
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Real advice from hundreds of weddings, socials, and late nights
          across Manitoba and Saskatchewan.
        </motion.p>
      </motion.div>

      {/* ─── FEATURED POST ─── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-12 md:mb-16"
      >
        <Link href="#" className="group block">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Featured
            </p>
            <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight tracking-tight">
              {featured.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl leading-relaxed">
              {featured.excerpt}
            </p>
          </div>
        </Link>
      </motion.div>

      {/* ─── POST GRID ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {rest.map((post, i) => (
          <motion.div
            key={post.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={i}
            variants={fadeUp}
          >
            <Link href="#" className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
