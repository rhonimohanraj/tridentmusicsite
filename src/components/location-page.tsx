"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

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

interface FAQ {
  question: string;
  answer?: string;
}

export interface LocationPageProps {
  city: string;
  heroImage: string;
  headline: string;
  subtitle: string;
  aboutCopy: string;
  address: string;
  faqs: FAQ[];
}

export function LocationPage({
  city,
  heroImage,
  headline,
  subtitle,
  aboutCopy,
  address,
  faqs,
}: LocationPageProps) {
  return (
    <>
      {/* --- HERO --- */}
      <section className="relative h-screen flex items-end pb-20 md:pb-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt={`${city} DJ event`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            {city} &middot; DJ Services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight"
          >
            {headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Link
              href="/inquire"
              className="inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
            >
              Let&apos;s get your party started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ABOUT --- */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight tracking-tight">
              {city}&apos;s trusted DJ &amp;{" "}
              <em className="italic">entertainment</em> company
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {aboutCopy}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When the lights fade and guests head home, they&apos;ll be talking
              about <em>that party</em> for weeks. That&apos;s the Trident Music
              difference.
            </p>
            <div className="mt-8 flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {address}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              "https://framerusercontent.com/images/e3LdW2RrLwwGkZV5YDQwbd5m8.webp?width=1000&height=667",
              "https://framerusercontent.com/images/GJZsUK4NGKnaSQI6ek1WeReFJA.webp?width=500&height=500",
              "https://framerusercontent.com/images/ooBD2Ka3IKN1NPmWiIlbQIVk.webp?width=1000&height=667",
              "https://framerusercontent.com/images/SZgQJ1E5KDsxGxyGaUlaXPtoBBY.webp?width=800&height=533",
            ].map((src, i) => (
              <div
                key={i}
                className="img-hover-scale relative aspect-square overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Trident Music ${city} event`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
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
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Our services in <em className="italic">{city}</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link href={service.href} className="group block">
                  <div className="img-hover-scale relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-white font-medium">
                      {service.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight">
              Frequently asked <em className="italic">questions</em>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-b border-theme"
              >
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                  <h3 className="text-sm md:text-base font-medium pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-muted-foreground text-lg shrink-0 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                {faq.answer && (
                  <p className="pb-6 text-sm text-muted-foreground leading-relaxed -mt-1">
                    {faq.answer}
                  </p>
                )}
                {!faq.answer && (
                  <p className="pb-6 text-sm text-muted-foreground leading-relaxed -mt-1">
                    Contact us to learn more about our {city} DJ services. We
                    would love to hear about your event and share how we can make
                    it unforgettable.
                  </p>
                )}
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Tell Us
          </p>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-tight">
            Planning an event in <em className="italic">{city}</em>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Weddings, corporate events, parties, graduations &mdash; we bring
            the energy throughout {city} and surrounding areas.
          </p>
          <Link
            href="/inquire"
            className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
          >
            Inquire Now
          </Link>
        </motion.div>
      </section>
    </>
  );
}
