

export const site = {
  name: "Charge Home Solutions",
  shortName: "CHS",
  tagline: "We book real customer appointments and send them straight to your phone.",
} as const

export const nav = [
  { label: "How It Works", href: "/for-electricians#how-it-works" },
  { label: "About Us", href: "/for-electricians#about" },
  { label: "Plans", href: "/for-electricians#plans" },
  { label: "Fees", href: "/for-electricians#fees" },
  { label: "FAQ", href: "/for-electricians#faq" },
] as const

export const hero = {
  eyebrow: "The appointment platform for electricians",
  titleLead: "Grow Your Business with",
  titleBrand: "Charge Home Solutions",
  body: "We don't sell leads. We book real customer appointments and send them straight to your phone by SMS — no app needed. From EV installs and Powerwall to panel upgrades, new construction and service calls, in all 50 states. Just show up, quote, and close.",
  primaryCta: { label: "Get Started Free", href: "/for-electricians#plans" },
  secondaryCta: { label: "See How It Works", href: "/for-electricians#how-it-works" },
} as const


export const partners = [
  { name: "Kia", file: "kia", ratio: 4.2254 },
  { name: "Lexus", file: "lexus", ratio: 5.8729 },
  { name: "Toyota", file: "toyota", ratio: 1.4706 },
  { name: "Lucid", file: "lucid", ratio: 17.6106 },
  { name: "BMW", file: "bmw", ratio: 1 },
  { name: "Polestar", file: "polestar", ratio: 0.9867 },
  { name: "Mercedes-Benz", file: "mercedes-benz", ratio: 1 },
  { name: "Subaru", file: "subaru", ratio: 1.7045 },
  { name: "Audi", file: "audi", ratio: 2.8846 },
  { name: "Chrysler", file: "chrysler", ratio: 6.25 },
  { name: "Ford", file: "ford", ratio: 2.6549 },
  { name: "Jeep", file: "jeep", ratio: 2.4793 },
  { name: "Porsche", file: "porsche", ratio: 0.78 },
  { name: "Maserati", file: "maserati", ratio: 0.7067 },
  { name: "Chevrolet", file: "chevrolet", ratio: 3.0612 },
  { name: "Rivian", file: "rivian", ratio: 5.011 },
  { name: "Volkswagen", file: "volkswagen", ratio: 1 },
  { name: "Lincoln", file: "lincoln", ratio: 3.8462 },
  { name: "Land Rover", file: "land-rover", ratio: 1.9076 },
  { name: "Nissan", file: "nissan", ratio: 1.1952 },
  { name: "Jaguar", file: "jaguar", ratio: 8.0791 },
  { name: "Tesla", file: "tesla", ratio: 1 },
  { name: "Ram", file: "ram", ratio: 0.9533 },
  { name: "Rolls-Royce", file: "rolls-royce", ratio: 0.76 },
  { name: "Fiat", file: "fiat", ratio: 1 },
] as const

export const liveStats = [
  { value: 944, suffix: "+", label: "Appointments this week", note: "and counting" },
  { value: 2585, suffix: "", label: "Active electricians", note: "and growing" },
  { value: 4.2, prefix: "$", suffix: "M", label: "Paid out this quarter", note: "direct to installers", decimals: 1 },
  { value: 50, suffix: "", label: "States covered", note: "nationwide coverage" },
] as const

export const sms = {
  eyebrow: "SMS Appointments",
  titleLines: ["Real Appointments.", "Straight to Your Phone."],
  body: "No app to download, no dashboard to check. When a customer books, you get an SMS with all the details. Reply YES, and you're confirmed.",
  cta: { label: "Start Getting Appointments", href: "/for-electricians#plans" },
  features: [
    {
      icon: "message",
      title: "Instant SMS Notification",
      body: "Get appointment details the moment a customer books.",
    },
    {
      icon: "check",
      title: "One-Tap Accept",
      body: "Reply YES to confirm. You'll receive full customer details.",
    },
    {
      icon: "clock",
      title: "2-Hour Acceptance Window",
      body: "You have 2 hours to accept before it goes to the next electrician.",
    },
  ],
  floaters: [
    { label: "Appointment Confirmed" },
    { label: "$1,500 payout" },
    { label: "5 miles away" },
  ],
} as const

export const whyUs = {
  eyebrow: "Why Choose Us",
  title: "We Don't Sell Leads",
  subtitle:
    "Other platforms sell leads and make you chase customers. Charge Home Solutions books the appointment and sends it by SMS.",
  competitor: "Angi / Thumbtack",
  rows: [
    "Real booked appointments",
    "No cold leads or chasing",
    "Free to join",
    "Pay only after you get paid",
    "Appointments sent by SMS",
    "No app required",
    "EV, Powerwall & electrical jobs",
    "Tesla training access",
  ],
} as const

export const projects = {
  eyebrow: "Available Jobs",
  title: "Installation Projects We Offer",
  items: [
    {
      title: "EV Charger Installations",
      body: "Residential & commercial Level 2",
      image: "/images/job-ev-charger.png",
      alt: "Wall-mounted home EV charging station on a modern house",
      icon: "zap",
    },
    {
      title: "Tesla Powerwall",
      body: "Battery storage installations",
      image: "/images/job-powerwall.png",
      alt: "Home battery storage units mounted on a garage wall",
      icon: "battery",
    },
    {
      title: "Panel Upgrades",
      body: "200A upgrades & subpanels",
      image: "/images/job-panel-upgrade.png",
      alt: "Open residential electrical panel with neatly dressed wiring",
      icon: "panel",
    },
    {
      title: "New Construction",
      body: "Complete electrical for new builds",
      image: "/images/job-new-construction.png",
      alt: "Electrical rough-in wiring inside new residential framing",
      icon: "wrench",
    },
  ],
} as const

export const certifications = {
  eyebrow: "Certifications",
  title: "Our Certified Partner Programs",
  subtitle: "Each certification unlocks new appointment types and higher-paying jobs.",
  items: [
    {
      icon: "home",
      title: "Tesla Powershare Certified",
      body: "Certified to install Tesla Powershare systems. Enable whole-home backup and energy sharing for Tesla vehicle owners.",
      featured: true,
    },
    {
      icon: "plug",
      title: "Tesla Wall Connector Certified",
      body: "Authorized to install Tesla Wall Connector home charging stations. High-volume residential EV charger category.",
    },
    {
      icon: "zap",
      title: "Tesla Powerwall Certified",
      body: "Authorized to install Tesla Powerwall battery systems. High-demand category with $2,000+ per project payouts.",
    },
    {
      icon: "shield",
      title: "SPAN Authorized",
      body: "Certified for SPAN smart panel installations. Growing demand for smart home electrical upgrades.",
    },
    {
      icon: "building",
      title: "Tesla Commercial Certified",
      body: "Certified for Tesla commercial charging installations. Access high-value commercial EV station projects.",
    },
    {
      icon: "badge",
      title: "EG4 Authorized",
      body: "Certified for EG4 inverter and battery installations. Expanding off-grid and backup power market access.",
    },
  ],
} as const

export const coverage = {
  eyebrow: "Coverage",
  title: "Active in All 50 States",
  subtitle: "We match jobs to electricians in every state. See where work is available now.",
} as const


export const coverageMarkers: Array<{ city: string; coords: [number, number]; size: number }> = [
  { city: "Los Angeles", coords: [-118.24, 34.05], size: 3 },
  { city: "San Francisco", coords: [-122.42, 37.77], size: 2 },
  { city: "Seattle", coords: [-122.33, 47.61], size: 2 },
  { city: "Portland", coords: [-122.68, 45.52], size: 1 },
  { city: "Phoenix", coords: [-112.07, 33.45], size: 3 },
  { city: "Las Vegas", coords: [-115.14, 36.17], size: 1 },
  { city: "Denver", coords: [-104.99, 39.74], size: 2 },
  { city: "Salt Lake City", coords: [-111.89, 40.76], size: 1 },
  { city: "Albuquerque", coords: [-106.65, 35.08], size: 1 },
  { city: "Dallas", coords: [-96.797, 32.777], size: 3 },
  { city: "Austin", coords: [-97.743, 30.267], size: 2 },
  { city: "Houston", coords: [-95.369, 29.76], size: 3 },
  { city: "San Antonio", coords: [-98.494, 29.424], size: 1 },
  { city: "Oklahoma City", coords: [-97.516, 35.467], size: 1 },
  { city: "Kansas City", coords: [-94.578, 39.099], size: 1 },
  { city: "Minneapolis", coords: [-93.265, 44.977], size: 2 },
  { city: "Chicago", coords: [-87.629, 41.878], size: 3 },
  { city: "Detroit", coords: [-83.045, 42.331], size: 2 },
  { city: "Indianapolis", coords: [-86.158, 39.768], size: 1 },
  { city: "Columbus", coords: [-82.999, 39.961], size: 1 },
  { city: "Nashville", coords: [-86.784, 36.162], size: 2 },
  { city: "St. Louis", coords: [-90.199, 38.627], size: 1 },
  { city: "Memphis", coords: [-90.049, 35.149], size: 1 },
  { city: "New Orleans", coords: [-90.071, 29.951], size: 1 },
  { city: "Atlanta", coords: [-84.388, 33.749], size: 3 },
  { city: "Charlotte", coords: [-80.843, 35.227], size: 2 },
  { city: "Raleigh", coords: [-78.638, 35.779], size: 1 },
  { city: "Tampa", coords: [-82.458, 27.951], size: 2 },
  { city: "Miami", coords: [-80.192, 25.762], size: 3 },
  { city: "Orlando", coords: [-81.379, 28.538], size: 1 },
  { city: "Jacksonville", coords: [-81.656, 30.332], size: 1 },
  { city: "Washington DC", coords: [-77.037, 38.907], size: 3 },
  { city: "Philadelphia", coords: [-75.165, 39.953], size: 2 },
  { city: "New York", coords: [-74.006, 40.713], size: 4 },
  { city: "Boston", coords: [-71.058, 42.36], size: 2 },
  { city: "Pittsburgh", coords: [-79.996, 40.441], size: 1 },
  { city: "Buffalo", coords: [-78.878, 42.886], size: 1 },
  { city: "Richmond", coords: [-77.436, 37.541], size: 1 },
  { city: "Boise", coords: [-116.2, 43.618], size: 1 },
  { city: "Billings", coords: [-108.5, 45.783], size: 1 },
  { city: "Sioux Falls", coords: [-96.7, 43.55], size: 1 },
  { city: "Omaha", coords: [-95.936, 41.257], size: 1 },
  { city: "Little Rock", coords: [-92.289, 34.746], size: 1 },
  { city: "Birmingham", coords: [-86.802, 33.521], size: 1 },
  { city: "Louisville", coords: [-85.759, 38.253], size: 1 },
  { city: "Milwaukee", coords: [-87.906, 43.039], size: 1 },
  { city: "Cheyenne", coords: [-104.82, 41.14], size: 1 },
  { city: "Reno", coords: [-119.814, 39.53], size: 1 },
  { city: "Portland ME", coords: [-70.255, 43.662], size: 1 },
  { city: "Charleston", coords: [-79.931, 32.777], size: 1 },

  { city: "Anchorage", coords: [-149.9, 61.218], size: 2 },
  { city: "Fairbanks", coords: [-147.716, 64.838], size: 1 },
  { city: "Juneau", coords: [-134.42, 58.302], size: 1 },
  { city: "Honolulu", coords: [-157.858, 21.307], size: 2 },
  { city: "Hilo", coords: [-155.089, 19.706], size: 1 },

  { city: "San Diego", coords: [-117.161, 32.716], size: 2 },
  { city: "Sacramento", coords: [-121.494, 38.582], size: 2 },
  { city: "San Jose", coords: [-121.887, 37.339], size: 1 },
  { city: "Fresno", coords: [-119.787, 36.738], size: 1 },
  { city: "Bakersfield", coords: [-119.019, 35.373], size: 1 },
  { city: "Spokane", coords: [-117.426, 47.659], size: 1 },
  { city: "Eugene", coords: [-123.087, 44.052], size: 1 },
  { city: "Tucson", coords: [-110.926, 32.222], size: 1 },
  { city: "Missoula", coords: [-113.994, 46.872], size: 1 },
  { city: "Idaho Falls", coords: [-112.034, 43.492], size: 1 },
  { city: "Casper", coords: [-106.313, 42.85], size: 1 },
  { city: "Grand Junction", coords: [-108.551, 39.064], size: 1 },
  { city: "Colorado Springs", coords: [-104.821, 38.834], size: 1 },
  { city: "Santa Fe", coords: [-105.937, 35.687], size: 1 },

  { city: "Fargo", coords: [-96.79, 46.877], size: 1 },
  { city: "Bismarck", coords: [-100.784, 46.808], size: 1 },
  { city: "Rapid City", coords: [-103.231, 44.081], size: 1 },
  { city: "Duluth", coords: [-92.1, 46.786], size: 1 },
  { city: "Green Bay", coords: [-88.016, 44.513], size: 1 },
  { city: "Madison", coords: [-89.401, 43.073], size: 1 },
  { city: "Des Moines", coords: [-93.61, 41.587], size: 1 },
  { city: "Lincoln", coords: [-96.676, 40.814], size: 1 },
  { city: "Wichita", coords: [-97.336, 37.687], size: 1 },
  { city: "Springfield MO", coords: [-93.298, 37.209], size: 1 },
  { city: "Fort Wayne", coords: [-85.139, 41.079], size: 1 },
  { city: "Cleveland", coords: [-81.694, 41.505], size: 1 },
  { city: "Cincinnati", coords: [-84.512, 39.103], size: 1 },
  { city: "Grand Rapids", coords: [-85.668, 42.963], size: 1 },

  { city: "Tulsa", coords: [-95.993, 36.154], size: 1 },
  { city: "El Paso", coords: [-106.485, 31.762], size: 1 },
  { city: "Lubbock", coords: [-101.855, 33.578], size: 1 },
  { city: "Corpus Christi", coords: [-97.396, 27.8], size: 1 },
  { city: "Shreveport", coords: [-93.75, 32.525], size: 1 },
  { city: "Baton Rouge", coords: [-91.187, 30.451], size: 1 },
  { city: "Jackson", coords: [-90.185, 32.299], size: 1 },
  { city: "Mobile", coords: [-88.043, 30.695], size: 1 },
  { city: "Montgomery", coords: [-86.3, 32.367], size: 1 },
  { city: "Huntsville", coords: [-86.586, 34.73], size: 1 },
  { city: "Knoxville", coords: [-83.921, 35.961], size: 1 },
  { city: "Chattanooga", coords: [-85.309, 35.046], size: 1 },
  { city: "Lexington", coords: [-84.504, 38.048], size: 1 },
  { city: "Fayetteville AR", coords: [-94.158, 36.063], size: 1 },
  { city: "Charleston WV", coords: [-81.633, 38.35], size: 1 },
  { city: "Savannah", coords: [-81.096, 32.081], size: 1 },
  { city: "Columbia SC", coords: [-81.035, 34.001], size: 1 },
  { city: "Greensboro", coords: [-79.792, 36.073], size: 1 },
  { city: "Asheville", coords: [-82.552, 35.595], size: 1 },
  { city: "Norfolk", coords: [-76.285, 36.851], size: 1 },
  { city: "Roanoke", coords: [-79.941, 37.271], size: 1 },
  { city: "Tallahassee", coords: [-84.281, 30.438], size: 1 },
  { city: "Pensacola", coords: [-87.217, 30.421], size: 1 },
  { city: "Fort Myers", coords: [-81.873, 26.64], size: 1 },

  { city: "Baltimore", coords: [-76.612, 39.29], size: 2 },
  { city: "Wilmington", coords: [-75.546, 39.739], size: 1 },
  { city: "Newark", coords: [-74.172, 40.736], size: 1 },
  { city: "Hartford", coords: [-72.685, 41.764], size: 1 },
  { city: "Providence", coords: [-71.413, 41.824], size: 1 },
  { city: "Albany", coords: [-73.757, 42.653], size: 1 },
  { city: "Syracuse", coords: [-76.148, 43.049], size: 1 },
  { city: "Burlington", coords: [-73.213, 44.476], size: 1 },
  { city: "Manchester", coords: [-71.454, 42.996], size: 1 },
  { city: "Scranton", coords: [-75.663, 41.409], size: 1 },
  { city: "Harrisburg", coords: [-76.884, 40.273], size: 1 },
]

export const plans = {
  eyebrow: "Membership Plans",
  title: "Choose Your Plan",
  subtitle: "Start free. Upgrade when you're ready for more jobs and higher priority.",
  notice: { text: "Limited to 3 electricians per service area.", linkLabel: "Check availability" },
  tiers: [
    {
      name: "Starter",
      plan: "BASIC",
      price: "$0.00",
      period: "/month",
      body: "Free account setup, service radius, basic appointment access.",
      features: [
        "Free account setup",
        "Set your service radius",
        "Basic appointment access",
        "Standard SMS delivery",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Professional",
      plan: "TRAINING",
      price: "$99.00",
      period: "/month",
      body: "First month free. Priority appointments, Tesla training access, more Tesla jobs.",
      features: [
        "Everything in Starter",
        "Priority appointments",
        "Tesla training access",
        "More Tesla & Powerwall jobs",
        "Higher-paying appointments",
      ],
      cta: "Start Your Free Month",
      featured: true,
      badge: "Most Popular",
    },
    {
      name: "Elite",
      plan: "FULL_ACCESS",
      price: "$199.00",
      period: "/month",
      body: "First access, max priority, full Tesla access, highest paying jobs.",
      features: [
        "Everything in Professional",
        "First access to all appointments",
        "Maximum priority ranking",
        "Full Tesla certification access",
        "Highest-paying jobs",
      ],
      cta: "Choose Elite",
      featured: false,
    },
  ],
} as const

export const fees = {
  eyebrow: "Transparent Pricing",
  title: "Simple, Flat Referral Fees",
  subtitle: "No hidden costs. You know the fee before you accept the job.",
  rows: [
    { type: "EV Charger Installation", fee: "$350" },
    { type: "Panel Upgrade", fee: "$400–$500" },
    { type: "Tesla Powerwall", fee: "$2,000" },
    { type: "Commercial EV Charging", fee: "$250/unit" },
    { type: "Solar & Battery Work", fee: "$3,000" },
  ],
  aside: {
    title: "How Appointments Work",
    body: "Every appointment is pre-booked and sent to you by SMS. You see all details before accepting. No surprises.",
    items: [
      "Appointment details sent by text",
      "Customer name, address & phone included",
      "Reply YES to accept",
      "Show up, quote, and close",
    ],
  },
} as const

export const caseStudy = {
  eyebrow: "Case Study",
  title: "Real Results, Real Electrician",
  subtitle: "See how one contractor grew with booked appointments.",
  before: {
    label: "Before CHS",
    jobs: "3",
    jobsLabel: "Jobs per month",
    income: "$4,200",
    incomeLabel: "Monthly income",
  },
  after: {
    label: "After 6 months",
    jobs: "12",
    jobsLabel: "Jobs per month",
    income: "$18,400",
    incomeLabel: "Monthly income",
    growth: "+338% income growth",
  },
  person: { initials: "MR", name: "Mike Rodriguez", role: "Master Electrician · Austin, TX" },
} as const

export const testimonials = {
  eyebrow: "Testimonials",
  title: "Trusted by Electricians Nationwide",
  items: [
    {
      quote:
        "Charge Home Solutions changed my business. I went from chasing leads to getting quality projects delivered to me.",
      initials: "MR",
      name: "Mike Rodriguez",
      role: "Master Electrician · Austin, TX",
      metric: "$47K earned in 6 months",
    },
    {
      quote: "The direct-pay option is a game changer. I don't have to worry about collections or chasing customers.",
      initials: "JC",
      name: "James Chen",
      role: "Licensed Electrician · Tampa, FL",
      metric: "$62K earned in 8 months",
    },
    {
      quote:
        "As an independent contractor, finding consistent, high-quality work was always the challenge. CHS solved that.",
      initials: "DW",
      name: "David Williams",
      role: "Electrical Contractor · Denver, CO",
      metric: "$38K earned in 4 months",
    },
  ],
  feedLabel: "Recent jobs sent to our network",
  feed: [
    { job: "EV Charger Installation", location: "Austin, TX", value: "$1,900", time: "2 hours ago" },
    { job: "Tesla Powerwall", location: "Tampa, FL", value: "$12,200", time: "3 hours ago" },
    { job: "Panel Upgrade", location: "Phoenix, AZ", value: "$6,300", time: "4 hours ago" },
    { job: "New Construction Electrical", location: "Denver, CO", value: "$8,800", time: "5 hours ago" },
    { job: "Commercial EV Station", location: "Atlanta, GA", value: "$25,200", time: "6 hours ago" },
  ],
} as const

export const about = {
  eyebrow: "About Us",
  title: "Who We Are",
  body: [
    "Charge Home Solutions is a nationwide electrical services company powered by a proprietary platform that connects licensed electricians with high-quality, pre-scheduled customer appointments across the United States.",
    "We operate a growing network of licensed electricians, delivering professional installations in EV charging, battery storage systems, panel upgrades, and modern residential electrical infrastructure.",
  ],
  cards: [
    {
      icon: "globe",
      title: "Nationwide Operations",
      body: "Our company invests hundreds of thousands of dollars each month in marketing and customer acquisition, generating a consistent and scalable flow of service requests across multiple markets.",
    },
    {
      icon: "monitor",
      title: "Technology-Driven Efficiency",
      body: "Electricians receive confirmed appointments directly, with full job details provided in advance. This eliminates the need for lead generation, follow-ups, or administrative overhead.",
    },
    {
      icon: "shield",
      title: "Selective Network Growth",
      body: "We limit onboarding to no more than three electricians per service area, allowing each electrician to benefit from a steady volume of work while minimizing local competition.",
    },
    {
      icon: "zap",
      title: "Industry Focus",
      body: "We specialize in the fastest-growing sectors of the electrical industry:",
      list: [
        "Electric vehicle (EV) charger installations",
        "Home battery systems, including Tesla Powerwall",
        "Electrical panel upgrades",
        "Smart home and energy infrastructure solutions",
      ],
    },
  ],
  vision: {
    title: "Our Vision",
    body: "To build the largest and most trusted electrician services network in the United States, while enabling electricians to grow sustainable, long-term businesses.",
  },
} as const

export const faq = {
  eyebrow: "FAQ",
  title: "Common Questions",
  subtitle: "Everything electricians ask before joining the network.",
  items: [
    {
      q: "Are these leads or real appointments?",
      a: "They are real, pre-booked appointments. We handle the marketing, speak with the customer, and schedule the job before it ever reaches you. You are never chasing a cold lead or bidding against other contractors.",
    },
    {
      q: "Do I need to download an app or check a dashboard?",
      a: "No. Every appointment arrives as an SMS with the full job details. Reply YES to accept and you'll receive the customer's name, address, and phone number. There is nothing to install.",
    },
    {
      q: "How long do I have to accept an appointment?",
      a: "You have a 2-hour acceptance window. If you don't reply within that time, the appointment is offered to the next electrician in your service area.",
    },
    {
      q: "What does it cost to join?",
      a: "The Starter plan is free, including account setup, your service radius, and basic appointment access. Professional and Elite plans add priority access, Tesla training, and higher-paying job categories.",
    },
    {
      q: "How do referral fees work?",
      a: "Referral fees are flat and published up front — for example $350 for an EV charger installation or $2,000 for a Tesla Powerwall. You always know the fee before you accept the job, and you pay only after you get paid.",
    },
    {
      q: "How many electricians work in my area?",
      a: "We cap onboarding at three electricians per service area. That keeps a steady volume of work flowing to each installer and minimizes local competition within the network.",
    },
    {
      q: "What types of jobs will I receive?",
      a: "EV charger installations, Tesla Powerwall and battery storage, electrical panel upgrades, commercial EV charging, solar and battery work, new construction electrical, and everyday service calls.",
    },
  ],
} as const

export const finalCta = {
  title: "Start getting real appointments",
  body: "Join a nationwide network of licensed electricians. Free to join, no app required, and you only pay after you get paid.",
  primary: { label: "Work With Us", href: "/for-electricians#plans" },
  secondary: { label: "See the fees", href: "/for-electricians#fees" },
} as const

export const footer = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/for-electricians#about" },
        { label: "How It Works", href: "/for-electricians#how-it-works" },
        { label: "Coverage", href: "/for-electricians#coverage" },
        { label: "Our Work", href: "/for-electricians#projects" },
      ],
    },
    {
      title: "Electricians",
      links: [
        { label: "Membership Plans", href: "/for-electricians#plans" },
        { label: "Referral Fees", href: "/for-electricians#fees" },
        { label: "Certifications", href: "/for-electricians#certifications" },
        { label: "FAQ", href: "/for-electricians#faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "EV Charger Installation", href: "/for-electricians#projects" },
        { label: "Tesla Powerwall", href: "/for-electricians#projects" },
        { label: "Panel Upgrades", href: "/for-electricians#projects" },
        { label: "New Construction", href: "/for-electricians#projects" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const
