import Link from "next/link";
import { navigation, socialLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="text-lg font-[family-name:var(--font-playfair)] font-bold tracking-tight">
              TRIDENT<span className="font-light ml-1">MUSIC</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professional DJ and event entertainment for weddings,
              celebrations, and corporate events across Manitoba and
              Saskatchewan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Locations
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>381 Park Avenue East<br />Brandon, MB R7A 7A5</p>
              <p>425 Ballantrae Dr<br />Winnipeg, MB R3T 6H6</p>
            </div>
            <div className="flex gap-4 mt-6">
              {Object.entries(socialLinks).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Trident Event Group
          </p>
          <p className="text-xs text-muted-foreground/50">
            Mon &ndash; Fri, 9 AM &ndash; 4 PM
          </p>
        </div>
      </div>
    </footer>
  );
}
