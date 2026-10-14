import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import TheTeamPage from "./team-page";

export const metadata: Metadata = pageMetadata({
  title: "The Team",
  description:
    "Meet the 16-person Trident Music team — DJs, hosts, videographers, photographers, and creatives who bring every celebration to life across Manitoba and Saskatchewan.",
  path: "/the-team",
  ogDescription:
    "Meet the people behind Trident Music — professional DJs and entertainment specialists serving weddings and events across the Canadian prairies.",
});

export default function Page() {
  return <TheTeamPage />;
}
