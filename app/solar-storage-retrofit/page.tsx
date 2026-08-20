import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["solar-storage-retrofit"]

export const metadata: Metadata = {
  title: "Solar + Storage Retrofit | Charge Home Solutions",
  description:
    "Already have solar? Add a battery and stop exporting cheap power while buying it back expensive. Retrofits typically $10,000–$25,000, with standalone storage incentives available.",
  alternates: { canonical: "/solar-storage-retrofit" },
}

export default function SolarStorageRetrofitPage() {
  return <EvChargingServicePage {...page} />
}
