import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["power-outage-repair"]

export const metadata: Metadata = {
  title: "Power Outage Repair | Charge Home Solutions",
  description: "24/7 repair for home-side outages, failed main breakers, panels, meter bases, and service entrances.",
  alternates: { canonical: "/power-outage-repair" },
}

export default function PowerOutageRepairPage() {
  return <EvChargingServicePage {...page} />
}
