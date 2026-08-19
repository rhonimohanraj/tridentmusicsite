"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";

const FORM_SRC =
  "https://forms.tridenteventgroup.ca/forms/trident-music-everything-form-jktyhf";
// Parent-side iframe-resizer served by OpnForm, version-matched to the form's
// child script. Lets the iframe grow to the form's full height (no inner scroll).
const RESIZER_SRC = "https://forms.tridenteventgroup.ca/widgets/iframe.min.js";

declare global {
  interface Window {
    iFrameResize?: (
      options: Record<string, unknown>,
      target: string | HTMLElement,
    ) => void;
  }
}

type ResizableIframe = HTMLIFrameElement & {
  iFrameResizer?: { close: () => void };
};

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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Attach the resizer once both the script and the iframe are ready.
  useEffect(() => {
    let cancelled = false;
    const node = iframeRef.current;

    const tryInit = () => {
      if (cancelled || !node) return;
      if (window.iFrameResize) {
        window.iFrameResize({ log: false, checkOrigin: false }, node);
        return;
      }
      window.setTimeout(tryInit, 100);
    };
    tryInit();

    return () => {
      cancelled = true;
      (node as ResizableIframe | null)?.iFrameResizer?.close?.();
    };
  }, []);

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

      {/* ─── FULL-BLEED FORM ───
          The embed is edge-to-edge on purpose. OpnForm paints its own page
          background and centres the form card inside it, so constraining the
          iframe to a max-width stacked three visible bands (site bg, form bg,
          card). Full-bleed lets the form's background read as the page. */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <iframe
            ref={iframeRef}
            src={FORM_SRC}
            scrolling="no"
            className="w-full block"
            style={{ border: "none", width: "1px", minWidth: "100%", minHeight: "600px" }}
            title="Inquiry Form"
          />
        </motion.div>
      </section>

      <Script src={RESIZER_SRC} strategy="afterInteractive" />
    </>
  );
}
