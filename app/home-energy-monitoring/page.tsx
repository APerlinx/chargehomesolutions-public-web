import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["home-energy-monitoring"]

export const metadata: Metadata = {
  title: "Home Energy Monitoring | Charge Home Solutions",
  description:
    "Circuit-level energy monitoring, see what every appliance costs in real time, catch failing equipment, and right-size solar and battery plans. Installed from $300–$2,000.",
  alternates: { canonical: "/home-energy-monitoring" },
}

export default function HomeEnergyMonitoringPage() {
  return <EvChargingServicePage {...page} />
}
