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
  | "relatedHeading"
>

const companyRelated = [
  { label: "About Us", href: "/about" },
  { label: "Why Charge Home Solutions", href: "/why-charge-home-solutions" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Find an Electrician", href: "/locations" },
]

const companyPage = (page: PageConfig): EvChargingPageData => ({
  ...page,
  relatedHeading: page.relatedHeading ?? "Explore Charge Home Solutions",
})

export const companyPages: Record<string, EvChargingPageData> = {
  about: companyPage({
    eyebrow: "About Charge Home Solutions",
    title: "Powering America's move to home electrification.",
    description: "Charge Home Solutions coordinates licensed, Tesla-certified electrical expertise for EV charging, energy storage, electrical upgrades, commercial work, and emergency service nationwide.",
    ctaHeading: "Talk with an electrician about your next energy project.",
    ctaBody: "Start with a free assessment and a clear plan for the equipment, electrical capacity, permits, and installation your property needs.",
    bullets: ["Licensed local electrician network", "Tesla-certified energy expertise", "Residential and commercial coverage"],
    stats: [{ label: "Coverage", value: "50 states" }, { label: "Network", value: "4,000+" }, { label: "Workmanship", value: "Up to 10 years" }],
    sections: [
      { heading: "Electrification only works when the electrical foundation is ready.", body: ["An EV charger, battery, heat pump, or commercial charging project depends on an electrical system that can safely support it. We bring the assessment, local electrical expertise, and project coordination together before work starts.", "The result is a clearer path from a project idea to a permitted, inspected installation that works as intended."], points: ["EV charging and load management", "Tesla Powerwall and energy storage", "Residential electrical upgrades", "Commercial and fleet electrical work"] },
      { heading: "A nationwide standard with local electrical delivery.", body: ["Local electricians understand the permit offices, utility practices, and building conditions that shape a project. Our network gives those teams a consistent process for scoping, documentation, commissioning, and support.", "Customers have one accountable partner while receiving work from a licensed local professional."], points: ["Licensed and insured electricians", "Clear written scopes and pricing", "Permits and inspections coordinated", "Workmanship guarantee support"] },
    ],
    faqs: [
      { question: "Is Charge Home Solutions a legitimate company?", answer: "Charge Home Solutions is a U.S. company that coordinates licensed electrical work nationwide and maintains Tesla Energy Certified expertise for applicable installations." },
      { question: "Where are you based?", answer: "The company operates from offices in Titusville, Florida; New York, New York; and Tarzana, California, with local service coordinated across all 50 states." },
      { question: "What work do you provide?", answer: "We support EV charging, energy storage, solar coordination, residential electrical work, commercial electrical services, and urgent electrical repairs." },
    ],
    related: companyRelated,
  }),
  contact: companyPage({
    eyebrow: "Contact Charge Home Solutions",
    title: "Get clear answers about an installation, quote, or electrical project.",
    description: "Reach our team for EV charging, batteries, electrical work, commercial projects, or urgent service. We coordinate licensed local electricians in all 50 states.",
    ctaHeading: "Tell us what you are planning and where the work is located.",
    ctaBody: "For pricing and a project recommendation, book a free consultation. For a dangerous electrical condition, call the 24/7 emergency line.",
    primaryActionLabel: "Email our team",
    primaryActionHref: "mailto:info@chargehomesolutions.com",
    bullets: ["Phone support available 24/7", "Free project consultations", "Local service coordination nationwide"],
    stats: [{ label: "Phone", value: "24/7" }, { label: "Email", value: "Monitored" }, { label: "Coverage", value: "50 states" }],
    sections: [
      { heading: "Reach the right team for your project.", body: ["Use a free consultation for a new installation, upgrade, or written quote. Call immediately for sparking, burning smells, a dangerous outage, or other urgent electrical hazards.", "We will collect the property and project details needed to match the scope with a qualified local electrician."], points: ["Free consultations for planned work", "24/7 emergency triage", "Commercial and portfolio coordination", "Address-specific service matching"] },
      { heading: "Company offices and nationwide service coordination.", body: ["Our offices support a nationwide network of licensed electricians. The job itself is performed by local professionals qualified for the required scope and jurisdiction."], points: ["Titusville, FL: 3880 S Washington Ave, Suite 234", "New York, NY: 41 E 11th St #209", "Tarzana, CA: 18960 Ventura Blvd, Unit 103", "Email: info@chargehomesolutions.com"] },
    ],
    faqs: [
      { question: "How do I get a price?", answer: "Book a free consultation. A licensed electrician reviews the scope, capacity, routing, and applicable requirements before providing a written recommendation." },
      { question: "Do you offer emergency service?", answer: "Yes. Call the 24/7 line for genuine electrical hazards, including sparking, burning smells, and home-side outages." },
      { question: "Do you serve my area?", answer: "We coordinate licensed local electricians in all 50 states. Share your address to confirm availability." },
    ],
    related: companyRelated,
  }),
  careers: companyPage({
    eyebrow: "Careers and electrician network",
    title: "Build your electrical business with a nationwide electrification network.",
    description: "Charge Home Solutions works with licensed, insured electricians who want qualified EV charging, energy storage, panel, and residential electrical opportunities without exclusivity.",
    ctaHeading: "Join the network built for the next generation of electrical work.",
    ctaBody: "Share your license, insurance, service area, and project experience to begin the vetting process.",
    primaryActionLabel: "Email network applications",
    primaryActionHref: "mailto:info@chargehomesolutions.com?subject=Electrician%20Network%20Application",
    bullets: ["Pre-qualified customer opportunities", "Flexible scheduling and no exclusivity", "EV, battery, and panel project support"],
    stats: [{ label: "Coverage", value: "50 states" }, { label: "Application", value: "Minutes" }, { label: "Verification", value: "Days" }],
    sections: [
      { heading: "Keep more time on the work that pays.", body: ["The network handles customer acquisition and project coordination so qualified electricians can focus on assessment, installation, service, and craftsmanship.", "Electricians retain flexibility while gaining access to growing work in EV charging, batteries, service upgrades, and home electrification."], points: ["Qualified project leads", "Flexible service-area preferences", "Premium product and process support", "Prompt project coordination"] },
      { heading: "Quality begins with a transparent vetting process.", body: ["We verify state licensing, insurance, relevant experience, and work quality before assigning projects. Tesla certification is valuable for applicable work, and training pathways are available for qualified electricians.", "The goal is a reliable local experience for customers and a professional standard for the network."], points: ["Current license and insurance", "Residential service and panel experience", "240V, EV charger, or battery experience", "Work review and background verification"] },
    ],
    faqs: [
      { question: "Who can apply?", answer: "We seek licensed, insured electricians with experience in residential service, panels, 240V circuits, EV chargers, batteries, or related electrical work." },
      { question: "Is Tesla certification required?", answer: "It is a strong advantage for Tesla work, but qualified electricians can access training pathways for applicable product lines." },
      { question: "Is there a fee or exclusivity requirement?", answer: "No. Joining the network does not require exclusivity or a membership fee." },
    ],
    related: [{ label: "Electrician Network", href: "/electrician-network" }, { label: "About Us", href: "/about" }, { label: "EV Charging Services", href: "/ev-charging" }, { label: "Commercial Electrician", href: "/commercial-electrician" }],
  }),
  investors: companyPage({
    eyebrow: "Investor relations",
    title: "A technology-enabled platform for the electrical work powering electrification.",
    description: "Charge Home Solutions coordinates local electrician capacity with project matching, quoting, scheduling, permitting, and quality processes across fast-growing electrical markets.",
    ctaHeading: "Connect with our team about investor relations.",
    ctaBody: "Qualified investor inquiries are welcome through our investor relations contact channel.",
    primaryActionLabel: "Email investor relations",
    primaryActionHref: "mailto:info@chargehomesolutions.com?subject=Investor%20Relations",
    bullets: ["Technology-enabled project coordination", "EV charging, energy storage, and electrical services", "Local delivery with nationwide reach"],
    stats: [{ label: "Founded", value: "2024" }, { label: "Coverage", value: "50 states" }, { label: "Network", value: "4,000+" }],
    sections: [
      { heading: "Electrical demand is changing faster than project delivery systems.", body: ["Homes and businesses are adding EVs, batteries, electrified HVAC, and more resilient electrical systems. Those projects need qualified local labor, accurate scoping, permits, scheduling, and quality oversight.", "Our platform coordinates that work across a national network while keeping delivery local."], points: ["Project matching and intake", "Quoting and customer communication", "Permit and schedule coordination", "Quality and completion tracking"] },
      { heading: "A focused platform at the intersection of growing markets.", body: ["The company operates across EV charging infrastructure, residential energy storage, and electrical services. The growth strategy is to expand qualified network capacity while maintaining the standards that make local delivery dependable.", "Forward-looking targets describe direction, not a promise of future performance."], points: ["Residential electrification", "Commercial and fleet charging", "Energy storage and backup", "Licensed electrical services"] },
    ],
    faqs: [
      { question: "Is Charge Home Solutions publicly traded?", answer: "No. Charge Home Solutions is a private company." },
      { question: "What does the platform do?", answer: "It coordinates customer matching, project scoping, quoting, scheduling, permits, and quality processes with local licensed electricians." },
      { question: "How can qualified investors get in touch?", answer: "Email info@chargehomesolutions.com with Investor Relations in the subject line." },
    ],
    related: companyRelated,
  }),
  financing: companyPage({
    eyebrow: "Financing",
    title: "Make your electrical upgrade fit the way you plan to pay.",
    description: "Flexible financing options can help qualifying customers spread the cost of EV chargers, batteries, panel upgrades, generators, and other electrical projects over time.",
    ctaHeading: "Review your project and financing options together.",
    ctaBody: "Start with a free estimate, then explore payment options alongside the rebates and utility programs that may apply to your address.",
    bullets: ["Options for qualifying electrical projects", "Fast, obligation-free pre-qualification", "Can be combined with applicable rebates"],
    stats: [{ label: "Check", value: "Soft credit" }, { label: "Prepay", value: "No penalty" }, { label: "Estimate", value: "Free" }],
    sections: [
      { heading: "Financing is part of planning a project, not an afterthought.", body: ["The assessment identifies the electrical work, equipment, permits, and installation steps your project requires. With a complete scope, you can compare an upfront payment with available financing options.", "Financing may apply to qualifying EV chargers, battery systems, panel upgrades, generators, and other electrical improvements."], points: ["EV chargers and dedicated circuits", "Battery backup and energy storage", "Panel and service upgrades", "Generator and electrical projects"] },
      { heading: "Pair payment options with the programs available at your address.", body: ["Utility rebates, state programs, and income-qualified energy rebates can reduce the project cost where available. We help identify relevant opportunities during the planning process.", "Pre-qualification is designed to be fast and obligation-free, so you can review options before deciding."], points: ["Address-specific incentive review", "Soft-credit pre-qualification", "Clear monthly-payment options", "No prepayment penalty"] },
    ],
    faqs: [
      { question: "What projects can be financed?", answer: "Qualifying EV chargers, Powerwall and battery systems, electrical panel upgrades, generators, and related electrical work may be eligible." },
      { question: "Does pre-qualification affect my credit?", answer: "Initial pre-qualification uses a soft credit check and is designed to be obligation-free." },
      { question: "Can financing be combined with rebates?", answer: "Yes, financing can be considered alongside applicable state, utility, and income-qualified programs." },
    ],
    related: [{ label: "Savings Finder", href: "/savings-finder" }, { label: "EV Charging Services", href: "/ev-charging" }, { label: "Energy Storage", href: "/energy-storage" }, { label: "Electrical Panel Upgrade", href: "/electrical-panel-upgrade" }],
  }),
  warranty: companyPage({
    eyebrow: "Workmanship guarantee",
    title: "Every installation is backed by a workmanship guarantee of up to 10 years.",
    description: "Charge Home Solutions stands behind the labor and installation work on qualifying projects, alongside the registered manufacturer warranties for the equipment itself.",
    ctaHeading: "Choose an installation backed by clear accountability.",
    ctaBody: "Get a written project scope, professional installation, and workmanship support that follows the completed work.",
    bullets: ["Up to 10 years of workmanship coverage", "Full manufacturer warranty registration", "One point of contact for support"],
    stats: [{ label: "Workmanship", value: "Up to 10 years" }, { label: "Equipment", value: "Manufacturer-backed" }, { label: "Claims", value: "One call" }],
    sections: [
      { heading: "Two layers of protection for one completed project.", body: ["Manufacturer warranties protect the equipment. Our workmanship guarantee covers the installation labor, wiring, connections, mounting, and commissioning according to the project scope.", "Coverage length is matched to the work performed, with major installations eligible for up to 10 years of workmanship protection."], points: ["Installation labor and workmanship", "Wiring and electrical connections", "Mounting and commissioning", "Registered equipment warranties"] },
      { heading: "The best warranty claim is the one disciplined work prevents.", body: ["Load calculations, product specifications, permits, inspections, torque requirements, and photo documentation reduce the defects that cause callbacks. Those steps are part of the installation process, not optional extras.", "If support is needed, one team helps coordinate the next step rather than sending customers between an installer and a manufacturer."], points: ["Clear installation documentation", "Permit and inspection support", "Single-point accountability", "Support that can follow a home sale"] },
    ],
    faqs: [
      { question: "What does the workmanship guarantee cover?", answer: "It covers qualifying installation labor and workmanship, including wiring, connections, mounting, and commissioning, for the applicable coverage period." },
      { question: "What about the equipment warranty?", answer: "Equipment has its own manufacturer warranty. We help register applicable warranties and provide the project documentation." },
      { question: "How do I request support?", answer: "Contact our team with your project details. We will help identify the appropriate next step for workmanship or manufacturer support." },
    ],
    related: companyRelated,
  }),
  reviews: companyPage({
    eyebrow: "Customer reviews",
    title: "What customers value after working with our electricians.",
    description: "Customers consistently look for clear communication, professional work, transparent pricing, clean installations, and a completed project that passes inspection without drama.",
    ctaHeading: "Work with an electrician who makes the process clear from the first visit.",
    ctaBody: "Book a free consultation to discuss your project, electrical capacity, timeline, and next steps before work begins.",
    bullets: ["Clear communication and scheduling", "Fixed written pricing before work starts", "Permits and inspections coordinated"],
    stats: [{ label: "Coverage", value: "50 states" }, { label: "Workmanship", value: "Up to 10 years" }, { label: "Support", value: "End to end" }],
    sections: [
      { heading: "The experience matters as much as the equipment.", body: ["Electrical projects touch a home's safety, daily routine, and budget. Customers want an electrician who arrives prepared, explains options clearly, protects the property, and leaves the work documented.", "Those expectations guide network quality standards across assessment, quoting, installation, inspection, and follow-up."], points: ["Punctual, professional service", "Clear scopes and fixed quotes", "Clean, code-compliant installation", "Permit and inspection coordination"] },
      { heading: "Feedback improves the way projects are delivered.", body: ["Customer feedback highlights where a process is working and where it needs attention. Positive feedback reinforces reliable practices, while critical feedback is used to address communication, scheduling, or execution gaps.", "The goal is not a curated story; it is a dependable process that earns trust on every project."], points: ["Network quality review", "Clear post-installation support", "Documented warranties", "Continuous process improvement"] },
    ],
    faqs: [
      { question: "What do customers commonly value?", answer: "Customers frequently value clear communication, punctuality, fixed pricing, clean work, and electrical projects that are ready for inspection." },
      { question: "Is the work guaranteed?", answer: "Qualifying work is backed by a workmanship guarantee of up to 10 years, alongside applicable manufacturer equipment warranties." },
      { question: "How do reviews affect the network?", answer: "Feedback is part of quality oversight and helps reinforce strong practices or identify areas for improvement." },
    ],
    related: companyRelated,
  }),
  "why-charge-home-solutions": companyPage({
    eyebrow: "Why Charge Home Solutions",
    title: "Certified electrical expertise for the systems your home depends on next.",
    description: "Charge Home Solutions combines local licensed electricians, Tesla-certified expertise, complete project coordination, and a focus on home electrification from assessment through inspection.",
    ctaHeading: "Choose a project process built around safety, clarity, and follow-through.",
    ctaBody: "Start with a free assessment that identifies capacity, equipment, permits, and the right path for your property.",
    bullets: ["Tesla-certified expertise where it matters", "Fixed written quotes and complete scopes", "Local service with nationwide support"],
    stats: [{ label: "Installations", value: "100,000+" }, { label: "Network", value: "4,000+" }, { label: "Coverage", value: "50 states" }],
    sections: [
      { heading: "Correct installation is more than meeting the minimum code.", body: ["EV chargers, battery systems, and modern electrical loads need the right load calculation, conductor sizing, equipment configuration, and commissioning. Tesla certification and product-specific training bring an additional standard to that work.", "We apply the same careful process to panels, circuits, backup power, and commercial electrical projects."], points: ["Load calculations before recommendations", "Tesla-certified installation and commissioning", "Permits and inspection coordination", "Code-compliant materials and protection"] },
      { heading: "The project should stay clear from first quote to final sign-off.", body: ["A written scope and fixed price make decisions easier. We identify the known dependencies upfront, schedule work around the property, and keep permits and inspection on track.", "That process gives customers a practical view of the work instead of a series of surprises after installation begins."], points: ["Free assessments", "Transparent fixed pricing", "Local permit and utility knowledge", "Up to 10-year workmanship guarantee"] },
    ],
    faqs: [
      { question: "What makes Charge Home Solutions different?", answer: "We focus on electrification projects that require real electrical expertise, combining licensed local delivery, Tesla-certified capability, and a complete project process." },
      { question: "Are electricians licensed and insured?", answer: "Projects are assigned to licensed, insured electricians qualified for the scope and local jurisdiction." },
      { question: "Do you provide free estimates?", answer: "Yes. A free assessment helps establish the electrical scope, capacity, options, and applicable incentive opportunities." },
    ],
    related: companyRelated,
  }),
  learn: companyPage({
    eyebrow: "Learn",
    title: "Practical guides for EV charging, home energy, and electrical decisions.",
    description: "Explore clear guidance for planning EV chargers, Powerwall and battery systems, solar, electrical upgrades, costs, incentives, and safe next steps.",
    ctaHeading: "Get a recommendation for your specific home or business.",
    ctaBody: "Guides can clarify the options. A free assessment confirms what your panel, property, and local requirements actually support.",
    bullets: ["EV charging and Tesla equipment guides", "Energy storage and solar planning", "Electrical costs, safety, and upgrade guidance"],
    stats: [{ label: "Topics", value: "Electrical + energy" }, { label: "Guidance", value: "Practical" }, { label: "Next step", value: "Free assessment" }],
    sections: [
      { heading: "Start with the questions that shape a safe project.", body: ["The best equipment choice depends on electrical capacity, daily use, installation location, utility requirements, and the goals you want the system to serve.", "Our learning resources explain those decisions in plain language so you can ask better questions before requesting a quote."], points: ["EV charger types and installation", "Panel capacity and circuit planning", "Battery backup and solar integration", "Costs, rebates, and financing"] },
      { heading: "Turn research into an address-specific plan.", body: ["Online guidance is a starting point, not a substitute for a site assessment. A licensed electrician can verify the panel, routing, equipment compatibility, and local permit requirements.", "That keeps the final recommendation grounded in the actual property rather than a generic checklist."], points: ["Review local incentives", "Confirm electrical capacity", "Compare equipment options", "Plan permits and inspection"] },
    ],
    faqs: [
      { question: "Where should I start if I am new to home electrification?", answer: "Start with the service you are considering, then review electrical capacity, equipment options, costs, incentives, and the installation process." },
      { question: "Can I get help finding rebates?", answer: "Yes. The Savings Finder and a project assessment can help identify applicable state and utility opportunities." },
      { question: "Do guides replace an electrician assessment?", answer: "No. A licensed electrician must evaluate the property before confirming a final scope or installation recommendation." },
    ],
    related: [{ label: "Savings Finder", href: "/savings-finder" }, { label: "Cost Guides", href: "/cost-guides" }, { label: "EV Charging", href: "/ev-charging" }, { label: "Energy Storage", href: "/energy-storage" }],
  }),
  "common-questions": companyPage({
    eyebrow: "Common questions",
    title: "Straight answers for planning an electrical, EV charging, or energy project.",
    description: "Answers to common questions about assessments, pricing, permits, EV chargers, Powerwall, electrical capacity, warranties, rebates, and emergency service.",
    ctaHeading: "Get an answer based on your actual property and project.",
    ctaBody: "A free consultation connects the general guidance to your panel, equipment goals, location, and project requirements.",
    bullets: ["Clear answers before work begins", "Licensed electrical assessment", "Permits, inspection, and warranty support"],
    stats: [{ label: "Estimate", value: "Free" }, { label: "Coverage", value: "Nationwide" }, { label: "Emergency", value: "24/7" }],
    sections: [
      { heading: "The first answer is usually a site-specific one.", body: ["Project cost, timing, equipment choice, and electrical capacity depend on the property. The assessment checks the panel, routing, loads, and local requirements before a final recommendation is made.", "That process prevents unnecessary upgrades and gives customers a written scope they can evaluate clearly."], points: ["Panel and load calculation", "Equipment compatibility", "Routing and installation conditions", "Permits and local inspection"] },
      { heading: "Support should continue after the installation is complete.", body: ["A finished project includes the applicable inspection, equipment commissioning, warranty registration, and documentation. Those details make future service and resale easier.", "For urgent safety issues, emergency triage is available around the clock."], points: ["Manufacturer warranty registration", "Workmanship guarantee support", "Completion documentation", "24/7 emergency service"] },
    ],
    faqs: [
      { question: "How much does an EV charger installation cost?", answer: "Many Level 2 installations range from $400 to $1,500. The final price depends on panel capacity, distance, routing, permits, and any needed electrical work." },
      { question: "Do you handle permits and inspections?", answer: "Yes. When required, we coordinate permits, inspection, and completion documentation as part of the project." },
      { question: "Can I finance my project?", answer: "Financing options may be available for qualifying projects, and can be considered alongside applicable rebates and incentive programs." },
    ],
    related: [{ label: "Learn", href: "/learn" }, { label: "Financing", href: "/financing" }, { label: "Warranty", href: "/warranty" }, { label: "Contact Us", href: "/contact" }],
  }),
}
