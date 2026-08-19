import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["ev-fleet-charging"]

export const metadata: Metadata = {
  title: "EV Fleet Charging | Charge Home Solutions",
  description:
    "EV fleet depot charging with load management, networking, and utility incentive capture, designed to scale as your fleet electrifies.",
  alternates: { canonical: "/ev-fleet-charging" },
}

export default function EvFleetChargingPage() {
  return <EvChargingServicePage {...page} />
}
