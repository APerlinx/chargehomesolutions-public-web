import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { commercialPages } from "@/lib/commercial"

const page = commercialPages["commercial-electrician"]

export const metadata: Metadata = {
  title: "Commercial Electrician | Charge Home Solutions",
  description:
    "Licensed commercial electricians for buildouts, service upgrades, lighting, EV charging, maintenance, and emergency repairs.",
  alternates: { canonical: "/commercial-electrician" },
}

export default function CommercialElectricianPage() {
  return <EvChargingServicePage {...page} />
}
