export type Credential = {
  headline: string
  sub: string
}

/** Trust marquee, carried over from the old site's credential strip. */
export const credentials: Credential[] = [
  { headline: "Tesla", sub: "Certified" },
  { headline: "Licensed", sub: "& Insured" },
  { headline: "100,000+", sub: "Installations" },
  { headline: "50 States", sub: "Nationwide" },
  { headline: "SPAN", sub: "Certified Installer" },
  { headline: "BBB", sub: "A+ Rating" },
  { headline: "Google 5.0", sub: "Rated by homeowners" },
  { headline: "4,000+", sub: "Certified Electricians" },
]

export type Service = {
  title: string
  blurb: string
  href: string
}

/** The ten services the old site surfaced on the homepage grid. */
export const services: Service[] = [
  {
    title: "EV Charger Installation",
    blurb: "Level 2 charging, permitted and inspected.",
    href: "/ev-charger-installation",
  },
  {
    title: "Tesla Wall Connector",
    blurb: "Certified installs by Tesla-approved electricians.",
    href: "/tesla-wall-connector-installation",
  },
  {
    title: "Tesla Powerwall",
    blurb: "Whole-home backup, sized to your usage.",
    href: "/tesla-powerwall-installation",
  },
  {
    title: "Home Battery Solutions",
    blurb: "Store power and ride out the outage.",
    href: "/home-battery-installation",
  },
  {
    title: "Electrical Panel Upgrades",
    blurb: "200A service and load-managed capacity.",
    href: "/electrical-panel-upgrade",
  },
  {
    title: "Generator Installation",
    blurb: "Standby power that starts on its own.",
    href: "/generator-installation",
  },
  {
    title: "Solar & Battery",
    blurb: "Panels and storage as one system.",
    href: "/solar-panel-installation",
  },
  {
    title: "Commercial EV Charging",
    blurb: "Fleet, retail and hospitality charging.",
    href: "/commercial-ev-charging",
  },
  {
    title: "Commercial Electrical",
    blurb: "Licensed crews for business properties.",
    href: "/commercial-electrician",
  },
  {
    title: "General Electrical",
    blurb: "Rewiring, lighting, breakers, inspections.",
    href: "/electrical",
  },
]

export const networkStats = [
  { value: "4,000+", label: "Certified Electricians" },
  { value: "50", label: "States Covered" },
  { value: "100,000+", label: "Installations Completed" },
  { value: "5.0", label: "Customer Rating" },
]

export type Review = {
  quote: string
  name: string
  detail: string
}

export const reviews: Review[] = [
  {
    quote:
      "Charge Home Solutions made the entire process of installing a home EV charger incredibly easy. Their team was prompt, professional, and handled everything from the initial assessment to the final installation.",
    name: "Emily T.",
    detail: "EV Charger · Homeowner",
  },
  {
    quote:
      "The installation was quick, and the team was knowledgeable and courteous. Couldn't be happier with the result.",
    name: "Sarah K.",
    detail: "Wall Connector · Homeowner",
  },
  {
    quote: "The Powerwall installation was seamless. Great team and amazing support throughout.",
    name: "Sarah L.",
    detail: "Tesla Powerwall · Homeowner",
  },
  {
    quote:
      "They upgraded our panel and added a whole-home generator. Licensed, clean, and on time, highly recommend!",
    name: "James R.",
    detail: "Panel + Generator · Homeowner",
  },
]

export const assurances = [
  { title: "Financing Available", sub: "Low monthly payments" },
  { title: "Free In-Home Estimates", sub: "No obligation" },
  { title: "Workmanship Guarantee", sub: "Up to 10 years" },
  { title: "24/7 Support", sub: "We're here to help" },
  { title: "Clean & Professional", sub: "Respect for your home" },
  { title: "Proudly American", sub: "USA Owned & Operated" },
]
