import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Investor Relations | Charge Home Solutions",
  description: "Investor relations for Charge Home Solutions, a technology-enabled platform coordinating electrical work for the electrification economy.",
  alternates: { canonical: "/investors" },
}

export default function InvestorsPage() {
  return <EvChargingServicePage {...companyPages.investors} />
}
