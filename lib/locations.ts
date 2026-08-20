export type LocationPageData = {
  slug: string
  name: string
  eyebrow: string
  title: string
  description: string
  marketCount?: number
  utilities: string[]
  focusHeading: string
  focusBody: string[]
  focusPoints: string[]
  faqs: { question: string; answer: string }[]
}

export const locationPages: Record<string, LocationPageData> = {
  california: {
    slug: "california",
    name: "California",
    eyebrow: "California electrical services",
    title: "Tesla-certified electricians across California.",
    description: "EV charging, Powerwall, backup power, and licensed electrical work with local permitting and utility coordination throughout California.",
    marketCount: 826,
    utilities: ["PG&E", "Southern California Edison", "San Diego Gas & Electric"],
    focusHeading: "Electrification that accounts for California's energy rules and grid realities.",
    focusBody: ["A local assessment starts with your panel capacity, parking or equipment location, and the utility requirements that affect the project.", "For solar and battery projects, we coordinate the practical details behind NEM 3.0, interconnection, permits, and backup priorities before installation begins."],
    focusPoints: ["EV charging and load calculations", "Powerwall and solar-plus-storage planning", "Title 24-aware electrical work", "Permits and utility coordination"],
    faqs: [
      { question: "Do you serve all of California?", answer: "We coordinate licensed local electricians across more than 826 California markets. Share your address to confirm availability and scheduling." },
      { question: "Is a battery useful under NEM 3.0?", answer: "A battery can help store solar energy for later use and provide backup capability. A site assessment confirms the best setup for your energy goals and utility plan." },
      { question: "Who handles permits and utility coordination?", answer: "We handle project permitting, inspections, and the applicable utility coordination as part of the installation scope." },
    ],
  },
  florida: {
    slug: "florida",
    name: "Florida",
    eyebrow: "Florida electrical services",
    title: "Storm-ready electrical, EV charging, and backup power across Florida.",
    description: "Tesla-certified EV charging, Powerwall, surge protection, and licensed electrical work coordinated for Florida homes and businesses.",
    marketCount: 605,
    utilities: ["Florida Power & Light", "Duke Energy Florida", "Tampa Electric"],
    focusHeading: "Backup power and electrical protection built for Florida conditions.",
    focusBody: ["Storm outages, heat, and coastal conditions make equipment protection and backup planning practical priorities. We assess the panel, critical loads, and equipment location before recommending a solution.", "From a Level 2 charger to a Powerwall-backed home, each project includes the load calculation, code-required protection, permits, and inspection coordination it needs."],
    focusPoints: ["Powerwall and generator-ready planning", "Whole-home surge protection", "EV charging and dedicated circuits", "Panel safety assessments"],
    faqs: [
      { question: "Why is battery backup popular in Florida?", answer: "Battery backup can keep selected circuits running during outages. The right design depends on your critical loads, panel capacity, and outage priorities." },
      { question: "Do you serve all of Florida?", answer: "We coordinate licensed local electricians across more than 605 Florida markets, including service from our Titusville-area office." },
      { question: "Can you help with urgent storm damage?", answer: "Yes. Dangerous electrical symptoms, storm damage, and home-side outages can be routed through our 24/7 emergency service line." },
    ],
  },
  georgia: {
    slug: "georgia",
    name: "Georgia",
    eyebrow: "Georgia electrical services",
    title: "EV charging, backup power, and electrical work across Georgia.",
    description: "Tesla-certified EV charging, home-battery backup, and licensed electrical services for homes and businesses throughout Georgia.",
    marketCount: 253,
    utilities: ["Georgia Power", "EMC cooperatives", "Municipal utilities"],
    focusHeading: "Electrical capacity and backup planning for a fast-growing Georgia market.",
    focusBody: ["Atlanta and other Georgia markets continue to add EVs, heat pumps, and all-electric appliances to homes built for different loads. A load calculation shows what the existing service can safely support.", "We pair local utility and permitting knowledge with a complete installation process for chargers, batteries, panels, and electrical upgrades."],
    focusPoints: ["EV charger circuits and load management", "Battery backup for storm resilience", "Panel upgrades and safety work", "Address-specific incentive review"],
    faqs: [
      { question: "What incentives are available in Georgia?", answer: "Programs vary by address, utility, and equipment. We review applicable state and utility opportunities during the project assessment." },
      { question: "Do you cover all of Georgia?", answer: "We coordinate licensed local electricians across more than 253 Georgia markets. Submit your address to confirm local availability." },
      { question: "Do you handle permits?", answer: "Yes. We manage required permits and inspections as part of the project scope." },
    ],
  },
  illinois: {
    slug: "illinois",
    name: "Illinois",
    eyebrow: "Illinois electrical services",
    title: "Tesla-certified electrical and energy services across Illinois.",
    description: "EV charging, Powerwall, electrical upgrades, and backup planning from licensed local electricians across Illinois.",
    marketCount: 456,
    utilities: ["ComEd", "Ameren Illinois", "Municipal utilities"],
    focusHeading: "Electrical systems ready for Illinois winters and year-round demand.",
    focusBody: ["Cold weather, electric heating, and charging loads make circuit design and panel capacity worth reviewing before new equipment is added. We assess the actual electrical system before prescribing an upgrade.", "The project plan accounts for local permits, utility programs, practical equipment placement, and a clean inspection path."],
    focusPoints: ["EV charging for cold-weather use", "Panel capacity and dedicated circuits", "Powerwall and backup planning", "ComEd and Illinois incentive coordination"],
    faqs: [
      { question: "Do you handle Illinois incentives?", answer: "We help identify applicable utility and state programs, including relevant charging and clean-energy opportunities, based on your address and project." },
      { question: "Do you serve all of Illinois?", answer: "We coordinate licensed local electricians across more than 456 Illinois markets." },
      { question: "How much does EV charger installation cost?", answer: "Typical Level 2 installations often range from $400 to $1,500. Panel condition, routing, distance, and permit requirements determine the final quote." },
    ],
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    eyebrow: "New York electrical services",
    title: "Tesla-certified electricians for New York homes and businesses.",
    description: "EV charging, Powerwall, home-battery backup, and licensed electrical work coordinated across New York with local permitting and utility knowledge.",
    marketCount: 679,
    utilities: ["Con Edison", "National Grid", "NYSEG"],
    focusHeading: "Energy upgrades planned for New York incentives, winters, and local electrical requirements.",
    focusBody: ["New York projects often combine aging electrical infrastructure, winter performance needs, and a detailed incentive landscape. We start with a panel and site review to build the right sequence.", "Our electricians coordinate permits, inspection, system commissioning, and the project documentation that supports utility or storage-incentive applications."],
    focusPoints: ["NYSERDA-aligned storage planning", "EV charging and utility rewards", "Panel upgrades and rewiring assessments", "Winter backup readiness"],
    faqs: [
      { question: "What storage incentives are available in New York?", answer: "New York storage and utility opportunities vary by program and location. We identify relevant options during your assessment." },
      { question: "Do you cover all of New York?", answer: "We coordinate licensed local electricians across more than 679 New York markets, including the metro area and upstate communities." },
      { question: "Can you prepare a home for winter outages?", answer: "Yes. We can assess panel capacity, critical loads, battery or generator options, and the electrical work needed for a practical backup plan." },
    ],
  },
  "north-carolina": {
    slug: "north-carolina",
    name: "North Carolina",
    eyebrow: "North Carolina electrical services",
    title: "EV charging, energy storage, and electrical work across North Carolina.",
    description: "Tesla-certified EV charging, home-battery backup, and licensed electrical services for North Carolina homes and businesses.",
    marketCount: 273,
    utilities: ["Duke Energy", "Dominion Energy", "Municipal utilities"],
    focusHeading: "A practical electrical plan for coastal resilience and growing home loads.",
    focusBody: ["From the coast to Charlotte and the Research Triangle, homeowners are adding EVs, batteries, and modern HVAC to services that may need a careful capacity review first.", "We handle the assessment, electrical scope, local permits, and inspection coordination so backup and charging equipment can perform as designed."],
    focusPoints: ["Storm-ready backup power", "EV charger and Charger Prep planning", "Panel health and recalled-equipment review", "Coastal and inland service coordination"],
    faqs: [
      { question: "Why is backup power popular on the North Carolina coast?", answer: "Battery and generator systems can keep selected loads available during storm-related outages. The best approach depends on the home and the circuits that matter most." },
      { question: "Do you serve all of North Carolina?", answer: "We coordinate licensed local electricians across more than 273 North Carolina markets." },
      { question: "Can you check an older electrical panel?", answer: "Yes. We inspect capacity, condition, and known safety concerns before recommending new loads or equipment." },
    ],
  },
  pennsylvania: {
    slug: "pennsylvania",
    name: "Pennsylvania",
    eyebrow: "Pennsylvania electrical services",
    title: "Licensed electrical and Tesla energy services across Pennsylvania.",
    description: "Tesla-certified EV charging, home batteries, panel upgrades, and licensed electrical work for Pennsylvania's older homes and growing energy needs.",
    marketCount: 1007,
    utilities: ["PECO", "PPL Electric", "Duquesne Light"],
    focusHeading: "Modern electrical capacity for Pennsylvania's diverse and often older housing stock.",
    focusBody: ["Historic homes, rowhomes, and older wiring require a real assessment before adding an EV charger, heat pump, or battery system. A load calculation distinguishes a needed upgrade from a manageable circuit plan.", "We coordinate the electrical work, permits, inspections, and local utility considerations needed to move from assessment to a safe completed installation."],
    focusPoints: ["Older-home wiring and panel assessments", "EV charging and heat-pump capacity", "Winter backup planning", "Utility and rebate review"],
    faqs: [
      { question: "Do older Pennsylvania homes always need a panel upgrade for an EV?", answer: "No. A load calculation determines whether the existing service can safely support the charger or whether an upgrade is needed." },
      { question: "Do you cover all of Pennsylvania?", answer: "We coordinate licensed local electricians across more than 1,007 Pennsylvania markets." },
      { question: "Who handles permits?", answer: "We manage required permits, inspections, and project documentation." },
    ],
  },
  texas: {
    slug: "texas",
    name: "Texas",
    eyebrow: "Texas electrical services",
    title: "EV charging, backup power, and electrical services across Texas.",
    description: "Tesla-certified EV charging, Powerwall and battery backup, panel upgrades, and licensed electrical work for Texas homes and businesses.",
    marketCount: 617,
    utilities: ["Oncor", "CenterPoint Energy", "Austin Energy", "CPS Energy"],
    focusHeading: "Electrical resilience and capacity planning for Texas weather and grid conditions.",
    focusBody: ["Extreme heat, severe storms, and changing household loads make backup power and panel capacity practical concerns for many Texas properties. We assess critical circuits and service capacity before designing the work.", "From a home charger to a complete battery-backed system, we coordinate the permits, utility requirements, installation, and inspection around your project."],
    focusPoints: ["Powerwall and battery backup planning", "EV charging and load management", "Panel upgrades for electrification", "Texas utility and local-permit coordination"],
    faqs: [
      { question: "Why is battery backup popular in Texas?", answer: "Battery backup can keep selected circuits running during an outage and can help households manage their energy use. A site assessment confirms the appropriate design." },
      { question: "Do you serve all of Texas?", answer: "We coordinate licensed local electricians across more than 617 Texas markets." },
      { question: "Can you help identify Texas incentives?", answer: "Yes. We review utility and locally available opportunities that may apply to your address, equipment, and project." },
    ],
  },
}

export const locationStates = Object.values(locationPages).map(({ slug, name, marketCount }) => ({
  slug,
  name,
  marketCount: marketCount ?? 0,
}))
