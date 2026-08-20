import type { Metadata } from "next"

import { EvChargingServicePage } from "@/components/ev-charging/service-page"
import { electricalEmergencyPages } from "@/lib/electrical-emergency"

const page = electricalEmergencyPages["circuit-breaker-replacement"]

export const metadata: Metadata = {
  title: "Circuit Breaker Replacement | Charge Home Solutions",
  description: "Diagnosis and replacement of tripping, failing, standard, AFCI, and GFCI circuit breakers.",
  alternates: { canonical: "/circuit-breaker-replacement" },
}

export default function CircuitBreakerReplacementPage() {
  return <EvChargingServicePage {...page} />
}
