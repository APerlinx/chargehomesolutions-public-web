import type { EvChargingPageData } from "@/lib/ev-charging"

type PageConfig = Pick<
  EvChargingPageData,
  | "eyebrow"
  | "title"
  | "description"
  | "bullets"
  | "stats"
  | "sections"
  | "faqs"
  | "related"
  | "ctaHeading"
  | "ctaBody"
  | "primaryActionLabel"
  | "primaryActionHref"
>

const commercialRelated = [
  { label: "Commercial Electrical", href: "/commercial-electrical" },
  { label: "Commercial Electrician", href: "/commercial-electrician" },
  { label: "EV Fleet Charging", href: "/ev-fleet-charging" },
  { label: "Commercial Lighting Retrofit", href: "/commercial-lighting-retrofit" },
]

const commercialPage = (page: PageConfig): EvChargingPageData => ({
  ...page,
  relatedHeading: "Explore commercial electrical services",
})

export const commercialPages: Record<string, EvChargingPageData> = {
  services: commercialPage({
    eyebrow: "Electrical services nationwide",
    title: "Electrical, EV charging, and backup power built around the way you live and work.",
    description:
      "Licensed electricians deliver residential and commercial electrical work, EV charging, Tesla energy systems, and urgent repairs with clear scopes, permits, and workmanship backing.",
    ctaHeading: "Start with the service your home, building, or fleet needs now.",
    ctaBody:
      "Tell us what you are planning or repairing, and we will connect you with the right licensed electrician for a clear next step.",
    bullets: [
      "Residential, commercial, and fleet electrical work",
      "Tesla-certified installation and commissioning",
      "Permits, inspections, and clear written quotes",
    ],
    stats: [
      { label: "Coverage", value: "Nationwide" },
      { label: "Estimate", value: "Free" },
      { label: "Emergency", value: "24/7" },
    ],
    sections: [
      {
        heading: "One electrical partner for the projects that shape a property.",
        body: [
          "From a dedicated home charging circuit to a commercial service upgrade, the starting point is the same: understand the existing capacity, the scope, and the code requirements before proposing work.",
          "Our licensed electricians handle the assessment, materials, permitting, installation, and inspection so the plan remains clear from the first visit through completion.",
        ],
        points: [
          "EV charging for homes, workplaces, and fleets",
          "Tesla Wall Connector, Powerwall, and solar integration",
          "Panels, circuits, lighting, generators, and inspections",
          "Commercial upgrades, maintenance, and tenant improvements",
        ],
      },
      {
        heading: "The details that make electrical work dependable are handled upfront.",
        body: [
          "Load calculations, routing, utility requirements, access, and scheduling all affect a safe installation. We identify those dependencies before work begins instead of introducing them as surprises later.",
          "You receive a written scope, the applicable permits and inspection coordination, and documentation for future service, resale, and insurance needs.",
        ],
        points: [
          "Licensed and insured electricians",
          "Code-compliant materials and protection",
          "Flexible scheduling for occupied homes and businesses",
          "Workmanship guarantee on completed work",
        ],
      },
    ],
    faqs: [
      {
        question: "What services do you provide?",
        answer:
          "We provide EV charging, Tesla energy systems, residential electrical work, commercial electrical services, lighting, generators, inspections, and emergency repairs.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "Yes. When the project requires them, we handle permits, coordinate inspections, and provide completion documentation.",
      },
      {
        question: "Can you help with an urgent electrical problem?",
        answer:
          "Yes. Sparking, burning smells, dangerous outages, and storm damage should be routed through the 24/7 emergency service line.",
      },
    ],
    related: commercialRelated,
  }),
  "commercial-electrical": commercialPage({
    eyebrow: "Commercial electrical services",
    title: "Commercial electrical work planned around uptime, deadlines, and documentation.",
    description:
      "Electrical construction, maintenance, EV charging, lighting, and service upgrades for offices, retail, restaurants, multifamily, and light-industrial properties.",
    ctaHeading: "Get a commercial electrical scope with the schedule attached.",
    ctaBody:
      "Send plans or schedule a site walk for a fixed proposal that accounts for permits, access, power-down windows, and your operating hours.",
    bullets: [
      "Fixed quotes from plans or site walks",
      "Night and weekend scheduling available",
      "Permits, COIs, inspection records, and as-builts",
    ],
    stats: [
      { label: "Property types", value: "5+" },
      { label: "Scheduling", value: "After-hours" },
      { label: "Coverage", value: "Multi-site" },
    ],
    sections: [
      {
        heading: "Commercial work is measured by the disruption it avoids.",
        body: [
          "A power-down window, tenant opening date, refrigeration circuit, or occupied sales floor all change how electrical work must be planned. We scope the work around those operational constraints before mobilizing.",
          "The result is a practical sequence for upgrades, buildouts, lighting retrofits, EV charging, and maintenance without leaving schedule decisions to the field.",
        ],
        points: [
          "Tenant improvements and buildouts",
          "Commercial panels, service upgrades, and metering",
          "LED retrofits and lighting controls",
          "EV charging and demand-charge management",
        ],
      },
      {
        heading: "A documented electrical baseline turns emergencies into planning.",
        body: [
          "For portfolios and recurring facilities, we establish panel schedules, inspection findings, and prioritized repairs in a consistent report format across locations.",
          "That creates a defensible capital plan and lets scheduled maintenance replace costly run-to-fail repairs.",
        ],
        points: [
          "Thermal imaging and electrical surveys",
          "Priority emergency response",
          "Maintenance rounds and findings reports",
          "Consolidated portfolio coordination",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work after hours?",
        answer:
          "Yes. We plan evening and weekend work for occupied offices, retail, and restaurants when the scope calls for it.",
      },
      {
        question: "Do you support multi-site portfolios?",
        answer:
          "Yes. We can standardize assessments, documentation, scheduling, and communication across multiple properties.",
      },
      {
        question: "Can you provide landlord and insurance documentation?",
        answer:
          "Certificates of insurance, permit records, inspection sign-offs, and as-built notes are included when required by the scope.",
      },
    ],
    related: commercialRelated,
  }),
  "commercial-electrician": commercialPage({
    eyebrow: "Licensed commercial electricians",
    title: "A commercial electrician for repairs, upgrades, buildouts, and planned maintenance.",
    description:
      "Licensed commercial electricians for offices, retail, multifamily, and light-industrial sites, with code-compliant installation and schedules that protect business operations.",
    ctaHeading: "Book a commercial site assessment with a licensed electrician.",
    ctaBody:
      "We will assess capacity, existing conditions, and access before providing a clear fixed-price recommendation.",
    bullets: [
      "On-site assessment and load review",
      "Tenant improvements, upgrades, and repair",
      "Permits and inspections managed end to end",
    ],
    stats: [
      { label: "Quote", value: "Fixed price" },
      { label: "Permits", value: "Managed" },
      { label: "Availability", value: "24/7 urgent" },
    ],
    sections: [
      {
        heading: "The right commercial repair starts with a documented survey.",
        body: [
          "Undocumented wiring, overloaded panels, and aging equipment become expensive when uncovered after a buildout has started. A site survey identifies risks and capacity constraints early enough to plan around them.",
          "We translate those findings into a practical scope that keeps current operations and future electrical needs in view.",
        ],
        points: [
          "Panel schedules and capacity assessment",
          "Code corrections and safety repairs",
          "Equipment and dedicated-circuit connections",
          "Lighting, controls, and energy improvements",
        ],
      },
      {
        heading: "A clear process keeps work moving from assessment to sign-off.",
        body: [
          "After the site walk, you receive a written scope and fixed price. Once approved, we coordinate permits, material, scheduling, installation, and inspection.",
          "The work is completed with clean documentation so facilities teams, general contractors, and property managers know what changed and why.",
        ],
        points: [
          "Free site assessment",
          "Transparent written quote",
          "Professional code-compliant installation",
          "Inspection and workmanship guarantee",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you handle commercial permits?",
        answer:
          "Yes. We manage commercial permitting and coordinate with the local jurisdiction through inspection.",
      },
      {
        question: "Can you avoid interrupting business hours?",
        answer:
          "When feasible, we schedule work around your operations, including evenings and weekends for disruptive phases.",
      },
      {
        question: "What commercial services do you provide?",
        answer:
          "We handle tenant improvements, service upgrades, lighting retrofits, EV charging, maintenance, troubleshooting, and emergency repairs.",
      },
    ],
    related: commercialRelated,
  }),
  "electrician-network": commercialPage({
    eyebrow: "Nationwide electrician network",
    title: "Local licensed electricians, connected by one national standard.",
    description:
      "Charge Home Solutions connects homeowners and businesses with licensed electricians for EV charging, energy systems, electrical upgrades, and service across the country.",
    ctaHeading: "Find a licensed electrician for your project.",
    ctaBody:
      "Share your address and project goals, and we will match the work to a qualified local electrician with the right experience.",
    bullets: [
      "Local licensed electricians across the country",
      "Consistent scoping, documentation, and support",
      "Tesla-certified expertise for applicable projects",
    ],
    stats: [
      { label: "Coverage", value: "50 states" },
      { label: "Services", value: "Home + business" },
      { label: "Support", value: "24/7 urgent" },
    ],
    sections: [
      {
        heading: "Local knowledge matters, and consistent standards make it scalable.",
        body: [
          "Permits, utilities, equipment availability, and inspection practices vary by market. Local electricians understand those details and apply a consistent project process from assessment through sign-off.",
          "That combination gives customers one clear point of contact without treating local electrical work as a generic transaction.",
        ],
        points: [
          "Local code and utility familiarity",
          "Licensed and insured electrical work",
          "Consistent project documentation",
          "Support for home, commercial, and fleet work",
        ],
      },
      {
        heading: "The network is built for projects that need more than a referral.",
        body: [
          "EV charging, battery storage, service upgrades, and commercial electrical work require verified capacity, permits, product knowledge, and accountable commissioning.",
          "We coordinate the right local expertise while keeping scope, pricing, and customer communication clear throughout the project.",
        ],
        points: [
          "EV charging and load management",
          "Tesla energy system installation",
          "Panel, circuit, and electrical upgrades",
          "Commercial electrical and maintenance support",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you serve my area?",
        answer:
          "We coordinate licensed electricians across all 50 states. Submit your address and project details to confirm local availability.",
      },
      {
        question: "Are the electricians licensed?",
        answer:
          "Projects are assigned to licensed, insured electricians qualified for the scope and local requirements.",
      },
      {
        question: "What projects can the network support?",
        answer:
          "The network supports EV charging, Tesla energy systems, residential electrical work, commercial projects, and urgent electrical service.",
      },
    ],
    related: [
      { label: "Tesla-Certified Installer", href: "/tesla-certified-installer" },
      { label: "EV Charging Services", href: "/ev-charging" },
      { label: "Electrical Services", href: "/electrical" },
      { label: "Commercial Electrician", href: "/commercial-electrician" },
    ],
  }),
  "tesla-certified-installer": commercialPage({
    eyebrow: "Tesla-certified installation",
    title: "Tesla Wall Connector and Powerwall installation to Tesla's specifications.",
    description:
      "Tesla-certified electricians install and commission Wall Connectors, Universal Wall Connectors, and Powerwall systems with warranty registration, app setup, permits, and inspection coordination.",
    ctaHeading: "Plan your Tesla energy installation with a certified electrician.",
    ctaBody:
      "Get a site assessment, load review, fixed written recommendation, and a clear plan for installation and commissioning.",
    bullets: [
      "Tesla Wall Connector, Universal Wall Connector, and Powerwall",
      "Factory-correct sizing, wiring, and commissioning",
      "Warranty registration and Tesla app setup",
    ],
    stats: [
      { label: "Certification", value: "Tesla Energy" },
      { label: "Coverage", value: "Nationwide" },
      { label: "Scope", value: "End to end" },
    ],
    sections: [
      {
        heading: "Tesla hardware performs best when installation matches the system design.",
        body: [
          "Wall Connector power sharing, Powerwall backup settings, gateway placement, and app commissioning depend on correct sizing and configuration. Tesla-certified installation applies the product specifications from wiring through final setup.",
          "That protects the warranty, supports the equipment features, and avoids documentation gaps that can complicate future service or incentives.",
        ],
        points: [
          "Correct conductor sizing and circuit protection",
          "Power sharing and app configuration",
          "Powerwall, gateway, and backup setup",
          "Warranty registration and commissioning",
        ],
      },
      {
        heading: "Certification is part of a complete electrical project process.",
        body: [
          "A certified installation still starts with your home: panel capacity, routing, site conditions, permits, and utility requirements determine the final design.",
          "We coordinate those details, complete the installation to code, and schedule inspection so the system is ready to use as intended.",
        ],
        points: [
          "Free assessment and load calculation",
          "Transparent fixed-price scope",
          "Permits and inspection coordination",
          "Workmanship guarantee and ongoing support",
        ],
      },
    ],
    faqs: [
      {
        question: "What does Tesla-certified installation mean?",
        answer:
          "It means the electrician is trained and approved to install Tesla energy products to Tesla's specifications, including commissioning and warranty registration.",
      },
      {
        question: "Which Tesla products do you install?",
        answer:
          "We install Tesla Wall Connector, Universal Wall Connector, and Powerwall systems, and commission them in the Tesla app.",
      },
      {
        question: "Can a Wall Connector and Powerwall be installed together?",
        answer:
          "Yes. A combined assessment confirms panel capacity, backup priorities, routing, and the best installation sequence for both systems.",
      },
    ],
    related: [
      { label: "Tesla Wall Connector", href: "/tesla-wall-connector-installation" },
      { label: "Tesla Universal Wall Connector", href: "/tesla-universal-wall-connector-installation" },
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation" },
      { label: "Energy Storage", href: "/energy-storage" },
    ],
  }),
}
