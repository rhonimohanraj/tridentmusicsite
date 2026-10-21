import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Outfit } from "next/font/google";
import { TimezoneThemeProvider } from "@/components/timezone-theme-provider";
import { Cursor } from "@/components/cursor";
import { getServerLocation } from "@/lib/get-server-location";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { webmcpScript } from "@/lib/webmcp-script";

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
  };
}

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
        {/* Business JSON-LD is rendered per route group: (marketing)/layout.tsx
            carries the site organization, city pages carry their own entity. */}
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
          {children}
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
