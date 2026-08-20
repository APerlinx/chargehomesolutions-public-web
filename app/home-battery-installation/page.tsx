import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["home-battery-installation"]

export const metadata: Metadata = {
  title: "Home Battery Installation | Charge Home Solutions",
  description:
    "Home battery installation provides backup power and energy-cost savings. We install Tesla Powerwall and other leading batteries, sized to your essential loads.",
  alternates: { canonical: "/home-battery-installation" },
}

export default function HomeBatteryInstallationPage() {
  return <EvChargingServicePage {...page} />
}
