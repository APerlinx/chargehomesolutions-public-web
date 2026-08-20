import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Illinois EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, Powerwall, electrical upgrades, and backup planning across Illinois.",
  alternates: { canonical: "/locations/illinois" },
}

export default function IllinoisLocationPage() {
  return <LocationPage page={locationPages.illinois} />
}
