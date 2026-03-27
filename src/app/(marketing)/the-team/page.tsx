"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";

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

// Masonry-style height classes for visual variety
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
            Let Us Get Your Party Started
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
              In a world where every beat is expected to be louder and every
              moment is rushed, we believe in the power of connection through
              music. Trident Music was born from the desire to slow down the
              tempo&mdash;to celebrate quality over quantity, and to create
              experiences where passion and authenticity lead the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FULL TEAM GRID ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Behind The Scenes
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Meet the <em className="italic">team</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <div className="img-hover-scale relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="mt-2 text-xs font-medium">{member.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
              Memories from past <em className="italic">events</em>
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
