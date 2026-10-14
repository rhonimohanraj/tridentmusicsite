import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import InquirePage from "./inquire-page";

export const metadata: Metadata = pageMetadata({
  title: "Inquire",
  description:
    "Tell us about your event — your date, your venue, the vibe you're going for. We'll take it from there. Contact Trident Music for DJ and entertainment services.",
  path: "/inquire",
  ogDescription:
    "Get in touch with Trident Music for wedding DJ, corporate event, and entertainment services across Manitoba and Saskatchewan.",
});

export default function Page() {
  return <InquirePage />;
}
