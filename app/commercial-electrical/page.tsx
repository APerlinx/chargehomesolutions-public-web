import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { commercialPages } from "@/lib/commercial"

const page = commercialPages["commercial-electrical"]

export const metadata: Metadata = {
  title: "Commercial Electrical Services | Charge Home Solutions",
  description:
    "Commercial electrical construction, maintenance, upgrades, EV charging, and lighting planned around uptime and deadlines.",
  alternates: { canonical: "/commercial-electrical" },
}

export default function CommercialElectricalPage() {
  return <EvChargingServicePage {...page} />
}
