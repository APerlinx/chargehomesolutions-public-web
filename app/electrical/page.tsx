import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["electrical"]

export const metadata: Metadata = {
  title: "Electrical Services | Charge Home Solutions",
  description: "Licensed electrical work for panels, wiring, lighting, generators, inspections, and repairs.",
  alternates: { canonical: "/electrical" },
}

export default function ElectricalPage() {
  return <EvChargingServicePage {...page} />
}
