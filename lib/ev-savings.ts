// EV vs gas fuel-savings math. The defaults below are illustrative starting
// points in the right national ballpark — NOT a precise dated average. The UI
// lets the user replace every one with their real numbers, so the result stays
// transparent and defensible. A planning estimate, never a guarantee.

export const evSavingsDefaults = {
  annualMiles: 12000,
  /** $ per kWh — illustrative, near the US residential average. */
  electricityRate: 0.18,
  /** $ per gallon — illustrative, near the US average. */
  gasPrice: 4.0,
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

// Callers must pass evEfficiency > 0 and gasMpg > 0: a zero denominator has no
// meaningful cost, so the UI suppresses the result until both are positive. The
// guards below are a defensive fallback, not a substitute for that validation.
export function computeEvSavings(i: EvSavingsInput): EvSavingsResult {
  const evAnnualCost = i.evEfficiency > 0 ? (i.annualMiles / i.evEfficiency) * i.electricityRate : 0
  const gasAnnualCost = i.gasMpg > 0 ? (i.annualMiles / i.gasMpg) * i.gasPrice : 0
  const annualSavings = gasAnnualCost - evAnnualCost
  return { evAnnualCost, gasAnnualCost, annualSavings, monthlySavings: annualSavings / 12 }
}

export function formatUsd(n: number): string {
  return `$${Math.round(n).toLocaleString("en-US")}`
}
