export type EvChargingPageData = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  stats?: { label: string; value: string }[]
  sections: {
    heading: string
    body: string[]
    points?: string[]
  }[]
  faqs: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  ctaHeading?: string
  ctaBody?: string
  primaryActionLabel?: string
  primaryActionHref?: string
  relatedHeading?: string
}

export const evChargingPages: Record<string, EvChargingPageData> = {
  "ev-charging": {
    eyebrow: "Home & commercial charging",
    title: "EV charging services built for real homes and real driving habits.",
    description:
      "From a single garage charger to a networked workplace, we design and install charging setups that fit your panel, daily routine, and long-term plans.",
    bullets: [
      "Dedicated 240V circuit sized to your panel and EV usage",
      "Tesla-certified electricians, permits, and inspection included",
      "Smart charging and load management for multi-EV and commercial sites",
    ],
    stats: [
      { label: "Typical install", value: "2–4 hrs" },
      { label: "Range added", value: "25–44 mi/hr" },
      { label: "Permitting", value: "Included" },
    ],
    sections: [
      {
        heading: "Home charging that makes owning an EV feel effortless.",
        body: [
          "The right home charger is more than a box on the wall. It needs a dedicated circuit, a safe load calculation, and a plan that keeps your panel stable during overnight charging.",
          "We install Level 2 chargers for Tesla, non-Tesla, and existing units bought online, and we size the circuit to your home instead of guessing.",
        ],
        points: [
          "Integrated garage and driveway charging for single-family homes",
          "Dedicated 240V circuit installation with permit and inspection",
          "Panel and load calculations to avoid unnecessary upgrades",
          "Options for two EVs, guest parking, and future expansion",
        ],
      },
      {
        heading: "Commercial and multifamily charging that scales cleanly.",
        body: [
          "Workplaces, condo garages, apartments, and retail sites need charging that performs under real usage. We design intelligent charging layouts that support uptime, billing, and utility requirements.",
          "From a single assigned parking space to a fleet depot or hotel charging hub, we engineer the load profile and network setup before the first trench is opened.",
        ],
        points: [
          "Workplace and employee charging with access control",
          "Apartment and HOA charging with metering or load-sharing",
          "Fleet, retail, and hospitality deployment planning",
          "Load management to avoid demand-charge surprises",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does EV charger installation cost?",
        answer:
          "Most home installs run from about $400 to $1,500, including the dedicated circuit, permit, and inspection. Distance from the panel, routing through finished walls, and any panel work change the final price.",
      },
      {
        question: "Can I install a charger I bought online?",
        answer:
          "Yes. We install most UL-listed Level 2 chargers from major retailers, as long as the unit and your panel are compatible. We’ll review the spec before work begins so there are no surprises.",
      },
      {
        question: "Can two EVs charge on one setup?",
        answer:
          "Absolutely. Load-sharing and power-management systems let two or more EVs charge from the same service while staying within safe panel limits, often without costly upgrades.",
      },
    ],
    related: [
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
      { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
    ],
  },
  "ev-charger-installation": {
    eyebrow: "EV charger installation",
    title: "EV charger installation for homes, garages, and rental properties.",
    description:
      "Get a properly wired charger installed by licensed electricians who size the circuit, coordinate permits, and keep the setup safe from day one.",
    bullets: [
      "Dedicated 240V circuit installed to code",
      "Tesla, ChargePoint, Emporia, and other major brands supported",
      "Permit, inspection, and workmanship backed by the team",
    ],
    stats: [
      { label: "Typical cost", value: "$400–$1,500" },
      { label: "Install time", value: "2–4 hrs" },
      { label: "Charging speed", value: "25–44 mi/hr" },
    ],
    sections: [
      {
        heading: "A charger installation is only as good as the circuit behind it.",
        body: [
          "A charger without the right breaker and wiring can be slow, unreliable, or a code violation. We evaluate your panel, cable route, and future load before recommending the right setup.",
          "From a simple wall mount to a full circuit run through finished walls, every step is planned around your home and the charger you want to use.",
        ],
        points: [
          "Circuit sizing based on your panel and EV use",
          "Outdoor or garage installation with clean routing",
          "Permit coordination and scheduled inspection",
          "Long-term flexibility for future upgrades",
        ],
      },
      {
        heading: "The installation process is straightforward and transparent.",
        body: [
          "We start with a free in-home review, then outline the scope, cost, and recommended charger. Once approved, the circuit is installed to code and the charger is mounted and tested before we leave.",
          "No guesswork, no rushed decisions, and no hidden surprises once the work is underway.",
        ],
        points: [
          "Free consultation and recommendation",
          "Full charger mounting and cable management",
          "System testing and user walkthrough",
          "Ongoing support if the charger needs service later",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a permit for a home EV charger?",
        answer:
          "Most residential EV charger installs require a permit and final inspection. We handle both so the install is properly documented and code-compliant.",
      },
      {
        question: "What if my panel is full?",
        answer:
          "We’ll check whether a load calculation or smart charging solution avoids an upgrade. If a panel upgrade is needed, we’ll explain the options before moving forward.",
      },
      {
        question: "Can you install a charger in a finished garage wall?",
        answer:
          "Yes. We route the circuit as needed, protect the wiring, and finish the install cleanly so it looks intentional and remains code-compliant.",
      },
    ],
    related: [
      { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
      { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
      { label: "NEMA 14-50 Outlet Installation", href: "/nema-14-50-outlet-installation/" },
      { label: "EV-Ready Home Wiring", href: "/ev-ready-home-wiring/" },
    ],
  },
  "level-2-ev-charger-installation": {
    eyebrow: "Level 2 charging",
    title: "Level 2 EV charger installation for faster, everyday charging.",
    description:
      "A 240V Level 2 charger adds significantly more driving range in the same evening, making it the standard for most homes and practical for households with daily commuting or multiple vehicles.",
    bullets: [
      "Up to 25–44 miles of range added per hour",
      "Dedicated circuit and safe breaker sizing",
      "Installers who can recommend the right charger for your setup",
    ],
    stats: [
      { label: "Power", value: "32–48A" },
      { label: "Speed", value: "5–10x faster" },
      { label: "Typical install", value: "$400–$1,500" },
    ],
    sections: [
      {
        heading: "Most EV owners need a Level 2 charger to keep up with everyday life.",
        body: [
          "A standard wall outlet is slow and inconvenient. A Level 2 charger plugs into a 240V circuit and gives you meaningful range overnight, which is the difference between charging once a week and charging every night.",
          "We evaluate your driving schedule, the panel’s spare capacity, and the simplest route for the wiring so the charger behaves reliably for years.",
        ],
        points: [
          "Ideal for daily commuters and overnight top-offs",
          "Works with Tesla and non-Tesla EVs",
          "Load managed options for multi-car household needs",
          "Simple, code-compliant finish with clean cable routing",
        ],
      },
      {
        heading: "The best charger is the one your panel and garage can support.",
        body: [
          "The charger itself matters less than the dedicated circuit, breaker, and physical layout. We plan the installation around your electrical service so you get charging speed without needless service upgrades.",
          "If your panel is tight, we can often improve the setup with power-sharing or a better-suited charger rather than forcing a major electrical project.",
        ],
        points: [
          "Load calculations before equipment purchase",
          "Smart charging recommendations where space is limited",
          "Compatible installation for all major brands",
          "No-pressure guidance on the best fit for your home",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a Level 2 charger worth it for a home?",
        answer:
          "For most households, yes. It eliminates the long charge times of a standard outlet and makes overnight charging consistent, affordable, and easy.",
      },
      {
        question: "Can I use a Tesla Wall Connector on a non-Tesla vehicle?",
        answer:
          "Yes. Tesla Wall Connectors are compatible with J1772-based EVs in addition to Tesla vehicles, so they are a strong option if you want a compact, high-performing charger.",
      },
      {
        question: "Will I need a panel upgrade?",
        answer:
          "Not always. Many homes already have enough capacity, and a proper electrical review tells us whether a load calculation can keep the project within budget.",
      },
    ],
    related: [
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
      { label: "EV-Ready Home Wiring", href: "/ev-ready-home-wiring/" },
      { label: "Multi-EV Charging Installation", href: "/multi-ev-charging-installation/" },
    ],
  },
  "nema-14-50-outlet-installation": {
    eyebrow: "NEMA 14-50 charging",
    title: "NEMA 14-50 outlet installation for plug-in EV charging.",
    description:
      "A NEMA 14-50 installation gives you the flexibility to plug in a 240V EV charger without a hardwired unit, while still giving the circuit the protection and sizing it needs.",
    bullets: [
      'Dedicated 50-amp circuit for EV charging',
      'Industrial-grade, EV-rated receptacle for continuous charging loads',
      'Outlet installation with GFCI protection where required',
      "Code-compliant permit and inspection handled for you",
    ],
    stats: [
      { label: "Typical cost", value: "$300–$900" },
      { label: "Breaker", value: "50A" },
      { label: "Use case", value: "Plug-in EVs" },
    ],
    sections: [
      {
        heading: "This is often the simplest option when you want flexibility and fast installation.",
        body: [
          "A NEMA 14-50 outlet is one of the most common ways to set up home charging because it allows a plug-in EV charger and leaves room for a future move or replacement without reworking the circuit.",
          "We install the outlet in a code-compliant location, size the breaker correctly, and ensure the dedicated circuit is safe for your home’s service.",
        ],
        points: [
          "Good fit for home garages and detached shops",
          "Simple plug-in capability for compatible EVs",
          "Included permit and inspection support",
          "Clean, weather-safe, wall-protected installation",
        ],
      },
      {
        heading: "A proper outlet install requires more than a receptacle and a breaker.",
        body: [
          'The outlet must be on a dedicated circuit, correctly protected, and routed to the correct panel location with safe spacing. We also check whether the panel has capacity before the job starts.',
          'EV charging is a continuous, hours-long load. Budget receptacles can overheat and melt, so we use an industrial-grade, EV-rated receptacle designed for that use.',
          'That avoids nuisance trips, overloaded circuits, and future service issues that can happen when an EV circuit is undersized or poorly placed.',
        ],
        points: [
          "Dedicated 50A EV circuit sizing",
          "GFCI and code compliance verification",
          "Panel capacity review before installation",
          "Clean finish and long-term reliability",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a NEMA 14-50 outlet better than a hardwired charger?",
        answer:
          "Both work well. A NEMA 14-50 outlet offers flexibility and often simpler future upgrades, while a hardwired charger can look cleaner and avoid an outlet connection if you prefer a fixed install.",
      },
      {
        question: "Can I install this myself?",
        answer:
          "We strongly recommend a licensed electrician. EV circuits are high-amperage, code-controlled, and must be installed with the correct breaker, wiring, and protection.",
      },
      {
        question: "Does this support all EVs?",
        answer:
          "Most plug-in EVs are compatible with a NEMA 14-50 setup, but the charger and the car’s onboard hardware determine the final charging rate. We can help match the right configuration.",
      },
    ],
    related: [
      { label: "EV Charger Circuit Installation", href: "/ev-charger-circuit-installation/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
      { label: "Amazon EV Charger Installation", href: "/amazon-ev-charger-installation/" },
    ],
  },
  "ev-ready-home-wiring": {
    eyebrow: "EV-ready wiring",
    title: "EV-ready home wiring for future charging without the retrofit headache.",
    description:
      "If you are remodeling, building, or upgrading your service, EV-ready wiring is the safest, most cost-effective time to plan for future charging capacity.",
    bullets: [
      "Run the right conduit and circuit while walls are open",
      "Prepare for future EV charging without a costly retrofit later",
      "Coordinate with remodels, panel work, and long-term home upgrades",
    ],
    stats: [
      { label: "Best time", value: "Remodel" },
      { label: "Benefit", value: "Lower retrofit cost" },
      { label: "Service", value: "Future-ready" },
    ],
    sections: [
      {
        heading: "The cheapest time to wire for EV charging is before the walls close up.",
        body: [
          "Adding an EV charger later often means opening finished walls, identifying a path for conduit, and working around existing finishes. Planning early avoids all of that.",
          "We help you size the panel capacity, run the right circuit paths, and decide whether a future charger, subpanel, or load-sharing approach is the smartest layout.",
        ],
        points: [
          "Ideal during remodels, additions, or new construction",
          "Future-ready conduit and circuit pathways",
          "Smart planning for charger, panel, and garage location",
          "Lower cost than retrofitting finished spaces",
        ],
      },
      {
        heading: "We take the long view so your home gets easier to electrify later.",
        body: [
          "An EV-ready home is not just one charger. It is a plan for the next few years of driving, solar, battery, and appliance loads. We design around the home you have now and the home you want later.",
          "That becomes more valuable when your panel is upgraded, your garage is reworked, or you add a second vehicle down the road.",
        ],
        points: [
          "Panel and service planning for future growth",
          "Dedicated conduit and load planning for garages or shops",
          "Compatibility with next-generation charging products",
          "A cleaner path to future EV expansion",
        ],
      },
    ],
    faqs: [
      {
        question: "Does EV-ready wiring cost less than a retrofit?",
        answer:
          "Yes. Doing the conduit and circuit during a remodel or addition is much more affordable than tearing into finished walls later to add the charger.",
      },
      {
        question: "Can an EV-ready circuit support future charger upgrades?",
        answer:
          "Yes, when planned correctly. We design the route, spacing, and capacity around likely future charging needs so the upgrade is straightforward later.",
      },
      {
        question: "Should I do this even if I don’t own an EV yet?",
        answer:
          "If you are remodeling or upgrading the electrical service, it is usually a smart move. It future-proofs the home and keeps the cost low before finishes are installed.",
      },
    ],
    related: [
      { label: "EV Charger Circuit Installation", href: "/ev-charger-circuit-installation/" },
      { label: "Electrical Panel Upgrade", href: "/electrical-panel-upgrade/" },
      { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
      { label: "Home Battery Installation", href: "/home-battery-installation/" },
    ],
  },
  "ev-charger-circuit-installation": {
    eyebrow: "Dedicated circuits",
    title: "EV charger circuit installation, sized and protected the right way.",
    description:
      "Every EV charger needs a dedicated 240V circuit run to code. We size the breaker, wire gauge, and route to match your charger and panel, with permit and inspection included.",
    bullets: [
      "Dedicated 240V circuit, typically 40–60A",
      "Correct wire gauge and breaker sizing for your charger",
      "Permit and inspection handled from start to finish",
    ],
    stats: [
      { label: "Typical cost", value: "$300–$1,200" },
      { label: "Breaker range", value: "40–60A" },
      { label: "Timeline", value: "Same day–1 wk" },
    ],
    sections: [
      {
        heading: "The circuit is the foundation of a safe, fast-charging setup.",
        body: [
          "A correctly sized circuit prevents nuisance trips, overheating, and code violations. We calculate the exact breaker and wire gauge based on your charger's amperage and the distance from your panel.",
          "Whether you already own a charger or are still deciding, we make sure the circuit is built for the load it will actually carry.",
        ],
        points: [
          "Circuit sizing matched to charger amperage",
          "Proper wire gauge over the full run length",
          "GFCI protection where code requires it",
          "Support for indoor, garage, or outdoor routing",
        ],
      },
      {
        heading: "Distance from the panel is the biggest cost driver.",
        body: [
          "A circuit run just a few feet from the panel costs far less than one that must travel across a house or through a finished basement. We walk the route with you before quoting so the price reflects the real job.",
          "If the distance or routing makes a subpanel or upgraded service the smarter option, we'll tell you plainly and compare the tradeoffs.",
        ],
        points: [
          "Free on-site route assessment",
          "Clear, upfront pricing before work begins",
          "Clean routing through walls, attics, or conduit",
          "Optional subpanel evaluation for long runs",
        ],
      },
    ],
    faqs: [
      {
        question: "What size circuit does an EV charger need?",
        answer:
          "Most Level 2 chargers need a 40–60A dedicated circuit, depending on the charger's rated amperage. We confirm the exact size once we know your charger model.",
      },
      {
        question: "Can I add an EV circuit without upgrading my panel?",
        answer:
          "Often yes. A load calculation frequently shows enough spare capacity, especially with smart or load-managed chargers, avoiding an unnecessary panel upgrade.",
      },
      {
        question: "How long does circuit installation take?",
        answer:
          "Most home circuit runs are completed in a single day. Longer runs or finished-wall routing can take longer, and we'll give you a clear timeline before starting.",
      },
    ],
    related: [
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "NEMA 14-50 Outlet Installation", href: "/nema-14-50-outlet-installation/" },
      { label: "EV-Ready Home Wiring", href: "/ev-ready-home-wiring/" },
      { label: "Electrical Panel Upgrade", href: "/electrical-panel-upgrade/" },
    ],
  },
  "tesla-wall-connector-installation": {
    eyebrow: "Tesla certified",
    title: "Tesla Wall Connector installation from a certified installer.",
    description:
      "As a Tesla-certified installer, we wire the Wall Connector for up to 44 miles of range per hour and register your warranty, so you get the fastest home charging Tesla offers.",
    bullets: [
      "Tesla-certified installation and warranty registration",
      "Up to 48A circuit for maximum charging speed",
      "Indoor or outdoor mounting with clean cable routing",
    ],
    stats: [
      { label: "Typical cost", value: "$400–$1,200" },
      { label: "Max output", value: "48A" },
      { label: "Range added", value: "Up to 44 mi/hr" },
    ],
    sections: [
      {
        heading: "Tesla-certified installation matters for warranty and performance.",
        body: [
          "The Wall Connector performs best on a properly sized circuit installed by a certified electrician. We follow Tesla's official installation guidelines and register the unit under warranty on your behalf.",
          "That means faster charging, fewer support headaches, and a unit that's backed the way Tesla intends.",
        ],
        points: [
          "Full 48A circuit for maximum charging speed",
          "Certified installer registration with Tesla",
          "Compatible with all Tesla models and most J1772 EVs with an adapter",
          "Garage, driveway, or exterior wall mounting",
        ],
      },
      {
        heading: "We handle the electrical work Tesla expects to see.",
        body: [
          "From panel capacity to conduit routing, every detail is planned to meet Tesla's installation standards and your local code requirements, with a permit and inspection scheduled as part of the job.",
          "If your panel needs support to handle the load, we'll review options before committing to the full 48A circuit.",
        ],
        points: [
          "Panel capacity and load calculation review",
          "Permit and inspection included",
          "Clean, weatherproof mounting for outdoor installs",
          "Support for future Powerwall or solar integration",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need Tesla-certified installation for the warranty?",
        answer:
          "Tesla recommends certified installation to ensure the Wall Connector is wired to spec. We register the installation so your warranty coverage is properly documented.",
      },
      {
        question: "Can a Wall Connector charge non-Tesla EVs?",
        answer:
          "Yes, with a J1772 adapter, most non-Tesla EVs can charge from a Wall Connector, making it a flexible option for multi-vehicle households.",
      },
      {
        question: "What circuit size does a Wall Connector need?",
        answer:
          "The Wall Connector can be configured from 15A up to 48A. We size the circuit based on your desired charging speed and available panel capacity.",
      },
    ],
    related: [
      { label: "Tesla Universal Wall Connector Installation", href: "/tesla-universal-wall-connector-installation/" },
      { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
    ],
  },
  "tesla-universal-wall-connector-installation": {
    eyebrow: "Tesla certified",
    title: "Tesla Universal Wall Connector installation for any EV.",
    description:
      "The Tesla Universal Wall Connector charges both Tesla and J1772 EVs at up to 48 amps, giving multi-vehicle households one charger that works for everyone.",
    bullets: [
      "Built-in NACS and J1772 charging, no adapter needed",
      "Up to 48A output for fast, reliable charging",
      "Certified installation and warranty registration",
    ],
    stats: [
      { label: "Typical cost", value: "$500–$1,300" },
      { label: "Max output", value: "48A" },
      { label: "Compatibility", value: "Tesla + J1772" },
    ],
    sections: [
      {
        heading: "One charger for every EV in the driveway.",
        body: [
          "The Universal Wall Connector includes both a NACS and J1772 connector, so Tesla and non-Tesla EVs can charge without swapping adapters. It's the simplest solution for mixed-vehicle households.",
          "We size the circuit for full 48A output and mount the unit where it's most convenient for daily use.",
        ],
        points: [
          "Dual connector design, no adapter required",
          "Full 48A circuit for maximum speed",
          "Ideal for households with more than one EV brand",
          "Certified installer registration included",
        ],
      },
      {
        heading: "Installation follows the same rigorous standard as any Tesla product.",
        body: [
          "We evaluate your panel, plan the circuit route, and mount the connector to meet Tesla's installation requirements and local code, then schedule the permit and inspection.",
          "If you're considering solar or a Powerwall down the road, we can plan the electrical layout to support that expansion too.",
        ],
        points: [
          "Panel capacity and circuit planning",
          "Permit and inspection included",
          "Garage, carport, or exterior mounting",
          "Future-ready for solar or battery additions",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from the standard Wall Connector?",
        answer:
          "The Universal Wall Connector has both a NACS and a J1772 cable built in, so any EV can plug in directly without needing a separate adapter.",
      },
      {
        question: "Does it charge at the same speed as the standard connector?",
        answer:
          "Yes, it supports up to 48A output, matching the standard Wall Connector's maximum charging speed when the circuit supports it.",
      },
      {
        question: "Is this a good option for a shared or rental property?",
        answer:
          "Yes. Because it works with nearly any EV out of the box, it's a strong choice for shared garages, rentals, or households expecting to switch vehicle brands.",
      },
    ],
    related: [
      { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
      { label: "Multi-EV Charging Installation", href: "/multi-ev-charging-installation/" },
      { label: "Condo & Apartment EV Charging", href: "/condo-apartment-ev-charging/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
    ],
  },
  "amazon-ev-charger-installation": {
    eyebrow: "Any brand, any retailer",
    title: "Amazon EV charger installation, professionally wired and inspected.",
    description:
      "Bought an EV charger on Amazon? We install it for you, professional, licensed Level 2 installation of any Amazon-purchased charger, typically including permit and inspection.",
    bullets: [
      "Installation for any UL-listed charger bought on Amazon",
      "Circuit sizing matched to the specific unit you purchased",
      "Permit and inspection included in every quote",
    ],
    stats: [
      { label: "Typical cost", value: "$400–$1,500" },
      { label: "Install time", value: "2–4 hrs" },
      { label: "Brands supported", value: "Most major brands" },
    ],
    sections: [
      {
        heading: "The charger you bought is only half the project.",
        body: [
          "A charger purchased online still needs a licensed electrician to install the dedicated circuit, verify compatibility with your panel, and confirm it meets local code before it's turned on.",
          "We review the unit's spec sheet, check your panel's capacity, and let you know before the job starts if anything about the model doesn't fit your home.",
        ],
        points: [
          "Compatibility check against your panel and service",
          "Dedicated circuit sized to the charger's amperage",
          "Mounting in your garage, driveway, or exterior wall",
          "Permit and inspection scheduled for you",
        ],
      },
      {
        heading: "We'll tell you upfront if the unit isn't the right fit.",
        body: [
          "Not every charger purchased online is the best match for every home. If we spot an issue, we'll explain the tradeoffs and recommend an alternative before any work begins, no pressure to keep an unsuitable unit.",
          "If everything checks out, we install, test, and register the warranty documentation for your records.",
        ],
        points: [
          "No-obligation compatibility review",
          "Clear recommendations if a swap makes sense",
          "Full installation, testing, and walkthrough",
          "Support if the charger needs service later",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you install any charger I bought online?",
        answer:
          "We install most UL-listed Level 2 chargers regardless of retailer. We'll confirm compatibility with your panel and let you know before starting if there's a concern.",
      },
      {
        question: "What if the charger doesn't match my panel?",
        answer:
          "We'll explain your options, whether that's a load calculation, a different breaker configuration, or a better-suited charger, before any work begins.",
      },
      {
        question: "Is the permit included?",
        answer:
          "Yes, permit and inspection coordination are included as part of the standard installation quote.",
      },
    ],
    related: [
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "NEMA 14-50 Outlet Installation", href: "/nema-14-50-outlet-installation/" },
      { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
      { label: "EV Charger Repair", href: "/ev-charger-repair/" },
    ],
  },
  "ev-charger-repair": {
    eyebrow: "Repair & diagnostics",
    title: "EV charger repair, fast diagnostics for chargers that stop working.",
    description:
      "Our licensed electricians diagnose and repair home and commercial chargers, faults, tripped breakers, GFCI issues, and connector damage, often the same week.",
    bullets: [
      "Diagnosis for breaker trips, GFCI faults, and dead units",
      "Repair or replacement for damaged connectors and cables",
      "Support for all major charger brands",
    ],
    stats: [
      { label: "Response", value: "Often same week" },
      { label: "Diagnosis", value: "On-site" },
      { label: "Coverage", value: "Home & commercial" },
    ],
    sections: [
      {
        heading: "A charger that stops working is usually a wiring or breaker issue, not the unit itself.",
        body: [
          "Repeated breaker trips, GFCI faults, and intermittent charging are often caused by the circuit rather than the charger. We diagnose the full path, from the panel to the connector, before recommending a fix.",
          "That means you're not replacing an expensive charger when the real issue is a loose connection or an undersized circuit.",
        ],
        points: [
          "Breaker trip and GFCI fault diagnosis",
          "Connector and cable damage inspection",
          "Firmware and networking troubleshooting for smart chargers",
          "Clear repair-vs-replace recommendation",
        ],
      },
      {
        heading: "We fix what can be fixed and replace only what needs it.",
        body: [
          "Many issues are resolved with a repaired connection, a new breaker, or a firmware reset. When a unit is genuinely failed, we'll help you select a comparable replacement and handle the swap.",
          "For commercial sites, we also check load management systems and networking to rule out software-side causes.",
        ],
        points: [
          "Same-visit repairs where possible",
          "Manufacturer warranty support where applicable",
          "Replacement sourcing and installation if needed",
          "Commercial load-management diagnostics",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my EV charger keep tripping the breaker?",
        answer:
          "This is often caused by an undersized circuit, a failing breaker, or a fault in the charger itself. We test each part of the circuit to isolate the exact cause.",
      },
      {
        question: "Can you repair chargers not installed by your team?",
        answer:
          "Yes, we diagnose and repair chargers regardless of who installed them originally.",
      },
      {
        question: "How fast can you get to a broken charger?",
        answer:
          "Most repairs are scheduled within the same week, and urgent commercial issues can often be prioritized sooner.",
      },
    ],
    related: [
      { label: "EV Charger Relocation", href: "/ev-charger-relocation/" },
      { label: "EV Charger Circuit Installation", href: "/ev-charger-circuit-installation/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
      { label: "Electrical Inspection", href: "/electrical-inspection/" },
    ],
  },
  "ev-charger-relocation": {
    eyebrow: "Relocation & remodels",
    title: "EV charger relocation for moves, remodels, and new garage layouts.",
    description:
      "Moving or remodeling? We relocate your existing EV charger, new circuit run, remount, and inspection, or transfer it to your new home.",
    bullets: [
      "New circuit run to the updated location",
      "Professional remount and reconnection",
      "Support for moving the charger to a new home",
    ],
    stats: [
      { label: "Typical cost", value: "$250–$800" },
      { label: "Timeline", value: "1 visit typical" },
      { label: "Includes", value: "Inspection" },
    ],
    sections: [
      {
        heading: "A remodel or move doesn't have to mean starting from scratch.",
        body: [
          "If your garage layout is changing or you're moving to a new home, your existing charger can often be relocated rather than replaced, saving the cost of a new unit.",
          "We plan the new circuit path, safely disconnect the existing unit, and remount it in the new location with a fresh inspection.",
        ],
        points: [
          "New circuit run to the updated mounting location",
          "Safe disconnection and reinstallation of your existing charger",
          "Support for moving the unit to a different property",
          "Inspection scheduled after the relocation",
        ],
      },
      {
        heading: "We plan the new layout around your updated garage or driveway.",
        body: [
          "Whether the charger is moving a few feet during a remodel or across town to a new home, we evaluate the new panel, mounting surface, and cable routing before starting the work.",
          "That keeps the relocated charger performing exactly as it did before, without any surprises at the new spot.",
        ],
        points: [
          "New panel and load review at the destination",
          "Clean mounting and cable management",
          "Compatible with most major charger brands",
          "Coordination with remodel timelines",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I move my existing charger to a new home?",
        answer:
          "In most cases, yes. We disconnect it safely, transport if needed, and reinstall it with a new dedicated circuit at the new property.",
      },
      {
        question: "Does relocation include a new circuit?",
        answer:
          "Yes, the new location requires its own dedicated circuit and inspection, which is included in the relocation service.",
      },
      {
        question: "How long does a relocation take?",
        answer:
          "Most relocations are completed in a single visit, though larger remodels or longer circuit runs may take more time.",
      },
    ],
    related: [
      { label: "EV Charger Repair", href: "/ev-charger-repair/" },
      { label: "EV Charger Circuit Installation", href: "/ev-charger-circuit-installation/" },
      { label: "EV-Ready Home Wiring", href: "/ev-ready-home-wiring/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
    ],
  },
  "commercial-ev-charging": {
    eyebrow: "Commercial charging",
    title: "Commercial EV charging for workplaces, retail, and fleets.",
    description:
      "Commercial EV charging stations for workplaces, multifamily, retail, and fleets. We handle site assessment, load management, networking, and rebate paperwork.",
    bullets: [
      "Site assessment and load calculation for any property type",
      "Load management to avoid costly demand charges",
      "Utility and state incentive capture handled for you",
    ],
    stats: [
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Includes", value: "Permit & inspection" },
      { label: "Financing", value: "Available" },
    ],
    sections: [
      {
        heading: "Commercial charging turns your property into an EV-ready destination.",
        body: [
          "From a few Level 2 stations to networked DC fast-charging, we design and install charging that fits your site, whether that's a workplace lot, a multifamily garage, a retail destination, or a fleet depot.",
          "We plan for load management from day one so your electrical service can handle demand without expensive surprises down the road.",
        ],
        points: [
          "Workplace and employee charging",
          "Multifamily and apartment charging",
          "Retail and destination charging",
          "Fleet depot charging with load management",
        ],
      },
      {
        heading: "The economics come down to demand charges and incentive capture.",
        body: [
          "Unmanaged chargers spiking together can add utility demand fees that dwarf the energy cost. Load management software caps that spike and often changes the business case entirely.",
          "Utility make-ready programs frequently fund the expensive infrastructure, conduit, panels, transformers, if the paperwork is filed correctly, and we build that into every proposal.",
        ],
        points: [
          "Managed load profiles matched to your utility's rate structure",
          "Incentive applications filed as part of the project",
          "Payment and access control integration",
          "Planning for future expansion as adoption grows",
        ],
      },
    ],
    faqs: [
      {
        question: "Do commercial chargers qualify for incentives?",
        answer:
          "Yes, many utility and state programs cover a large share of commercial charging costs. We help identify and apply for the incentives available in your area.",
      },
      {
        question: "Can you manage power so we don't overload our service?",
        answer:
          "Yes, we design load-managed charging that shares available capacity across stations and avoids costly demand spikes.",
      },
      {
        question: "How long does a commercial installation take?",
        answer:
          "Timelines vary by scope, from a few days for a handful of stations to several weeks for networked, multi-station deployments with utility coordination.",
      },
    ],
    related: [
      { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
      { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
      { label: "Retail & Shopping Center EV Charging", href: "/retail-shopping-center-ev-charging/" },
      { label: "Hotel & Hospitality EV Charging", href: "/hotel-hospitality-ev-charging/" },
    ],
  },
  "condo-apartment-ev-charging": {
    eyebrow: "Multifamily charging",
    title: "Condo and apartment EV charging, from one space to the whole garage.",
    description:
      "EV charging for condos, apartments, and HOAs, from a single assigned-space charger to shared, billed charging for the whole garage. We handle HOA approvals, metering, and load management.",
    bullets: [
      "Single assigned-space or shared, billed charging",
      "HOA and property management approval support",
      "Metering and load management for shared circuits",
    ],
    stats: [
      { label: "Setup types", value: "Single or shared" },
      { label: "Billing", value: "Metered options" },
      { label: "Approvals", value: "HOA-ready" },
    ],
    sections: [
      {
        heading: "Multifamily charging is a solved problem in most states.",
        body: [
          "Right-to-charge laws in many states make it easier than ever for residents to add a charger to an assigned space, and metered billing solves the shared-cost question for garages with multiple residents.",
          "We work directly with property managers, boards, and HOAs to navigate approvals and design a system that fits the building's electrical capacity.",
        ],
        points: [
          "Single assigned-space charger installation",
          "Shared garage charging with individual metering",
          "HOA and board approval documentation support",
          "Load management to protect shared building capacity",
        ],
      },
      {
        heading: "The right setup depends on the building's electrical service and governance.",
        body: [
          "A single resident charger is a straightforward install. A shared garage with multiple future chargers needs a load management plan and often a metering or billing system so costs are allocated fairly.",
          "We start with a site assessment to understand the building's capacity, then recommend the setup that scales as more residents want to charge.",
        ],
        points: [
          "Free site assessment for board or resident requests",
          "Scalable design for future charger additions",
          "Coordination with building management and utilities",
          "Right-to-charge law guidance where applicable",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I install a charger in my condo's assigned parking space?",
        answer:
          "In many states, right-to-charge laws support this, though the process depends on your HOA's rules. We help prepare the request and handle the installation once approved.",
      },
      {
        question: "How does billing work for shared garage charging?",
        answer:
          "Metered systems track each resident's usage so costs are billed individually rather than spread across the building's common charges.",
      },
      {
        question: "Will multiple chargers overload the building's electrical service?",
        answer:
          "Not with proper load management. We design systems that share available capacity across chargers so the building's service stays within safe limits.",
      },
    ],
    related: [
      { label: "Multi-EV Charging Installation", href: "/multi-ev-charging-installation/" },
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
      { label: "Tesla Universal Wall Connector Installation", href: "/tesla-universal-wall-connector-installation/" },
      { label: "EV Charger Installation", href: "/ev-charger-installation/" },
    ],
  },
  "multi-ev-charging-installation": {
    eyebrow: "Multi-vehicle charging",
    title: "Multi-EV charging installation for two or more vehicles at home.",
    description:
      "Two or more EVs at home? Load-managed (power-sharing) charging lets multiple chargers share one circuit or panel safely, often avoiding a panel upgrade.",
    bullets: [
      "Load-managed charging for two or more EVs",
      "Power-sharing to avoid unnecessary panel upgrades",
      "Compatible with mixed Tesla and non-Tesla households",
    ],
    stats: [
      { label: "Typical cost", value: "$800–$2,500" },
      { label: "Setup", value: "Power-sharing" },
      { label: "Panel upgrade", value: "Often avoided" },
    ],
    sections: [
      {
        heading: "Charging two EVs doesn't have to mean two full circuits.",
        body: [
          "Load-managed chargers automatically split available power between vehicles, so both cars can charge overnight without exceeding your panel's capacity, often without any service upgrade at all.",
          "We evaluate your household's charging patterns and panel capacity to design a setup that keeps both vehicles charged and your electrical service safe.",
        ],
        points: [
          "Power-sharing controllers for two or more chargers",
          "Overnight charging for both vehicles without service upgrades",
          "Compatible with mixed-brand EV households",
          "Scalable for a third charger later",
        ],
      },
      {
        heading: "A load calculation tells us exactly what your panel can support.",
        body: [
          "Before recommending a specific setup, we calculate your home's actual available capacity alongside existing appliances like HVAC and water heating, so the system is sized correctly the first time.",
          "If a panel upgrade genuinely is the better path, we'll explain why and price it clearly rather than defaulting to the more expensive option.",
        ],
        points: [
          "Full household load calculation",
          "Clear upgrade-vs-load-sharing comparison",
          "Two-charger installation in a single visit where possible",
          "Support for future EV additions to the household",
        ],
      },
    ],
    faqs: [
      {
        question: "Can two EVs charge overnight without a panel upgrade?",
        answer:
          "Often yes. Power-sharing chargers split available capacity automatically, letting both vehicles charge fully overnight within your existing panel's limits.",
      },
      {
        question: "Do I need matching chargers for both EVs?",
        answer:
          "No, load management systems typically work across different charger brands and models, as long as they're compatible with the shared circuit setup.",
      },
      {
        question: "What if we add a third EV later?",
        answer:
          "Many load management systems can scale to a third charger. We'll design with that flexibility in mind if you expect to add another vehicle.",
      },
    ],
    related: [
      { label: "Condo & Apartment EV Charging", href: "/condo-apartment-ev-charging/" },
      { label: "Tesla Universal Wall Connector Installation", href: "/tesla-universal-wall-connector-installation/" },
      { label: "Level 2 EV Charger Installation", href: "/level-2-ev-charger-installation/" },
      { label: "Electrical Panel Upgrade", href: "/electrical-panel-upgrade/" },
    ],
  },
  "ev-fleet-charging": {
    eyebrow: "Fleet depot charging",
    title: "EV fleet charging with load management built for depot operations.",
    description:
      "Fleet depot charging with networked stations, load management, and utility incentive capture, designed to scale as your fleet electrifies.",
    bullets: [
      "Networked charging stations for depot-scale fleets",
      "Load management to control demand charges",
      "Utility and state incentive capture for fleet infrastructure",
    ],
    stats: [
      { label: "Scale", value: "Depot-ready" },
      { label: "Networking", value: "Included" },
      { label: "Guarantee", value: "Up to 10 yrs" },
    ],
    sections: [
      {
        heading: "Fleet charging is an operations problem as much as an electrical one.",
        body: [
          "Charging a fleet overnight means coordinating dozens of vehicles against a limited electrical service. We design load-managed systems that sequence charging to keep every vehicle ready for its shift without spiking demand charges.",
          "Networking and reporting let your team monitor charger status and usage across the whole depot from one dashboard.",
        ],
        points: [
          "Sequenced, load-managed charging for full fleets",
          "Networked stations with usage reporting",
          "Scalable design for growing fleet electrification",
          "Utility make-ready program coordination",
        ],
      },
      {
        heading: "Incentive capture is where fleet electrification often pays for itself.",
        body: [
          "Utility and state programs frequently fund a significant share of depot charging infrastructure, conduit, panels, and transformers included, when the paperwork is filed correctly.",
          "We build the incentive application into the project plan from day one so the business case is clear before construction starts.",
        ],
        points: [
          "Utility make-ready program applications",
          "State and federal fleet incentive research",
          "Phased rollout planning for growing fleets",
          "Ongoing maintenance and support options",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you support a fleet that's electrifying in phases?",
        answer:
          "Yes, we design the initial infrastructure with future phases in mind, so adding chargers later doesn't require rebuilding what's already in place.",
      },
      {
        question: "How does load management work for a whole depot?",
        answer:
          "Charging is sequenced and capped so total demand stays within your service's limits, while still ensuring every vehicle is charged by its scheduled shift.",
      },
      {
        question: "Are there incentives for fleet charging infrastructure?",
        answer:
          "Many utilities and states offer make-ready and fleet-specific incentives. We identify what's available in your area and help file the applications.",
      },
    ],
    related: [
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
      { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
      { label: "Retail & Shopping Center EV Charging", href: "/retail-shopping-center-ev-charging/" },
      { label: "Hotel & Hospitality EV Charging", href: "/hotel-hospitality-ev-charging/" },
    ],
  },
  "retail-shopping-center-ev-charging": {
    eyebrow: "Retail & destination charging",
    title: "Retail and shopping center EV charging that keeps customers on-site longer.",
    description:
      "Networked EV charging for retail and shopping centers, designed to attract EV-driving customers and capture available utility incentives.",
    bullets: [
      "Networked stations with payment integration",
      "Site assessment and load management planning",
      "Utility incentive capture for retail properties",
    ],
    stats: [
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Includes", value: "Payment integration" },
      { label: "Financing", value: "Available" },
    ],
    sections: [
      {
        heading: "EV charging is becoming an amenity that keeps shoppers on-site.",
        body: [
          "Retail and shopping center charging gives EV-driving customers a reason to choose your location and stay longer while their vehicle charges. We design station placement and payment integration around your property's traffic patterns.",
          "Load management ensures the added charging demand doesn't create costly spikes on your existing electrical service.",
        ],
        points: [
          "Strategic station placement for customer visibility and dwell time",
          "Payment and access integration for public charging",
          "Load management to control demand charges",
          "Networked monitoring and usage reporting",
        ],
      },
      {
        heading: "Incentive capture makes the investment pencil out faster.",
        body: [
          "Utility make-ready programs and state incentives frequently cover a meaningful share of retail charging infrastructure. We file the paperwork as part of the project so you capture what's available.",
          "We also help size the system for future expansion as demand grows.",
        ],
        points: [
          "Utility and state incentive applications",
          "Fixed, transparent project pricing",
          "Workmanship guarantee up to 10 years",
          "Expansion planning for additional stations",
        ],
      },
    ],
    faqs: [
      {
        question: "Does adding EV charging bring in more customers?",
        answer:
          "Many retail properties see EV charging as a differentiator that increases visit frequency and dwell time, particularly for destination and shopping center locations.",
      },
      {
        question: "Can we charge customers for using the stations?",
        answer:
          "Yes, we can integrate payment systems so charging can be offered free, discounted, or paid, depending on your property's strategy.",
      },
      {
        question: "Are there incentives available for retail charging?",
        answer:
          "Many utility and state programs support retail and commercial charging infrastructure. We help identify and apply for what's available in your area.",
      },
    ],
    related: [
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
      { label: "Hotel & Hospitality EV Charging", href: "/hotel-hospitality-ev-charging/" },
      { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
      { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
    ],
  },
  "hotel-hospitality-ev-charging": {
    eyebrow: "Hospitality charging",
    title: "Hotel and hospitality EV charging that becomes a guest amenity.",
    description:
      "Networked EV charging for hotels and hospitality properties, designed to enhance the guest experience while capturing available utility incentives.",
    bullets: [
      "Guest-facing charging with simple payment or complimentary access",
      "Load management for parking structures and lots",
      "Utility incentive capture for hospitality properties",
    ],
    stats: [
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Placement", value: "Guest & valet lots" },
      { label: "Financing", value: "Available" },
    ],
    sections: [
      {
        heading: "EV charging is increasingly expected as a guest amenity.",
        body: [
          "Hotel guests driving EVs look for properties that offer reliable overnight charging. We design station placement for guest lots, valet areas, and parking structures so charging is convenient and visible.",
          "Networked stations let your team track usage and offer charging as a complimentary perk or a paid amenity.",
        ],
        points: [
          "Guest lot, valet, and parking structure charging",
          "Complimentary or paid access configuration",
          "Load management across the property's parking areas",
          "Networked monitoring for staff and guests",
        ],
      },
      {
        heading: "We plan around your property's existing electrical service.",
        body: [
          "Hospitality properties often have complex electrical loads already in place. We conduct a full site assessment to determine capacity and design a charging system that fits without straining existing service.",
          "Utility incentives frequently help offset the infrastructure cost, and we handle the application process.",
        ],
        points: [
          "Full property load assessment",
          "Utility and state incentive applications",
          "Phased rollout for larger properties",
          "Ongoing maintenance support",
        ],
      },
    ],
    faqs: [
      {
        question: "Should hotel EV charging be free or paid?",
        answer:
          "Both models work well depending on your property's positioning. We can configure stations either way, or offer a mix based on guest tier or parking area.",
      },
      {
        question: "Will charging stations overload our parking structure's electrical service?",
        answer:
          "We design load-managed systems specifically to prevent this, distributing available capacity across stations without exceeding your service's limits.",
      },
      {
        question: "Are there incentives for hospitality charging infrastructure?",
        answer:
          "Many utility and state programs support hospitality and commercial charging. We identify what applies to your property and handle the applications.",
      },
    ],
    related: [
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
      { label: "Retail & Shopping Center EV Charging", href: "/retail-shopping-center-ev-charging/" },
      { label: "Tesla Wall Connector for Business", href: "/tesla-wall-connector-business/" },
      { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
    ],
  },
  "tesla-wall-connector-business": {
    eyebrow: "Tesla for business",
    title: "Tesla Wall Connector installation for businesses and commercial fleets.",
    description:
      "Tesla-certified Wall Connector installation for business properties, from employee parking to fleet depots, with load management and warranty registration.",
    bullets: [
      "Tesla-certified commercial installation and warranty registration",
      "Load management across multiple Wall Connectors",
      "Support for employee, fleet, and customer-facing charging",
    ],
    stats: [
      { label: "Max output", value: "48A per unit" },
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Use cases", value: "Fleet & employee" },
    ],
    sections: [
      {
        heading: "The Wall Connector scales well for multi-unit business deployments.",
        body: [
          "Businesses installing multiple Wall Connectors need load management to keep the units running at full speed without exceeding the property's electrical service. We design the layout and circuit plan around your specific site.",
          "As a Tesla-certified installer, we register each unit's warranty and ensure the installation meets Tesla's commercial specifications.",
        ],
        points: [
          "Multi-unit Wall Connector deployment and load management",
          "Certified installer warranty registration for every unit",
          "Employee, fleet, or customer-facing configurations",
          "Networking options for usage tracking",
        ],
      },
      {
        heading: "We plan for your business's electrical service from the start.",
        body: [
          "A commercial Wall Connector deployment starts with a site assessment to understand your service capacity, then a load-managed design that lets multiple units share power safely.",
          "Utility incentives are often available for commercial installations, and we help identify and apply for what applies to your property.",
        ],
        points: [
          "Full commercial site assessment",
          "Load-managed design for multiple connectors",
          "Utility incentive identification and application support",
          "Ongoing maintenance and support options",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we install multiple Wall Connectors at one business location?",
        answer:
          "Yes, we design load-managed deployments for multiple units so they share available capacity without exceeding your electrical service.",
      },
      {
        question: "Does Tesla require certified installation for commercial units?",
        answer:
          "Tesla recommends certified installation for both residential and commercial deployments to ensure the units are wired to spec and properly registered.",
      },
      {
        question: "Are there incentives for commercial Wall Connector installations?",
        answer:
          "Many utility and state programs support commercial EV charging infrastructure. We help identify what's available for your property.",
      },
    ],
    related: [
      { label: "Commercial EV Charging", href: "/commercial-ev-charging/" },
      { label: "EV Fleet Charging", href: "/ev-fleet-charging/" },
      { label: "Tesla Wall Connector Installation", href: "/tesla-wall-connector-installation/" },
      { label: "Tesla Universal Wall Connector Installation", href: "/tesla-universal-wall-connector-installation/" },
    ],
  },
}
