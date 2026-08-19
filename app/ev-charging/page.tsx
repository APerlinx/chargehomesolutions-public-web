import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-charging"]

export const metadata: Metadata = {
  title: "EV Charging Services | Charge Home Solutions",
  description:
    "EV charger installation, Level 2 charging, Tesla Wall Connector installs, load-managed home charging, and commercial EV charging nationwide.",
  alternates: { canonical: "/ev-charging" },
}

export default function EVChargingPage() {
  return <EvChargingServicePage {...page} />
}
