import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["retail-shopping-center-ev-charging"]

export const metadata: Metadata = {
  title: "Retail & Shopping Center EV Charging | Charge Home Solutions",
  description:
    "Networked EV charging for retail and shopping centers, designed to attract EV-driving customers and capture available utility incentives.",
  alternates: { canonical: "/retail-shopping-center-ev-charging" },
}

export default function RetailShoppingCenterEvChargingPage() {
  return <EvChargingServicePage {...page} />
}
