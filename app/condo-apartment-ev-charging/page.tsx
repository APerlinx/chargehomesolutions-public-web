import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["condo-apartment-ev-charging"]

export const metadata: Metadata = {
  title: "Condo & Apartment EV Charging | Charge Home Solutions",
  description:
    "EV charging for condos, apartments, and HOAs, from a single assigned-space charger to shared, billed charging with HOA approvals and load management.",
  alternates: { canonical: "/condo-apartment-ev-charging" },
}

export default function CondoApartmentEvChargingPage() {
  return <EvChargingServicePage {...page} />
}
