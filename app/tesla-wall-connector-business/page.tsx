import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["tesla-wall-connector-business"]

export const metadata: Metadata = {
  title: "Tesla Wall Connector for Business | Charge Home Solutions",
  description:
    "Tesla-certified Wall Connector installation for businesses and fleets, with load management across multiple units and warranty registration.",
  alternates: { canonical: "/tesla-wall-connector-business" },
}

export default function TeslaWallConnectorBusinessPage() {
  return <EvChargingServicePage {...page} />
}
