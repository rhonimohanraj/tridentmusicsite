"use client";

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

export default function InquirePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            Let&apos;s Talk
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
          >
            Tell Us Everything
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Your date, your venue, the vibe you&apos;re going for, whether your grandma has a song request &mdash; all of it. We&apos;ll take it from there.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── FULL-WIDTH FORM ─── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="w-full overflow-hidden rounded-sm">
            <iframe
              src="https://forms.tridenteventgroup.ca/forms/trident-music-everything-form-jktyhf"
              className="w-full h-[85vh] min-h-[700px]"
              style={{ border: "none" }}
              title="Inquiry Form"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
