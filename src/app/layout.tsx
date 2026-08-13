import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { TimezoneThemeProvider } from "@/components/timezone-theme-provider";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { getServerLocation } from "@/lib/get-server-location";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
    },
    twitter: {
      card: "summary_large_image",
      title: location.seo.title,
      description: location.seo.description,
    },
    alternates: {
      canonical: "https://www.tridentmusic.ca",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: "Trident Music",
  alternateName: "Trident Event Group",
  url: "https://www.tridentmusic.ca",
  logo: "https://www.tridentmusic.ca/images/logo.png",
  description:
    "DJ entertainment for weddings, events, and celebrations across Manitoba and Saskatchewan.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "381 Park Avenue East",
      addressLocality: "Brandon",
      addressRegion: "MB",
      postalCode: "R7A 7A5",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "425 Ballantrae Dr",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      postalCode: "R3T 6H6",
      addressCountry: "CA",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Winnipeg" },
    { "@type": "City", name: "Regina" },
    { "@type": "State", name: "Manitoba" },
    { "@type": "State", name: "Saskatchewan" },
  ],
  sameAs: [
    "https://www.instagram.com/tridentmusic/",
    "https://www.linkedin.com/company/tridenteventgroup/",
    "https://www.facebook.com/Tridentmusicinc/",
    "https://www.tiktok.com/@tridenteventgroup.ca",
  ],
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
        <TimezoneThemeProvider>
          {children}
          <SmoothCursor />
        </TimezoneThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
