"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useRouter } from "next/navigation";
import {
  LOCATIONS,
  LOCATION_COOKIE,
  DEFAULT_LOCATION,
  getLocationBySlug,
} from "@/lib/locations";
import type { LocationSlug, LocationConfig } from "@/lib/locations";

interface LocationContextValue {
  location: LocationConfig;
  slug: LocationSlug;
  setLocation: (slug: LocationSlug) => void;
}

const LocationContext = createContext<LocationContextValue | null>(null);

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;max-age=${60 * 60 * 24 * 365}`;
}

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [slug, setSlug] = useState<LocationSlug>(() => {
    const cookie = getCookie(LOCATION_COOKIE);
    if (cookie && cookie in LOCATIONS) return cookie as LocationSlug;
    return DEFAULT_LOCATION;
  });

  const location = useMemo(() => getLocationBySlug(slug), [slug]);

  const setLocation = useCallback(
    (newSlug: LocationSlug) => {
      setSlug(newSlug);
      setCookie(LOCATION_COOKIE, newSlug);
      // Mark as manual override so proxy doesn't overwrite with geo
      setCookie("location-manual-override", "true");
      router.refresh();
    },
    [router]
  );

  const value = useMemo(
    () => ({ location, slug, setLocation }),
    [location, slug, setLocation]
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation(): LocationContextValue {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return ctx;
}
