import type { Metadata } from "next";
import BlogPage from "./blog-listing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Real advice from hundreds of weddings, socials, and late nights across Manitoba and Saskatchewan. Wedding planning tips, venue guides, and entertainment insights from Trident Music.",
  openGraph: {
    title: "Blog | Trident Music",
    description:
      "Notes from the dance floor — wedding tips, venue guides, and event entertainment insights from the Trident Music team.",
  },
};

export default function Page() {
  return <BlogPage />;
}
