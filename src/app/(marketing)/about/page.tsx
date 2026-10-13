import type { Metadata } from "next";
import { TrustPageView } from "@/components/trust-page";
import { aboutPage } from "@/lib/trust-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `${aboutPage.metaTitle} | Trident Music`,
    description: aboutPage.description,
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: "/images/ChamberOfCommerceGala.jpg", width: 2500, height: 1667 }],
  },
};

export default function Page() {
  return <TrustPageView page={aboutPage} />;
}
