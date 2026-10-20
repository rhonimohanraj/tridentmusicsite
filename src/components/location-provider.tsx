"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useMemo,
  useSyncExternalStore,
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

const noopSubscribe = () => () => {};

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Location chosen in this session via setLocation (wins over the cookie).
  const [selectedSlug, setSelectedSlug] = useState<LocationSlug | null>(null);

  // Cookie value read once on the client after hydration; the server snapshot
  // is empty so the server and hydration renders use DEFAULT_LOCATION.
  const mountCookie = useRef<string | null>(null);
  const cookie = useSyncExternalStore(
    noopSubscribe,
    () => {
      if (mountCookie.current === null) {
        mountCookie.current = getCookie(LOCATION_COOKIE) ?? "";
      }
      return mountCookie.current;
    },
    () => ""
  );

  const slug: LocationSlug =
    selectedSlug ??
    (cookie && cookie in LOCATIONS ? (cookie as LocationSlug) : DEFAULT_LOCATION);

  const location = useMemo(() => getLocationBySlug(slug), [slug]);

  const setLocation = useCallback(
    (newSlug: LocationSlug) => {
      setSelectedSlug(newSlug);
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
