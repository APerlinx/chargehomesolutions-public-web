import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["commercial-lighting-retrofit"]

export const metadata: Metadata = {
  title: "Commercial Lighting Retrofit | Charge Home Solutions",
  description: "Commercial LED retrofits that reduce lighting energy use 50-70% with rebate and phased-installation support.",
  alternates: { canonical: "/commercial-lighting-retrofit" },
}

export default function CommercialLightingRetrofitPage() {
  return <EvChargingServicePage {...page} />
}
