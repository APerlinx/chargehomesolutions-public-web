import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Why Charge Home Solutions",
  description: "Why customers choose Charge Home Solutions for Tesla-certified expertise, clear pricing, local electricians, and complete project coordination.",
  alternates: { canonical: "/why-charge-home-solutions" },
}

export default function WhyChargeHomeSolutionsPage() {
  return <EvChargingServicePage {...companyPages["why-charge-home-solutions"]} />
}
