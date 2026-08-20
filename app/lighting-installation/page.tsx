import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["lighting-installation"]

export const metadata: Metadata = {
  title: "Lighting Installation | Charge Home Solutions",
  description: "Professional recessed, fixture, landscape, smart, and accent lighting installation by licensed electricians.",
  alternates: { canonical: "/lighting-installation" },
}

export default function LightingInstallationPage() {
  return <EvChargingServicePage {...page} />
}
