import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["amazon-ev-charger-installation"]

export const metadata: Metadata = {
  title: "Amazon EV Charger Installation | Charge Home Solutions",
  description:
    "Professional, licensed installation of any Amazon-purchased EV charger, typically $400–$1,500 including permit and inspection.",
  alternates: { canonical: "/amazon-ev-charger-installation" },
}

export default function AmazonEvChargerInstallationPage() {
  return <EvChargingServicePage {...page} />
}
