"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocationSwitcher } from "@/components/location-switcher";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 h-16 flex items-center">
        <div className="w-full flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="relative z-50 inline-flex items-center">
            <span className="text-lg font-[family-name:var(--font-playfair)] font-bold tracking-tight text-foreground">
              TRIDENT<span className="font-light ml-1">MUSIC</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                  item.href === "/inquire" ? "font-bold" : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 md:hidden text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — outside <header> so fixed positioning works correctly */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex items-start justify-center pt-32"
          >
            <nav className="flex flex-col items-center gap-8">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-[family-name:var(--font-playfair)] text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: navigation.length * 0.05,
                  duration: 0.3,
                }}
                className="flex items-center gap-6 pt-4"
              >
                <LocationSwitcher />
                <ThemeToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
