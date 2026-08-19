// Typical installed-cost ranges for the services we offer, from the company
// cost guide. Ranges only — every real quote is confirmed at the free in-home
// estimate. Figures are national ballparks, before any rebates/incentives.

export type CostModifier = {
  id: string
  label: string
  low: number
  high: number
  hint?: string
}

export type CostService = {
  id: string
  label: string
  low: number
  high: number
  /** Short qualifier shown next to the range, e.g. "labor + permit". */
  unit: string
  blurb: string
  modifiers: CostModifier[]
  /** Resilience products show value as words, never a fabricated savings/ROI. */
  resilience?: string
  /** High end is open-ended — render the top figure with a trailing "+". */
  openEnded?: boolean
  /** These services commonly stack with state/utility rebates (links to /rebates). */
  rebateEligible?: boolean
}

export const costServices: CostService[] = [
  {
    id: "ev-charger",
    label: "EV Charger Installation",
    low: 400,
    high: 1500,
    unit: "labor + permit",
    blurb: "A Level 2 charger or Tesla Wall Connector on a dedicated circuit. Distance from the panel is the main driver.",
    rebateEligible: true,
    modifiers: [
      {
        id: "panel-upgrade",
        label: "My panel is full or under 200A",
        low: 1500,
        high: 4000,
        hint: "Adds a 200A service upgrade",
      },
    ],
  },
  {
    id: "panel-upgrade",
    label: "Electrical Panel Upgrade (200A)",
    low: 1500,
    high: 4000,
    unit: "labor + permit",
    blurb: "A 200-amp service upgrade — the foundation for EV charging, batteries and whole-home electrification.",
    rebateEligible: true,
    modifiers: [],
  },
  {
    id: "powerwall",
    label: "Tesla Powerwall",
    low: 11000,
    high: 18000,
    unit: "installed, before incentives",
    blurb: "Whole-home battery backup. Multi-unit systems scale up from here.",
    resilience:
      "Sold on resilience, not payback — it keeps your home powered in an outage and can shift usage off peak rates.",
    rebateEligible: true,
    modifiers: [],
  },
  {
    id: "generator",
    label: "Standby Generator",
    low: 5000,
    high: 15000,
    unit: "incl. transfer switch & pad",
    blurb: "Automatic whole-home backup that starts itself when the grid goes down.",
    resilience: "A resilience upgrade — priced on peace of mind, not energy savings.",
    modifiers: [],
  },
  {
    id: "rewiring",
    label: "Whole-House Rewiring",
    low: 8000,
    high: 20000,
    unit: "varies by home size & access",
    blurb: "Replacing aging or unsafe wiring. Home size, accessibility and wiring type set the range.",
    openEnded: true,
    modifiers: [],
  },
]

export function getCostService(id: string): CostService | undefined {
  return costServices.find((s) => s.id === id)
}

export function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`
}
