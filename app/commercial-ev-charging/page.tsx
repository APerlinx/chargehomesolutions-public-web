import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["commercial-ev-charging"]

export const metadata: Metadata = {
  title: "Commercial EV Charging | Charge Home Solutions",
  description:
    "Commercial EV charging stations for workplaces, multifamily, retail, and fleets, with site assessment, load management, networking, and rebate paperwork handled for you.",
  alternates: { canonical: "/commercial-ev-charging" },
}

export default function CommercialEvChargingPage() {
  return <EvChargingServicePage {...page} />
}
