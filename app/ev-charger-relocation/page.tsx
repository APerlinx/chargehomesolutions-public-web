import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-charger-relocation"]

export const metadata: Metadata = {
  title: "EV Charger Relocation | Charge Home Solutions",
  description:
    "EV charger relocation for moves and remodels, new circuit run, remount, and inspection, typically $250–$800.",
  alternates: { canonical: "/ev-charger-relocation" },
}

export default function EvChargerRelocationPage() {
  return <EvChargingServicePage {...page} />
}
