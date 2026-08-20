import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["storm-damage-electrical-repair"]

export const metadata: Metadata = {
  title: "Storm Damage Electrical Repair | Charge Home Solutions",
  description: "Emergency repair for storm-damaged service equipment with utility coordination and insurance-ready documentation.",
  alternates: { canonical: "/storm-damage-electrical-repair" },
}

export default function StormDamageElectricalRepairPage() {
  return <EvChargingServicePage {...page} />
}
