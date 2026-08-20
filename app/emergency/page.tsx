import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["emergency"]

export const metadata: Metadata = {
  title: "24/7 Emergency Electrical Services | Charge Home Solutions",
  description: "Emergency electricians available 24/7 for sparking, burning smells, dangerous outages, and storm damage.",
  alternates: { canonical: "/emergency" },
}

export default function EmergencyPage() {
  return <EvChargingServicePage {...page} />
}
