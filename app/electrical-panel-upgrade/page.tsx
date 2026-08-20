import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["electrical-panel-upgrade"]

export const metadata: Metadata = {
  title: "Electrical Panel Upgrade | Charge Home Solutions",
  description: "Modern 200-amp electrical panel upgrades with load calculations, permits, utility coordination, and inspection.",
  alternates: { canonical: "/electrical-panel-upgrade" },
}

export default function ElectricalPanelUpgradePage() {
  return <EvChargingServicePage {...page} />
}
