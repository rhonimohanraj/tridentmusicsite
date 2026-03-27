import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { TimezoneThemeProvider } from "@/components/timezone-theme-provider";
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

export const metadata: Metadata = {
  title: "Trident Music | Brandon & Manitoba's Premier DJ Service",
  description:
    "DJ entertainment services for weddings, events, and celebrations throughout Brandon, Winnipeg, Regina, and Manitoba. Professional DJ, audio visual, and photobooth services.",
  openGraph: {
    title: "Trident Music | Premier DJ & Event Entertainment",
    description:
      "For those celebrations you can never forget. DJ entertainment for weddings, events, and celebrations across Manitoba.",
    url: "https://www.tridentmusic.ca",
    siteName: "Trident Music",
    type: "website",
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
        <TimezoneThemeProvider>{children}</TimezoneThemeProvider>
      </body>
    </html>
  );
}
