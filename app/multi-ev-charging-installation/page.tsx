import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["multi-ev-charging-installation"]

export const metadata: Metadata = {
  title: "Multi-EV Charging Installation | Charge Home Solutions",
  description:
    "Load-managed charging for two or more EVs at home, sharing one circuit or panel safely, often avoiding a panel upgrade.",
  alternates: { canonical: "/multi-ev-charging-installation" },
}

export default function MultiEvChargingInstallationPage() {
  return <EvChargingServicePage {...page} />
}
