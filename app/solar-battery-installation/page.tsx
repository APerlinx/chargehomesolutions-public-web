import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["solar-battery-installation"]

export const metadata: Metadata = {
  title: "Solar Battery Installation | Charge Home Solutions",
  description:
    "Pairing solar with battery storage lets you use your own clean power day and night and stay powered through outages. State and utility programs are where the savings are now.",
  alternates: { canonical: "/solar-battery-installation" },
}

export default function SolarBatteryInstallationPage() {
  return <EvChargingServicePage {...page} />
}
