// Single source of business facts shared by pages, JSON-LD, and the
// Markdown versions served to AI agents (see src/lib/agent-markdown.ts).
import { socialLinks } from "./data";

export const SITE_URL = "https://www.tridentmusic.ca";

export const business = {
  name: "Trident Music",
  legalName: "Trident Event Group Inc.",
  parent: { name: "Trident Event Group", url: "https://www.tridenteventgroup.ca" },
  email: "hello@tridenteventgroup.ca",
  phoneDisplay: "+1 431-441-2676",
  phoneE164: "+14314412676",
  inquiryUrl: `${SITE_URL}/inquire`,
  hours: "Monday to Friday, 9 AM to 4 PM (Central Time)",
  hq: {
    street: "19 Premier Avenue",
    city: "Brandon",
    region: "MB",
    postalCode: "R7B 3N9",
    country: "CA",
    full: "19 Premier Avenue, Brandon, MB R7B 3N9, Canada",
  },
  winnipeg: {
    street: "425 Ballantrae Dr",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3T 6H6",
    country: "CA",
    full: "425 Ballantrae Dr, Winnipeg, MB R3T 6H6, Canada",
  },
  serviceArea:
    "Brandon and the Westman area, Winnipeg and surrounding areas, Regina and Saskatchewan, and communities across Manitoba and Saskatchewan",
  logo: `${SITE_URL}/images/logos/trident-music-dark.png`,
  image: `${SITE_URL}/images/ChamberOfCommerceGala.jpg`,
  sameAs: [
    socialLinks.instagram,
    socialLinks.facebook,
    socialLinks.linkedin,
    socialLinks.tiktok,
  ],
} as const;
