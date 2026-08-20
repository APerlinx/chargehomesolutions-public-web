import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { batterySolarPages } from "@/lib/battery-solar"

const page = batterySolarPages["backup-power-systems"]

export const metadata: Metadata = {
  title: "Backup Power Systems | Charge Home Solutions",
  description:
    "Whole-home and partial-home backup using batteries, transfer switches, and generators, designed around the circuits you can't afford to lose.",
  alternates: { canonical: "/backup-power-systems" },
}

export default function BackupPowerSystemsPage() {
  return <EvChargingServicePage {...page} />
}
