import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["multi-powerwall-installation"]

export const metadata: Metadata = {
  title: "Multi-Powerwall Installation | Charge Home Solutions",
  description:
    "Two, three, or more Powerwalls for true whole-home backup, A/C, EV charging, well pumps, and everything else. Typically $20,000–$45,000 before incentives.",
  alternates: { canonical: "/multi-powerwall-installation" },
}

export default function MultiPowerwallInstallationPage() {
  return <EvChargingServicePage {...page} />
}
