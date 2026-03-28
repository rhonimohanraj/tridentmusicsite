"use client";

import Link from "next/link";
import { navigation, socialLinks } from "@/lib/data";
import { useLocation } from "@/components/location-provider";
import { LOCATIONS, SEO_TAGLINES } from "@/lib/locations";

export function SiteFooter() {
  const { location } = useLocation();

  return (
    <footer className="border-t border-theme bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="text-lg font-[family-name:var(--font-playfair)] font-bold tracking-tight">
              TRIDENT<span className="font-light ml-1">MUSIC</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {location.footer.description}
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
              {location.slug === "generic" ? "Locations" : "Location"}
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              {location.slug === "generic" ? (
                <>
                  <div>
                    <p className="text-xs font-medium text-foreground/70 mb-1">Brandon HQ</p>
                    <p>{LOCATIONS.brandon.address.street}<br />{LOCATIONS.brandon.address.cityProvince} {LOCATIONS.brandon.address.postalCode}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground/70 mb-1">Winnipeg</p>
                    <p>{LOCATIONS.winnipeg.address.street}<br />{LOCATIONS.winnipeg.address.cityProvince} {LOCATIONS.winnipeg.address.postalCode}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground/70 mb-1">Regina</p>
                    <p>Serving Saskatchewan from our Manitoba offices</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    {location.address.street}
                    <br />
                    {location.address.cityProvince} {location.address.postalCode}
                  </p>
                  {!location.hasLocalOffice && (
                    <p className="text-xs text-muted-foreground/60">
                      Serving {location.city} from our Brandon headquarters
                    </p>
                  )}
                </>
              )}
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

        {/* SEO tagline */}
        <p className="mt-12 text-xs text-muted-foreground/40 leading-relaxed text-center">
          {SEO_TAGLINES[location.slug]}
        </p>

        <div className="mt-6 pt-6 border-t border-theme flex items-center justify-between">
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
