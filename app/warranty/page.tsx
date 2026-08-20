import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Workmanship Warranty | Charge Home Solutions",
  description: "Learn about Charge Home Solutions workmanship guarantees of up to 10 years and manufacturer warranty registration support.",
  alternates: { canonical: "/warranty" },
}

export default function WarrantyPage() {
  return <EvChargingServicePage {...companyPages.warranty} />
}
