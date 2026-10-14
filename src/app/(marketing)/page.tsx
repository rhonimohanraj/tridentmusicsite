import type { Metadata } from "next";
import { getServerLocation } from "@/lib/get-server-location";
import { pageMetadata } from "@/lib/seo";
import HomePage from "./home-page";

export async function generateMetadata(): Promise<Metadata> {
  const location = await getServerLocation();
  return pageMetadata({
    title: location.seo.title,
    description: location.seo.description,
    path: "/",
  });
}

export default function Page() {
  return <HomePage />;
}
