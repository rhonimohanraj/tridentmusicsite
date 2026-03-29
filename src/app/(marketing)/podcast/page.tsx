"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const episodes = [
  {
    number: 40,
    title: "Lyric Whisper Challenge",
    description:
      "Joey and Rhoni celebrate the podcast entering its 40s!",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
  {
    number: 39,
    title: "Vacations and Pickleball Champions",
    description:
      "Joey and Rhoni are back to give a rundown of their time away.",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
  {
    number: 38,
    title: "How to Avoid Wedding Cringe",
    description:
      "Joey and Rhoni recap mrng Chapter 3 and share picks for the cringiest wedding speech moments.",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
  {
    number: 37,
    title: "Top 5 Songs of Summer 2025",
    description:
      "Joey and Rhoni pull back the curtain to reveal some podcast listener statistics.",
    image:
      "https://framerusercontent.com/images/ePmhC2NPlvQHzajKwEChTZjeY.jpg?width=1280&height=720",
  },
  {
    number: 36,
    title: "Episode 36",
    description: "Another episode of For The Record.",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
  {
    number: 35,
    title: "Episode 35",
    description: "Another episode of For The Record.",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
  {
    number: 34,
    title: "Episode 34",
    description: "Another episode of For The Record.",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
  {
    number: 33,
    title: "Episode 33",
    description: "Another episode of For The Record.",
    image:
      "https://framerusercontent.com/images/wiHOApiINA5Q9s5AC87KuTtnePY.jpg?width=512&height=288",
  },
];

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

export default function PodcastPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative py-32 md:py-44 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            The Podcast
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
          >
            For The <em className="italic">Record</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Joey and Rhoni talk music, weddings, and everything in between.
            New episodes drop regularly &mdash; pull up a chair.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── EPISODES ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Latest Episodes
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Catch up on the <em className="italic">conversation</em>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link href="#" className="group block">
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start border border-border rounded-sm p-4 sm:p-5 hover:border-foreground/15 hover:bg-foreground/[0.02] transition-all duration-500">
                    {/* Thumbnail */}
                    <div className="relative w-full sm:w-48 md:w-56 flex-shrink-0 aspect-video overflow-hidden rounded-sm">
                      <Image
                        src={ep.image}
                        alt={ep.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 224px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 py-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                        Episode {ep.number}
                      </p>
                      <h3 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] tracking-tight group-hover:text-foreground/80 transition-colors duration-300">
                        {ep.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {ep.description}
                      </p>
                      <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Listen now &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
