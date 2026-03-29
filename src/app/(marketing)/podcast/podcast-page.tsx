"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

const involveCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Be a Guest",
    description:
      "Have a story, insight, or experience worth sharing? We\u2019re always looking for guests with something to say \u2014 about events, culture, business, or life.",
    cta: "Apply Now",
    href: "/inquire",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Got a Question or Story?",
    description:
      "Whether it\u2019s wedding advice, event planning tips, or something you\u2019ve always been curious about \u2014 submit yours and you might hear us talk about it on an upcoming episode.",
    cta: "Submit Story",
    href: "/inquire",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Merch",
    description:
      "We\u2019re working on exclusive podcast merch inspired by the stories, laughs, and moments from For the Record. From stylish apparel to fun accessories \u2014 stay tuned.",
    cta: "Coming Soon",
    href: null,
  },
];

export default function PodcastPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative py-32 md:py-44 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              The Podcast
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
            >
              For The <em className="italic">Record</em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-lg md:text-xl text-muted-foreground/70 font-[family-name:var(--font-playfair)] italic"
            >
              Conversations worth remembering.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Hosted by Rhoni Mohanraj and Joey Simms, For the Record takes you
              behind the scenes of the event world and pop culture. We dive into
              the artistry, culture, and unforgettable stories that make events
              extraordinary &mdash; with humor, insight, and bold hot takes in
              every episode.
            </motion.p>

            {/* Platform links */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com/show/5VzFvh1JlEhBMS6ZHZ8SNV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Listen on Spotify
              </a>
              <a
                href="https://www.youtube.com/@tridenteventgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/5 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </motion.div>
          </motion.div>

          {/* Podcast image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/640ba1326c0d7b6657b3ad25/81932503-6811-4154-802c-498c05ce8724/T-492.jpg"
              alt="For The Record podcast hosts Rhoni Mohanraj and Joey Simms"
              fill
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ─── GET INVOLVED ─── */}
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
              Get Involved
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Be part of the <em className="italic">conversation</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {involveCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border border-border rounded-sm p-8 flex flex-col"
              >
                <div className="text-muted-foreground mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-[family-name:var(--font-playfair)] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.description}
                </p>
                {card.href ? (
                  <Link
                    href={card.href}
                    className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {card.cta} &rarr;
                  </Link>
                ) : (
                  <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    {card.cta}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK WITH US ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Production Services
          </p>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-tight">
            Want to produce your own <em className="italic">show?</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            We offer full podcast production and distribution services.
          </p>
          <Link
            href="/inquire"
            className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </>
  );
}
