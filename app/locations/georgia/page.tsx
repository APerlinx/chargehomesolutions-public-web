import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Georgia EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, home-battery backup, and licensed electrical services across Georgia.",
  alternates: { canonical: "/locations/georgia" },
}

export default function GeorgiaLocationPage() {
  return <LocationPage page={locationPages.georgia} />
}
