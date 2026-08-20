import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { commercialPages } from "@/lib/commercial"

const page = commercialPages["tesla-certified-installer"]

export const metadata: Metadata = {
  title: "Tesla-Certified Installer | Charge Home Solutions",
  description:
    "Tesla-certified electricians for Wall Connector, Universal Wall Connector, and Powerwall installation, commissioning, and warranty registration.",
  alternates: { canonical: "/tesla-certified-installer" },
}

export default function TeslaCertifiedInstallerPage() {
  return <EvChargingServicePage {...page} />
}
