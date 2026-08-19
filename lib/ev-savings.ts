// EV vs gas fuel-savings math. National-average assumptions (ballpark, Aug 2026)
// that the user can edit in the UI, so the result stays transparent and
// defensible — a planning estimate, never a guarantee.

export const evSavingsDefaults = {
  annualMiles: 12000,
  /** $ per kWh — US residential average. */
  electricityRate: 0.17,
  /** $ per gallon — US average. */
  gasPrice: 3.3,
  /** Miles per kWh — typical Level 2 home charging. */
  evEfficiency: 3.5,
  /** MPG of the gas car being replaced. */
  gasMpg: 26,
}

export type EvSavingsInput = {
  annualMiles: number
  electricityRate: number
  gasPrice: number
  evEfficiency: number
  gasMpg: number
}

export type EvSavingsResult = {
  evAnnualCost: number
  gasAnnualCost: number
  annualSavings: number
  monthlySavings: number
}

export function computeEvSavings(i: EvSavingsInput): EvSavingsResult {
  const evAnnualCost = i.evEfficiency > 0 ? (i.annualMiles / i.evEfficiency) * i.electricityRate : 0
  const gasAnnualCost = i.gasMpg > 0 ? (i.annualMiles / i.gasMpg) * i.gasPrice : 0
  const annualSavings = gasAnnualCost - evAnnualCost
  return { evAnnualCost, gasAnnualCost, annualSavings, monthlySavings: annualSavings / 12 }
}

export function formatUsd(n: number): string {
  return `$${Math.round(n).toLocaleString("en-US")}`
}
