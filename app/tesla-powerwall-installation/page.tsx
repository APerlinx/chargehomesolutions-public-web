import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["tesla-powerwall-installation"]

export const metadata: Metadata = {
  title: "Tesla Powerwall Installation | Charge Home Solutions",
  description:
    "Tesla Powerwall installation typically costs $11,000–$18,000+ before incentives. Certified installers deliver whole-home backup and claim every incentive your address qualifies for.",
  alternates: { canonical: "/tesla-powerwall-installation" },
}

export default function TeslaPowerwallInstallationPage() {
  return <EvChargingServicePage {...page} />
}
