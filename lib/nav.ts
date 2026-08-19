export type NavLink = {
  label: string
  href: string
}

export type NavGroup = {
  title: string
  links: NavLink[]
}

export type NavItem = {
  label: string
  href: string
  /** Curated multi-column panel. Omit for a plain link. */
  groups?: NavGroup[]
  /** Optional promo rail shown on the right side of the panel. */
  feature?: {
    eyebrow: string
    title: string
    body: string
    href: string
    cta: string
  }
  viewAll?: NavLink
}

export const primaryNav: NavItem[] = [
  {
    label: "EV Chargers",
    href: "/ev-charging/",
    viewAll: { label: "All EV charging services", href: "/ev-charging/" },
    groups: [
      {
        title: "Home charging",
        links: [
          { label: "EV Charger Installation", href: "/ev-charger-installation/" },
          { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
          { label: "NEMA 14-50 Outlet Installation", href: "/nema-14-50-outlet-installation/" },
          { label: "EV-Ready Home Wiring", href: "/ev-ready-home-wiring/" },
          { label: "EV Charger Circuit Installation", href: "/ev-charger-circuit-installation/" },
        ],
      },
      {
        title: "Tesla & brands",
        links: [
          { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
          { label: "Tesla Universal Wall Connector", href: "/tesla-universal-wall-connector-installation/" },
          { label: "Amazon EV Charger Installation", href: "/amazon-ev-charger-installation/" },
          { label: "EV Charger Repair", href: "/ev-charger-repair/" },
          { label: "EV Charger Relocation", href: "/ev-charger-relocation/" },
        ],
      },
      {
        title: "Multi-unit & business",
        links: [
          { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
          { label: "Condo & Apartment EV Charging", href: "/condo-apartment-ev-charging/" },
          { label: "Multi-EV Charging Installation", href: "/multi-ev-charging-installation/" },
          { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
        ],
      },
    ],
    feature: {
      eyebrow: "Tesla certified",
      title: "Free in-home consultation",
      body: "A certified electrician reviews your panel, parking and permit path before you pay anything.",
      href: "/request-service/",
      cta: "Book your visit",
    },
  },
  {
    label: "Powerwall",
    href: "/energy-storage/",
    viewAll: { label: "All energy storage services", href: "/energy-storage/" },
    groups: [
      {
        title: "Battery storage",
        links: [
          { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
          { label: "Powerwall 3 Installation", href: "/powerwall-3-installation/" },
          { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
          { label: "Home Battery Installation", href: "/home-battery-installation/" },
          { label: "Backup Power Systems", href: "/backup-power-systems/" },
        ],
      },
      {
        title: "Solar",
        links: [
          { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
          { label: "Solar Battery Installation", href: "/solar-battery-installation/" },
          { label: "Solar Storage Retrofit", href: "/solar-storage-retrofit/" },
          { label: "Off-Grid Systems", href: "/off-grid-systems/" },
          { label: "Home Energy Monitoring", href: "/home-energy-monitoring/" },
        ],
      },
    ],
    feature: {
      eyebrow: "Incentives",
      title: "See what you get back",
      body: "Federal, state and utility incentives stack. The Savings Finder shows your number in under a minute.",
      href: "/savings-finder/",
      cta: "Open Savings Finder",
    },
  },
  {
    label: "Electrical",
    href: "/electrical/",
    viewAll: { label: "All electrical services", href: "/electrical/" },
    groups: [
      {
        title: "Capacity & safety",
        links: [
          { label: "Electrical Panel Upgrade", href: "/electrical-panel-upgrade/" },
          { label: "Circuit Breaker Replacement", href: "/circuit-breaker-replacement/" },
          { label: "Whole-House Rewiring", href: "/whole-house-rewiring/" },
          { label: "Electrical Inspection", href: "/electrical-inspection/" },
        ],
      },
      {
        title: "Power & lighting",
        links: [
          { label: "Generator Installation", href: "/generator-installation/" },
          { label: "Lighting Installation", href: "/lighting-installation/" },
          { label: "Commercial Lighting Retrofit", href: "/commercial-lighting-retrofit/" },
        ],
      },
    ],
  },
  {
    label: "Emergency",
    href: "/emergency/",
    viewAll: { label: "All emergency services", href: "/emergency/" },
    groups: [
      {
        title: "Available 24/7",
        links: [
          { label: "24/7 Emergency Electrician", href: "/emergency-electrician/" },
          { label: "Power Outage Repair", href: "/power-outage-repair/" },
          { label: "Sparking Outlet & Panel Repair", href: "/sparking-outlet-repair/" },
          { label: "Electrical Burning Smell", href: "/burning-smell-electrical/" },
          { label: "Storm Damage Electrical Repair", href: "/storm-damage-electrical-repair/" },
        ],
      },
    ],
    feature: {
      eyebrow: "Live now",
      title: "Call 888-995-6044",
      body: "Sparking, burning smell or a dead panel? Do not wait for a form. A licensed electrician answers around the clock.",
      href: "tel:+1-888-995-6044",
      cta: "Call the 24/7 line",
    },
  },
  {
    label: "Commercial",
    href: "/commercial-electrical/",
    viewAll: { label: "All commercial services", href: "/commercial-electrical/" },
    groups: [
      {
        title: "Electrical",
        links: [
          { label: "Commercial Electrical Services", href: "/commercial-electrical/" },
          { label: "Commercial Electrician", href: "/commercial-electrician/" },
          { label: "Commercial Lighting Retrofit", href: "/commercial-lighting-retrofit/" },
        ],
      },
      {
        title: "Fleet & property charging",
        links: [
          { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
          { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
          { label: "Hotel & Hospitality EV Charging", href: "/hotel-hospitality-ev-charging/" },
          { label: "Retail & Shopping Center EV Charging", href: "/retail-shopping-center-ev-charging/" },
        ],
      },
    ],
  },
  {
    label: "Tesla",
    href: "/tesla-certified-installer/",
    groups: [
      {
        title: "Tesla certified work",
        links: [
          { label: "Tesla Certified Installer", href: "/tesla-certified-installer/" },
          { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
          { label: "Tesla Universal Wall Connector", href: "/tesla-universal-wall-connector-installation/" },
          { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
          { label: "Powerwall 3 Installation", href: "/powerwall-3-installation/" },
        ],
      },
    ],
  },
  { label: "Services", href: "/services/" },
  { label: "Savings Finder", href: "/savings-finder/" },
  {
    label: "Locations",
    href: "/locations/",
    viewAll: { label: "View all 50 states", href: "/locations/" },
    groups: [
      {
        title: "Top states",
        links: [
          { label: "Florida", href: "/locations/florida/" },
          { label: "Texas", href: "/locations/texas/" },
          { label: "California", href: "/locations/california/" },
          { label: "New York", href: "/locations/new-york/" },
        ],
      },
      {
        title: "Also serving",
        links: [
          { label: "Georgia", href: "/locations/georgia/" },
          { label: "Pennsylvania", href: "/locations/pennsylvania/" },
          { label: "Illinois", href: "/locations/illinois/" },
          { label: "North Carolina", href: "/locations/north-carolina/" },
        ],
      },
    ],
    feature: {
      eyebrow: "Nationwide",
      title: "All 50 states covered",
      body: "One vetted network of licensed, background-checked electricians, coast to coast.",
      href: "/locations/",
      cta: "Find your state",
    },
  },
  {
    label: "Learn",
    href: "/learn/",
    groups: [
      {
        title: "Guides & tools",
        links: [
          { label: "Learn (Blog)", href: "/learn/" },
          { label: "Cost Guides", href: "/cost-guides/" },
          { label: "Rebates & Incentives", href: "/rebates" },
          { label: "Calculators", href: "/calculators/" },
          { label: "Common Questions", href: "/common-questions/" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about/",
    groups: [
      {
        title: "Company",
        links: [
          { label: "About Charge Home Solutions", href: "/about/" },
          { label: "Why Charge Home Solutions", href: "/why-charge-home-solutions/" },
          { label: "Customer Reviews", href: "/reviews/" },
          { label: "Our Electrician Network", href: "/electrician-network/" },
          { label: "Warranty", href: "/warranty/" },
        ],
      },
      {
        title: "Work with us",
        links: [
          { label: "Careers, Join the Network", href: "/careers/" },
          { label: "For Electricians", href: "/for-electricians/" },
          { label: "Financing", href: "/financing/" },
          { label: "Investor Relations", href: "/investors/" },
          { label: "Contact Us", href: "/contact/" },
        ],
      },
    ],
  },
]
