import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TrustPageView } from "@/components/trust-page";
import { privacyPage } from "@/lib/trust-pages";

export const metadata: Metadata = pageMetadata({
  title: privacyPage.metaTitle,
  description: privacyPage.description,
  path: "/privacy",
});

export default function Page() {
  return <TrustPageView page={privacyPage} />;
}
