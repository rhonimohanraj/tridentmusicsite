"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "@/types";

function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-border/50 bg-card shadow-sm max-w-xs w-full"
              >
                <p className="text-[15px] leading-relaxed text-card-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-tight leading-5 text-foreground">
                      {t.name}
                    </span>
                    <span className="text-xs leading-5 text-muted-foreground tracking-tight">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  // Split testimonials into 3 columns
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[750px] overflow-hidden">
      <TestimonialsColumn
        testimonials={col1}
        duration={15}
        className="hidden md:block"
      />
      <TestimonialsColumn testimonials={col2} duration={19} />
      <TestimonialsColumn
        testimonials={col3}
        duration={17}
        className="hidden lg:block"
      />
    </div>
  );
}
