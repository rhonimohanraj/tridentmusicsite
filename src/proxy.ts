import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LOCATION_COOKIE,
  LOCATION_HEADER,
  DEFAULT_LOCATION,
} from "./lib/locations";

const CITY_TO_SLUG: Record<string, string> = {
  brandon: "brandon",
  winnipeg: "winnipeg",
  regina: "regina",
};

function resolveSlug(request: NextRequest): string {
  // 1. Check manual override cookie — if user picked a city, respect it
  const manualOverride = request.cookies.get("location-manual-override")?.value;
  const cookieValue = request.cookies.get(LOCATION_COOKIE)?.value;
  if (manualOverride === "true" && cookieValue && cookieValue in CITY_TO_SLUG) {
    return cookieValue;
  }

  // 2. Read Vercel geo header
  const geoCity = request.headers.get("x-vercel-ip-city") || "";
  const normalized = geoCity.toLowerCase().trim();
  if (normalized in CITY_TO_SLUG) {
    return CITY_TO_SLUG[normalized];
  }

  // 3. Default
  return DEFAULT_LOCATION;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle legacy location page redirects
  if (pathname === "/winnipeg-dj-service") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    const response = NextResponse.redirect(url, 301);
    response.cookies.set(LOCATION_COOKIE, "winnipeg", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  if (pathname === "/regina-dj-service") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    const response = NextResponse.redirect(url, 301);
    response.cookies.set(LOCATION_COOKIE, "regina", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const slug = resolveSlug(request);

  // Set request header for server components to read
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCATION_HEADER, slug);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set cookie so client-side context can read it
  response.cookies.set(LOCATION_COOKIE, slug, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
