import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TrustPageView } from "@/components/trust-page";
import { aboutPage } from "@/lib/trust-pages";

export const metadata: Metadata = pageMetadata({
  title: aboutPage.metaTitle,
  description: aboutPage.description,
  path: "/about",
});

export default function Page() {
  return <TrustPageView page={aboutPage} />;
}
