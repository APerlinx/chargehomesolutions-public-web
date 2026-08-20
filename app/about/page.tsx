import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { companyPages } from "@/lib/company"

export const metadata: Metadata = {
  title: "About Charge Home Solutions",
  description: "Learn how Charge Home Solutions coordinates licensed electrical expertise for EV charging, energy storage, and electrical services nationwide.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return <EvChargingServicePage {...companyPages.about} />
}
