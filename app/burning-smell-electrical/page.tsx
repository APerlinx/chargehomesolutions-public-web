import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["burning-smell-electrical"]

export const metadata: Metadata = {
  title: "Burning Smell Electrical Inspection | Charge Home Solutions",
  description: "Urgent 24/7 inspection for fishy, acrid, or burning-plastic odors from overheating electrical equipment.",
  alternates: { canonical: "/burning-smell-electrical" },
}

export default function BurningSmellElectricalPage() {
  return <EvChargingServicePage {...page} />
}
