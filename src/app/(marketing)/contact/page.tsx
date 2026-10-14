import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TrustPageView } from "@/components/trust-page";
import { contactPage } from "@/lib/trust-pages";

export const metadata: Metadata = pageMetadata({
  title: contactPage.metaTitle,
  description: contactPage.description,
  path: "/contact",
});

export default function Page() {
  return <TrustPageView page={contactPage} />;
}
