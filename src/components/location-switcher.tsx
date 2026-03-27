"use client";

import { MapPin } from "lucide-react";
import { useLocation } from "@/components/location-provider";
import { LOCATIONS } from "@/lib/locations";
import type { LocationSlug } from "@/lib/locations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LocationSwitcher() {
  const { location, setLocation } = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors outline-none">
        <MapPin size={14} />
        <span>{location.city}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {Object.values(LOCATIONS).map((loc) => (
          <DropdownMenuItem
            key={loc.slug}
            onClick={() => setLocation(loc.slug as LocationSlug)}
            className={
              loc.slug === location.slug
                ? "font-medium"
                : "text-muted-foreground"
            }
          >
            {loc.city}, {loc.province}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
