import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "New York EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, Powerwall, home-battery backup, and licensed electrical work across New York.",
  alternates: { canonical: "/locations/new-york" },
}

export default function NewYorkLocationPage() {
  return <LocationPage page={locationPages["new-york"]} />
}
