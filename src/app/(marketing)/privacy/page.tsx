import type { Metadata } from "next";
import { TrustPageView } from "@/components/trust-page";
import { privacyPage } from "@/lib/trust-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: privacyPage.metaTitle,
  description: privacyPage.description,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: `${privacyPage.metaTitle} | Trident Music`,
    description: privacyPage.description,
    url: `${SITE_URL}/privacy`,
    type: "website",
    images: [{ url: "/images/ChamberOfCommerceGala.jpg", width: 2500, height: 1667 }],
  },
};

export default function Page() {
  return <TrustPageView page={privacyPage} />;
}
