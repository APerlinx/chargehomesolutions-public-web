import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-ready-home-wiring"]

export const metadata: Metadata = {
  title: "EV-Ready Home Wiring | Charge Home Solutions",
  description:
    "EV-ready home wiring installs the conduit and circuit capacity for a future charger, the most affordable time to prepare is during a remodel or panel upgrade.",
  alternates: { canonical: "/ev-ready-home-wiring" },
}

export default function EvReadyHomeWiringPage() {
  return <EvChargingServicePage {...page} />
}
