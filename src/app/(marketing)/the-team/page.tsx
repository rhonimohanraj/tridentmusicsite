"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import TeamShowcase from "@/components/team-showcase";

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

const galleryImages = [
  "https://framerusercontent.com/images/IbJLzdZpGeBmbcNy7Qu245CYE.jpg?scale-down-to=2048&width=5760&height=3840",
  "https://framerusercontent.com/images/N3IL9OOGPb5DhmdXMzzjvCs2IfA.jpg?scale-down-to=2048&width=2560&height=1708",
  "https://framerusercontent.com/images/3ut7qx7Ls1q6N5TUsQ4KoDA2EI.jpg?scale-down-to=2048&width=2500&height=1667",
  "https://framerusercontent.com/images/BGocEVHCgpN70vc406Xg9Y29aAw.jpg?width=500&height=500",
  "https://framerusercontent.com/images/eQelXhvknM0TcmFKAF62fppZmQ.jpg?scale-down-to=2048&width=3000&height=2000",
  "https://framerusercontent.com/images/zkDp3L4OzduFvfTmKsE9m9oj8A.jpg?width=1024&height=683",
];

const masonryHeights = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
];

export default function TheTeamPage() {
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
            The Team
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
          >
            For the time of
            <br />
            your <em className="italic">life</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            We don&apos;t just play music. We read the room, build the energy, and give your guests a night worth remembering.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Our Story
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Most DJ companies hand you a playlist form and show up day-of. We&apos;re not most companies. We started doing this because we genuinely love it &mdash; the moment a room shifts from polite conversation to a packed dance floor, the look on a couple&apos;s face when their first song hits, the uncle who hasn&apos;t danced in twenty years suddenly out there doing his thing. We built Trident around chasing that feeling, and we hired fifteen other people who are just as obsessed with it as we are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TEAM SHOWCASE ─── */}
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
              Meet the <em className="italic">team</em>
            </h2>
          </motion.div>
        </div>

        <TeamShowcase members={teamMembers} />
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Moments we&apos;ve been <em className="italic">part of</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`img-hover-scale relative overflow-hidden ${masonryHeights[i]}`}
              >
                <Image
                  src={src}
                  alt="Trident Music event"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
