// Per-route metadata helper. Next.js replaces (does not merge) nested
// `openGraph` / `twitter` objects, so every route builds its full set here:
// a self-referencing canonical, og:url, and a default share image.
import type { Metadata } from "next";
import { SITE_URL } from "./site";

const BRAND = "Trident Music";

export const DEFAULT_OG_IMAGE = {
  url: "/images/ChamberOfCommerceGala.jpg",
  width: 2500,
  height: 1667,
  alt: "Trident Music DJ performing for a packed room at a gala",
};

type OgImage = string | { url: string; width?: number; height?: number; alt?: string };

/** Absolute URL for a site path, matching the sitemap (no trailing slash). */
export function canonicalUrl(path: string): string {
  return path === "/" || path === "" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Title shown in <title>. The root layout template appends " | Trident Music";
 * titles that already name the brand (or would run past ~65 chars) are used as-is.
 */
export function pageTitle(title: string): Metadata["title"] {
  const withBrand = `${title} | ${BRAND}`;
  if (title.includes(BRAND) || withBrand.length > 65) return { absolute: title };
  return title;
}

function fullTitle(title: string): string {
  return title.includes(BRAND) || `${title} | ${BRAND}`.length > 65
    ? title
    : `${title} | ${BRAND}`;
}

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  images,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  images?: OgImage[];
  type?: "website" | "article";
}): Metadata {
  const url = canonicalUrl(path);
  const socialTitle = ogTitle ?? fullTitle(title);
  const socialDescription = ogDescription ?? description;
  const ogImages = images && images.length ? images : [DEFAULT_OG_IMAGE];
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: BRAND,
      type,
      locale: "en_CA",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: ogImages.map((i) => (typeof i === "string" ? i : i.url)),
    },
  };
}
