import type { Metadata } from "next";
import { TrustPageView } from "@/components/trust-page";
import { contactPage } from "@/lib/trust-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.description,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `${contactPage.metaTitle} | Trident Music`,
    description: contactPage.description,
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [{ url: "/images/ChamberOfCommerceGala.jpg", width: 2500, height: 1667 }],
  },
};

export default function Page() {
  return <TrustPageView page={contactPage} />;
}
