import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["powerwall-3-installation"]

export const metadata: Metadata = {
  title: "Powerwall 3 Installation | Charge Home Solutions",
  description:
    "Tesla Powerwall 3 installed by certified electricians, 13.5kWh storage, 11.5kW output, built-in solar inverter. Typically $11,000–$18,000 before incentives.",
  alternates: { canonical: "/powerwall-3-installation" },
}

export default function Powerwall3InstallationPage() {
  return <EvChargingServicePage {...page} />
}
