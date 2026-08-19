/**
 * Content for the Savings Finder tool page, carried over from the legacy page
 * and restructured so each block maps to one section of the redesign.
 */

import { rebateTotals, REBATES_VERIFIED } from "@/lib/rebates"

/** Program coverage, derived from the real rebate dataset so it stays truthful. */
export const coverage = {
  programs: rebateTotals.programs,
  states: rebateTotals.states,
  verified: REBATES_VERIFIED,
}

export const projectOptions = [
  { id: "ev-charger", label: "EV Charger" },
  { id: "powerwall", label: "Tesla Powerwall" },
  { id: "home-battery", label: "Home Battery" },
  { id: "panel-upgrade", label: "Panel Upgrade" },
  { id: "solar-battery", label: "Solar + Battery" },
]

/** Alphabetical, including DC, matching the legacy selector. */
export const finderStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

/** The four layers the tool sweeps, shown as reassurance under the form. */
export const sweepLayers = [
  "State & local incentives",
  "Utility rebates",
  "Federal home energy rebates",
  "Instant savings estimate",
]

export type Incentive = {
  title: string
  detail: string
}

export const incentivesChecked: Incentive[] = [
  {
    title: "IRA Home Energy Rebates",
    detail: "Toward a panel upgrade. Income-qualified and state-run, where your state has launched them.",
  },
  {
    title: "State rebates & storage incentives",
    detail: "Programs like California's SGIP, which runs to thousands of dollars on a Powerwall.",
  },
  {
    title: "Utility rebates",
    detail: "Chargers, batteries and electrification credits, set by whichever utility serves your meter.",
  },
  {
    title: "Virtual Power Plant programs",
    detail: "Ongoing credits that pay you for the energy your battery shares back to the grid.",
  },
  {
    title: "Manufacturer & installer promotions",
    detail: "Private offers that stack quietly on top of everything public.",
  },
]

/** The composite example from the legacy page, as concrete line items. */
export const stackExample = {
  scenario: "A homeowner planning a Level 2 charger and a Powerwall checks their address.",
  items: [
    { label: "Utility charger rebate", value: "$500", note: "90-day filing window" },
    { label: "State storage rebate", value: "Thousands", note: "Applied to the battery" },
    { label: "Virtual Power Plant", value: "Ongoing credits", note: "Paid monthly" },
  ],
  outcome: "None of it had been priced into either project.",
}

export const longTailPrograms = [
  "Municipal green-energy funds in several hundred cities",
  "Co-op member rebates that never appear in national articles",
  "Income-qualified tiers that multiply standard payouts",
  "Manufacturer promotions that stack on top of public programs",
]

export type Step = {
  title: string
  body: string
}

export const pathToInstall: Step[] = [
  {
    title: "Check your address",
    body: "The sweep reads what is live for your utility, your state and your census tract at the moment you ask. Free, fast, and binding on nothing.",
  },
  {
    title: "Free in-home estimate",
    body: "Your electrician confirms the eligible incentives, runs the numbers against your actual panel, and prices the work.",
  },
  {
    title: "We file the paperwork",
    body: "Pre-approval windows, participating-contractor requirements, income documentation. Filing incentives is part of the job here, not a favor.",
  },
]

export const whyChooseUs = [
  "Tesla Partner, Approved Installers",
  "Nationwide electrician network",
  "Upfront, transparent pricing",
  "Expert, licensed & insured electricians",
  "Permits, inspections & code compliance",
]

export type Faq = {
  question: string
  answer: string
}

export const finderFaqs: Faq[] = [
  {
    question: "What is the Savings Finder?",
    answer:
      "It is a free tool that checks state, utility and municipal rebates for EV chargers, batteries, panel upgrades and solar, based on your address, so you can see every incentive you qualify for in one place.",
  },
  {
    question: "Which incentives does it cover?",
    answer:
      "State and utility rebates, Virtual Power Plant programs, and the income-qualified IRA Home Energy Rebates (HEEHRA) where a state has launched them. The federal clean-energy tax credits have all expired, so they no longer factor into the estimate.",
  },
  {
    question: "Why do incentives depend on my location?",
    answer:
      "Many programs are tied to your utility, your state, or even your census tract. Utility rebates vary by provider, state storage programs set their own boundaries, and some local incentives are drawn tract by tract, so your address determines what you qualify for.",
  },
  {
    question: "Is the Savings Finder free?",
    answer:
      "Yes, it is completely free to use. After you see your potential savings, a free in-home estimate confirms the eligible incentives and helps you claim them correctly.",
  },
]
