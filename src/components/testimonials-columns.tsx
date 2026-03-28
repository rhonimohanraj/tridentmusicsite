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
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((t, i) => (
              <div
                className="p-10 rounded-full border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <div>{t.text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {t.name}
                    </div>
                    <div className="leading-5 opacity-60 tracking-tight">
                      {t.role}
                    </div>
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
