import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["emergency-electrician"]

export const metadata: Metadata = {
  title: "24/7 Emergency Electrician | Charge Home Solutions",
  description: "Licensed emergency electricians for fire, shock, outage, water-intrusion, and storm electrical hazards.",
  alternates: { canonical: "/emergency-electrician" },
}

export default function EmergencyElectricianPage() {
  return <EvChargingServicePage {...page} />
}
