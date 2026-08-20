import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Texas EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, Powerwall, battery backup, panel upgrades, and electrical work across Texas.",
  alternates: { canonical: "/locations/texas" },
}

export default function TexasLocationPage() {
  return <LocationPage page={locationPages.texas} />
}
