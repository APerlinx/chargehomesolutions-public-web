import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-charger-circuit-installation"]

export const metadata: Metadata = {
  title: "EV Charger Circuit Installation | Charge Home Solutions",
  description:
    "Dedicated EV charger circuit installation (240V, 40–60A), sized to your charger and panel, with permit and inspection included.",
  alternates: { canonical: "/ev-charger-circuit-installation" },
}

export default function EvChargerCircuitInstallationPage() {
  return <EvChargingServicePage {...page} />
}
