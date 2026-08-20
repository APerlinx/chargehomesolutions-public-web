import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["generator-installation"]

export const metadata: Metadata = {
  title: "Generator Installation | Charge Home Solutions",
  description: "Standby generator installation for automatic whole-home and essential-circuit backup power.",
  alternates: { canonical: "/generator-installation" },
}

export default function GeneratorInstallationPage() {
  return <EvChargingServicePage {...page} />
}
