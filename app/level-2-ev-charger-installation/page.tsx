import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["level-2-ev-charger-installation"]

export const metadata: Metadata = {
  title: "Level 2 EV Charger Installation | Charge Home Solutions",
  description:
    "Fast Level 2 EV charger installation for homes, with 240V circuit sizing, safe panel review, and service that fits your driving routine.",
  alternates: { canonical: "/level-2-ev-charger-installation" },
}

export default function Level2EVChargerInstallationPage() {
  return <EvChargingServicePage {...page} />
}
