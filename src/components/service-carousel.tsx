"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

const SERVICE_DESCRIPTIONS: Record<number, string> = {
  1: "Unforgettable music and energy for your perfect day.",
  2: "House parties, socials, and celebrations done right.",
  3: "Premium photo booth experiences your guests will love.",
  4: "Polished entertainment for corporate events and galas.",
  5: "Professional sound and lighting rental for any venue.",
  6: "High-energy entertainment for grads and school events.",
};

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;
const COUNT = services.length;
// Render enough copies so the strip never shows a gap
const COPIES = 5;
const TOTAL = COUNT * COPIES;

export function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const y = useMotionValue(0);
  const stepRef = useRef(0);

  // Build the repeated list once
  const items = Array.from({ length: TOTAL }, (_, i) => services[i % COUNT]);

  // The "home" position for a given activeIndex: center copy is at index offset COUNT*2
  const getTargetY = (idx: number) => {
    const centerItem = COUNT * 2 + idx;
    return -(centerItem * ITEM_HEIGHT);
  };

  const goTo = useCallback(
    (nextIndex: number) => {
      setActiveIndex(nextIndex);
      animate(y, getTargetY(nextIndex), {
        type: "tween",
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1],
      });
    },
    [y]
  );

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % COUNT;
      // Animate one step down
      stepRef.current += 1;
      const targetItem = COUNT * 2 + stepRef.current;
      animate(y, -(targetItem * ITEM_HEIGHT), {
        type: "tween",
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1],
        onComplete: () => {
          // Silently reset to center copy to keep the strip from drifting
          if (stepRef.current >= COUNT) {
            stepRef.current = stepRef.current % COUNT;
            y.set(getTargetY(stepRef.current));
          }
        },
      });
      return next;
    });
  }, [y]);

  const handleChipClick = (realIndex: number) => {
    if (realIndex === activeIndex) return;
    const diff = (realIndex - activeIndex + COUNT) % COUNT;
    // Jump forward by diff steps
    stepRef.current += diff;
    const targetItem = COUNT * 2 + stepRef.current;
    animate(y, -(targetItem * ITEM_HEIGHT), {
      type: "tween",
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
      onComplete: () => {
        if (stepRef.current >= COUNT) {
          stepRef.current = stepRef.current % COUNT;
          y.set(getTargetY(stepRef.current));
        }
      },
    });
    setActiveIndex(realIndex);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  // Initialize strip position
  useEffect(() => {
    y.set(getTargetY(0));
  }, [y]);

  const getCardStatus = (index: number) => {
    const diff = index - activeIndex;
    let normalizedDiff = diff;
    if (diff > COUNT / 2) normalizedDiff -= COUNT;
    if (diff < -COUNT / 2) normalizedDiff += COUNT;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Our Services
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight">
          Everything your event needs.<br />
          Nothing it <em>doesn&rsquo;t.</em>
        </h2>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[500px] lg:aspect-video border border-border/40">
          {/* Left panel — service list */}
          <div className="w-full lg:w-[40%] min-h-[300px] md:min-h-[350px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 lg:pl-16 bg-primary">
            <div className="absolute inset-x-0 top-0 h-16 md:h-24 lg:h-20 bg-gradient-to-b from-primary via-primary/90 to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 lg:h-20 bg-gradient-to-t from-primary via-primary/90 to-transparent z-40 pointer-events-none" />
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20 overflow-hidden">
              <motion.div
                style={{ y, top: "50%", marginTop: -(ITEM_HEIGHT / 2) }}
                className="absolute flex flex-col items-center lg:items-start"
              >
                {items.map((service, i) => {
                  const realIndex = i % COUNT;
                  const isActive = realIndex === activeIndex;
                  // Only highlight the center copy
                  const centerCopyIndex = COUNT * 2 + activeIndex;
                  const dist = Math.abs(i - centerCopyIndex);

                  return (
                    <div
                      key={i}
                      style={{ height: ITEM_HEIGHT }}
                      className="flex items-center justify-start shrink-0"
                    >
                      <button
                        onClick={() => handleChipClick(realIndex)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className={cn(
                          "relative flex items-center px-5 md:px-8 lg:px-8 py-3 md:py-4 rounded-full text-left border transition-all duration-500",
                          isActive
                            ? "bg-primary-foreground text-primary border-primary-foreground"
                            : "bg-transparent text-primary-foreground/60 border-primary-foreground/20 hover:border-primary-foreground/40 hover:text-primary-foreground"
                        )}
                        style={{
                          opacity: isActive ? 1 : Math.max(0.15, 1 - dist * 0.2),
                        }}
                      >
                        <span className="font-normal text-xs md:text-sm tracking-tight whitespace-nowrap uppercase">
                          {service.title}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Right panel — image carousel */}
          <div className="flex-1 min-h-[400px] md:min-h-[500px] lg:h-full relative bg-secondary/30 flex items-center justify-center py-12 md:py-16 lg:py-16 px-6 md:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
            <div className="relative w-full max-w-[380px] md:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {services.map((service, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.div
                    key={service.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      rotate: isPrev ? -3 : isNext ? 3 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive
                        ? ("auto" as const)
                        : ("none" as const),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-background bg-background origin-center"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive
                          ? "grayscale-0 blur-0"
                          : "grayscale blur-[2px] brightness-75"
                      )}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-6 md:p-10 pt-24 md:pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                        >
                          <div className="bg-background text-foreground px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-normal uppercase tracking-[0.2em] w-fit shadow-lg mb-3 border border-border/50">
                            {service.title}
                          </div>
                          <p className="text-white font-normal text-lg md:text-2xl leading-tight drop-shadow-md tracking-tight">
                            {SERVICE_DESCRIPTIONS[service.id]}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className={cn(
                        "absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                      <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                        Book Now
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCarousel;
