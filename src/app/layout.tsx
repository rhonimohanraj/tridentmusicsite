import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { TimezoneThemeProvider } from "@/components/timezone-theme-provider";
import { getServerLocation } from "@/lib/get-server-location";
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
    title: location.seo.title,
    description: location.seo.description,
    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      url: "https://www.tridentmusic.ca",
      siteName: "Trident Music",
      type: "website",
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
        <TimezoneThemeProvider>{children}</TimezoneThemeProvider>
      </body>
    </html>
  );
}
