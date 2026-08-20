import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"
import { locationPages } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Pennsylvania EV Charging & Electrical Services | Charge Home Solutions",
  description: "Tesla-certified EV charging, home batteries, panel upgrades, and licensed electrical work across Pennsylvania.",
  alternates: { canonical: "/locations/pennsylvania" },
}

export default function PennsylvaniaLocationPage() {
  return <LocationPage page={locationPages.pennsylvania} />
}
