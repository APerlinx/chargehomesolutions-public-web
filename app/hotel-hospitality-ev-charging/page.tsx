import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["hotel-hospitality-ev-charging"]

export const metadata: Metadata = {
  title: "Hotel & Hospitality EV Charging | Charge Home Solutions",
  description:
    "Networked EV charging for hotels and hospitality properties, designed to enhance the guest experience while capturing available utility incentives.",
  alternates: { canonical: "/hotel-hospitality-ev-charging" },
}

export default function HotelHospitalityEvChargingPage() {
  return <EvChargingServicePage {...page} />
}
