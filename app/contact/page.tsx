import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Contact Charge Home Solutions",
  description: "Contact Charge Home Solutions for EV charging, energy storage, electrical work, commercial projects, or emergency electrical service.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return <EvChargingServicePage {...companyPages.contact} />
}
