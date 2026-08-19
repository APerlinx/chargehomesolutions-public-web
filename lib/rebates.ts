// AUTO-GENERATED from the legacy chargehomesolutions.com/rebates pages.
// Faithful migration of the company's own incentive listings; every program
// keeps its official source URL so users can verify. Refresh quarterly.
// Do not hand-edit — re-run the migration script and regenerate.

export type RebateCategory = "Federal" | "State" | "Utility"

export type RebateProgram = {
  category: RebateCategory
  name: string
  /** Headline dollar figure, verbatim from the source (e.g. "Up to $2,500"). */
  amount: string
  /** Who qualifies / where it applies. */
  eligibility: string
  /** Extra detail, when the source provided a second line. */
  detail: string | null
  /** Official program page for the user to verify eligibility. */
  officialUrl: string
}

export type StateRebates = {
  slug: string
  state: string
  programs: RebateProgram[]
}

/** When this snapshot was captured from the source pages. */
export const REBATES_VERIFIED = "August 2026"

export const rebateTotals = {
  states: 51,
  programs: 158,
} as const

export const rebates: StateRebates[] = [
  {
    "slug": "alabama",
    "state": "Alabama",
    "programs": [
      {
        "category": "Utility",
        "name": "Alabama Power EV Home Charger Rebate",
        "amount": "$500",
        "eligibility": "Alabama Power customers in a single-family home who own or lease an EV",
        "detail": "New Level 2 charger on a dedicated circuit, one per address, applied for within 90 days of purchase. Stacks with GridWise+ below.",
        "officialUrl": "https://www.alabamapower.com/residential/save-money-and-energy/electric-vehicles/ev-home-charger-rebate.html"
      },
      {
        "category": "Utility",
        "name": "Alabama Power EV GridWise+ Rewards",
        "amount": "Up to $100 a year",
        "eligibility": "Alabama Power customers with a qualifying EV or smart charger",
        "detail": "$50 to join plus $25 each season for letting Alabama Power time your charging. Can be combined with the $500 charger rebate.",
        "officialUrl": "https://www.alabamapower.com/residential/save-money-and-energy/demand-side-management-programs/ev-gridwise-charging-rewards.html"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "alaska",
    "state": "Alaska",
    "programs": [
      {
        "category": "Utility",
        "name": "Chugach Electric EV Charging Credit",
        "amount": "$200 per charger, up to two",
        "eligibility": "Chugach Electric members in the Anchorage area",
        "detail": "Paid as a bill credit after installation. A 240V receptacle with a mobile Level 2 connector also qualifies. Alaska's federal HEAR rebate has not launched.",
        "officialUrl": "https://www.chugachelectric.com/energy-solutions/electric-vehicles/residential-ev-charging-program"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "arizona",
    "state": "Arizona",
    "programs": [
      {
        "category": "Utility",
        "name": "TEP Residential EV Charger Rebate",
        "amount": "75% of the charger price, up to $300",
        "eligibility": "Tucson Electric Power residential customers on a time-of-use rate",
        "detail": "Networked Level 2 chargers only, applied for within 60 days of purchase, and you must stay on a time-of-use plan for two years. Funds are limited.",
        "officialUrl": "https://www.tep.com/electric-vehicles/"
      },
      {
        "category": "Utility",
        "name": "TEP Energy Storage Rewards",
        "amount": "$120 per kW each season",
        "eligibility": "TEP customers with a qualifying Tesla, SolarEdge or Enphase battery",
        "detail": "A performance payment for sharing stored energy, not an upfront rebate. Enrollment is open year-round.",
        "officialUrl": "https://www.tep.com/energy-storage-rewards/"
      },
      {
        "category": "Utility",
        "name": "UniSource Residential EV Charger Rebate",
        "amount": "75% of the charger price, up to $300",
        "eligibility": "UniSource Electric customers in Mohave and Santa Cruz counties",
        "detail": "Approved networked Level 2 models only, within 60 days of purchase, with two years on a time-of-use plan.",
        "officialUrl": "https://www.uesaz.com/electric-vehicles/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "arkansas",
    "state": "Arkansas",
    "programs": [
      {
        "category": "Utility",
        "name": "Entergy Arkansas eTech Charger Incentive",
        "amount": "$250 per port",
        "eligibility": "Entergy Arkansas customers installing an ENERGY STAR Level 2 charger",
        "detail": "Up to two chargers, applied for within 180 days of the invoice. Payment takes about 4 to 6 weeks. Arkansas has not launched its federal HEAR rebate.",
        "officialUrl": "https://entergyetech.com/electric-vehicles"
      },
      {
        "category": "Utility",
        "name": "SWEPCO Level 2 Charger Rebate",
        "amount": "$250",
        "eligibility": "SWEPCO residential customers in Arkansas, owners or renters of a single-family home",
        "detail": "ENERGY STAR certified Level 2 chargers only. SWEPCO states funding is limited and rebates last only while it does, so confirm before buying.",
        "officialUrl": "https://www.swepco.com/clean-energy/electric-cars/charging-station"
      },
      {
        "category": "Utility",
        "name": "Ozarks Electric EV Rate Charger Rebate",
        "amount": "$250 with the EV rate",
        "eligibility": "Ozarks Electric Cooperative members in northwest Arkansas",
        "detail": "Tied to enrolling in the co-op's time-of-use EV rate. Note that rate bills your whole home at the off-peak price between 10pm and 5am, not just the car, so check it suits your usage.",
        "officialUrl": "https://www.ozarksecc.com/energy-solutions/electric-vehicles"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "california",
    "state": "California",
    "programs": [
      {
        "category": "Utility",
        "name": "PG&E Empower EV",
        "amount": "Up to $2,500, income-eligible households only",
        "eligibility": "Income-eligible PG&E customers covering the cost of home charging",
        "detail": "Income limits apply, most PG&E customers will not qualify. Confirm current availability on PG&E's page before planning around it.",
        "officialUrl": "https://www.pge.com/en/clean-energy/electric-vehicles/empower-ev-program.html"
      },
      {
        "category": "Utility",
        "name": "PG&E Residential Charging Solutions",
        "amount": "$700, income-eligible households only",
        "eligibility": "Income-eligible PG&E customers buying PG&E-approved charging equipment",
        "detail": "Applies to PG&E-approved equipment only, and income limits apply.",
        "officialUrl": "https://www.pge.com/en/clean-energy/electric-vehicles/getting-started-with-electric-vehicles/residential-charging-solutions-rebate.html"
      },
      {
        "category": "Utility",
        "name": "LADWP Residential EV Charger Rebate",
        "amount": "Up to $1,000, or $1,500 if income-qualified",
        "eligibility": "LADWP account holders on a residential rate, in the City of Los Angeles",
        "detail": "Covers purchase and installation, and adds $250 more for a dedicated EV meter. Book the LADWP service assessment BEFORE installing. The charger must be on their qualifying product list.",
        "officialUrl": "https://www.ladwp.com/residential-services/programs-and-rebates-residential/electric-vehicles/residential-ev-charger-rebate-program"
      },
      {
        "category": "Utility",
        "name": "SMUD Charge@Home",
        "amount": "Up to $600 across charger, circuit and load management",
        "eligibility": "SMUD residential customers in the Sacramento area",
        "detail": "Up to $100 for the charger, $200 for a circuit-sharing device and $500 for the circuit install. One combined rebate per address, first come first served.",
        "officialUrl": "https://www.smud.org/Going-Green/Electric-Vehicles/Charge-at-Home-application-page"
      },
      {
        "category": "Utility",
        "name": "SMUD Go Electric Bonus",
        "amount": "Up to $500 per circuit, up to $2,000",
        "eligibility": "SMUD customers who first complete a qualifying heat pump conversion",
        "detail": "Covers a panel replacement up to 200 amps plus EV, range and dryer circuits. Requires a paired heat pump project through an approved SMUD contractor.",
        "officialUrl": "https://www.smud.org/Rebates-and-Savings-Tips/Improve-Home-Efficiency/Go-Electric-Bonus-Package"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "colorado",
    "state": "Colorado",
    "programs": [
      {
        "category": "State",
        "name": "Colorado Home Energy Rebates (HEAR)",
        "amount": "Up to $4,000 for a panel, plus up to $2,500 for wiring",
        "eligibility": "Colorado households at or below 150% of county Area Median Income, outside the Front Range",
        "detail": "CLOSED on the Front Range: Denver, Boulder, Adams, Arapahoe, Broomfield, Douglas, El Paso, Jefferson, Larimer, Weld and neighbours were cut off in April 2026. The rest of the state is taking applications only until August 1, 2026, or sooner if funding is reserved.",
        "officialUrl": "https://energyoffice.colorado.gov/home-energy-rebates"
      },
      {
        "category": "Utility",
        "name": "Xcel Renewable Battery Connect",
        "amount": "$250 to $1,000 per kW up to $5,000, plus $100 a year for 5 years",
        "eligibility": "Xcel Energy Colorado customers with a solar-charged Tesla Powerwall or Enphase battery",
        "detail": "You let Xcel draw on the battery during peak events. The 2026 budget reopened in May and was still almost fully available in July, so this is unusually safe to count on.",
        "officialUrl": "https://co.my.xcelenergy.com/s/renewable/battery-connect"
      },
      {
        "category": "Utility",
        "name": "Xcel EV Charger and Wiring Rebate (Colorado)",
        "amount": "Up to $500, $800 in an impacted community, $2,300 if income-qualified",
        "eligibility": "Xcel Energy Colorado customers enrolled in a qualifying EV charging program",
        "detail": "A licensed electrician is required, do-it-yourself wiring does not qualify. Enrolling in Optimize Your Charge also earns a $50 annual credit.",
        "officialUrl": "https://co.my.xcelenergy.com/s/residential/ev-charging/incentives/charger-wiring-rebate"
      },
      {
        "category": "Utility",
        "name": "Holy Cross Energy Power+FLEX",
        "amount": "$500 per kW up to $12,500, plus $10.60 per kW monthly",
        "eligibility": "Holy Cross Energy members with an installed Tesla, Enphase, FranklinWH or Savant battery",
        "detail": "The largest battery incentive in this catalog. Battery must be under 5 years old with a completed interconnection agreement. Your enrolled capacity cannot be changed later.",
        "officialUrl": "https://www.holycross.com/member-programs/powerplus"
      },
      {
        "category": "Utility",
        "name": "Holy Cross Energy Smart Panel Rebate",
        "amount": "$1,000, or $2,000 if income-qualified",
        "eligibility": "Holy Cross Energy members installing a smart panel or whole-home energy management system",
        "detail": "Aimed at avoiding a full panel upgrade when adding big loads like an EV charger. Annual cap of $5,000 per member.",
        "officialUrl": "https://www.holycross.com/member-programs/energy-efficiency-and-rebates/residential-rebate-application"
      },
      {
        "category": "Utility",
        "name": "Holy Cross Energy Charge at Home",
        "amount": "Up to $549, effectively a free charger",
        "eligibility": "Holy Cross Energy members who own or lease an EV, up to two chargers",
        "detail": "Covers Emporia, ChargePoint and Wallbox units. You still pay installation, and you join the flexibility tariff that can briefly delay charging at peak.",
        "officialUrl": "https://www.holycross.com/member-programs/charge-at-home"
      },
      {
        "category": "Utility",
        "name": "Fort Collins Solar and Battery Storage Incentives",
        "amount": "$300 per kWh battery up to $6,000, plus solar, $7,500 combined",
        "eligibility": "Fort Collins Utilities residential customers",
        "detail": "Solar pays $300 per kW up to $1,500. Fort Collins also offers the Epic Loan of up to $50,000 to finance the work.",
        "officialUrl": "https://www.fortcollins.gov/Services/Utilities/Programs-and-Rebates/Energy-Programs/Residential-Solar-and-Battery-Storage"
      },
      {
        "category": "Utility",
        "name": "United Power EV Wiring and Panel Rebates",
        "amount": "Up to $1,000 for wiring, plus $500 for a panel upgrade",
        "eligibility": "United Power members installing Level 2 charging at a permanent residence",
        "detail": "The higher wiring tier requires United EV enrollment. Apply within 90 days of installation. Panel rebates run through June 30, 2027.",
        "officialUrl": "https://unitedpower.com/ev-rebates"
      },
      {
        "category": "Utility",
        "name": "Poudre Valley REA DrivEV Rewards",
        "amount": "50% up to $1,000, plus $50 to join and $84 a year",
        "eligibility": "PVREA members on a non-time-of-use rate with a compatible EV or charger",
        "detail": "Covers equipment and the electrical work. Reward charging runs midnight to 3pm Monday to Saturday and all day Sunday. Apply within 90 days.",
        "officialUrl": "https://pvrea.coop/energy-solutions/manage-your-energy/ev-charging-rewards/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "connecticut",
    "state": "Connecticut",
    "programs": [
      {
        "category": "State",
        "name": "Energy Storage Solutions",
        "amount": "$30 to $130 per kWh upfront, plus annual payments for 10 years",
        "eligibility": "Residential Eversource and United Illuminating customers adding battery storage",
        "detail": "New structure from April 1, 2026: less upfront, more paid over time. Grid-edge, underserved and low-income homes get the higher rates.",
        "officialUrl": "https://energystoragect.com/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "delaware",
    "state": "Delaware",
    "programs": [
      {
        "category": "State",
        "name": "Delaware Green Energy Program",
        "amount": "Grant toward installed solar cost, rate set by the published schedule",
        "eligibility": "Delaware homeowners who are Delmarva Power customers",
        "detail": "Requires an energy audit, an approved contractor, and signing SRECs over to the Delaware SEU. DNREC warns that high demand has delayed payments on approved applications.",
        "officialUrl": "https://dnrec.delaware.gov/climate-coastal-energy/energy-office/programs/gep/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "district-of-columbia",
    "state": "District of Columbia",
    "programs": [
      {
        "category": "State",
        "name": "DCSEU Heavy-Up Panel Upgrade",
        "amount": "Up to $2,000, plus $400 per added circuit",
        "eligibility": "DC properties of four units or fewer, replacing gas or oil heating with a heat pump",
        "detail": "Not standalone: the panel upgrade only qualifies alongside a gas-to-heat-pump conversion. Needs a DC permit, inspection scorecard and before-and-after photos. FY2026 applications must be postmarked by September 30, 2026.",
        "officialUrl": "https://rebates.dcseu.com"
      },
      {
        "category": "State",
        "name": "DC Alternative Fuel Infrastructure Tax Credit",
        "amount": "50% of cost, up to $1,000 per charger",
        "eligibility": "DC income-tax filers installing EV charging at a home",
        "detail": "Expires December 31, 2026, so the equipment has to be installed this calendar year. It is a tax credit, capped at your DC liability, with up to two years of carryforward.",
        "officialUrl": "https://doee.dc.gov/service/electric-vehicle-resources"
      },
      {
        "category": "State",
        "name": "DC Solar for All",
        "amount": "No cost to the homeowner",
        "eligibility": "DC homeowners at or below 80% of area median income",
        "detail": "Design and installation are fully covered, worth roughly $500 a year off your bill. Automatic eligibility if you receive SNAP, TANF, LIHEAP or SSI. Renters are routed to community solar instead.",
        "officialUrl": "https://solarforall.doee.dc.gov"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "florida",
    "state": "Florida",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "georgia",
    "state": "Georgia",
    "programs": [
      {
        "category": "Utility",
        "name": "Georgia Power EV Charger Rebate",
        "amount": "Up to $300 per Level 2 charger",
        "eligibility": "Georgia Power residential customers in a single-family home or townhome",
        "detail": "Covers installs completed Jan 1, 2026 through Dec 31, 2028. Submit within 6 months of installation, while funds last.",
        "officialUrl": "https://www.georgiapower.com/residential/solutions/electric-vehicles/ev-rebates.html"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "hawaii",
    "state": "Hawaii",
    "programs": [
      {
        "category": "Utility",
        "name": "Hawaiian Electric Bring Your Own Device Plus",
        "amount": "$400 per kW committed, $800 if income-qualified, no cap",
        "eligibility": "Hawaiian Electric customers adding a battery to rooftop solar",
        "detail": "Paid on the export capacity you commit, not battery size, so a 15 kWh battery committing 5 kW earns $2,000. Five-year commitment, and leaving early can trigger repayment. This replaced Battery Bonus, which closed to new participants in 2024.",
        "officialUrl": "https://www.hawaiianelectric.com/products-and-services/customer-incentive-programs/bring-your-own-device-plus"
      },
      {
        "category": "State",
        "name": "Hawaii Renewable Energy Technologies Tax Credit",
        "amount": "35% of installed cost, subject to a statutory per-system cap",
        "eligibility": "Hawaii taxpayers who own a qualifying solar system",
        "detail": "Confirm the dollar cap with the Hawaii Department of Taxation, it is set by statute and we could not read it on an official page. Act 24 changes the rules for systems placed in service after Dec 31, 2026, so 2026 installs use the current structure.",
        "officialUrl": "https://energy.hawaii.gov/retitc/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "idaho",
    "state": "Idaho",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "illinois",
    "state": "Illinois",
    "programs": [
      {
        "category": "State",
        "name": "Illinois Shines (Adjustable Block)",
        "amount": "$70 to $79 per REC, plus a $20 adder if you own the system",
        "eligibility": "Illinois homeowners installing up to 25 kW AC through an Approved Vendor",
        "detail": "Rates are final for the year starting June 1, 2026, paid over 15 years of expected output. Illinois added the $20 owner adder specifically because the federal credit ended, so it only applies if you own the system outright and claim no federal credit. Blocks close once full.",
        "officialUrl": "https://illinoisshines.com/"
      },
      {
        "category": "Utility",
        "name": "ComEd EV Charger and Installation Rebate",
        "amount": "Up to $750, or up to $2,500 if income-qualified",
        "eligibility": "ComEd customers installing a Level 2 charger through a ComEd-approved service provider",
        "detail": "Covers the charger, labor, conduit and panel work, but requires three years on a time-variant rate. ComEd now publishes only a 2027 application window, so current-year funds may already be exhausted. Confirm with an approved installer before counting on it.",
        "officialUrl": "https://www.comed.com/about-us/clean-energy/electric-vehicle-charger-and-installation-rebate"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "indiana",
    "state": "Indiana",
    "programs": [
      {
        "category": "State",
        "name": "Indiana Energy Saver (Home Appliance Rebate)",
        "amount": "Up to $4,000 for a panel, plus up to $2,500 for wiring",
        "eligibility": "Indiana households under 150% of Area Median Income, installed by a program contractor",
        "detail": "Applied as a point-of-sale discount by your contractor. Under 80% AMI covers 100% of project cost, 80 to 150% AMI covers 50%. $14,000 household maximum.",
        "officialUrl": "https://indianaenergysaver.com/programs/home-appliance-rebate/"
      },
      {
        "category": "Utility",
        "name": "AES Indiana EV Charging Rewards",
        "amount": "$150 to enroll, plus $100 on a marketplace charger and up to $100 a year",
        "eligibility": "AES Indiana residential customers on Rate RS with an eligible smart Level 2 charger",
        "detail": "Choose managed charging (up to $50 a year) or off-peak rewards ($0.05 per kWh overnight, up to $100 a year).",
        "officialUrl": "https://www.aesindiana.com/home-ev-charging-rewards"
      },
      {
        "category": "Utility",
        "name": "I&M Charge Sync Rewards",
        "amount": "$8 a month bill credit, up to $96 a year",
        "eligibility": "Indiana Michigan Power residential customers charging between 11pm and 6am",
        "detail": "A charging credit, not a hardware rebate. Charging on-peak more than twice in a month forfeits that month's credit.",
        "officialUrl": "https://www.indianamichiganpower.com/clean-energy/electric-cars/charge-at-home-indiana"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "iowa",
    "state": "Iowa",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "kansas",
    "state": "Kansas",
    "programs": [
      {
        "category": "Utility",
        "name": "Evergy Residential EV Charging Rebate",
        "amount": "Up to $500",
        "eligibility": "Evergy Kansas Central and Kansas Metro customers who own or lease an EV",
        "detail": "Covers a 240V outlet or hardwired charger fitted by a certified electrician. Half the amount depends on staying on an EV or time-of-use rate for a year. Open until funding runs out or March 14, 2027.",
        "officialUrl": "https://www.evergy.com/ways-to-save/discounts-link/ev-charging"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "kentucky",
    "state": "Kentucky",
    "programs": [
      {
        "category": "Utility",
        "name": "LG&E and KU Optimized EV Charging",
        "amount": "$25 to enroll, then $5 a month",
        "eligibility": "LG&E and KU customers only, with a qualifying EV or smart Level 2 charger",
        "detail": "A managed-charging payment, not a rebate on the charger. Kentucky Power and co-op customers are not eligible, and Kentucky's federal HEAR panel rebate has not launched yet.",
        "officialUrl": "https://www.lge-ku.com/energy-efficiency-programs"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "louisiana",
    "state": "Louisiana",
    "programs": [
      {
        "category": "Utility",
        "name": "Entergy Louisiana eTech Charger Incentive",
        "amount": "$250 per port",
        "eligibility": "Entergy Louisiana and Entergy New Orleans customers, ENERGY STAR Level 2 charger",
        "detail": "Up to two chargers, applied for within 180 days of the invoice, paid in 4 to 6 weeks. The Energy Smart Bring Your Own Charger bonus that used to add $100 in New Orleans is closed to new enrollment, so $250 is the full amount.",
        "officialUrl": "https://entergyetech.com/apply-online"
      },
      {
        "category": "Utility",
        "name": "Cleco Power Wise Charger Incentive",
        "amount": "$250 per Level 2 charger",
        "eligibility": "Cleco residential customers",
        "detail": "Apply within 180 days of installation with the invoice and a photo. Buying through the Cleco marketplace applies the $250 at checkout instead.",
        "officialUrl": "https://www.cleco.com/residential-commercial/energy-efficiency-renewables/residential-evs"
      },
      {
        "category": "Utility",
        "name": "SWEPCO Level 2 Charger Rebate",
        "amount": "Up to $250 per unit",
        "eligibility": "SWEPCO residential customers in Louisiana",
        "detail": "Louisiana and Texas territories only. SWEPCO's Arkansas program has no charger rebate. Louisiana has not launched its federal HEAR rebate.",
        "officialUrl": "https://swepcosolutions.com/rebates/louisiana/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "maine",
    "state": "Maine",
    "programs": [
      {
        "category": "State",
        "name": "Efficiency Maine Off-Peak Charger Incentives",
        "amount": "$400 per charger, $200 at checkout plus a $200 bonus",
        "eligibility": "Any Maine household, any income level, limit two per address",
        "detail": "Bought through Efficiency Maine's partner store with a discount code, not a mail-in rebate. The charger pauses automatically on weekdays from 5 to 9pm, with a daily override.",
        "officialUrl": "https://www.efficiencymaine.com/off-peak-charger-incentives/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "maryland",
    "state": "Maryland",
    "programs": [
      {
        "category": "State",
        "name": "Maryland Residential EVSE Rebate",
        "amount": "50% of cost, up to $700",
        "eligibility": "Maryland households that have already bought and installed a Level 2 charger",
        "detail": "Reimbursement, so you pay first and claim after. The FY27 pot opened July 1, 2026 with $1.5M and was barely touched in mid-July, so funding is not the near-term constraint.",
        "officialUrl": "https://energy.maryland.gov/transportation/pages/incentives_evserebate.aspx"
      },
      {
        "category": "Utility",
        "name": "EVsmart Smart Charge Management",
        "amount": "$120 a year in bill credits, up to $240 with the EV rate",
        "eligibility": "BGE, Pepco and Delmarva Power residential customers with an EV or Level 2 charger",
        "detail": "$10 a month on Level 2, $5 on Level 1. All three utilities run the same program, so use your own provider's page. Stacks with their EV time-of-use rate.",
        "officialUrl": "https://www.bge.com/smart-energy/innovation-technology/electric-vehicles/residential-evs/electric-vehicle-programs-incentives/smart-charge-management-program"
      },
      {
        "category": "Utility",
        "name": "SMECO EV Recharge",
        "amount": "$120 a year, paid as $10 a month",
        "eligibility": "SMECO member-customers with a Wi-Fi connected EV or Level 2 charger",
        "detail": "You choose either managed charging or the off-peak rate, not both.",
        "officialUrl": "https://greatergrid.com/enroll/programs/evs/smeco-ev-recharge"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "massachusetts",
    "state": "Massachusetts",
    "programs": [
      {
        "category": "State",
        "name": "ConnectedSolutions Battery Program",
        "amount": "$275 per kW each summer, about $1,375 a year on a 5 kW battery",
        "eligibility": "Eversource, National Grid and Cape Light Compact customers with a qualifying battery",
        "detail": "Paid for what your battery contributes during summer events, June 1 to Sept 30, up to 60 events. You enroll through your battery manufacturer, not Mass Save directly.",
        "officialUrl": "https://www.masssave.com/en/residential/rebates-offers-services/battery-storage-and-evs/batteries"
      },
      {
        "category": "State",
        "name": "Mass Save HEAT Loan",
        "amount": "0% financing up to $25,000",
        "eligibility": "Massachusetts Eversource, National Grid and Cape Light Compact customers",
        "detail": "Mass Save publishes no cash rebate for a panel upgrade. Interest-free financing is the route to that work here, which is worth real money but is not a rebate.",
        "officialUrl": "https://www.masssave.com/residential/rebates-offers-services"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "michigan",
    "state": "Michigan",
    "programs": [
      {
        "category": "Utility",
        "name": "Consumers Energy PowerMIDrive",
        "amount": "$500 on a Level 2 charger install, up to $1,000 if income-qualified",
        "eligibility": "Consumers Energy residential customers installing a qualified Level 2 charger at their primary home",
        "detail": "Requires enrolling in the Nighttime Savers rate. First come, first served.",
        "officialUrl": "https://www.consumersenergy.com/residential/savings-and-clean-energy/electric-vehicles/home-charger-rebates"
      },
      {
        "category": "Utility",
        "name": "Holland BPW Electrification Rebates",
        "amount": "$1,000 panel upgrade, $300 charger, $300 load management",
        "eligibility": "Holland Board of Public Works electric customers using a licensed electrician",
        "detail": "The panel rebate requires also adding a Level 2 charger or converting an appliance from gas to electric, plus one year on the EV time-of-use rate.",
        "officialUrl": "https://hollandbpw.com/en/electric-vehicles"
      },
      {
        "category": "Utility",
        "name": "Lansing BWL EV Rebates",
        "amount": "Up to $1,000 with a second meter, or up to $500 on off-peak savers",
        "eligibility": "Lansing Board of Water & Light electric customers installing a Level 2 charger",
        "detail": "The $500 option requires enrolling in the off-peak residential time-of-use rate. Chargers over 60 amps need BWL approval before installation.",
        "officialUrl": "https://www.lbwl.com/customers/save-money-energy/plug-electric-vehicles-pev"
      },
      {
        "category": "Utility",
        "name": "DTE Home EV Charger Rebate",
        "amount": "Rebate on charger and installation, income-qualified",
        "eligibility": "DTE residential customers under 200% of the federal poverty guidelines with an ENERGY STAR Level 2 charger",
        "detail": "DTE does not publish a fixed cap. Income is verified by tax transcript, and you must apply within six months of installation.",
        "officialUrl": "https://www.dteenergy.com/us/en/residential/service-request/pev/home-ev-charger-rebate.html"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "minnesota",
    "state": "Minnesota",
    "programs": [
      {
        "category": "Utility",
        "name": "Xcel Energy Electrical Panel Upgrade Rebate",
        "amount": "Full project cost, up to $1,500",
        "eligibility": "Xcel Energy Minnesota residential customers upgrading to a higher amperage",
        "detail": "Stacks with the EV, heat pump and water heater rebates. Replacing a broken panel at the same amperage does not qualify.",
        "officialUrl": "https://mn.my.xcelenergy.com/s/residential/home-rebates/panel-upgrade"
      },
      {
        "category": "Utility",
        "name": "Xcel Energy EV Charger and Wiring Rebate",
        "amount": "Up to $500, or up to $1,200 if income-qualified",
        "eligibility": "Xcel Energy Minnesota customers enrolled in a qualifying EV charging program",
        "detail": "Enroll in the charging program first, then apply for the rebate. Licensed electrician required, first come first served.",
        "officialUrl": "https://mn.my.xcelenergy.com/s/residential/ev-charging/incentives/charger-wiring-rebate"
      },
      {
        "category": "Utility",
        "name": "Minnesota Battery Storage Incentive (Xcel)",
        "amount": "$175 per kWh, $370 if income-qualified, up to $5,000",
        "eligibility": "Xcel Energy Minnesota customers adding a battery to a new or existing solar system",
        "detail": "Battery must be paired with solar, 50 kWh maximum. About 46% of the $3.48M budget remained at the last published update.",
        "officialUrl": "https://mn.my.xcelenergy.com/s/renewable/battery-storage-incentive-program"
      },
      {
        "category": "State",
        "name": "Minnesota Battery Energy Storage Incentive",
        "amount": "$250 per kWh, up to $7,000",
        "eligibility": "Minnesota customers outside Xcel Energy territory pairing a battery with solar",
        "detail": "The counterpart to Xcel's program for everyone else in the state. First come, first served while funds last.",
        "officialUrl": "https://mn.gov/commerce/energy/consumer/energy-programs/on-site-energy-storage-systems.jsp"
      },
      {
        "category": "Utility",
        "name": "Minnesota Power EV Rebates",
        "amount": "$500 for a Level 2 charger, plus $500 for a second service",
        "eligibility": "Minnesota Power residential customers on a time-based or interruptible rate",
        "detail": "The second-service rebate covers a separately metered EV supply, which usually means panel work. Off-peak power runs about 2.4 cents per kWh.",
        "officialUrl": "https://www.mnpower.com/ProgramsRebates/ElectricVehicles"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "mississippi",
    "state": "Mississippi",
    "programs": [
      {
        "category": "Utility",
        "name": "Mississippi Power EV Charger Rebate",
        "amount": "$250 per Level 2 charger",
        "eligibility": "Mississippi Power customers whose vehicle registration matches the account address",
        "detail": "Paper process: the form plus a W-9, registration and proof of purchase go to waystosave@mississippipower.com. Allow up to 16 weeks, and installs may be audited in person.",
        "officialUrl": "https://www.mississippipower.com/residential/products-and-services/electric-vehicles.html"
      },
      {
        "category": "Utility",
        "name": "Entergy Mississippi eTech Charger Incentive",
        "amount": "$250 per port",
        "eligibility": "Entergy Mississippi customers installing an ENERGY STAR Level 2 charger",
        "detail": "Up to two chargers, paid in about 4 to 6 weeks. The higher $350 New Orleans rate does not apply in Mississippi. The state's federal HEAR rebate has not launched.",
        "officialUrl": "https://entergyetech.com/electric-vehicles"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "missouri",
    "state": "Missouri",
    "programs": [
      {
        "category": "Utility",
        "name": "City Utilities of Springfield EV Charging Rebates",
        "amount": "50% up to $500 on a smart charger, plus up to $500 for a 240V outlet",
        "eligibility": "City Utilities of Springfield residential electric customers",
        "detail": "Both rebates can be claimed together, up to two rebates per service address.",
        "officialUrl": "https://www.cityutilities.net/168/Electric-Vehicle-Charging-Rebates"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "montana",
    "state": "Montana",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "nebraska",
    "state": "Nebraska",
    "programs": [
      {
        "category": "Utility",
        "name": "NPPD goEV Charger and Pre-Wiring Incentives",
        "amount": "50% up to $500 on a charger, plus up to $600 for the wiring",
        "eligibility": "NPPD customers and participating local utilities, applied for through your own utility",
        "detail": "The wiring incentive covers 100% of cost up to $600 on an existing home, or $400 on new construction. It funds the EV circuit, not a full service upgrade. Not every local utility takes part, so check yours first.",
        "officialUrl": "https://nppd.energywisenebraskagoev.com/residential-incentives/"
      },
      {
        "category": "Utility",
        "name": "OPPD Residential Solar Rebate",
        "amount": "$2,000",
        "eligibility": "OPPD customers in good standing using an approved OPPD solar trade ally",
        "detail": "Your installer applies on your behalf BEFORE the work starts. One per address per year, and the budget is set annually, so confirm funds remain. OPPD has no EV charger rebate.",
        "officialUrl": "https://www.oppd.com/residential/residential-rates/customer-owned-generation/solar-rebate-program/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "nevada",
    "state": "Nevada",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "new-hampshire",
    "state": "New Hampshire",
    "programs": [
      {
        "category": "Utility",
        "name": "NH Clean Energy Fund Home Battery",
        "amount": "$230 per kWh, up to $3,000",
        "eligibility": "New Hampshire homeowners with an Enphase or FranklinWH battery",
        "detail": "Real upfront cash, paid by cheque once the battery is interconnected. Requires a three-year demand-response commitment, roughly 40 events a year in summer afternoons. Tesla Powerwall is not on the approved list.",
        "officialUrl": "https://www.eversource.com/residential/save-money-energy/energy-efficiency-programs/demand-response/nhcef-home-battery"
      },
      {
        "category": "Utility",
        "name": "NHEC Level 2 Charger Rebate",
        "amount": "$300 per charger",
        "eligibility": "New Hampshire Electric Co-op members, on the off-peak rate",
        "detail": "Co-op members only, about 12% of the state. Eversource, Unitil and Liberty customers have no equivalent. Paid after a post-installation inspection.",
        "officialUrl": "https://www.nhec.com/electric-vehicle-charging/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "new-jersey",
    "state": "New Jersey",
    "programs": [
      {
        "category": "State",
        "name": "NJ Successor Solar Incentive (SuSI)",
        "amount": "$85 per MWh, dropping to $77 on July 27, 2026",
        "eligibility": "New Jersey net-metered residential solar owners, any system size",
        "detail": "Paid per SREC-II for 15 years. The rate cut is set by a May 2026 board order, so registering before July 27 locks the higher rate. New Jersey has no residential battery incentive yet: the Garden State storage program's residential phase has not launched.",
        "officialUrl": "https://cleanenergy.nj.gov/programs/solar/administratively-determined-incentive-adi-program"
      },
      {
        "category": "Utility",
        "name": "Atlantic City Electric EVsmart Make-Ready Rebate",
        "amount": "50% of the electrical work, up to $1,000",
        "eligibility": "Atlantic City Electric customers installing a smart Level 2 charger through a licensed electrician",
        "detail": "Covers the wiring and panel work, not the charger. Limited to 1,500 customers and runs through Dec 31, 2026 or until funds run out.",
        "officialUrl": "https://www.atlanticcityelectric.com/smart-energy/innovation-technology/residential-charger-rebate"
      },
      {
        "category": "Utility",
        "name": "Rockland Electric Charger Ready for Home",
        "amount": "Up to $1,000 your side, plus up to $5,000 utility side",
        "eligibility": "Rockland Electric New Jersey customers with an AMI meter installing a Level 2 charger",
        "detail": "Eligible costs explicitly include the service panel, conduit and wiring. Capped at 90% of the project and limited to about 1,450 ports.",
        "officialUrl": "https://www.oru.com/en/our-energy-future/electric-vehicles/new-jersey/residential-ev-drivers/charger-ready-for-home"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "new-mexico",
    "state": "New Mexico",
    "programs": [
      {
        "category": "Utility",
        "name": "PNM Residential EV Charger Rebate",
        "amount": "Up to $500 charger plus $1,500 install, or $750 plus $3,500 if income-qualified",
        "eligibility": "PNM residential customers, up to two rebates per address",
        "detail": "The installation allowance is unusually generous and covers the wiring work. Using a PNM authorized contractor gives an instant rebate. PNM publishes no separate panel-upgrade rebate.",
        "officialUrl": "https://ev.pnm.com/residential-ev-charger-rebates/"
      },
      {
        "category": "State",
        "name": "New Mexico Solar Market Development Tax Credit",
        "amount": "10% of cost, up to $6,000, refundable",
        "eligibility": "New Mexico taxpayers who own the property and install solar",
        "detail": "Two steps: get an eligibility certificate from EMNRD first, allow 3 to 4 weeks, then claim on your state return. Refundable, so you get it even with no tax liability.",
        "officialUrl": "https://www.emnrd.nm.gov/ecmd/tax-incentives/solar-market-development-tax-credit-smdtc/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "new-york",
    "state": "New York",
    "programs": [
      {
        "category": "State",
        "name": "NYSERDA Residential Energy Storage",
        "amount": "Per-kWh incentive, rate varies by utility",
        "eligibility": "New York homeowners adding a battery of 25 kW / 25 kWh or less through a participating contractor",
        "detail": "Claimed by your contractor and passed through to you. Funding is released in blocks that close as they fill, so the current rate depends on your utility and when you apply.",
        "officialUrl": "https://www.nyserda.ny.gov/All-Programs/Energy-Storage-Program/Home-Energy-Storage/Residential-Energy-Storage-Incentives"
      },
      {
        "category": "Utility",
        "name": "SmartCharge New York",
        "amount": "About $400 a year for overnight charging",
        "eligibility": "Drivers charging in Con Edison territory, 7 cents per kWh in Orange & Rockland territory",
        "detail": "Rewards when you charge, not the hardware. 10 cents per kWh between midnight and 8am, plus $35 a month in summer for avoiding weekday afternoons. Not available on time-of-use rates.",
        "officialUrl": "https://scny.ev.energy/"
      },
      {
        "category": "Utility",
        "name": "National Grid ConnectedSolutions Battery (Upstate NY)",
        "amount": "$50 per kW each summer season",
        "eligibility": "Upstate New York National Grid customers with an internet-connected battery, including Tesla",
        "detail": "Averages about $250 a year. Up to 60 events per summer, four hours maximum, and you can opt out at any time.",
        "officialUrl": "https://www.nationalgridus.com/Upstate-NY-Home/ConnectedSolutions/BatteryProgram"
      },
      {
        "category": "Utility",
        "name": "Orange & Rockland Smart Savers Battery",
        "amount": "$50 per kW, about $180 per summer",
        "eligibility": "Orange & Rockland customers with a Tesla Powerwall or other qualifying battery",
        "detail": "Around 15 adjustments per summer, up to four hours. Paid as electronic gift cards.",
        "officialUrl": "https://www.oru.com/en/save-money/rebates-incentives-credits/new-york-customers/incentives-for-residential-customers-ny/bring-your-own-battery"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "north-carolina",
    "state": "North Carolina",
    "programs": [
      {
        "category": "Utility",
        "name": "Duke Energy Charger Prep Credit",
        "amount": "Up to $1,133 toward the electrical work",
        "eligibility": "Duke Energy North Carolina residential customers installing a Level 2 charger",
        "detail": "Covers wiring, conduit, outlet and panel work, not the charger itself. Work finished in the last ~120 days may still qualify.",
        "officialUrl": "https://chargerprep.duke-energy.com/customer/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "north-dakota",
    "state": "North Dakota",
    "programs": [
      {
        "category": "Utility",
        "name": "Otter Tail Power EV Charger Rebate",
        "amount": "$500",
        "eligibility": "Otter Tail Power customers in North Dakota, on a qualified off-peak rate",
        "detail": "The charger must be hardwired and on an off-peak rate such as Dual Fuel or Deferred Load. Otter Tail serves only part of eastern and central North Dakota.",
        "officialUrl": "https://www.otpco.com/ways-to-save/programs/electric-vehicle-rebates/"
      },
      {
        "category": "Utility",
        "name": "Nodak Electric Off-Peak Charger Rebate",
        "amount": "$50 per kW, up to $750",
        "eligibility": "Nodak Electric Cooperative members around Grand Forks",
        "detail": "The largest charger rebate in the state, but the charger is sub-metered and under load control up to 16 hours a day in winter and 20 in summer. Worth checking that suits your driving.",
        "officialUrl": "https://www.nodakelectric.com/electric-vehicle-ev-charging-program"
      },
      {
        "category": "Utility",
        "name": "Bright Energy Solutions Charger Rebate",
        "amount": "$500 for a ChargePoint Home Flex, $150 for others",
        "eligibility": "Customers of the Cavalier, Hillsboro, Lakota, Northwood and Valley City municipal utilities",
        "detail": "Municipal utility customers only, so co-op and investor-owned customers do not qualify. North Dakota's federal HEAR rebate has not launched, and the state warns that anything offering it now is likely a scam.",
        "officialUrl": "https://www.brightenergysolutions.com/members"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "ohio",
    "state": "Ohio",
    "programs": [
      {
        "category": "Utility",
        "name": "AEP Ohio Plug-In Electric Vehicle Rate",
        "amount": "Discounted overnight charging, as low as 1.04 cents per kWh",
        "eligibility": "AEP Ohio residential customers with a smart meter who charge at home",
        "detail": "A rate plan, not a rebate. The discount applies to the distribution part of your bill. Whole-home enrollment takes up to two billing cycles.",
        "officialUrl": "https://www.aepohio.com/clean-energy/electric-cars/plug-in-electric-vehicle-rate"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "oklahoma",
    "state": "Oklahoma",
    "programs": [
      {
        "category": "Utility",
        "name": "PSO Level 2 EV Charger Rebate",
        "amount": "$200 per charger",
        "eligibility": "PSO residential customers buying an ENERGY STAR certified smart Level 2 charger",
        "detail": "Apply within 45 days of purchase, with the receipt, while funds last. OG&E has no current charger rebate, and Oklahoma's federal HEAR panel rebate has not launched.",
        "officialUrl": "https://powerforwardwithpso.com/rebate/energy-star-certified-electric-vehicle-ev-level-2-charger/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "oregon",
    "state": "Oregon",
    "programs": [
      {
        "category": "Utility",
        "name": "Energy Trust Solar for Your Home",
        "amount": "$2,500 per home",
        "eligibility": "Portland General Electric and Pacific Power customers using an approved trade ally",
        "detail": "Minimum 2 kW system. Rates step down quarterly, so confirm the current amount before signing a contract.",
        "officialUrl": "https://www.energytrust.org/incentives/solar-for-your-home/"
      },
      {
        "category": "Utility",
        "name": "Energy Trust Battery Storage Incentive",
        "amount": "$400 per kWh up to $5,000 with PGE, $288 per kWh up to $3,600 with Pacific Power",
        "eligibility": "Oregon PGE or Pacific Power customers adding a battery to a qualifying solar system",
        "detail": "Battery-only projects are not eligible, the battery must be paired with qualifying solar. Minimum 3 kWh.",
        "officialUrl": "https://www.energytrust.org/incentives/solar-for-your-home/"
      },
      {
        "category": "Utility",
        "name": "Energy Trust Solar Within Reach",
        "amount": "Up to $5,500 solar, plus up to $6,250 battery",
        "eligibility": "Income-qualified Oregon households served by PGE or Pacific Power",
        "detail": "Much larger than the standard offer. Income limits vary by county and household size. Manufactured, floating and 2 to 4 unit homes qualify.",
        "officialUrl": "https://www.energytrust.org/incentives/solar-within-reach/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "pennsylvania",
    "state": "Pennsylvania",
    "programs": [
      {
        "category": "Utility",
        "name": "PPL Optimized Battery Rewards",
        "amount": "$150 per kW a year, up to $400 a season",
        "eligibility": "PPL Electric customers with a home battery, Enphase only at present",
        "detail": "Paid for sharing stored power on summer afternoons and winter mornings, not for installing the battery. Other manufacturers are listed as coming soon, so Tesla owners can register interest.",
        "officialUrl": "https://www.pplelectricsavings.com/ppl/battery-rewards"
      },
      {
        "category": "Utility",
        "name": "PPL Optimized EV Charging Rewards",
        "amount": "$60 a season, up to $120 a year",
        "eligibility": "PPL Electric customers with a Tesla, or a ChargePoint or Emporia Level 2 charger",
        "detail": "Managed charging: PPL throttles your charging at peak. Pennsylvania has no statewide solar or charger rebate, and the state grant that is open is not available to homeowners.",
        "officialUrl": "https://www.pplelectricsavings.com/ppl/ev-charging-rewards"
      },
      {
        "category": "Utility",
        "name": "Duquesne Light Smart Charging Rewards",
        "amount": "$20 a month, up to $80 a year",
        "eligibility": "Duquesne Light customers with a Tesla, ChargePoint, Wallbox or Emporia charger",
        "detail": "Events run weekday afternoons June to September. Places are limited and first come, first served, and it cannot be combined with their EV time-of-use rate. Runs to Dec 31, 2027.",
        "officialUrl": "https://duquesnelight.com/energy-money-savings/electric-vehicles/charge-smart-and-save/smart-charging-rewards-program"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "rhode-island",
    "state": "Rhode Island",
    "programs": [
      {
        "category": "State",
        "name": "RI Renewable Energy Fund Solar Grant",
        "amount": "$1.65 per watt, up to $14,500",
        "eligibility": "Rhode Island homeowners who own their system outright, net-metered, minimal shading",
        "detail": "Leases and power purchase agreements do not qualify, and you cannot combine it with Rhode Island Energy's Renewable Energy Growth programme. Funded in rounds, the next opens October 16, 2026.",
        "officialUrl": "https://commerceri.com/renewable-energy-fund/"
      },
      {
        "category": "State",
        "name": "RI Renewable Energy Fund Storage Adder",
        "amount": "$5,000 flat",
        "eligibility": "Rhode Island homeowners adding a battery to a solar project awarded the grant above",
        "detail": "Cannot be claimed on its own, the solar application must be submitted at the same time and awarded. First come, first served from a $1.5M pot.",
        "officialUrl": "https://commerceri.com/renewable-energy-fund/"
      },
      {
        "category": "State",
        "name": "PowerUpRI Charger Rebate",
        "amount": "100% up to $800, or up to $1,500 if electrical work is needed",
        "eligibility": "Rhode Island residents and landlords with an EV registered in the state",
        "detail": "The higher tier covers 50% of installation up to $1,000, or 75% up to $1,500 if income-qualified. Apply within 180 days of the electrician's receipt, and only chargers bought after Aug 1, 2024 count.",
        "officialUrl": "https://drive.ri.gov/powerupri"
      },
      {
        "category": "Utility",
        "name": "Rhode Island Energy ConnectedSolutions Battery",
        "amount": "$225 per average kW each summer",
        "eligibility": "Rhode Island Energy customers with a qualifying battery, including Tesla",
        "detail": "Summer only, June through September, up to 60 events. Enrol before May 31 to earn a full season, since missed events score zero. The rate holds for five seasons.",
        "officialUrl": "https://www.rienergy.com/ways-to-save/rebates-and-savings-programs/connectedsolutions"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "south-carolina",
    "state": "South Carolina",
    "programs": [
      {
        "category": "State",
        "name": "South Carolina Solar Energy Tax Credit",
        "amount": "25% of cost, up to $3,500 a year",
        "eligibility": "South Carolina taxpayers who own and install a qualifying system on property they own",
        "detail": "Capped at $3,500 per facility per year or half your tax liability, whichever is lower, with a 10-year carryforward so a large system keeps paying out. The Department of Revenue lists no expiration.",
        "officialUrl": "https://dor.sc.gov/tax-credits/tax-credits-forms"
      },
      {
        "category": "Utility",
        "name": "Santee Cooper EmpowerSolar Home Rebate",
        "amount": "$950 per kW, up to $5,700",
        "eligibility": "Santee Cooper residential customers using a Santee Cooper Trade Ally installer",
        "detail": "Covers the solar portion only, not batteries. Residential solar customers pay a $10 monthly distributed generation rider.",
        "officialUrl": "https://www.santeecooper.com/programs-incentives/empowersolar/solar-home/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "south-dakota",
    "state": "South Dakota",
    "programs": [
      {
        "category": "Utility",
        "name": "Otter Tail Power EV Charger Rebate",
        "amount": "$500",
        "eligibility": "Otter Tail Power customers in South Dakota, on a qualified off-peak rate",
        "detail": "Hardwired chargers under load control only. Mail-in form, allow 6 to 8 weeks. Otter Tail's panel upgrade rebate is Minnesota only despite what their programme index suggests.",
        "officialUrl": "https://www.otpco.com/rebates-and-efficiency-programs/programs/electric-vehicle-rate/"
      },
      {
        "category": "Utility",
        "name": "Bright Energy Solutions Charger Rebate",
        "amount": "$500 for a ChargePoint Home Flex, $150 for others",
        "eligibility": "Customers of 12 South Dakota municipal utilities including Brookings, Pierre, Watertown and Vermillion",
        "detail": "The higher tier needs a ChargePoint Home Flex linked by Wi-Fi to your utility. One per vehicle, and previously bought chargers may still qualify. Municipal customers only.",
        "officialUrl": "https://www.brightenergysolutions.com/members"
      },
      {
        "category": "Utility",
        "name": "Black Hills Energy Ready EV Rebate",
        "amount": "Charger rebate available, confirm the current amount",
        "eligibility": "Black Hills Energy electric customers in western South Dakota",
        "detail": "The US Department of Energy confirms this rebate exists, but two separate checks could not load Black Hills' own page to confirm the figure, so we will not print one. Widely repeated as $500. South Dakota declined the federal home energy rebate funding entirely.",
        "officialUrl": "https://www.blackhillsenergy.com/efficiency-and-savings/welcome-ready-ev/electric-vehicle-charging-rebate-your-home"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "tennessee",
    "state": "Tennessee",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "texas",
    "state": "Texas",
    "programs": [
      {
        "category": "Utility",
        "name": "Austin Energy Home EV Charger Rebate",
        "amount": "50% of cost, up to $1,200",
        "eligibility": "Austin Energy residential customers installing a Level 2 charger through a licensed electrician",
        "detail": "Up to $1,200 for a Power Partner compatible setup, up to $900 otherwise. Funding is limited and first come, first served.",
        "officialUrl": "https://austinenergy.com/green-power/plug-in-austin/home-charging"
      },
      {
        "category": "Utility",
        "name": "Austin Energy Residential Solar Rebate",
        "amount": "$4,000",
        "eligibility": "Austin Energy residential customers installing 3 kW or more through a participating contractor",
        "detail": "You must receive the rebate confirmation letter before installation begins, or the project will not qualify.",
        "officialUrl": "https://austinenergy.com/green-power/solar-solutions/for-your-home"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "utah",
    "state": "Utah",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "vermont",
    "state": "Vermont",
    "programs": [
      {
        "category": "Utility",
        "name": "Green Mountain Power Bring Your Own Device",
        "amount": "$850 to $950 per kW, up to $10,500",
        "eligibility": "Green Mountain Power customers who own an eligible battery, including Tesla Powerwall 2 and 3",
        "detail": "You share battery capacity with GMP during grid events. The higher rate is for a four-hour discharge commitment.",
        "officialUrl": "https://greenmountainpower.com/rebates-programs/home-energy-storage/bring-your-own-device/"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "virginia",
    "state": "Virginia",
    "programs": [
      {
        "category": "Utility",
        "name": "Dominion Energy Residential Charger Program",
        "amount": "Turnkey install for $40.27 a month over five years",
        "eligibility": "Dominion Energy Virginia customers in a single-family home with panel capacity within 30 feet",
        "detail": "Financing, not a rebate: you pay Dominion over five years instead of an installer up front, and it covers the charger, install, permits and a five-year warranty. A one-time $1,835.96 payment is also offered. The free income-qualified option is fully subscribed.",
        "officialUrl": "https://www.dominionenergy.com/virginia/save-energy/electric-vehicles/residential-charger-program"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "washington",
    "state": "Washington",
    "programs": [
      {
        "category": "Utility",
        "name": "Tacoma Power EV Charging Rebate",
        "amount": "$400 per item, up to $600 total",
        "eligibility": "Tacoma Power residential customers, renters included",
        "detail": "Counts a Level 2 charger, a smart splitter, the electrical work or a 240V outlet. Apply within 90 days of installation.",
        "officialUrl": "https://www.mytpu.org/ways-to-save/residential-incentives/ev-charging/"
      },
      {
        "category": "Utility",
        "name": "Clark Public Utilities EV Charger Rebate",
        "amount": "$500 for a connected charger, $100 otherwise",
        "eligibility": "Clark Public Utilities customers, up to two chargers per household",
        "detail": "New ENERGY STAR internet-connected units only. You have two years from purchase to submit.",
        "officialUrl": "https://www.clarkpublicutilities.com/residential-customers/reduce-energy-waste-and-lower-your-bill/all-rebates-incentives/electric-vehicle-program/"
      },
      {
        "category": "State",
        "name": "Washington Home Electrification Rebates (HEAR)",
        "amount": "Point-of-sale rebate on panel and wiring upgrades",
        "eligibility": "Washington households up to 150% of Area Median Income, renters included",
        "detail": "No statewide online form: email HomeRebates@Commerce.wa.gov to be routed to your area's administrator. Not retroactive, approval must come before the work.",
        "officialUrl": "https://www.commerce.wa.gov/energy-incentives/hear/"
      },
      {
        "category": "State",
        "name": "Washington Solar Sales Tax Exemption",
        "amount": "100% sales and use tax exemption",
        "eligibility": "Washington homeowners installing a solar system between 1 kW and 100 kW",
        "detail": "Claimed at point of sale, not a rebate. You give your installer an exemption certificate. Runs through Dec 31, 2029.",
        "officialUrl": "https://dor.wa.gov/forms-publications/publications-subject/special-notices/sales-and-use-tax-exemption-purchases-and-installation-solar-energy-systems"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "west-virginia",
    "state": "West Virginia",
    "programs": [
      {
        "category": "Utility",
        "name": "Appalachian Power Go Electric Charger Rebate",
        "amount": "Up to $300 per charger",
        "eligibility": "Appalachian Power customers in West Virginia, with a Wi-Fi enabled ENERGY STAR charger",
        "detail": "Covers the charger only, not installation or panel work. Mon Power and Potomac Edison customers are not eligible, and West Virginia's federal HEAR rebate has not launched.",
        "officialUrl": "https://ev.takechargewv.com/chargers"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "wisconsin",
    "state": "Wisconsin",
    "programs": [
      {
        "category": "State",
        "name": "Focus on Energy Home Electrification Rebates (HEAR)",
        "amount": "Up to $4,000 for a panel, plus up to $2,500 for wiring",
        "eligibility": "Wisconsin households at or below 150% of Area Median Income",
        "detail": "Under 80% AMI covers 100% of project cost, 80 to 150% covers 50%, with a $14,000 household cap. Program rules change September 1, 2026.",
        "officialUrl": "https://focusonenergy.com/ira-hear"
      },
      {
        "category": "State",
        "name": "Focus on Energy Solar for Homes",
        "amount": "$600 per kW, up to $2,400",
        "eligibility": "Wisconsin homeowners served by a participating Focus on Energy utility",
        "detail": "You must reserve online BEFORE installing. Rebate claims are due within 60 days of installation and no later than August 31, 2026.",
        "officialUrl": "https://www.focusonenergy.com/residential/solar-for-homes"
      },
      {
        "category": "Utility",
        "name": "Alliant Energy EV Charger Rebate",
        "amount": "$500 instant discount",
        "eligibility": "Alliant Energy Wisconsin residential electric customers",
        "detail": "Taken off at checkout in the Alliant marketplace rather than claimed afterwards. Covers the charger, not the installation.",
        "officialUrl": "https://www.alliantenergy.com/ways-to-save/go-electric/wisconsin/charger-rebate"
      },
      {
        "category": "Utility",
        "name": "We Energies Residential EV Pilot",
        "amount": "Up to 4 cents per kWh back on overnight charging",
        "eligibility": "We Energies customers who own their home and an all-electric vehicle",
        "detail": "A charging credit only, capped at 400 kWh a month. We Energies has no charger or installation rebate, and renters are not eligible.",
        "officialUrl": "https://www.we-energies.com/services/electric-vehicles/ev-charger-pilot"
      },
      {
        "category": "Utility",
        "name": "MGE Charge Ahead",
        "amount": "Up to $8 a month in summer, $4 the rest of the year",
        "eligibility": "Madison Gas & Electric customers who drive an EV",
        "detail": "Managed charging, no charger purchase required. MGE shifts your charging to off-peak hours.",
        "officialUrl": "https://www.mge.com/smart-energy/electric-vehicles/ev-programs/charge-ahead"
      },
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  },
  {
    "slug": "wyoming",
    "state": "Wyoming",
    "programs": [
      {
        "category": "Federal",
        "name": "Home Electrification and Appliance Rebates (IRA HEAR)",
        "amount": "Up to $4,000 for a panel upgrade, within an up-to-$14,000 total",
        "eligibility": "Income-qualified households, administered state by state",
        "detail": "Availability varies by state: some programs are live, others are launching in 2026 or fully reserved. Check your state energy office.",
        "officialUrl": "https://www.energy.gov/scep/home-energy-rebates-programs"
      }
    ]
  }
]

const bySlug = new Map(rebates.map((s) => [s.slug, s]))

export function getStateRebates(slug: string): StateRebates | undefined {
  return bySlug.get(slug)
}

/** Lightweight list for the index page and selectors. */
export function rebateStateList(): { slug: string; state: string; count: number }[] {
  return rebates.map((s) => ({ slug: s.slug, state: s.state, count: s.programs.length }))
}
