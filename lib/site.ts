export const site = {
  name: "Charge Home Solutions",
  legalName: "Evolution Dynamics LLC dba Charge Home Solutions",
  tagline: "Tesla-Certified Electricians for Home & Business, Nationwide.",
  phone: "888-995-6044",
  phoneHref: "tel:+1-888-995-6044",
  consultationHref: "/request-service/",
  chamberHref:
    "https://www.chamberofcommerce.com/business-directory/new-york/new-york/electrician/2033682189-charge-home-solutions?source=memberwebsite",
  offices: [
    { label: "Titusville, FL", href: "/locations/florida/" },
    { label: "New York, NY", href: "/locations/new-york/" },
    { label: "Tarzana, CA", href: "/locations/california/" },
  ],
}

export const trustSignals = ["Nationwide Service", "Tesla Partner", "Approved Installers"]

export type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "EV Chargers",
    links: [
      { label: "EV Charging Services", href: "/ev-charging/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
      { label: "Tesla Universal Wall Connector Installation", href: "/tesla-universal-wall-connector-installation/" },
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
      { label: "EV Charger Repair", href: "/ev-charger-repair/" },
      { label: "EV-Ready Home Wiring", href: "/ev-ready-home-wiring/" },
    ],
  },
  {
    title: "Powerwall",
    links: [
      { label: "Energy Storage & Solar Services", href: "/energy-storage/" },
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Home Battery Installation", href: "/home-battery-installation/" },
      { label: "Solar Battery Installation", href: "/solar-battery-installation/" },
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
      { label: "Powerwall 3 Installation", href: "/powerwall-3-installation/" },
    ],
  },
  {
    title: "Electrical",
    links: [
      { label: "Electrical Services", href: "/electrical/" },
      { label: "Electrical Panel Upgrade", href: "/electrical-panel-upgrade/" },
      { label: "Whole-House Rewiring", href: "/whole-house-rewiring/" },
      { label: "Circuit Breaker Replacement", href: "/circuit-breaker-replacement/" },
      { label: "Generator Installation", href: "/generator-installation/" },
      { label: "Lighting Installation", href: "/lighting-installation/" },
      { label: "Electrical Inspection", href: "/electrical-inspection/" },
    ],
  },
  {
    title: "Emergency",
    links: [
      { label: "24/7 Emergency Electrical Services", href: "/emergency/" },
      { label: "24/7 Emergency Electrician", href: "/emergency-electrician/" },
      { label: "Power Outage Repair", href: "/power-outage-repair/" },
      { label: "Sparking Outlet & Panel Repair", href: "/sparking-outlet-repair/" },
      { label: "Electrical Burning Smell, Urgent Inspection", href: "/burning-smell-electrical/" },
      { label: "Storm Damage Electrical Repair", href: "/storm-damage-electrical-repair/" },
    ],
  },
  {
    title: "Commercial",
    links: [
      { label: "Commercial Electrical Services", href: "/commercial-electrical/" },
      { label: "Commercial Electrician", href: "/commercial-electrician/" },
      { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
      { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
      { label: "Hotel & Hospitality EV Charging", href: "/hotel-hospitality-ev-charging/" },
      { label: "Retail & Shopping Center EV Charging", href: "/retail-shopping-center-ev-charging/" },
      { label: "Commercial Lighting Retrofit", href: "/commercial-lighting-retrofit/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Charge Home Solutions", href: "/about/" },
      { label: "Why Charge Home Solutions", href: "/why-charge-home-solutions/" },
      { label: "Customer Reviews", href: "/reviews/" },
      { label: "Tesla Certified Installer", href: "/tesla-certified-installer/" },
      { label: "Our Electrician Network", href: "/electrician-network/" },
      { label: "Careers, Join the Network", href: "/careers/" },
      { label: "Financing", href: "/financing/" },
      { label: "Warranty", href: "/warranty/" },
      { label: "Frequently Asked Questions", href: "/faq/" },
      { label: "Investor Relations", href: "/investors/" },
    ],
  },
]

export const toolsAndResources = [
  { label: "Savings Finder", href: "/savings-finder/" },
  { label: "Calculators", href: "/calculators/" },
  { label: "Rebates & Incentives", href: "/rebates-incentives/" },
  { label: "Cost Guides", href: "/cost-guides/" },
  { label: "Tools", href: "/tools/" },
  { label: "Learn (Blog)", href: "/learn/" },
  { label: "Common Questions", href: "/common-questions/" },
  { label: "Book a Free Consultation", href: "/request-service/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "For Electricians", href: "/for-electricians/" },
]

/**
 * Column-major order, matching the legacy footer grid.
 */
export const serviceStates = [
  "Florida",
  "Illinois",
  "Tennessee",
  "Colorado",
  "Nevada",
  "Arkansas",
  "New Mexico",
  "Hawaii",
  "Vermont",
  "Texas",
  "Ohio",
  "South Carolina",
  "Maryland",
  "Kentucky",
  "Iowa",
  "Idaho",
  "Alaska",
  "Wyoming",
  "California",
  "North Carolina",
  "Virginia",
  "Indiana",
  "Oklahoma",
  "Kansas",
  "West Virginia",
  "Delaware",
  "New York",
  "Arizona",
  "Massachusetts",
  "Missouri",
  "Connecticut",
  "Mississippi",
  "New Hampshire",
  "Montana",
  "Georgia",
  "Washington",
  "New Jersey",
  "Wisconsin",
  "Utah",
  "Nebraska",
  "Maine",
  "North Dakota",
  "Pennsylvania",
  "Oregon",
  "Michigan",
  "Minnesota",
  "Louisiana",
  "Alabama",
  "Rhode Island",
  "South Dakota",
]

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
  { label: "Accessibility Statement", href: "/accessibility/" },
]

export function stateHref(state: string) {
  return `/locations/${state.toLowerCase().replace(/\s+/g, "-")}/`
}

// --- Retained from the pre-redesign site (sitemap, robots, electrician CTA) ---

// Marketing site absolute URL, for sitemap/robots/OG metadata.
export const SITE_URL = "https://chargehomesolutions.com"

// The CRM app hosts electrician onboarding + login (outside the marketing site).
// Configurable so dev (Vite on :5173) and prod point at the right host.
export const CRM_URL =
  process.env.NEXT_PUBLIC_CRM_URL ?? "http://localhost:5173"

// Electrician onboarding entry point in the CRM, optionally pre-selecting a plan.
export function workWithUsUrl(plan?: string): string {
  return plan
    ? `${CRM_URL}/work-with-us?plan=${plan}`
    : `${CRM_URL}/work-with-us`
}

// Routes included in the sitemap.
export const ROUTES = ["/", "/privacy", "/terms"] as const
