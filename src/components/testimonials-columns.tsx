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
                className="px-8 py-10 rounded-[2.5rem] bg-secondary/60 max-w-xs w-full"
              >
                <p className="text-base leading-[1.7] text-foreground/90">
                  {t.text}
                </p>
                <div className="mt-8">
                  <span className="text-base font-semibold tracking-tight text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {t.role}
                  </span>
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
