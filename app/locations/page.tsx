import type { Metadata } from "next"

import { LocationPage } from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Nationwide Electrician Network | Charge Home Solutions",
  description: "Find licensed local electricians for EV charging, Tesla energy systems, electrical upgrades, and service in all 50 states.",
  alternates: { canonical: "/locations" },
}

export default function LocationsPage() {
  return <LocationPage />
}
