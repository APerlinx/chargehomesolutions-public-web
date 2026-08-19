import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["tesla-wall-connector-installation"]

export const metadata: Metadata = {
  title: "Tesla Wall Connector Installation | Charge Home Solutions",
  description:
    "Tesla-certified Wall Connector installation, wired for up to 44 miles of range per hour, with warranty registration and permit included.",
  alternates: { canonical: "/tesla-wall-connector-installation" },
}

export default function TeslaWallConnectorInstallationPage() {
  return <EvChargingServicePage {...page} />
}
