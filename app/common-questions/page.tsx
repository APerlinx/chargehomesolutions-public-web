import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Common Electrical & Energy Questions | Charge Home Solutions",
  description: "Answers about EV charging, Powerwall, electrical capacity, pricing, permits, financing, warranties, rebates, and emergency service.",
  alternates: { canonical: "/common-questions" },
}

export default function CommonQuestionsPage() {
  return <EvChargingServicePage {...companyPages["common-questions"]} />
}
