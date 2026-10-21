import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LocationProvider } from "@/components/location-provider";

// Same chrome as (marketing), minus the site-wide organization JSON-LD:
// each city page publishes its own single business entity instead.
export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocationProvider>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </LocationProvider>
  );
}
