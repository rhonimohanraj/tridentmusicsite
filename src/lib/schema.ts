// JSON-LD builders. Each page carries exactly one business entity:
// - most pages: the site-wide Trident Music organization (siteOrganizationJsonLd),
//   rendered by the (marketing) layout;
// - Brandon/Winnipeg city pages: that city's EntertainmentBusiness only
//   (cityPageJsonLd), rendered by the page in the (city) route group.
import { business, SITE_URL } from "./site";
import { socialLinks } from "./data";
import { CITY_PAGES, PHONE_DISPLAY, cityPageUrl } from "./city-pages";
import type { CityPageSlug } from "./city-pages";

/** Umbrella organization on tridenteventgroup.ca (the @id its homepage publishes). */
export const TEG_ORGANIZATION_ID = "https://www.tridenteventgroup.ca/#organization";

/** Serialize for a <script type="application/ld+json"> tag (escapes "<", per Next.js guidance). */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Organization identity for agents and search engines. Facts come from
// src/lib/site.ts so pages, Markdown twins, and JSON-LD stay in sync.
export const siteOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "EntertainmentBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: business.name,
  alternateName: "Trident Event Group",
  legalName: business.legalName,
  url: SITE_URL,
  logo: business.logo,
  image: business.image,
  telephone: "+1-431-441-2676",
  email: business.email,
  description:
    "DJ entertainment for weddings, events, and celebrations across Manitoba and Saskatchewan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.hq.street,
    addressLocality: business.hq.city,
    addressRegion: business.hq.region,
    postalCode: business.hq.postalCode,
    addressCountry: business.hq.country,
  },
  location: [
    {
      "@type": "Place",
      name: "Trident Music Winnipeg",
      address: {
        "@type": "PostalAddress",
        streetAddress: business.winnipeg.street,
        addressLocality: business.winnipeg.city,
        addressRegion: business.winnipeg.region,
        postalCode: business.winnipeg.postalCode,
        addressCountry: business.winnipeg.country,
      },
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: business.email,
    telephone: business.phoneDisplay,
    url: business.inquiryUrl,
    areaServed: ["CA-MB", "CA-SK"],
    availableLanguage: "en",
  },
  areaServed: [
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Regina" },
    { "@type": "State", name: "Manitoba" },
    { "@type": "State", name: "Saskatchewan" },
  ],
  openingHours: "Mo-Fr 09:00-16:00",
  sameAs: [...business.sameAs],
  parentOrganization: {
    "@type": "Organization",
    name: business.parent.name,
    url: business.parent.url,
  },
};

/** One @graph per city page: the city's EntertainmentBusiness, its FAQPage and a breadcrumb. */
export function cityPageJsonLd(slug: CityPageSlug) {
  const page = CITY_PAGES[slug];
  const url = cityPageUrl(slug);
  const businessId = `${url}#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EntertainmentBusiness",
        "@id": businessId,
        name: business.name,
        alternateName: page.schema.alternateName,
        description: page.description,
        url,
        image: [`${SITE_URL}${page.heroPhoto.src}`, `${SITE_URL}${page.featurePhoto.src}`],
        logo: business.logo,
        telephone: PHONE_DISPLAY,
        email: business.email,
        priceRange: "$$",
        address: { "@type": "PostalAddress", ...page.schema.address },
        geo: { "@type": "GeoCoordinates", ...page.schema.geo },
        areaServed: page.schema.areaServed.map((name) => ({ "@type": "City", name })),
        openingHours: "Mo-Fr 09:00-16:00",
        parentOrganization: {
          "@type": "Organization",
          "@id": TEG_ORGANIZATION_ID,
          name: business.parent.name,
          url: business.parent.url,
        },
        // TODO(rhoni): add this listing's Google Maps (cid) URL once the profile is public/confirmed.
        sameAs: [socialLinks.instagram, socialLinks.facebook],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        name: page.title,
        about: { "@id": businessId },
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: `DJ service in ${page.city}`, item: url },
        ],
      },
    ],
  };
}
