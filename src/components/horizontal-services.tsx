"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/lib/data";

export function HorizontalServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Section label */}
        <div className="absolute top-8 left-6 md:left-12 z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Our Services
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 pl-6 md:pl-12">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw]"
            >
              {/* Number */}
              <span className="absolute -top-2 left-0 text-[8rem] md:text-[12rem] font-[family-name:var(--font-playfair)] font-bold text-white/[0.03] leading-none select-none z-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 35vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Title */}
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] tracking-tight">
                  {service.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                  Inquire &rarr;
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
