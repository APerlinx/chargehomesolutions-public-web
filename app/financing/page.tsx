import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Electrical Project Financing | Charge Home Solutions",
  description: "Explore financing options for qualifying EV chargers, battery systems, panel upgrades, generators, and electrical projects.",
  alternates: { canonical: "/financing" },
}

export default function FinancingPage() {
  return <EvChargingServicePage {...companyPages.financing} />
}
