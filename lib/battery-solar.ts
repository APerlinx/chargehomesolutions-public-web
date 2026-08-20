import type { EvChargingPageData } from "@/lib/ev-charging"

export const batterySolarPages: Record<string, EvChargingPageData> = {
  "energy-storage": {
    eyebrow: "Battery & solar",
    title: "Energy storage and solar services for whole-home resilience.",
    description:
      "Tesla Powerwall, home batteries, solar-plus-storage, and whole-home backup power. Every job is performed by a licensed, Tesla-certified electrician with a free in-home estimate.",
    bullets: [
      "Powerwall systems sized from your actual utility usage data",
      "Solar arrays matched to your consumption and roof",
      "State and utility incentive capture handled for you",
    ],
    stats: [
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Design", value: "Data-driven sizing" },
      { label: "Financing", value: "Available" },
    ],
    sections: [
      {
        heading: "Battery, solar, or both, the right sequence depends on your home.",
        body: [
          "If outages are the concern, start with the battery: one Powerwall carries essentials overnight, two cover most homes, and three deliver whole-home backup including air conditioning. If bills are the concern, solar attacks the root, and pairing it with storage is usually what makes the economics work.",
          "The honest sequencing question is your utility's rates and your outage history, which is exactly what the free assessment models. Many households phase it, battery first for resilience, solar the following year, with the wiring pre-planned so phase two is an addition rather than a redesign.",
        ],
        points: [
          "Battery-first for resilience, solar-first for savings",
          "Sizing from your utility's real interval data, not square footage",
          "Phased installs planned so later additions don't require a redesign",
          "State and utility incentive stacking captured at every step",
        ],
      },
      {
        heading: "Sizing follows behavior, not guesswork.",
        body: [
          "Two identical floor plans can differ threefold in consumption, which is why we design from your utility's interval data rather than rules of thumb. The data shows your real daily kilowatt-hours, your seasonal peaks, and exactly what a given battery count would have carried through your last outage.",
          "Incentives shape timing too. State storage programs and utility enrollments run on budget cycles that open and exhaust, so checking your address's current stack before committing sometimes moves a project's start date and always sharpens its price.",
        ],
        points: [
          "Free assessment using your utility's interval data",
          "Clear battery-count recommendation backed by your outage history",
          "Incentive stack checked before you commit to a start date",
          "Full permitting, interconnection, and commissioning included",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a Tesla Powerwall cost installed?",
        answer:
          "A single unit typically runs $11,000 to $18,000 before incentives. State and utility programs are what lower the net now, and they vary by address.",
      },
      {
        question: "How many batteries do I need?",
        answer:
          "One for essentials, two for most homes, three for whole-home backup with A/C. Your utility interval data gives the exact answer, which we pull during the free assessment.",
      },
      {
        question: "Does a battery work without solar?",
        answer:
          "Yes. It charges from the grid, backs up outages, and arbitrages time-of-use rates on its own. Solar extends outage endurance from hours to days and adds daily savings, but it isn't a prerequisite.",
      },
    ],
    related: [
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
      { label: "Home Battery Installation", href: "/home-battery-installation/" },
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
    ],
  },
  "tesla-powerwall-installation": {
    eyebrow: "Tesla certified",
    title: "Tesla Powerwall installation from a certified installer.",
    description:
      "Powerwall stores energy, from solar or the grid, to power your home through outages and cut expensive peak-rate electricity. We handle design, the Backup Gateway, permitting, and Tesla app commissioning.",
    bullets: [
      "Whole-home or essentials-only backup, sized to your loads",
      "Automatic switchover the instant the grid goes down",
      "Every state and utility incentive your address qualifies for",
    ],
    stats: [
      { label: "Typical cost", value: "$11,000–$18,000" },
      { label: "Warranty", value: "10 yrs" },
      { label: "Guarantee", value: "Up to 10 yrs" },
    ],
    sections: [
      {
        heading: "The right number of Powerwalls depends on what you can't afford to lose.",
        body: [
          "One unit backs up essentials, fridge, lights, internet, a few outlets. Two cover most of a home including some larger loads. Three or more deliver whole-home backup with A/C and EV charging.",
          "A load assessment during the free consultation confirms the right count for your home rather than guessing from square footage.",
        ],
        points: [
          "1 unit: essential backup for fridge, lights, internet, outlets",
          "2 units: most of a home including larger loads",
          "3+ units: whole-home backup with A/C and EV charging",
          "Load assessment included to confirm the right fit",
        ],
      },
      {
        heading: "Every install includes the full system, not just the battery.",
        body: [
          "System design and load assessment, the Powerwall units and Tesla Backup Gateway, all electrical work, permitting, and inspection, and Tesla app setup and commissioning are all included in the project.",
          "As a Tesla-certified installer, we register your warranty directly and make sure the install meets Tesla's specifications for performance and safety.",
        ],
        points: [
          "System design and load assessment",
          "Powerwall unit(s) and Tesla Backup Gateway",
          "Electrical work, permitting, and inspection",
          "Tesla app setup and commissioning",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a Tesla Powerwall cost installed?",
        answer:
          "One Powerwall typically runs $11,000–$18,000 installed before incentives; multi-unit systems scale from there.",
      },
      {
        question: "Can I add a Powerwall to existing solar?",
        answer:
          "Yes, most existing solar systems can be retrofitted with a Powerwall. We confirm inverter compatibility first.",
      },
      {
        question: "How long does a Powerwall last?",
        answer:
          "The warranty runs 10 years with a guaranteed capacity floor, and real-world units routinely serve well beyond it with zero maintenance, no fluids, no service visits, no moving parts.",
      },
    ],
    related: [
      { label: "Powerwall 3 Installation", href: "/powerwall-3-installation/" },
      { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
      { label: "Home Battery Installation", href: "/home-battery-installation/" },
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
    ],
  },
  "powerwall-3-installation": {
    eyebrow: "Tesla certified",
    title: "Powerwall 3 installation with a built-in solar inverter.",
    description:
      "Powerwall 3 delivers 13.5kWh of storage and 11.5kW of output with an integrated solar inverter, installed by certified electricians for reliable whole-home backup.",
    bullets: [
      "13.5kWh storage, 11.5kW continuous output",
      "Built-in solar inverter simplifies new solar-plus-storage installs",
      "Certified installation and Tesla warranty registration",
    ],
    stats: [
      { label: "Typical cost", value: "$11,000–$18,000" },
      { label: "Storage", value: "13.5 kWh" },
      { label: "Output", value: "11.5 kW" },
    ],
    sections: [
      {
        heading: "The integrated inverter changes what a single Powerwall can do.",
        body: [
          "Unlike earlier Powerwall models, Powerwall 3 includes its own solar inverter, so a new solar-plus-storage system needs fewer components and less rooftop and wall space for the same performance.",
          "The 11.5kW output is enough to start and run most central air conditioning units, making whole-home backup realistic with fewer units than older battery generations required.",
        ],
        points: [
          "Simplified solar-plus-storage installs with fewer components",
          "11.5kW output supports central A/C and larger appliance loads",
          "Ideal for both new solar systems and standalone battery backup",
          "Certified installer registration and Tesla app commissioning",
        ],
      },
      {
        heading: "We size the system to your real electrical loads, not averages.",
        body: [
          "A free load assessment identifies which circuits matter most during an outage and how many Powerwall 3 units are needed to cover them reliably through summer and winter conditions alike.",
          "Every installation includes permitting, inspection, and a workmanship guarantee alongside Tesla's manufacturer warranty.",
        ],
        points: [
          "Free in-home load assessment",
          "Permit pulled and inspection scheduled",
          "All materials and code-compliant wiring included",
          "Workmanship guarantee of up to 10 years",
        ],
      },
    ],
    faqs: [
      {
        question: "What's different about Powerwall 3 versus Powerwall 2?",
        answer:
          "Powerwall 3 adds a built-in solar inverter and higher continuous power output, which simplifies new solar-plus-storage installs and improves whole-home backup performance.",
      },
      {
        question: "Can one Powerwall 3 run my whole home?",
        answer:
          "For many homes, one to two units can carry essential and moderate loads. Whole-home backup including A/C typically calls for two to three units, confirmed by a load assessment.",
      },
      {
        question: "Does Powerwall 3 qualify for tax credits?",
        answer:
          "The federal Residential Clean Energy Credit ended for property placed in service after December 31, 2025. State storage rebates and utility programs are what reduce the cost now.",
      },
    ],
    related: [
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
    ],
  },
  "multi-powerwall-installation": {
    eyebrow: "Whole-home backup",
    title: "Multi-Powerwall installation for true whole-home backup.",
    description:
      "Two, three, or more Powerwalls for backup that covers everything, A/C, EV charging, well pumps, and every circuit in between, sized from your actual usage data.",
    bullets: [
      "Whole-home backup including A/C, EV charging, and well pumps",
      "System sizing based on your real interval usage data",
      "Certified installation across all units with warranty registration",
    ],
    stats: [
      { label: "Typical cost", value: "$20,000–$45,000" },
      { label: "Coverage", value: "Whole-home" },
      { label: "Warranty", value: "10 yrs" },
    ],
    sections: [
      {
        heading: "Whole-home backup means every circuit stays live, not just the essentials.",
        body: [
          "A single Powerwall is enough for the fridge and a few outlets. Multiple units let air conditioning, EV charging, well pumps, and every other circuit in the house keep running through an extended outage.",
          "We calculate the exact number of units your home needs using your utility's interval data, including a look at what your last real outage would have required.",
        ],
        points: [
          "Full-home load coverage, not just essential circuits",
          "Sized using your utility's real interval consumption data",
          "Supports simultaneous A/C, EV charging, and well pump loads",
          "Expandable design if your loads grow later",
        ],
      },
      {
        heading: "Multiple units require careful electrical planning, not just more batteries.",
        body: [
          "Panel capacity, Backup Gateway configuration, and physical mounting layout all matter more as the system scales. We plan the full electrical design before any unit is installed.",
          "Every multi-unit system includes permitting, inspection, and the same workmanship guarantee as a single-unit install.",
        ],
        points: [
          "Full electrical and panel capacity planning",
          "Backup Gateway configuration for multiple units",
          "Clean, organized wall-mounted installation",
          "Permit, inspection, and workmanship guarantee included",
        ],
      },
    ],
    faqs: [
      {
        question: "How many Powerwalls do I need for whole-home backup?",
        answer:
          "Most whole-home setups with A/C and EV charging use three or more units. A load assessment using your actual usage data confirms the exact number for your home.",
      },
      {
        question: "Can Powerwalls of different generations be combined?",
        answer:
          "Compatibility depends on the specific models. We review your existing system, if any, and confirm the best configuration before recommending additional units.",
      },
      {
        question: "Do multiple Powerwalls require a panel upgrade?",
        answer:
          "Not always. We evaluate your panel's capacity as part of the design and only recommend an upgrade if it's genuinely needed to support the system.",
      },
    ],
    related: [
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Powerwall 3 Installation", href: "/powerwall-3-installation/" },
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
      { label: "Home Energy Monitoring", href: "/home-energy-monitoring/" },
    ],
  },
  "home-battery-installation": {
    eyebrow: "Home batteries",
    title: "Home battery installation for backup power and energy savings.",
    description:
      "We install Tesla Powerwall and other leading home batteries, sized to your essential loads, for reliable backup power and lower energy costs.",
    bullets: [
      "Support for Powerwall and other leading battery brands",
      "Sized to your essential loads with a free load assessment",
      "Time-of-use rate optimization in addition to outage backup",
    ],
    stats: [
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Sizing", value: "Load-based" },
      { label: "Financing", value: "Available" },
    ],
    sections: [
      {
        heading: "A home battery does more than sit ready for an outage.",
        body: [
          "Beyond backup power, a battery can shift your usage to cheaper off-peak electricity rates, reducing your bill even on days when the grid never goes down.",
          "We evaluate your utility's rate structure alongside your outage history to determine whether a single battery, multiple units, or a battery paired with solar makes the most financial sense.",
        ],
        points: [
          "Backup power for outages of any length",
          "Time-of-use rate arbitrage where your utility supports it",
          "Compatible with Tesla Powerwall and other major battery brands",
          "Pairing options with existing or new solar",
        ],
      },
      {
        heading: "The installation is engineered around your essential circuits.",
        body: [
          "A load assessment identifies which circuits, refrigeration, lighting, internet, medical equipment, matter most, then the battery and any transfer equipment are sized and wired to keep those circuits live automatically.",
          "Permitting, inspection, and a workmanship guarantee are included with every installation.",
        ],
        points: [
          "Free load assessment to identify essential circuits",
          "Automatic transfer during an outage",
          "Permit and inspection included",
          "Workmanship guarantee of up to 10 years",
        ],
      },
    ],
    faqs: [
      {
        question: "What brands of home batteries do you install?",
        answer:
          "We install Tesla Powerwall along with other leading battery brands, matched to your budget, backup goals, and any existing solar equipment.",
      },
      {
        question: "Can a battery lower my electric bill without solar?",
        answer:
          "Yes, if your utility offers time-of-use rates, a battery can charge during cheap periods and discharge during expensive ones, saving money independent of solar.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Most single-battery installs are completed in a day, with permitting and inspection adding to the overall project timeline.",
      },
    ],
    related: [
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Solar Battery Installation", href: "/solar-battery-installation/" },
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
      { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
    ],
  },
  "solar-battery-installation": {
    eyebrow: "Solar + storage",
    title: "Solar battery installation to use your own power day and night.",
    description:
      "Pairing solar with battery storage lets you use your own clean power day and night and stay powered through outages. State and utility programs, not the expired federal credit, are where the savings are now.",
    bullets: [
      "Store daytime solar production for evening and overnight use",
      "Automatic backup during grid outages",
      "Protection from declining net-metering rates",
    ],
    stats: [
      { label: "Typical add-on cost", value: "Varies by size" },
      { label: "Benefit", value: "Day + night power" },
      { label: "Guarantee", value: "Up to 10 yrs" },
    ],
    sections: [
      {
        heading: "Solar alone stops producing at sunset, storage doesn't.",
        body: [
          "Without a battery, excess solar production is exported to the grid, often at a much lower rate than you pay to buy power back at night. Storage lets you use that same energy yourself instead.",
          "As utilities continue reducing net-metering compensation, pairing solar with a battery has become the more reliable way to capture the full value of a rooftop system.",
        ],
        points: [
          "Store daytime solar production for evening use",
          "Reduce dependence on declining net-metering rates",
          "Automatic outage backup on top of daily savings",
          "Sized to your actual production and consumption profile",
        ],
      },
      {
        heading: "We design the pairing around your existing or planned solar array.",
        body: [
          "If you already have solar, we confirm inverter compatibility and recommend a battery that integrates cleanly. If you're installing both together, we size the array and battery as a single system from the start.",
          "Every install includes permitting, utility interconnection support, and identification of the state and utility incentives available at your address.",
        ],
        points: [
          "Compatibility check for existing solar systems",
          "Combined sizing for new solar-plus-battery installs",
          "Utility interconnection and permitting handled for you",
          "State and utility incentive identification",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need solar to add a battery?",
        answer:
          "No, but pairing them lets you store your own daytime production instead of exporting it at a lower rate, which is where much of the long-term savings comes from.",
      },
      {
        question: "Will a battery work with my existing solar inverter?",
        answer:
          "Most modern solar inverters are compatible with major battery brands. We confirm compatibility during the free assessment before recommending a specific unit.",
      },
      {
        question: "How does this protect me from net-metering cutbacks?",
        answer:
          "Instead of exporting excess solar power at a reduced utility rate, you store and use it yourself, which matters more every year as utilities continue lowering export compensation.",
      },
    ],
    related: [
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
      { label: "Solar Storage Retrofit", href: "/solar-storage-retrofit/" },
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Home Battery Installation", href: "/home-battery-installation/" },
    ],
  },
  "solar-panel-installation": {
    eyebrow: "Rooftop solar",
    title: "Solar panel installation designed around your usage and roof.",
    description:
      "Home solar panels turn your roof into a power plant, generating clean electricity, slashing your utility bills, and protecting you from rising rates. We handle design, permitting, and interconnection end to end.",
    bullets: [
      "System sized to your usage and roof, not a generic package",
      "Permitting and utility interconnection handled for you",
      "Optional Tesla Powerwall pairing for day-and-night use",
    ],
    stats: [
      { label: "Typical cost", value: "$15,000–$30,000" },
      { label: "Payback", value: "~6–10 yrs" },
      { label: "Guarantee", value: "Up to 10 yrs" },
    ],
    sections: [
      {
        heading: "The right solar system starts with your usage, not a standard package.",
        body: [
          "System size, roof type, pitch, shading, and orientation all affect production, and whether you add battery storage changes the design further. We model your specific roof rather than defaulting to a one-size system.",
          "Panel and inverter equipment tier, along with any electrical panel upgrade required to support the system, are the other major cost drivers we walk through during the free assessment.",
        ],
        points: [
          "System size (kW) modeled to offset your actual usage",
          "Roof type, pitch, shading, and orientation analysis",
          "Panel and inverter equipment tier selection",
          "Panel upgrade evaluation where needed",
        ],
      },
      {
        heading: "Pairing with a battery is where the real protection comes in.",
        body: [
          "Solar alone stops producing at night and during outages. Adding a Tesla Powerwall lets you use your own solar power after sunset, backs up your home automatically during outages, and protects you from declining net-metering rates.",
          "We check both the solar and battery portions of the project against current state and utility programs during the same assessment.",
        ],
        points: [
          "Use your own solar power after sunset",
          "Automatic backup during outages",
          "Protection from net-metering cutbacks",
          "Checked against current state and utility programs",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does home solar cost?",
        answer:
          "Most residential systems run $15,000–$30,000 before incentives, depending on size and roof. State and utility programs decide your net cost, and pairing with a battery adds backup.",
      },
      {
        question: "Should I add a battery to my solar?",
        answer:
          "A battery lets you store solar power and use it at night or during outages, increasingly valuable as utilities cut net-metering rates. We model whether solar-plus-storage is right for you.",
      },
      {
        question: "Do I need a south-facing roof?",
        answer:
          "South is ideal, but east- and west-facing roofs produce well too. We model your specific roof's production during a free assessment.",
      },
    ],
    related: [
      { label: "Solar Battery Installation", href: "/solar-battery-installation/" },
      { label: "Solar Storage Retrofit", href: "/solar-storage-retrofit/" },
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Off-Grid Systems", href: "/off-grid-systems/" },
    ],
  },
  "solar-storage-retrofit": {
    eyebrow: "Retrofit storage",
    title: "Solar + storage retrofit, add a battery to solar you already own.",
    description:
      "Already have solar? Add a battery and stop exporting cheap power while buying it back expensive. The battery can also earn state storage incentives on its own.",
    bullets: [
      "Battery retrofit for most existing solar inverters",
      "Stops low-value grid export in favor of self-use",
      "Standalone state storage incentives, separate from your original solar credit",
    ],
    stats: [
      { label: "Typical cost", value: "$10,000–$25,000" },
      { label: "Compatibility", value: "Most existing inverters" },
      { label: "Guarantee", value: "Up to 10 yrs" },
    ],
    sections: [
      {
        heading: "A solar system without storage leaves value on the table.",
        body: [
          "If your utility pays little for exported solar power but charges full price to buy it back at night, every kilowatt-hour you export instead of store is a missed savings opportunity. A battery retrofit closes that gap.",
          "We start by confirming your existing inverter's compatibility with today's leading battery brands, since not every older system integrates cleanly.",
        ],
        points: [
          "Inverter compatibility check before any commitment",
          "Stop low-value grid export in favor of self-consumption",
          "Add outage backup to a solar system that previously had none",
          "Battery-specific incentives separate from your original solar credit",
        ],
      },
      {
        heading: "The retrofit is planned around your existing system, not a rebuild.",
        body: [
          "In most cases, the existing panels, racking, and much of the electrical infrastructure stay exactly as they are. The project scope is focused on the battery, any required inverter or gateway hardware, and the wiring to tie it into your existing setup.",
          "Permitting, utility interconnection updates, and incentive paperwork are handled as part of the retrofit.",
        ],
        points: [
          "Minimal disruption to existing panels and racking",
          "Battery and gateway hardware sized to your system",
          "Updated utility interconnection paperwork",
          "Incentive filing for the battery addition",
        ],
      },
    ],
    faqs: [
      {
        question: "Can any solar system be retrofitted with a battery?",
        answer:
          "Most modern inverters support a battery retrofit, though compatibility varies by brand and age. We confirm this during the free assessment before recommending a specific battery.",
      },
      {
        question: "Are there separate incentives for a battery retrofit?",
        answer:
          "Yes, in many states the battery can qualify for its own storage incentives, separate from whatever credit applied to your original solar installation.",
      },
      {
        question: "Will the retrofit require rewiring my whole solar system?",
        answer:
          "Usually not. Most retrofits add the battery and any required gateway hardware to the existing system without touching the panels or racking.",
      },
    ],
    related: [
      { label: "Solar Battery Installation", href: "/solar-battery-installation/" },
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Home Energy Monitoring", href: "/home-energy-monitoring/" },
    ],
  },
  "off-grid-systems": {
    eyebrow: "Off-grid & remote power",
    title: "Off-grid power systems engineered for the worst week, not the best month.",
    description:
      "True off-grid and grid-optional power, solar arrays sized for winter, serious battery banks, and generator backup for the dark weeks. Engineered systems, not kits.",
    bullets: [
      "Solar arrays sized to worst-month production, not annual average",
      "LiFePO4 battery banks sized for 2–3 days of autonomy",
      "Generator integration for the economical last stretch of demand",
    ],
    stats: [
      { label: "Cabin systems", value: "$15,000–$25,000" },
      { label: "Full-home systems", value: "$40,000–$80,000+" },
      { label: "Autonomy target", value: "2–3 days" },
    ],
    sections: [
      {
        heading: "Off-grid design starts with a number most people have never calculated.",
        body: [
          "The daily kilowatt-hours you're committing to live on drives everything else: array size against December sun, battery bank against cloudy stretches, generator runtime against the residual demand. Honest systems begin with honest load budgets.",
          "We build the whole stack, solar arrays mounted and angled for winter production, LiFePO4 battery banks sized for real autonomy, inverter and charger systems with generator integration, and the load-side discipline that keeps the numbers rational.",
        ],
        points: [
          "Load budget calculated for every circuit, every season, in kWh/day",
          "Solar sized to worst-month production, not annual average",
          "Battery sized for 2–3 days autonomy at realistic depth of discharge",
          "Generator sized for the residual, the economical last 5%",
        ],
      },
      {
        heading: "Not every home needs to be fully off-grid to get the same peace of mind.",
        body: [
          "Grid-optional design, solar plus a substantial battery plus islanding capability, keeps utility convenience while still surviving indefinite outages. It's the right call for most homes; true off-grid is reserved for properties the grid doesn't reach at all.",
          "Monitoring is built into every system so you see developing problems a week before they become an emergency, not after the pipes freeze.",
        ],
        points: [
          "Grid-optional design for most homes with utility access",
          "True off-grid design for remote and unserved properties",
          "Monitoring that surfaces problems early",
          "Generator sizing that keeps the battery bank economical",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a real off-grid system cost?",
        answer:
          "Modest cabins start around $15,000–$25,000; full-home off-grid with winter-capable arrays and generator backup typically runs $40,000–$80,000+. The load budget you commit to drives everything.",
      },
      {
        question: "Can my grid-connected home go 'off-grid capable' instead?",
        answer:
          "Yes, grid-optional (solar plus substantial battery plus islanding) keeps utility convenience while surviving indefinite outages. It's the right call for most homes; true off-grid is for where the grid isn't.",
      },
      {
        question: "How do off-grid homes handle a dark week?",
        answer:
          "Honestly, with a generator. Sizing batteries for the worst week of the year is uneconomic; a propane generator covering the residual 5% keeps the battery bank rational.",
      },
    ],
    related: [
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
      { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
      { label: "Solar Panel Installation", href: "/solar-panel-installation/" },
      { label: "Home Energy Monitoring", href: "/home-energy-monitoring/" },
    ],
  },
  "backup-power-systems": {
    eyebrow: "Whole & partial home backup",
    title: "Backup power systems built around the circuits you can't afford to lose.",
    description:
      "Whole-home and partial-home backup using batteries, transfer switches, and generators, designed around the circuits that matter most to your household.",
    bullets: [
      "Battery, generator, or combined backup strategies",
      "Automatic or manual transfer switch options",
      "Sized around the specific circuits you rely on most",
    ],
    stats: [
      { label: "Approach", value: "Battery + generator" },
      { label: "Guarantee", value: "Up to 10 yrs" },
      { label: "Financing", value: "Available" },
    ],
    sections: [
      {
        heading: "Not every circuit needs to survive an outage, but the important ones must.",
        body: [
          "Backup power planning starts with identifying which circuits are truly essential, refrigeration, medical equipment, well pumps, home office equipment, then designing a system that keeps exactly those circuits running without over-building the whole solution.",
          "For some households that means a battery, for others a generator, and for many a combination, batteries for the instant, silent response and a generator for extended outages.",
        ],
        points: [
          "Essential-circuit identification during a free assessment",
          "Battery backup for instant, silent switchover",
          "Generator backup for extended, multi-day outages",
          "Combined systems for the best of both approaches",
        ],
      },
      {
        heading: "The transfer switch is what makes backup power automatic and safe.",
        body: [
          "A properly installed transfer switch isolates your backup circuits from the grid during an outage, preventing dangerous backfeed and letting the system switch over automatically without you touching a breaker.",
          "We size and install the switch, generator or battery hookup, and any required panel work as one coordinated project, with permitting and inspection included.",
        ],
        points: [
          "Automatic or manual transfer switch installation",
          "Backfeed protection for utility crew safety",
          "Coordinated panel work where additional capacity is needed",
          "Permit and inspection included in every project",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I choose a battery or a generator for backup power?",
        answer:
          "Batteries respond instantly and silently but have finite capacity; generators run indefinitely but take a moment to start and require fuel. Many households combine both for the best coverage.",
      },
      {
        question: "Do I need a whole-house system, or can I back up just a few circuits?",
        answer:
          "Partial-home backup is common and often more cost-effective. We help you identify the circuits that matter most and size the system to match.",
      },
      {
        question: "Is a transfer switch required for generator backup?",
        answer:
          "Yes, a transfer switch is required to safely isolate your home's circuits from the grid during an outage and prevent dangerous backfeed to utility lines.",
      },
    ],
    related: [
      { label: "Tesla Powerwall Installation", href: "/tesla-powerwall-installation/" },
      { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
      { label: "Off-Grid Systems", href: "/off-grid-systems/" },
      { label: "Home Energy Monitoring", href: "/home-energy-monitoring/" },
    ],
  },
  "home-energy-monitoring": {
    eyebrow: "Circuit-level insight",
    title: "Home energy monitoring, see what every circuit costs in real time.",
    description:
      "Circuit-level energy monitoring lets you see what every appliance costs in real time, catch failing equipment early, and right-size future solar and battery plans.",
    bullets: [
      "Circuit-level visibility into real-time energy use",
      "Early detection of failing or inefficient equipment",
      "Better sizing data for future solar and battery projects",
    ],
    stats: [
      { label: "Typical cost", value: "$300–$2,000" },
      { label: "Visibility", value: "Circuit-level" },
      { label: "Install time", value: "Half day typical" },
    ],
    sections: [
      {
        heading: "You can't manage what you can't measure.",
        body: [
          "Most homeowners only see a single monthly number from their utility. Circuit-level monitoring breaks that down into what your HVAC, water heater, EV charger, and every other major circuit actually costs, in real time.",
          "That visibility often reveals surprises, an aging appliance drawing far more than it should, a phantom load running around the clock, or a circuit worth targeting first for efficiency upgrades.",
        ],
        points: [
          "Real-time, circuit-level usage data",
          "Early warning for failing or inefficient equipment",
          "Clear picture of your biggest cost drivers",
          "Data you can act on immediately, not just review monthly",
        ],
      },
      {
        heading: "Monitoring is also the foundation for smarter solar and battery sizing.",
        body: [
          "Rather than sizing a future solar array or battery bank off estimates, real interval data from a monitoring system shows your actual consumption patterns, so any future project is sized to reality instead of assumptions.",
          "Installation is straightforward for most panels and typically completed in a single visit, with the system connected to an app for ongoing visibility.",
        ],
        points: [
          "Real usage data for future solar and battery sizing",
          "App-based access to live and historical usage",
          "Straightforward installation for most panel types",
          "Pairs well with any future backup power project",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does home energy monitoring cost?",
        answer:
          "Installed systems typically run $300 to $2,000, depending on the number of circuits monitored and the panel's complexity.",
      },
      {
        question: "Can monitoring help me size a future battery or solar system?",
        answer:
          "Yes, real interval usage data is far more accurate than estimates, and we use exactly this data when designing solar and battery systems for other customers.",
      },
      {
        question: "Will monitoring work with my existing panel?",
        answer:
          "Most modern panels support circuit-level monitoring. We confirm compatibility and recommend the right sensor configuration during the assessment.",
      },
    ],
    related: [
      { label: "Backup Power Systems", href: "/backup-power-systems/" },
      { label: "Solar Storage Retrofit", href: "/solar-storage-retrofit/" },
      { label: "Multi-Powerwall Installation", href: "/multi-powerwall-installation/" },
      { label: "Off-Grid Systems", href: "/off-grid-systems/" },
    ],
  },
}
