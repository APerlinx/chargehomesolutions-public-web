// Minimal client for the public API. Base URL is configurable so dev (local
// Nest on :3000) and prod point at different hosts without code changes.
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000"

// Mirrors the ServiceType enum in the API Prisma schema.
export const SERVICE_TYPES = [
  { value: "EV_CHARGER_INSTALLATION", label: "EV Charger Installation" },
  { value: "POWER_WALL_INSTALLATION", label: "Powerwall Installation" },
  { value: "SOLAR_PANEL_INSTALLATION", label: "Solar Panel Installation" },
  { value: "PANEL_UPGRADE", label: "Panel Upgrade" },
  { value: "ELECTRICAL_SERVICE", label: "Electrical Service" },
  { value: "COMMERCIAL_EV_CHARGER", label: "Commercial EV Charger" },
] as const

// Mirrors the State enum in the API Prisma schema.
export const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC",
] as const

export type ServiceRequestInput = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  type: string
  customerComments?: string
  customerAvailability?: string
  // Cloudflare Turnstile token — omitted in dev (server skips when unconfigured).
  turnstileToken?: string
  // Honeypot: real users leave this empty; a filled value is dropped server-side.
  company?: string
}

// POSTs a public service request. The endpoint answers 202 on success (and on
// silent bot drops — same shape either way). Throws with a readable message on
// a validation error so the form can surface it.
export async function submitServiceRequest(
  input: ServiceRequestInput,
): Promise<void> {
  const res = await fetch(`${API_URL}/public/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })

  if (!res.ok) {
    let message = "Something went wrong. Please try again."
    try {
      const data = (await res.json()) as { message?: string | string[] }
      if (data?.message) {
        message = Array.isArray(data.message)
          ? data.message.join(", ")
          : data.message
      }
    } catch {
      // non-JSON error body — keep the default message
    }
    throw new Error(message)
  }
}
