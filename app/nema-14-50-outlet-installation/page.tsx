import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { evChargingPages } from "@/lib/ev-charging"

const page = evChargingPages["nema-14-50-outlet-installation"]

export const metadata: Metadata = {
  title: "NEMA 14-50 Outlet Installation | Charge Home Solutions",
  description:
    "NEMA 14-50 outlet installation for plug-in EV charging, with a dedicated 50-amp circuit, GFCI protection, permit, and inspection included.",
  alternates: { canonical: "/nema-14-50-outlet-installation" },
}

export default function Nema1450OutletInstallationPage() {
  return <EvChargingServicePage {...page} />
}
