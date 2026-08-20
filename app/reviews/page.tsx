import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Customer Reviews | Charge Home Solutions",
  description: "Learn what customers value about Charge Home Solutions: clear communication, professional electrical work, and dependable project support.",
  alternates: { canonical: "/reviews" },
}

export default function ReviewsPage() {
  return <EvChargingServicePage {...companyPages.reviews} />
}
