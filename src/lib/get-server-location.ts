import { headers } from "next/headers";
import {
  getLocationBySlug,
  DEFAULT_LOCATION,
  LOCATION_HEADER,
} from "./locations";
import type { LocationConfig } from "./locations";

export async function getServerLocation(): Promise<LocationConfig> {
  const h = await headers();
  const slug = h.get(LOCATION_HEADER) || DEFAULT_LOCATION;
  return getLocationBySlug(slug);
}
