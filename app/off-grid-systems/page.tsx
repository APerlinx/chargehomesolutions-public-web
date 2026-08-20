import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["off-grid-systems"]

export const metadata: Metadata = {
  title: "Off-Grid Power Systems | Charge Home Solutions",
  description:
    "True off-grid and grid-optional power, solar arrays sized for winter, serious battery banks, and generator backup for the dark weeks. Engineered systems, not kits.",
  alternates: { canonical: "/off-grid-systems" },
}

export default function OffGridSystemsPage() {
  return <EvChargingServicePage {...page} />
}
