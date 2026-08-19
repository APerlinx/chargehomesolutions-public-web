import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-charger-installation"]

export const metadata: Metadata = {
  title: "EV Charger Installation | Charge Home Solutions",
  description:
    "Professional EV charger installation for homes and garages, with dedicated 240V circuits, permitting, inspection, and smart recommendations for your panel.",
  alternates: { canonical: "/ev-charger-installation" },
}

export default function EVChargerInstallationPage() {
  return <EvChargingServicePage {...page} />
}
