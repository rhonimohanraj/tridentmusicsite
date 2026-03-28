"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LyricLoader } from "@/components/lyric-loader";
import { ServiceCarousel } from "@/components/service-carousel";
import { TestimonialsSection } from "@/components/testimonials-columns";
import TeamShowcase from "@/components/team-showcase";
import { testimonials, teamMembers } from "@/lib/data";
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

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("trident-loader-shown") === "true";
    }
    return false;
  });
  const { location } = useLocation();

  useEffect(() => {
    if (loaderDone) {
      sessionStorage.setItem("trident-loader-shown", "true");
    }
  }, [loaderDone]);

  return (
    <>
      {/* Lyric Loader */}
      <AnimatePresence>{!loaderDone && <LyricLoader onComplete={() => setLoaderDone(true)} />}</AnimatePresence>

      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-end pb-20 md:pb-28 px-6 md:px-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={location.heroImage}
            alt="DJ performing at event"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate={loaderDone ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            {location.hero.label}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
          >
            for those celebrations
            <br />
            you can <em className="italic">never</em> forget
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {location.hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Link
              href="/inquire"
              className="inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
            >
              Let&apos;s get your party started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 flex items-center justify-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-2xl"
        >
          <p className="text-xl md:text-3xl font-[family-name:var(--font-playfair)] italic text-muted-foreground leading-relaxed">
            &ldquo;A little party never killed nobody&rdquo;
          </p>
          <cite className="mt-4 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 not-italic">
            F. Scott Fitzgerald
          </cite>
        </motion.blockquote>
      </section>

      {/* ─── ABOUT — SHOWCASE SECTIONS ─── */}
      {[
        {
          image: "https://framerusercontent.com/images/e3LdW2RrLwwGkZV5YDQwbd5m8.webp?width=1000&height=667",
          label: "Who We Are",
          heading: "We don\u2019t just play music.\nWe pack dance floors.",
          body: location.about.copy[0],
          align: "left" as const,
        },
        {
          image: "https://framerusercontent.com/images/GJZsUK4NGKnaSQI6ek1WeReFJA.webp?width=500&height=500",
          label: "The Experience",
          heading: "Your aunt who never dances?\nShe\u2019ll be out there.",
          body: location.about.copy[1],
          align: "right" as const,
        },
        {
          image: "https://framerusercontent.com/images/ooBD2Ka3IKN1NPmWiIlbQIVk.webp?width=1000&height=667",
          label: "Our Promise",
          heading: "Every event gets the\nfull Trident treatment.",
          body: "A personalized music consultation. Professional-grade sound and lighting. A DJ who reads the room and adjusts in real time. Backup systems for everything. No cookie-cutter playlists. No autopilot. Just a crew that treats your night like it matters \u2014 because it does.",
          align: "left" as const,
        },
        {
          image: "https://framerusercontent.com/images/SZgQJ1E5KDsxGxyGaUlaXPtoBBY.webp?width=800&height=533",
          label: "The Result",
          heading: "Shoes off. Ties loose.\nStories for months.",
          body: "When the night ends, your guests won\u2019t just leave. They\u2019ll walk out with sore feet, shoes in hand, and stories they\u2019ll be telling at brunch for the next month. That\u2019s the difference between hiring a DJ and hiring us.",
          align: "right" as const,
        },
      ].map((section, i) => (
        <section
          key={i}
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={section.image}
              alt={section.label}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative z-10 max-w-2xl px-6 md:px-12 pb-16 md:pb-24 ${
              section.align === "right" ? "ml-auto text-right" : ""
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">
              {section.label}
            </p>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] leading-[1.1] tracking-tight text-white whitespace-pre-line">
              {section.heading}
            </h2>
            <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-lg">
              {section.body}
            </p>
          </motion.div>
        </section>
      ))}

      {/* ─── SERVICES ─── */}
      <ServiceCarousel />

      {/* ─── TEAM PREVIEW ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              The People
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Sixteen people who actually
              <br />
              <em className="italic">love</em> doing this
            </h2>
          </motion.div>
        </div>

        <TeamShowcase members={teamMembers} />

        <div className="mt-8 text-center">
          <Link
            href="/the-team"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            View full team &rarr;
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Straight From Our Clients
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Don&apos;t take our word for <em className="italic">it</em>
            </h2>
          </motion.div>

          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Tell Us
          </p>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-tight">
            {location.cta.heading}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            {location.cta.subtext}
          </p>
          <Link
            href="/inquire"
            className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
          >
            Tell Us About Your Event
          </Link>
        </motion.div>
      </section>
    </>
  );
}
