import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["energy-storage"]

export const metadata: Metadata = {
  title: "Energy Storage & Solar Services | Charge Home Solutions",
  description:
    "Tesla Powerwall, home batteries, solar-plus-storage, and whole-home backup power, installed by licensed, Tesla-certified electricians nationwide.",
  alternates: { canonical: "/energy-storage" },
}

export default function EnergyStoragePage() {
  return <EvChargingServicePage {...page} />
}
