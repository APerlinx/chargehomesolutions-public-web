import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["solar-panel-installation"]

export const metadata: Metadata = {
  title: "Solar Panel Installation | Charge Home Solutions",
  description:
    "Home solar panel installation typically costs $15,000–$30,000 before incentives, depending on system size. We design and install rooftop solar, with optional Powerwall pairing.",
  alternates: { canonical: "/solar-panel-installation" },
}

export default function SolarPanelInstallationPage() {
  return <EvChargingServicePage {...page} />
}
