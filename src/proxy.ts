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

// ─── Agent layer: Markdown content negotiation ───
// Agents that prefer text/markdown (same q-value rules as the static-site
// middleware used across Trident sites) and any *.md URL are rewritten to the
// Markdown route handler in src/app/agent-md/. Browsers are unaffected.
const AGENT_MD_ROUTE = "/agent-md";
const AGENT_MD_PATH_HEADER = "x-agent-md-path"; // keep in sync with src/lib/agent-markdown.ts

function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  let md = -1;
  let html = -1;
  for (const part of accept.toLowerCase().split(",")) {
    const [type, ...params] = part.trim().split(";");
    const qParam = params.find((p) => p.trim().startsWith("q="));
    const q = qParam ? parseFloat(qParam.trim().slice(2)) : 1;
    if (type === "text/markdown" || type === "text/x-markdown") md = Math.max(md, q);
    if (type === "text/html") html = Math.max(html, q);
  }
  return md > 0 && md >= html;
}

function markdownRewrite(request: NextRequest): NextResponse | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith(AGENT_MD_ROUTE)) {
    return null;
  }
  const isMdUrl = pathname.endsWith(".md");
  const lastSegment = pathname.split("/").pop() ?? "";
  const hasOtherExtension = !isMdUrl && lastSegment.includes(".");
  if (!isMdUrl && (hasOtherExtension || !wantsMarkdown(request.headers.get("accept")))) return null;

  let path = (isMdUrl ? pathname.slice(0, -3) : pathname).replace(/\/+$/, "") || "/";
  if (path === "/index") path = "/";

  const url = request.nextUrl.clone();
  url.pathname = path === "/" ? AGENT_MD_ROUTE : `${AGENT_MD_ROUTE}${path}`;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(AGENT_MD_PATH_HEADER, pathname);
  const response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  response.headers.set("Vary", "Accept");
  return response;
}

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

  const markdown = markdownRewrite(request);
  if (markdown) return markdown;

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

  // HTML and Markdown share URLs, so caches must key on Accept.
  response.headers.append("Vary", "Accept");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
