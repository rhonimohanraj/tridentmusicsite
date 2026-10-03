"use client";

import Image from "next/image";
import { socialLinks } from "@/lib/data";
import { LocationSwitcher } from "@/components/location-switcher";

const links = [
  { label: "Event Group", href: "https://www.tridenteventgroup.ca", external: true },
  { label: "Instagram", href: socialLinks.instagram, external: true },
  { label: "Contact", href: "mailto:hello@tridenteventgroup.ca", external: false },
];

// Mirrors the Trident Films footer: centered logo, one row of links, one credit line.
export function SiteFooter() {
  return (
    <footer className="border-t border-theme bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 px-6 py-16 text-center md:px-12">
        <div className="opacity-55">
          <Image
            src="/images/logos/trident-music-dark.png"
            alt="Trident Music"
            width={390}
            height={301}
            className="h-11 w-auto block dark:hidden"
          />
          <Image
            src="/images/logos/trident-music-white.png"
            alt="Trident Music"
            width={390}
            height={301}
            className="h-11 w-auto hidden dark:block"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          <div className="flex h-9 items-center rounded-full border border-theme px-4 [&_button]:min-h-0">
            <LocationSwitcher />
          </div>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-[10px] tracking-[0.1em] text-muted-foreground/60">
          Trident Music | A Division of Trident Event Group
        </p>
      </div>
    </footer>
  );
}
