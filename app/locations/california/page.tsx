import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "California EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, Powerwall, backup power, and licensed electrical work across California.",
  alternates: { canonical: "/locations/california" },
}

export default function CaliforniaLocationPage() {
  return <LocationPage page={locationPages.california} />
}
