
export const SITE_URL = "https://chargehomesolutions.com"

// The CRM app hosts the electrician onboarding form and login (public routes,
// outside the marketing site). Configurable so dev (Vite on :5173) and prod
// point at the right host.
export const CRM_URL =
  process.env.NEXT_PUBLIC_CRM_URL ?? "http://localhost:5173"

// Electrician onboarding entry point in the CRM, optionally pre-selecting a plan.
export function workWithUsUrl(plan?: string): string {
  return plan
    ? `${CRM_URL}/work-with-us?plan=${plan}`
    : `${CRM_URL}/work-with-us`
}

export const LOGIN_URL = `${CRM_URL}/login`

export const ROUTES = ["/", "/privacy", "/terms"] as const
