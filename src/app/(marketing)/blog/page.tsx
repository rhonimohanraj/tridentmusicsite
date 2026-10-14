import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import BlogPage from "./blog-listing";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Wedding planning tips, venue guides, and entertainment insights from Trident Music, drawn from hundreds of weddings and events across Manitoba and Saskatchewan.",
  path: "/blog",
  ogDescription:
    "Notes from the dance floor — wedding tips, venue guides, and event entertainment insights from the Trident Music team.",
});

export default function Page() {
  return <BlogPage />;
}
