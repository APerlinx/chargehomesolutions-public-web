import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "North Carolina EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, home-battery backup, and licensed electrical services across North Carolina.",
  alternates: { canonical: "/locations/north-carolina" },
}

export default function NorthCarolinaLocationPage() {
  return <LocationPage page={locationPages["north-carolina"]} />
}
