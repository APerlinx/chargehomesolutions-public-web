import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["tesla-universal-wall-connector-installation"]

export const metadata: Metadata = {
  title: "Tesla Universal Wall Connector Installation | Charge Home Solutions",
  description:
    "Tesla Universal Wall Connector installation, charging both Tesla and J1772 EVs at up to 48 amps with a Tesla-certified electrician.",
  alternates: { canonical: "/tesla-universal-wall-connector-installation" },
}

export default function TeslaUniversalWallConnectorInstallationPage() {
  return <EvChargingServicePage {...page} />
}
