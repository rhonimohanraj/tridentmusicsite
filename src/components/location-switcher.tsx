"use client";

import { MapPin } from "lucide-react";
import { useLocation } from "@/components/location-provider";
import { LOCATIONS } from "@/lib/locations";
import type { LocationSlug } from "@/lib/locations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const displayLabel: Record<LocationSlug, string> = {
  brandon: "Brandon, MB",
  winnipeg: "Winnipeg, MB",
  regina: "Regina, SK",
  generic: "All Locations",
};

export function LocationSwitcher() {
  const { location, setLocation } = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors outline-none">
        <MapPin size={14} />
        <span>
          {location.slug === "generic" ? "All Locations" : location.city}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {(["brandon", "winnipeg", "regina"] as const).map((slug) => (
          <DropdownMenuItem
            key={slug}
            onClick={() => setLocation(slug)}
            className={
              slug === location.slug
                ? "font-medium"
                : "text-muted-foreground"
            }
          >
            {displayLabel[slug]}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setLocation("generic")}
          className={
            location.slug === "generic"
              ? "font-medium"
              : "text-muted-foreground"
          }
        >
          All Locations
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
