import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { commercialPages } from "@/lib/commercial"

const page = commercialPages["services"]

export const metadata: Metadata = {
  title: "Electrical, EV Charging & Energy Services | Charge Home Solutions",
  description:
    "Licensed electrical, EV charging, Tesla energy, commercial, and emergency services for homes and businesses nationwide.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return <EvChargingServicePage {...page} />
}
