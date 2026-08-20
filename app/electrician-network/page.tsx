import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { commercialPages } from "@/lib/commercial"

const page = commercialPages["electrician-network"]

export const metadata: Metadata = {
  title: "Nationwide Electrician Network | Charge Home Solutions",
  description:
    "Connect with licensed local electricians for EV charging, Tesla energy, electrical upgrades, commercial projects, and repairs.",
  alternates: { canonical: "/electrician-network" },
}

export default function ElectricianNetworkPage() {
  return <EvChargingServicePage {...page} />
}
