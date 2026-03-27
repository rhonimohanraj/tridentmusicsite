"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lyrics } from "@/lib/data";

export function LyricLoader({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const shuffled = useState(() =>
    [...lyrics].sort(() => Math.random() - 0.5).slice(0, 5)
  )[0];

  const advance = useCallback(() => {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }
  }, [currentIndex, shuffled.length, onComplete]);

  useEffect(() => {
    const timer = setTimeout(advance, 1800);
    return () => clearTimeout(timer);
  }, [advance]);

  return (
    <motion.div
      className="loader-overlay"
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full max-w-3xl px-8">
        {/* Progress bar */}
        <div className="absolute top-0 left-8 right-8 h-px bg-white/10">
          <motion.div
            className="h-full bg-white/40"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentIndex + 1) / shuffled.length) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <div className="pt-12 min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-lg md:text-2xl font-[family-name:var(--font-playfair)] italic text-white/80 tracking-wide"
            >
              {shuffled[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Brand mark */}
        <motion.p
          className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Trident Music
        </motion.p>
      </div>
    </motion.div>
  );
}
