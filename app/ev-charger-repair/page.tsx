import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-charger-repair"]

export const metadata: Metadata = {
  title: "EV Charger Repair | Charge Home Solutions",
  description:
    "EV charger repair for faults, tripped breakers, GFCI issues, and connector damage. Licensed electricians diagnose and repair home and commercial chargers, often the same week.",
  alternates: { canonical: "/ev-charger-repair" },
}

export default function EvChargerRepairPage() {
  return <EvChargingServicePage {...page} />
}
