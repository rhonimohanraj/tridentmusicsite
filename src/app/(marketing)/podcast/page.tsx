import type { Metadata } from "next";
import PodcastPage from "./podcast-page";

export const metadata: Metadata = {
  title: "For The Record Podcast",
  description:
    "Hosted by Rhoni Mohanraj and Joey Simms, For the Record takes you behind the scenes of the event world and pop culture — with humor, insight, and bold hot takes in every episode.",
  openGraph: {
    title: "For The Record Podcast | Trident Music",
    description:
      "Hosted by Rhoni Mohanraj and Joey Simms — conversations worth remembering about events, culture, and the stories behind the celebrations.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/640ba1326c0d7b6657b3ad25/81932503-6811-4154-802c-498c05ce8724/T-492.jpg",
    ],
  },
};

export default function Page() {
  return <PodcastPage />;
}
