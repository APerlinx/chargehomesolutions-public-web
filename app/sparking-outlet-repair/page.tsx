import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["sparking-outlet-repair"]

export const metadata: Metadata = {
  title: "Sparking Outlet Repair | Charge Home Solutions",
  description: "24/7 diagnosis and repair for sparking outlets, switches, panels, scorched connections, and electrical arcing.",
  alternates: { canonical: "/sparking-outlet-repair" },
}

export default function SparkingOutletRepairPage() {
  return <EvChargingServicePage {...page} />
}
