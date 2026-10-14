import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Outfit } from "next/font/google";
import { TimezoneThemeProvider } from "@/components/timezone-theme-provider";
import { Cursor } from "@/components/cursor";
import { MotionPreferences } from "@/components/motion-preferences";
import { getServerLocation } from "@/lib/get-server-location";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { webmcpScript } from "@/lib/webmcp-script";
import { business, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const location = await getServerLocation();
  return {
    metadataBase: new URL("https://www.tridentmusic.ca"),
    other: { "is-agentic-site-type": "business" },
    title: {
      default: location.seo.title,
      template: "%s | Trident Music",
    },
    description: location.seo.description,
    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      url: "https://www.tridentmusic.ca",
      siteName: "Trident Music",
      type: "website",
      locale: "en_CA",
      images: [
        {
          url: "/images/ChamberOfCommerceGala.jpg",
          width: 2500,
          height: 1667,
          alt: "Trident Music DJ performing for a packed room at a gala",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seo.title,
      description: location.seo.description,
      images: ["/images/ChamberOfCommerceGala.jpg"],
    },
    alternates: {
      canonical: "https://www.tridentmusic.ca",
    },
  };
}

// Organization identity for agents and search engines. Facts come from
// src/lib/site.ts so pages, Markdown twins, and JSON-LD stay in sync.
const jsonLd = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7QWGYGM05T"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7QWGYGM05T');`}
        </Script>
        <TimezoneThemeProvider>
          <MotionPreferences>{children}</MotionPreferences>
          <Cursor />
        </TimezoneThemeProvider>
        <Analytics />
        {/* WebMCP tools for browser AI agents; reads its config from these data attributes. */}
        <script
          data-brand="Trident Music"
          data-inquiry="/inquire"
          dangerouslySetInnerHTML={{ __html: webmcpScript }}
        />
      </body>
    </html>
  );
}
