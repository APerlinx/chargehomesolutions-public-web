import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["electrical-inspection"]

export const metadata: Metadata = {
  title: "Electrical Inspection | Charge Home Solutions",
  description: "Licensed electrical inspections for panels, wiring, grounding, safety devices, and capacity.",
  alternates: { canonical: "/electrical-inspection" },
}

export default function ElectricalInspectionPage() {
  return <EvChargingServicePage {...page} />
}
