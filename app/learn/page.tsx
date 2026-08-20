import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Learn About EV Charging & Home Energy | Charge Home Solutions",
  description: "Practical guides for EV charging, home energy, electrical capacity, batteries, solar, costs, incentives, and safe project planning.",
  alternates: { canonical: "/learn" },
}

export default function LearnPage() {
  return <EvChargingServicePage {...companyPages.learn} />
}
