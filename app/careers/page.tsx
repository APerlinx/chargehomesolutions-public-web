import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "Electrician Careers & Network | Charge Home Solutions",
  description: "Join a nationwide electrification network for licensed electricians serving EV charging, batteries, panels, and electrical projects.",
  alternates: { canonical: "/careers" },
}

export default function CareersPage() {
  return <EvChargingServicePage {...companyPages.careers} />
}
