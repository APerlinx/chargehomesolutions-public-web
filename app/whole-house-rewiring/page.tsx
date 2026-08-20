import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["whole-house-rewiring"]

export const metadata: Metadata = {
  title: "Whole-House Rewiring | Charge Home Solutions",
  description: "Replace aging or unsafe home wiring with grounded, code-compliant circuits and modern protection.",
  alternates: { canonical: "/whole-house-rewiring" },
}

export default function WholeHouseRewiringPage() {
  return <EvChargingServicePage {...page} />
}
