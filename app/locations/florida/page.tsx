import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Florida EV Charging & Electrical Services | Charge Home Solutions",
  description: "Storm-ready electrical work, Tesla EV charging, Powerwall, and backup power across Florida.",
  alternates: { canonical: "/locations/florida" },
}

export default function FloridaLocationPage() {
  return <LocationPage page={locationPages.florida} />
}
