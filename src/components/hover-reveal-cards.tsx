"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Our Services
        </p>
      </div>
      <div
        role="list"
        className={cn(
          "group mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-6 md:px-12 sm:grid-cols-2 md:grid-cols-5",
          className
        )}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            role="listitem"
            aria-label={`${item.title}, ${item.subtitle}`}
            className={cn(
              "relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out",
              "group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px]",
              "hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
              cardClassName
            )}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-light uppercase tracking-widest opacity-80">
                {item.subtitle}
              </p>
              <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HoverRevealCards;
