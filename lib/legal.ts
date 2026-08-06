/**
 * Source text for the Privacy Policy and Terms of Service.
 *
 * Kept as structured data (not JSX) so both documents render through one
 * renderer and stay visually identical, and so the wording can be reviewed or
 * replaced by counsel without touching layout code.
 *
 * PLACEHOLDER CONVENTION: anything wrapped in square brackets -- [like this] --
 * is a fact only the business can supply (legal entity name, mailing address,
 * support email). The renderer highlights these so nothing ships unfilled.
 * Search for "[" in this file to find every remaining item.
 */

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "numbered"; items: string[] }
  | { kind: "table"; head: [string, string]; rows: Array<[string, string]> }
  | { kind: "callout"; title: string; text: string }
  | { kind: "subheading"; text: string }

export type LegalSection = {
  id: string
  heading: string
  blocks: LegalBlock[]
}

export type LegalDoc = {
  title: string
  eyebrow: string
  effectiveDate: string
  lastUpdated: string
  summary: string
  sections: LegalSection[]
}

/** Shared entity details. Fill these once and both documents update. */
export const legalEntity = {
  /**
   * TODO(business): replace with the exact registered name from the Florida
   * Division of Corporations, including the entity suffix (LLC, Inc., etc.).
   * The trade name is used here because the registered filing was not on hand;
   * it is accurate but less precise than a registered name should be in a
   * contract, and a mismatch can be raised against an arbitration clause.
   */
  name: "Charge Home Solutions",
  tradeName: "Charge Home Solutions",
  short: "CHS",
  /**
   * TODO(business): add the street address and ZIP. A city-and-state address is
   * not sufficient for serving legal notice under the Terms.
   */
  address: "Titusville, Florida",
  /**
   * One shared inbox currently covers privacy, legal, and support. The three
   * fields below are kept separate so each can be pointed at its own address
   * later without touching document text; `contactBlock` collapses duplicates
   * so readers do not see the same address listed twice.
   */
  email: "Operation@chargehomesolutions.com",
  legalEmail: "Operation@chargehomesolutions.com",
  supportEmail: "Operation@chargehomesolutions.com",
  phone: "904-712-6790",
  website: "chargehomesolutions.com",
  /** Governing law selected by the business. */
  state: "Florida",
  /** Titusville is the Brevard County seat, so venue follows the office location. */
  venueCounty: "Brevard County, Florida",
} as const

/**
 * Retention window stated in the Privacy Policy, in years.
 *
 * Set to 5 to match Florida's five-year statute of limitations on actions
 * founded on a written contract (Fla. Stat. sec. 95.11(2)(b)), so records
 * survive as long as a contract claim can be brought. Records with a longer
 * statutory floor (tax, for example) are already covered by the "where a longer
 * period is required by law, that period controls" sentence in the same section.
 *
 * TODO(business): confirm against your accountant's guidance.
 */
const RETENTION_YEARS = 5

/**
 * Payment window for referral-fee invoices, in days. Net 30 is the customary
 * commercial default.
 *
 * TODO(business): change if your invoices state different terms -- this text and
 * the actual invoices must agree, or the invoice terms will likely govern.
 */
const INVOICE_DUE_DAYS = 30

/**
 * Renders the entity as "Name, doing business as TradeName" only when those two
 * actually differ, so a shared value does not read as "X doing business as X".
 * Once the registered legal name is filled in above, the DBA clause reappears
 * automatically with no edits to document text.
 */
const entityPhrase =
  legalEntity.name === legalEntity.tradeName
    ? legalEntity.name
    : `${legalEntity.name}, doing business as ${legalEntity.tradeName}`

/**
 * Builds a closing contact section, routing readers to the right inbox.
 *
 * Labels pointing at the same address are merged ("Legal and dispute notices"
 * plus "General support" become one line) so a single shared inbox does not
 * render as the same address repeated.
 */
function contactBlock(emails: Array<[string, string]>): LegalBlock[] {
  const byAddress = new Map<string, string[]>()
  for (const [label, address] of emails) {
    byAddress.set(address, [...(byAddress.get(address) ?? []), label])
  }

  const merged = [...byAddress].map(([address, labels]): [string, string] => {
    const joined =
      labels.length > 1
        ? `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1].toLowerCase()}`
        : labels[0]
    return [joined, address]
  })

  return [
    {
      kind: "p",
      text: `Questions, requests, or complaints about this document may be directed to ${legalEntity.tradeName} at:`,
    },
    {
      kind: "list",
      items: [
        `Entity: ${legalEntity.name}`,
        `Mailing address: ${legalEntity.address}`,
        ...merged.map(([label, address]) => `${label}: ${address}`),
        `Phone: ${legalEntity.phone}`,
      ],
    },
    {
      kind: "p",
      text: "We aim to respond to all substantive inquiries within thirty (30) days. Where a specific statute grants you a shorter or longer response window, that statutory period controls.",
    },
  ]
}

const PRIVACY_CONTACT_BLOCK = contactBlock([["Privacy and data-rights requests", legalEntity.email]])

const TERMS_CONTACT_BLOCK = contactBlock([
  ["Legal and dispute notices", legalEntity.legalEmail],
  ["General support", legalEntity.supportEmail],
])

/* ------------------------------------------------------------------ *
 * PRIVACY POLICY
 * ------------------------------------------------------------------ */

export const privacyPolicy: LegalDoc = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  effectiveDate: "August 6, 2026",
  lastUpdated: "August 6, 2026",
  summary:
    "This policy explains what personal information Charge Home Solutions collects, why we collect it, who we share it with, and the choices and legal rights you have over it.",
  sections: [
    {
      id: "introduction",
      heading: "1. Introduction and Scope",
      blocks: [
        {
          kind: "p",
          text: `${entityPhrase} (referred to in this policy as "${legalEntity.short}," "we," "us," or "our") operates a technology platform that books residential and commercial electrical service appointments and delivers those appointments to independent licensed electricians by text message. This Privacy Policy describes how we collect, use, disclose, and safeguard personal information.`,
        },
        {
          kind: "p",
          text: "This policy applies to our website, our SMS appointment-delivery program, our onboarding and account systems, and any related services we operate (collectively, the \"Services\"). It applies to two distinct groups of people, and some sections apply to only one of them:",
        },
        {
          kind: "list",
          items: [
            "Electricians and contractors who apply to join, or participate in, our network (\"Electricians\").",
            "Homeowners, property managers, and other prospective customers who request electrical services from us (\"Customers\").",
          ],
        },
        {
          kind: "p",
          text: "This policy does not apply to the independent privacy practices of Electricians in our network. Once an Electrician accepts an appointment and receives a Customer's contact details, that Electrician acts as an independent business and is responsible for its own handling of that information. It also does not apply to third-party websites or services we link to.",
        },
        {
          kind: "p",
          text: "The Services are directed to and intended for users located in the United States. If you access the Services from outside the United States, you understand that your information will be transferred to, stored in, and processed in the United States.",
        },
      ],
    },
    {
      id: "information-we-collect",
      heading: "2. Information We Collect",
      blocks: [
        {
          kind: "p",
          text: "We collect the categories of personal information described below. Not every category applies to every person; what we collect depends on how you interact with us.",
        },
        { kind: "subheading", text: "2.1 Information you provide directly" },
        {
          kind: "list",
          items: [
            "Identifiers and contact information: name, business name, mailing and service address, email address, and telephone number, including the mobile number you designate for appointment delivery.",
            "Professional and licensing information (Electricians): state electrical license number and classification, insurance certificates and coverage limits, business entity and tax identification details, workers' compensation status, service radius, trade certifications, and years of experience.",
            "Service request details (Customers): property address, the type of electrical work requested, equipment and vehicle details relevant to the installation, property access notes, scheduling preferences, and any notes you provide about the job.",
            "Payment and billing information: billing contact, billing address, and payment-method details. Card and bank details are collected and processed by our third-party payment processor; we do not store complete payment card numbers on our systems.",
            "Communications: the content of emails, text messages, web forms, chat messages, and telephone calls with us, including call recordings where permitted by law and disclosed to you at the time of the call.",
          ],
        },
        { kind: "subheading", text: "2.2 Information collected automatically" },
        {
          kind: "list",
          items: [
            "Device and connection data: IP address, browser type and version, operating system, device identifiers, language preference, and referring URL.",
            "Usage data: pages viewed, links clicked, features used, time spent on pages, session timestamps, and general navigation patterns.",
            "Approximate location: a general geographic location inferred from IP address, used for service-area matching and fraud prevention. We do not collect precise GPS location from your device through our website.",
            "Cookies and similar technologies: as described in Section 7.",
          ],
        },
        { kind: "subheading", text: "2.3 Information from other sources" },
        {
          kind: "list",
          items: [
            "Advertising and marketing partners, including the platforms through which Customers respond to our advertisements.",
            "License-verification databases, state licensing boards, and background- and insurance-verification vendors, used to confirm Electrician credentials.",
            "Payment processors and financial institutions, for transaction status, chargebacks, and fraud signals.",
            "Publicly available sources and commercial data providers, used to validate business information.",
          ],
        },
        {
          kind: "callout",
          title: "Sensitive information",
          text: "We do not seek or require government identification numbers beyond a business tax identification number, precise geolocation, biometric data, health information, or information about race, religion, sexual orientation, or union membership. Please do not send us this information. If a background-check vendor requires a Social Security number for identity verification, that information is collected by the vendor under its own privacy notice and is not retained by us.",
        },
      ],
    },
    {
      id: "how-we-use",
      heading: "3. How We Use Personal Information",
      blocks: [
        { kind: "p", text: "We use personal information for the following business and commercial purposes:" },
        {
          kind: "list",
          items: [
            "To operate the Services, including creating and maintaining accounts, verifying Electrician licensing and insurance, scheduling appointments, and matching appointments to Electricians by trade, service radius, and availability.",
            "To deliver appointments and transactional messages, including the text messages that are the core function of the Services, along with confirmations, reminders, schedule changes, and cancellations.",
            "To disclose the information an Electrician needs to perform an accepted job, as described in Section 4.",
            "To bill and collect membership fees and per-appointment referral fees, issue invoices and receipts, and pursue unpaid amounts.",
            "To provide customer and network support and to investigate and resolve service complaints and disputes.",
            "To improve the Services, including analyzing usage, measuring advertising effectiveness, conducting research, and developing new features.",
            "To send marketing and promotional communications about our Services, subject to the consent rules and opt-out rights in Sections 5 and 6.",
            "To protect the Services, including detecting, investigating, and preventing fraud, unauthorized access, abuse of the appointment system, and other unlawful activity.",
            "To comply with legal obligations, including tax, recordkeeping, licensing, and law-enforcement requirements, and to establish, exercise, or defend legal claims.",
          ],
        },
        {
          kind: "p",
          text: "We do not use automated decision-making that produces legal or similarly significant effects about you without human involvement. Appointment matching is rules-based, and Electricians always choose whether to accept an appointment.",
        },
      ],
    },
    {
      id: "how-we-share",
      heading: "4. How We Disclose Personal Information",
      blocks: [
        { kind: "p", text: "We disclose personal information only as described below." },
        { kind: "subheading", text: "4.1 To Electricians in our network" },
        {
          kind: "p",
          text: "This disclosure is the central function of the Services, and Customers should read it carefully. When a Customer books an appointment, we send participating Electricians a preview of the job that includes the service type, the approximate distance, and the scheduled time window. When an Electrician accepts the appointment, we then disclose the Customer's name, service address, and telephone number so the Electrician can perform the work.",
        },
        {
          kind: "p",
          text: "Electricians are contractually required to use Customer information solely to perform the accepted job, to keep it confidential, and not to sell it, market from it, or retain it longer than needed for the job and their own legal recordkeeping. Electricians are independent businesses, and we do not control their systems.",
        },
        { kind: "subheading", text: "4.2 To service providers" },
        {
          kind: "p",
          text: "We share information with vendors who process it on our behalf and under contract, limited to what they need to perform their function. These include cloud hosting and storage providers, our SMS and telecommunications gateway providers, email delivery providers, payment processors, analytics providers, customer-support tools, license- and insurance-verification vendors, accounting and tax professionals, and legal advisors.",
        },
        { kind: "subheading", text: "4.3 For legal and safety reasons" },
        {
          kind: "p",
          text: `We may disclose information when we believe in good faith that disclosure is necessary to comply with applicable law, a subpoena, a court order, or another lawful request from government authorities; to enforce our Terms of Service or other agreements; to collect amounts owed; or to protect the rights, property, or safety of ${legalEntity.tradeName}, our users, or the public.`,
        },
        { kind: "subheading", text: "4.4 Business transfers" },
        {
          kind: "p",
          text: "If we are involved in a merger, acquisition, financing, reorganization, sale of assets, or bankruptcy, personal information may be transferred as part of that transaction. We will require the recipient to honor this policy or will give you notice and an opportunity to exercise applicable rights before your information becomes subject to a materially different policy.",
        },
        { kind: "subheading", text: "4.5 With your direction or consent" },
        { kind: "p", text: "We disclose information for any other purpose at your direction or with your consent." },
        {
          kind: "callout",
          title: "We do not sell your personal information",
          text: "We do not sell personal information for money, and we do not share personal information for cross-context behavioral advertising as those terms are defined under California and other state privacy laws. Separately and specifically: we never share mobile telephone numbers or SMS consent with third parties or affiliates for their own marketing purposes, and text-message originator opt-in data is not sold, rented, or shared with any third party except the telecommunications vendors required to transmit the messages you asked to receive.",
        },
      ],
    },
    {
      id: "sms",
      heading: "5. Text Message (SMS) Program and Your Consent",
      blocks: [
        {
          kind: "p",
          text: "Text messaging is how the Services function, so this section describes the program in detail.",
        },
        {
          kind: "list",
          items: [
            "Consent: by providing your mobile number and enrolling, you give prior express consent to receive recurring automated text messages from us at that number, including messages sent using an automatic telephone dialing system. Consent to receive marketing texts is not a condition of purchasing any goods or services.",
            "Message types: Electricians receive transactional appointment messages, including new appointment offers, acceptance confirmations, Customer contact details, schedule changes, and cancellations. Customers receive booking confirmations, reminders, and Electrician arrival updates. We may also send account and billing notices.",
            "Message frequency: frequency varies with appointment volume in your service area and your membership tier. Message frequency is recurring and may exceed several messages per day during periods of high volume.",
            "Cost: message and data rates may apply. We do not charge for the messages themselves; your mobile carrier's plan rates apply.",
            "Opting out: reply STOP to any message to unsubscribe. You will receive one final message confirming your opt-out. Because appointment delivery by text is the core function of the Electrician network, opting out will end your ability to receive appointments and may effectively terminate your participation.",
            "Help: reply HELP for assistance, or contact us using the details in Section 15.",
            "Carriers: participating carriers are not liable for delayed or undelivered messages. Delivery is subject to transmission by your carrier and to network availability.",
          ],
        },
        {
          kind: "p",
          text: "We maintain records of SMS consent and opt-out requests as required by the Telephone Consumer Protection Act and related regulations. Opt-out requests are processed promptly and honored across our systems.",
        },
      ],
    },
    {
      id: "your-choices",
      heading: "6. Your Choices",
      blocks: [
        {
          kind: "list",
          items: [
            "Marketing email: click the unsubscribe link in any marketing email, or contact us directly. We will still send transactional messages about your account, appointments, and billing.",
            "Text messages: reply STOP as described in Section 5.",
            "Telephone calls: tell us during any call that you do not wish to be called again, and we will add you to our internal do-not-call list.",
            "Account information: contact us to review, update, or correct the information in your account.",
            "Cookies: use the browser and device controls described in Section 7.",
          ],
        },
      ],
    },
    {
      id: "cookies",
      heading: "7. Cookies and Tracking Technologies",
      blocks: [
        {
          kind: "p",
          text: "We and our providers use cookies, pixels, tags, and similar technologies to operate the site, remember preferences, measure performance, and understand how our advertising performs. We use strictly necessary cookies for site functionality and security, preference cookies to remember your settings, and analytics cookies to understand aggregate usage.",
        },
        {
          kind: "p",
          text: "Most browsers let you block or delete cookies through their settings. Blocking strictly necessary cookies may prevent parts of the site from working. Because there is no common industry standard for interpreting browser \"Do Not Track\" signals, we do not currently respond to them. We do honor Global Privacy Control (GPC) signals where required by law.",
        },
      ],
    },
    {
      id: "retention",
      heading: "8. Data Retention",
      blocks: [
        {
          kind: "p",
          text: "We retain personal information for as long as needed for the purposes described in this policy, and then for the period required to meet our legal, tax, accounting, and recordkeeping obligations or to resolve disputes and enforce agreements. Relevant factors include the length of your relationship with us, whether amounts remain owed, applicable statutes of limitation, and the retention periods required for SMS consent records and licensing verification. When information no longer serves these purposes, we delete it or de-identify it.",
        },
        {
          kind: "p",
          text: "The periods below describe our general retention practice. Where a longer period is required by law, that period controls.",
        },
        {
          kind: "table",
          head: ["Category of information", "Retention period"],
          rows: [
            [
              "Account and profile records",
              `For the life of the account, then ${RETENTION_YEARS} years after closure to resolve disputes and enforce agreements.`,
            ],
            [
              "SMS consent and opt-out records",
              "At least four (4) years from the date consent is given or withdrawn, consistent with the federal statute of limitations for TCPA claims.",
            ],
            [
              "Appointment and job records",
              `${RETENTION_YEARS} years after the appointment date, for dispute resolution, fee reconciliation, and quality review.`,
            ],
            [
              "Billing, invoices, and tax records",
              "At least seven (7) years, to meet federal and state tax and accounting recordkeeping requirements.",
            ],
            [
              "Electrician licensing and insurance verification",
              `For the life of the network relationship, then ${RETENTION_YEARS} years, to evidence that we verified credentials at the time of each referral.`,
            ],
            [
              "Website usage and analytics data",
              "Up to twenty-six (26) months, after which it is deleted or aggregated so it no longer identifies you.",
            ],
            [
              "Marketing and advertising records",
              "Until you unsubscribe or object, then only as needed to honor your suppression request.",
            ],
          ],
        },
      ],
    },
    {
      id: "security",
      heading: "9. Data Security",
      blocks: [
        {
          kind: "p",
          text: "We maintain administrative, technical, and physical safeguards designed to protect personal information, including encryption of data in transit, access controls limiting employee access to what their role requires, and contractual security obligations for our vendors.",
        },
        {
          kind: "p",
          text: "No method of transmission or storage is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your account credentials confidential and for notifying us promptly if you believe your account has been compromised. If a breach of unencrypted personal information occurs, we will notify affected individuals and regulators as required by applicable state breach-notification law.",
        },
      ],
    },
    {
      id: "state-rights",
      heading: "10. Your State Privacy Rights",
      blocks: [
        {
          kind: "p",
          text: "Residents of certain states have specific rights over their personal information. We honor the following rights for all United States residents, regardless of the state you live in, except where a right is available only under a particular statute.",
        },
        {
          kind: "list",
          items: [
            "Right to know and access: request confirmation of whether we process your personal information and obtain a copy of it, along with the categories collected, the sources, the purposes, and the categories of recipients.",
            "Right to correct: request correction of inaccurate personal information.",
            "Right to delete: request deletion of personal information we hold about you, subject to legal exceptions.",
            "Right to portability: obtain a copy in a portable and, to the extent technically feasible, readily usable format.",
            "Right to opt out: opt out of any sale of personal information, targeted or cross-context behavioral advertising, and certain profiling. As stated in Section 4, we do not engage in these activities.",
            "Right to limit use of sensitive personal information: we do not collect sensitive personal information for purposes requiring this option.",
            "Right to non-discrimination: we will not deny service, charge a different price, or provide a different quality of service because you exercised a privacy right.",
            "Right to appeal: if we deny your request, you may appeal by replying to our decision. We will respond to an appeal within the period required by your state's law and, if we deny the appeal, will tell you how to contact your state attorney general.",
          ],
        },
        { kind: "subheading", text: "10.1 How to exercise your rights" },
        {
          kind: "p",
          text: `Submit a request by emailing ${legalEntity.email} or writing to the address in Section 15, and state which right you wish to exercise. We must verify your identity before acting, and may ask you to confirm information already in our records; for account holders, we may verify through your account. We do not charge a fee for a reasonable number of requests.`,
        },
        {
          kind: "p",
          text: "An authorized agent may submit a request on your behalf with written permission signed by you, and we may contact you directly to confirm the agent's authority.",
        },
        { kind: "subheading", text: "10.2 California residents" },
        {
          kind: "p",
          text: "In addition to the rights above, California residents may request the specific pieces of personal information we have collected, and the categories of personal information disclosed for a business purpose in the preceding twelve months. The categories we collect are described in Section 2, our purposes in Section 3, and our disclosures in Section 4. Under California's \"Shine the Light\" law, you may also request information about disclosures to third parties for their direct marketing purposes; we do not make such disclosures.",
        },
        { kind: "subheading", text: "10.3 Nevada residents" },
        {
          kind: "p",
          text: "Nevada law allows residents to direct a covered operator not to sell certain personal information. We do not sell personal information as defined by Nevada law, but you may submit a verified request using the contact details in Section 15.",
        },
      ],
    },
    {
      id: "children",
      heading: "11. Children's Privacy",
      blocks: [
        {
          kind: "p",
          text: "The Services are intended for adults and are not directed to children. We do not knowingly collect personal information from anyone under eighteen (18) years of age, and we do not knowingly sell or share the personal information of consumers under sixteen (16). If we learn that we have collected information from a child in violation of applicable law, we will delete it. A parent or guardian who believes a child has provided us information may contact us using Section 15.",
        },
      ],
    },
    {
      id: "third-party",
      heading: "12. Third-Party Links and Services",
      blocks: [
        {
          kind: "p",
          text: "The Services may link to or integrate third-party websites, tools, and platforms that we do not control. Their collection and use of your information is governed by their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policy of any third party before providing information to it.",
        },
      ],
    },
    {
      id: "electrician-privacy",
      heading: "13. Additional Notice for Electricians",
      blocks: [
        {
          kind: "p",
          text: "Information you provide to establish and maintain your participation in the network, including license numbers, insurance certificates, and business tax details, is used to verify your eligibility, satisfy our own compliance obligations, and match you to appropriate appointments. We may re-verify licensing and insurance periodically and may suspend your participation if verification fails or lapses.",
        },
        {
          kind: "p",
          text: "Some information about you, such as your business name, trade, general service area, and credential status, may be shown to Customers so they know who is coming to their property. Performance information, including acceptance rates, completion rates, cancellations, and Customer feedback, is used to administer the network and may affect appointment priority.",
        },
      ],
    },
    {
      id: "changes",
      heading: "14. Changes to This Policy",
      blocks: [
        {
          kind: "p",
          text: "We may update this policy to reflect changes in our practices, technology, or legal requirements. When we do, we will revise the \"Last updated\" date at the top of this page. If the changes are material, we will provide more prominent notice, such as by email or by a notice on the Services, before the changes take effect. Your continued use of the Services after an update takes effect constitutes acceptance of the revised policy.",
        },
      ],
    },
    {
      id: "privacy-contact",
      heading: "15. Contact Us",
      blocks: PRIVACY_CONTACT_BLOCK,
    },
  ],
}

/* ------------------------------------------------------------------ *
 * TERMS OF SERVICE
 * ------------------------------------------------------------------ */

export const termsOfService: LegalDoc = {
  eyebrow: "Legal",
  title: "Terms of Service",
  effectiveDate: "August 6, 2026",
  lastUpdated: "August 6, 2026",
  summary:
    "These terms are the binding agreement between Charge Home Solutions and everyone who uses our platform, including the electricians in our network and the customers who book appointments.",
  sections: [
    {
      id: "agreement",
      heading: "1. Agreement to These Terms",
      blocks: [
        {
          kind: "p",
          text: `These Terms of Service (the "Terms") form a legally binding agreement between you and ${entityPhrase} ("${legalEntity.short}," "we," "us," or "our"), and govern your access to and use of our website, our SMS appointment-delivery program, and all related services (the "Services").`,
        },
        {
          kind: "p",
          text: "By accessing the Services, creating an account, submitting a service request, enrolling in our text-message program, or accepting an appointment, you agree to these Terms and to our Privacy Policy, which is incorporated by reference. If you do not agree, do not use the Services.",
        },
        {
          kind: "callout",
          title: "Please read Sections 21 through 24 carefully",
          text: "Section 21 disclaims warranties and Section 22 limits our liability. Section 24 requires most disputes to be resolved by binding individual arbitration and waives your right to a jury trial and to participate in a class action. You may opt out of arbitration within thirty (30) days as described in Section 24.7. These provisions affect your legal rights.",
        },
        {
          kind: "p",
          text: "If you enter into these Terms on behalf of a company or other entity, you represent that you have authority to bind that entity, and \"you\" refers to both you and that entity.",
        },
      ],
    },
    {
      id: "definitions",
      heading: "2. Definitions",
      blocks: [
        {
          kind: "list",
          items: [
            "\"Appointment\" means a scheduled electrical service visit that we book with a Customer and offer to one or more Electricians.",
            "\"Customer\" means a homeowner, property manager, business, or other person who requests electrical services through us.",
            "\"Electrician\" means an independent electrical contractor or electrical business that applies to or participates in our network.",
            "\"Membership\" means a paid or free subscription tier that governs an Electrician's access to Appointments.",
            "\"Referral Fee\" means the per-Appointment fee an Electrician owes us in connection with an accepted Appointment.",
            "\"Service Agreement\" means the separate contract for electrical work formed directly between an Electrician and a Customer.",
          ],
        },
      ],
    },
    {
      id: "the-service",
      heading: "3. The Services and the Role of the Parties",
      blocks: [
        {
          kind: "p",
          text: `${legalEntity.tradeName} invests in advertising and customer acquisition, speaks with prospective Customers, qualifies and schedules their electrical service requests, and delivers the resulting Appointments to independent licensed Electricians by text message. Our role is to market, qualify, schedule, and route Appointments, and to operate the platform that supports those functions.`,
        },
        {
          kind: "p",
          text: "The electrical work itself is performed solely by the Electrician who accepts an Appointment. Electricians are independent businesses, not our employees, agents, partners, or joint venturers, and nothing in these Terms creates an employment, agency, partnership, or franchise relationship. Each Electrician controls its own methods, tools, pricing, personnel, schedule, and business operations.",
        },
        {
          kind: "p",
          text: "The Service Agreement for any electrical work is formed directly between the Customer and the Electrician. We are not a party to it. We do not perform, supervise, direct, warrant, or guarantee any electrical work, and we do not set the price the Electrician charges the Customer. Any dispute about the quality, timeliness, price, workmanship, or warranty of electrical work is between the Customer and the Electrician, although we may choose to assist informally.",
        },
        {
          kind: "p",
          text: "We do not guarantee that any minimum number of Appointments will be available in any market or period, that any Appointment will result in a signed job, or that any Customer will proceed with the work.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "4. Eligibility and Accounts",
      blocks: [
        {
          kind: "p",
          text: "You must be at least eighteen (18) years old and able to form a binding contract to use the Services. Electricians must additionally hold every license, registration, and permit required to perform electrical work in each jurisdiction where they accept Appointments, and must maintain the insurance coverage we require.",
        },
        {
          kind: "p",
          text: "You agree to provide accurate, current, and complete information when you register and to keep it updated. You are responsible for all activity under your account and for keeping your credentials and your designated mobile device secure. Notify us immediately of any unauthorized use. We may refuse, suspend, or terminate any account or application at our discretion, including where verification fails or information proves inaccurate.",
        },
      ],
    },
    {
      id: "electrician-obligations",
      heading: "5. Electrician Obligations",
      blocks: [
        { kind: "p", text: "If you participate in our network as an Electrician, you represent, warrant, and agree that you will:" },
        {
          kind: "numbered",
          items: [
            "Hold and maintain in good standing all electrical licenses, contractor registrations, business licenses, and permits required in every jurisdiction where you accept Appointments, and promptly notify us of any lapse, suspension, revocation, citation, or disciplinary action.",
            "Maintain general liability insurance, and workers' compensation coverage where required by law, at limits no less than those we specify, and provide current certificates on request.",
            "Perform all work in a professional and workmanlike manner, in compliance with the National Electrical Code, all applicable state and local codes, manufacturer installation requirements, and all applicable laws and safety regulations.",
            "Obtain and pay for all permits and inspections required for the work, and not represent that permits are unnecessary when they are required.",
            "Provide the Customer with your own written estimate or contract, including any disclosures, warranty terms, and cancellation rights required by applicable state home-improvement or consumer-protection law.",
            "Perform accepted Appointments yourself or through your own properly licensed and insured personnel, and not assign, resell, broker, or subcontract an Appointment to another contractor without our prior written consent.",
            "Arrive within the scheduled window, or give us and the Customer prompt notice when you cannot, and communicate professionally and honestly with Customers at all times.",
            "Be solely responsible for your own taxes, employment obligations, tools, vehicles, licensing costs, and business expenses, and for classifying and paying your own personnel.",
            "Not use an Appointment or Customer information for any purpose other than performing that Appointment, as further described in Sections 18 and 19.",
          ],
        },
        {
          kind: "p",
          text: "You are solely responsible for your work and your business. Nothing we do -- including any verification of your license or insurance, any training we facilitate, or any priority we assign to you -- constitutes an endorsement, certification, or assumption of responsibility for your work.",
        },
      ],
    },
    {
      id: "appointments",
      heading: "6. Appointments, Offers, and Acceptance",
      blocks: [
        {
          kind: "p",
          text: "When an Appointment matching your trade and service radius becomes available, we send you a text message describing the service type, the approximate distance, and the scheduled date and time window. You may accept by replying as instructed in the message. Appointment offers are time-limited and may be withdrawn or offered to another Electrician if you do not respond within the stated window or if the Customer cancels or reschedules.",
        },
        {
          kind: "p",
          text: "Accepting an Appointment creates a binding commitment to attend it at the scheduled time and, upon acceptance, obligates you to pay the applicable Referral Fee under Section 8. After acceptance we provide the Customer's name, service address, and telephone number.",
        },
        {
          kind: "p",
          text: "We qualify and schedule Appointments in good faith based on information Customers give us, but we do not warrant the accuracy or completeness of that information, the condition of any property, the scope of work ultimately required, or that a Customer will be present, ready, or willing to proceed. You are responsible for confirming actual site conditions and scope before quoting or performing work.",
        },
        {
          kind: "p",
          text: "Repeated failure to attend accepted Appointments, late cancellations, no-shows, or patterns of Customer complaints may result in reduced priority, suspension, or termination under Section 20.",
        },
      ],
    },
    {
      id: "membership",
      heading: "7. Memberships, Billing, and Automatic Renewal",
      blocks: [
        {
          kind: "p",
          text: "We offer membership tiers, which may include a free tier and paid tiers, with the features and prices presented at the point of enrollment. The prices, inclusions, and any promotional terms shown at enrollment control over any general description elsewhere on our site.",
        },
        {
          kind: "list",
          items: [
            "Automatic renewal: paid memberships are subscriptions that renew automatically each billing period until cancelled. By enrolling, you authorize us and our payment processor to charge your payment method the then-current fee, plus applicable taxes, at the start of each period on a recurring basis.",
            "Free trials and promotions: if you enroll with a free or discounted introductory period, your membership converts automatically to the standard recurring price at the end of that period unless you cancel before it ends.",
            "Cancellation: you may cancel at any time using the method we designate or by contacting us. Cancellation takes effect at the end of the current billing period. You retain access until then.",
            "Refunds: membership fees are non-refundable, and we do not provide partial-period refunds, except where a refund is required by applicable law or where we choose to grant one at our discretion.",
            "Price changes: we may change membership prices or features on at least thirty (30) days' advance notice. The change applies at your next renewal, and continuing after it takes effect constitutes acceptance. If you do not agree, cancel before the change takes effect.",
            "Failed payments: if a payment is declined, we may retry it, suspend your access, and pursue the amount owed. You agree to keep a valid payment method on file while your membership is active.",
            "Taxes: fees exclude sales, use, and similar taxes, which are your responsibility unless we are required to collect them.",
          ],
        },
        {
          kind: "p",
          text: "Membership does not entitle you to any specific number of Appointments. Higher tiers may affect priority and access to certain Appointment types, but never guarantee volume, revenue, or particular jobs.",
        },
      ],
    },
    {
      id: "referral-fees",
      heading: "8. Referral Fees and Payment",
      blocks: [
        {
          kind: "p",
          text: "In addition to any membership fee, Electricians owe a Referral Fee for each accepted Appointment. The Referral Fee for an Appointment is disclosed to you before you accept it, and that disclosed amount controls.",
        },
        {
          kind: "p",
          text: "Customers pay Electricians directly for electrical work. We do not collect, hold, escrow, or disburse Customer funds for the work, and we do not process Customer payments to Electricians. After an Appointment, we invoice you for the Referral Fee.",
        },
        {
          kind: "list",
          items: [
            `Invoicing and terms: Referral Fees are invoiced following the Appointment and are due within ${INVOICE_DUE_DAYS} days of the invoice date, or on the schedule stated in the invoice.`,
            "Late amounts: past-due balances may accrue interest at the lesser of one and one-half percent (1.5%) per month or the maximum rate permitted by applicable law, and you are responsible for reasonable costs of collection, including attorneys' fees, to the extent permitted by law.",
            "Suspension for non-payment: we may suspend Appointment delivery and your account while amounts remain past due.",
            "Billing disputes: notify us in writing within thirty (30) days of an invoice date if you dispute a charge, with the reason and supporting detail. Charges not disputed within that period are deemed accepted. We will review disputes in good faith.",
            "Cancellations and no-shows: if a Customer cancels before the Appointment, or fails to appear, we will waive or credit the Referral Fee in accordance with our then-current cancellation policy. Report Customer no-shows promptly so we can verify them.",
            "Fees are earned for the referral: except as stated above, the Referral Fee is earned when you accept the Appointment and is not contingent on whether the Customer ultimately signs a contract, on the size of the job, or on your profitability.",
          ],
        },
      ],
    },
    {
      id: "referral-compliance",
      heading: "9. Referral Fee Compliance With State Law",
      blocks: [
        {
          kind: "p",
          text: "Some states and local jurisdictions regulate, limit, or prohibit the payment or receipt of referral, finder's, or lead-generation fees involving licensed trades, or impose registration, disclosure, or fee-structure requirements on companies that arrange work for licensed contractors.",
        },
        {
          kind: "p",
          text: "All Referral Fees and other amounts under these Terms are payable only to the extent permitted by applicable law. If a Referral Fee arrangement is prohibited, capped, or otherwise restricted in a jurisdiction, then in that jurisdiction the arrangement will be automatically modified to the minimum extent necessary to comply, or suspended if compliance is not possible, and neither party will be obligated to make or accept a payment that applicable law forbids.",
        },
        {
          kind: "p",
          text: "Each party is responsible for its own compliance with the laws applicable to it. You agree to notify us promptly if you believe a Referral Fee or any part of this arrangement conflicts with a licensing or fee-splitting rule in a jurisdiction where you operate, and to cooperate with us in modifying the arrangement for that jurisdiction. Nothing in these Terms requires either party to act unlawfully.",
        },
      ],
    },
    {
      id: "no-guarantee",
      heading: "10. No Earnings or Results Guarantee",
      blocks: [
        {
          kind: "callout",
          title: "Results vary and are not guaranteed",
          text: "Any earnings figures, income growth percentages, job values, revenue examples, testimonials, case studies, or performance statistics shown on our site or in our marketing are illustrative reports of what particular Electricians have experienced. They are not typical results, not averages, not projections, and not a promise or guarantee of what you will earn.",
        },
        {
          kind: "p",
          text: "Your results depend on factors outside our control, including your licensing and capacity, pricing, sales ability, responsiveness, service quality, crew size, overhead, local demand and competition, seasonality, and general economic conditions. Many Electricians earn less than the examples shown, and some earn nothing.",
        },
        {
          kind: "p",
          text: "We make no representation, warranty, or guarantee regarding the number of Appointments you will receive, the value of any job, your conversion or close rate, your revenue, your profit, or any return on your membership fees. You are solely responsible for your own business decisions and results, and you should not enroll in any membership tier based on an expectation of specific earnings.",
        },
      ],
    },
    {
      id: "service-area",
      heading: "11. Service Areas and Network Capacity",
      blocks: [
        {
          kind: "p",
          text: "We generally limit the number of Electricians we onboard in a given service area so that participating Electricians see a meaningful volume of Appointments. Any stated limit is a description of our current onboarding practice, not a contractual grant of exclusivity, territory, or protected market.",
        },
        {
          kind: "p",
          text: "We may add, reduce, redraw, combine, or discontinue service areas, and may adjust how many Electricians participate in any area, at our discretion and without liability to you. You receive no exclusive right to any geography, Customer, Appointment type, or referral source, and nothing in these Terms is a franchise, distributorship, or exclusive dealership.",
        },
      ],
    },
    {
      id: "customer-terms",
      heading: "12. Terms for Customers",
      blocks: [
        { kind: "p", text: "If you request electrical services through us as a Customer, you agree that:" },
        {
          kind: "list",
          items: [
            "You will provide accurate information about your property, the work you want, and your contact details, and you have authority to authorize work at the property.",
            "You understand that we book and schedule the Appointment, and that the electrical work is performed by an independent licensed Electrician who is not our employee or agent.",
            "You will contract directly with the Electrician for the work, and you will review and agree to that Electrician's own estimate, contract, pricing, and warranty terms before work begins.",
            "You consent to our disclosing your name, service address, and telephone number to the Electrician who accepts your Appointment, as described in our Privacy Policy.",
            "You will be present or arrange access at the scheduled time, and you will notify us promptly if you need to cancel or reschedule.",
            "Any dispute about the work, its price, or its warranty is between you and the Electrician. You may tell us about a problem and we may try to help informally, but we are not responsible for the Electrician's work.",
          ],
        },
        {
          kind: "p",
          text: "Nothing in these Terms limits any non-waivable right you have under applicable consumer-protection or home-improvement law, including any statutory right to cancel a home-improvement contract.",
        },
      ],
    },
    {
      id: "sms-terms",
      heading: "13. Text Message Program Terms",
      blocks: [
        {
          kind: "p",
          text: "The Services depend on text messaging. By providing your mobile number and enrolling, you give prior express consent to receive recurring automated text messages from us at that number, including messages sent with an automatic telephone dialing system. Consent to receive marketing texts is not a condition of purchasing any goods or services.",
        },
        {
          kind: "list",
          items: [
            "Message frequency is recurring and varies with Appointment volume in your area and your membership tier.",
            "Message and data rates may apply according to your mobile carrier plan.",
            "Reply STOP to any message to opt out; you will receive a single confirmation message. Reply HELP for assistance.",
            "Because Appointments are delivered by text, opting out ends your ability to receive Appointments and may effectively end your participation in the network.",
            "Participating carriers are not liable for delayed or undelivered messages.",
            "You must notify us promptly if you give up or change your mobile number, and you agree not to enroll a number you are not authorized to use.",
          ],
        },
        {
          kind: "p",
          text: "You consent to receive account, billing, legal, and transactional notices electronically, by text or email, and agree that those electronic communications satisfy any legal requirement that a notice be in writing.",
        },
      ],
    },
    {
      id: "acceptable-use",
      heading: "14. Acceptable Use",
      blocks: [
        { kind: "p", text: "You agree not to:" },
        {
          kind: "list",
          items: [
            "Use the Services for any unlawful, fraudulent, deceptive, or harmful purpose, or to perform work you are not licensed to perform.",
            "Provide false, misleading, or fraudulent information, impersonate anyone, or misrepresent your licensing, insurance, credentials, affiliation, or capacity.",
            "Accept Appointments you do not intend to attend, manipulate the Appointment or priority system, or create multiple or duplicate accounts to obtain additional Appointments.",
            "Scrape, crawl, harvest, reverse engineer, decompile, or attempt to derive the source code or structure of the Services, or use bots or automated means to access them.",
            "Interfere with or disrupt the Services or their infrastructure, introduce malware, probe for vulnerabilities, or attempt unauthorized access to any system or account.",
            "Harass, threaten, defame, or discriminate against any Customer, Electrician, or our personnel, or violate any anti-discrimination or fair-housing law.",
            "Solicit Customers for goods or services unrelated to the accepted Appointment, add them to marketing lists, or sell, share, or transfer their information.",
            "Copy, reproduce, or use our content, branding, or platform to build or operate a competing service.",
            "Use the Services in violation of the Telephone Consumer Protection Act, the CAN-SPAM Act, or any other communications or privacy law.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "15. Intellectual Property",
      blocks: [
        {
          kind: "p",
          text: `The Services, including all software, text, graphics, photographs, layouts, compilations, appointment data, and the ${legalEntity.tradeName} name and logo, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. We grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for their intended purpose while your account is in good standing. All rights not expressly granted are reserved.`,
        },
        {
          kind: "p",
          text: "You may not use our name, logo, or branding to imply that we endorse, employ, certify, or guarantee you or your work, and you may not represent yourself as us. Any permitted use of our branding must follow the guidelines we provide, and this license ends when your participation ends.",
        },
      ],
    },
    {
      id: "third-party-brands",
      heading: "16. Third-Party Brands and Non-Affiliation",
      blocks: [
        {
          kind: "callout",
          title: "We are independent of the vehicle and equipment manufacturers we reference",
          text: `${legalEntity.tradeName} is not affiliated with, authorized by, sponsored by, endorsed by, or in any way officially connected with Tesla, Inc., or with any other vehicle, charger, battery, or electrical equipment manufacturer, including but not limited to Ford, General Motors, Chevrolet, BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Toyota, Lexus, Nissan, Kia, Subaru, Jaguar, Land Rover, Rivian, Lucid, Polestar, Rolls-Royce, Maserati, Chrysler, Jeep, Ram, Fiat, or Alfa Romeo.`,
        },
        {
          kind: "p",
          text: "All product names, logos, trademarks, service marks, and brands referenced on the Services are the property of their respective owners. We reference them solely to describe the types of vehicles and equipment that electrical installations may involve, and to identify compatible equipment. That reference is nominative and descriptive, and does not imply any partnership, agency, certification, authorization, warranty, or endorsement by the trademark owner.",
        },
        {
          kind: "p",
          text: "Any reference to manufacturer training, certification, or program access describes training or program materials that may be made available to Electricians. It is not a representation that we are an authorized dealer, installer, certifier, or service provider for any manufacturer, and it does not confer manufacturer certification unless the manufacturer itself grants it under its own program terms. Equipment warranties are provided solely by the manufacturer under its own terms, and we make no manufacturer warranty of any kind.",
        },
      ],
    },
    {
      id: "feedback",
      heading: "17. Reviews, Testimonials, and Feedback",
      blocks: [
        {
          kind: "p",
          text: "If you submit a review, testimonial, photograph, rating, comment, suggestion, or other content to us, you grant us a worldwide, perpetual, irrevocable, royalty-free, sublicensable license to use, reproduce, modify, adapt, publish, and display it in connection with our business and marketing, and you waive any right of attribution or approval. You represent that you own or control the rights to what you submit, that it is truthful and reflects your honest experience, and that it does not infringe anyone's rights or include a third party's personal information without their consent.",
        },
        {
          kind: "p",
          text: "We may use ideas or suggestions you send us for any purpose without compensation or obligation to you. We do not offer compensation in exchange for positive reviews, and you may not post a review that misrepresents your experience.",
        },
      ],
    },
    {
      id: "confidentiality",
      heading: "18. Customer Information and Confidentiality",
      blocks: [
        {
          kind: "p",
          text: "Customer names, addresses, telephone numbers, property details, and job specifics disclosed to you through the Services are confidential and are provided to you for the sole purpose of performing the specific accepted Appointment.",
        },
        {
          kind: "numbered",
          items: [
            "You will use Customer information only to perform that Appointment and to satisfy your own legal recordkeeping and warranty obligations for the work you performed.",
            "You will not sell, rent, license, share, publish, or otherwise transfer Customer information to any third party.",
            "You will not add Customers to marketing, email, or text-message lists, or market unrelated goods or services to them, except with the Customer's own separate, legally valid consent obtained independently of the information we gave you.",
            "You will protect Customer information with reasonable administrative, technical, and physical safeguards, restrict access to personnel who need it, and comply with all applicable privacy, data-security, and communications laws.",
            "You will notify us without undue delay, and in any event within seventy-two (72) hours, of any unauthorized access to or disclosure of Customer information you received from us, and will cooperate with our response.",
            "Unauthorized use or disclosure of Customer information is a material breach of these Terms and may result in immediate termination, in addition to any other remedy available to us.",
          ],
        },
        {
          kind: "p",
          text: "You acknowledge that a breach of this section may cause harm for which monetary damages are inadequate, and that we may seek injunctive relief in addition to any other remedy, without waiving the arbitration provisions in Section 24.",
        },
      ],
    },
    {
      id: "non-circumvention",
      heading: "19. Non-Circumvention",
      blocks: [
        {
          kind: "p",
          text: "You agree not to structure, divert, or characterize an Appointment or the resulting work in order to avoid a Referral Fee. This includes cancelling or declining an Appointment and then performing the same or substantially similar work for that Customer outside the Services, arranging for an affiliate, employee, relative, or other business to perform it, or asking a Customer to contact you directly for the work instead of proceeding through the Appointment.",
        },
        {
          kind: "p",
          text: `For twelve (12) months after we first disclose a Customer to you, any electrical work you or your affiliates perform for that Customer at the property identified in the Appointment, for the scope of work described in the Appointment, is presumed to arise from the Appointment and remains subject to the applicable Referral Fee. This does not restrict work for a Customer who independently contacted you before we disclosed them to you, and it does not prevent you from performing genuinely unrelated additional work that the Customer requests, or from serving any Customer after that period. We may request reasonable documentation to verify compliance with this section.`,
        },
        {
          kind: "p",
          text: "This section is a payment-protection term, not a restraint on your right to work. It does not limit whom you may serve; it only determines when a Referral Fee is owed.",
        },
      ],
    },
    {
      id: "termination",
      heading: "20. Term, Suspension, and Termination",
      blocks: [
        {
          kind: "p",
          text: "These Terms apply while you use the Services. You may stop using the Services at any time, and Electricians may cancel a membership as described in Section 7.",
        },
        {
          kind: "p",
          text: "We may suspend or terminate your access, membership, or participation at any time, with or without cause and with or without notice, including if you breach these Terms, fail to maintain required licensing or insurance, fail to pay amounts owed, misuse Customer information, generate repeated Customer complaints, or if we discontinue the Services or exit your market. Where practical, we will give you advance notice and an opportunity to cure a curable breach.",
        },
        {
          kind: "p",
          text: "On termination, your license to use the Services ends immediately, you must stop representing any affiliation with us, and you must return or destroy Customer information except what you must retain for legal or warranty purposes. Termination does not relieve you of the obligation to pay amounts already owed, to complete Appointments you already accepted, or to honor warranty obligations to Customers for work you performed. Sections 8, 9, 10, 14 through 19, and 21 through 27 survive termination, along with any provision that by its nature should survive.",
        },
      ],
    },
    {
      id: "disclaimers",
      heading: "21. Disclaimer of Warranties",
      blocks: [
        {
          kind: "p",
          text: "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED, AND STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, AND NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.",
        },
        {
          kind: "p",
          text: "WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; THAT ANY TEXT MESSAGE WILL BE DELIVERED, DELIVERED ON TIME, OR RECEIVED; THAT APPOINTMENT INFORMATION WILL BE ACCURATE OR COMPLETE; THAT ANY MINIMUM VOLUME OF APPOINTMENTS WILL BE AVAILABLE; OR THAT ANY APPOINTMENT WILL RESULT IN A SIGNED JOB OR ANY REVENUE.",
        },
        {
          kind: "p",
          text: "WE MAKE NO WARRANTY REGARDING ANY ELECTRICIAN OR ANY ELECTRICAL WORK, INCLUDING ITS QUALITY, SAFETY, LEGALITY, CODE COMPLIANCE, TIMELINESS, OR PRICE, AND NO WARRANTY REGARDING THE CONDUCT, SOLVENCY, HONESTY, OR CREDENTIALS OF ANY CUSTOMER OR ELECTRICIAN. ANY VERIFICATION WE PERFORM IS FOR OUR OWN PURPOSES AND IS NOT A GUARANTEE, CERTIFICATION, OR ENDORSEMENT.",
        },
        {
          kind: "p",
          text: "Some jurisdictions do not allow the exclusion of certain warranties, so some of these exclusions may not apply to you. In that case, such warranties are limited to the minimum duration and scope permitted by law.",
        },
      ],
    },
    {
      id: "liability",
      heading: "22. Limitation of Liability",
      blocks: [
        {
          kind: "p",
          text: "TO THE FULLEST EXTENT PERMITTED BY LAW, NEITHER WE NOR OUR OFFICERS, DIRECTORS, MEMBERS, EMPLOYEES, AGENTS, OR SUPPLIERS WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOST PROFITS, LOST REVENUE, LOST BUSINESS, LOST OPPORTUNITY, LOSS OF GOODWILL, OR LOSS OF DATA, ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR ANY OTHER THEORY, AND EVEN IF WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
        },
        {
          kind: "p",
          text: "TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID US IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100).",
        },
        {
          kind: "p",
          text: "WE ARE NOT LIABLE FOR ANY ACT OR OMISSION OF ANY ELECTRICIAN OR CUSTOMER, INCLUDING ANY PROPERTY DAMAGE, PERSONAL INJURY, FIRE, ELECTRICAL FAILURE, CODE VIOLATION, DEFECTIVE OR INCOMPLETE WORK, THEFT, MISCONDUCT, OR BREACH OF CONTRACT ARISING FROM ANY SERVICE AGREEMENT OR ANY WORK PERFORMED AT A PROPERTY, NOR FOR ANY UNDELIVERED OR DELAYED TEXT MESSAGE OR ANY CARRIER FAILURE.",
        },
        {
          kind: "p",
          text: "These limitations apply even if a remedy fails of its essential purpose, and they allocate risk between the parties as a basis of the bargain. Some jurisdictions do not allow certain limitations, including limitations on liability for death or personal injury caused by negligence, gross negligence, fraud, or willful misconduct; in those jurisdictions our liability is limited to the least amount permitted by law.",
        },
      ],
    },
    {
      id: "indemnification",
      heading: "23. Indemnification",
      blocks: [
        {
          kind: "p",
          text: `You agree to defend, indemnify, and hold harmless ${legalEntity.tradeName}, its affiliates, and their respective officers, directors, members, employees, and agents from and against any claim, demand, action, investigation, loss, liability, damage, judgment, settlement, fine, penalty, cost, or expense, including reasonable attorneys' fees, arising out of or relating to:`,
        },
        {
          kind: "numbered",
          items: [
            "Your use of or access to the Services.",
            "Your breach or alleged breach of these Terms, including any representation or warranty you made.",
            "Any electrical work you performed, failed to perform, or performed defectively, including any resulting property damage, personal injury, death, fire, code violation, or failed inspection.",
            "Any Service Agreement or other contract or dispute between you and a Customer or between you and an Electrician.",
            "Your violation of any law or regulation, including licensing, permitting, tax, employment, worker-classification, consumer-protection, privacy, and communications laws.",
            "Your misuse or unauthorized disclosure of Customer information.",
            "Your infringement or misappropriation of any third party's intellectual property or other rights.",
          ],
        },
        {
          kind: "p",
          text: "We may assume the exclusive defense and control of any matter subject to indemnification, at your expense, and you agree to cooperate with that defense. You may not settle any matter in a way that imposes an obligation or admission on us without our prior written consent.",
        },
      ],
    },
    {
      id: "arbitration",
      heading: "24. Dispute Resolution and Binding Arbitration",
      blocks: [
        {
          kind: "callout",
          title: "Read this section carefully -- it affects how disputes are resolved",
          text: "This section requires you and us to resolve most disputes by binding individual arbitration instead of in court. You waive your right to a jury trial and your right to participate in a class, collective, consolidated, or representative action. You may opt out within thirty (30) days under Section 24.7.",
        },
        { kind: "subheading", text: "24.1 Informal resolution first" },
        {
          kind: "p",
          text: `Before starting an arbitration or lawsuit, you agree to try to resolve the dispute informally. Send a written notice describing the dispute, the relief you seek, and your contact information to ${legalEntity.legalEmail} or to the address in Section 27. The parties will negotiate in good faith for sixty (60) days from receipt. This period is a condition precedent to starting a proceeding, and it tolls any applicable limitations period.`,
        },
        { kind: "subheading", text: "24.2 Agreement to arbitrate" },
        {
          kind: "p",
          text: "If informal resolution fails, you and we agree that any dispute, claim, or controversy arising out of or relating to the Services, these Terms, our marketing, or the relationship between us -- whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and whether arising before or during these Terms -- will be resolved by final and binding individual arbitration, and not in court. This agreement to arbitrate is governed by the Federal Arbitration Act.",
        },
        { kind: "subheading", text: "24.3 Exceptions" },
        {
          kind: "p",
          text: "Either party may bring an individual action in small-claims court if it qualifies, and either party may seek injunctive or other equitable relief in a court of competent jurisdiction to protect intellectual property or confidential information, including Customer information under Section 18. Nothing here prevents you from reporting a concern to a government agency.",
        },
        { kind: "subheading", text: "24.4 Arbitration procedure" },
        {
          kind: "p",
          text: `Arbitration will be administered by the American Arbitration Association ("AAA") under its rules in effect when the arbitration begins -- the Consumer Arbitration Rules where they apply, and otherwise the Commercial Arbitration Rules -- as modified by these Terms. The arbitration will be before a single arbitrator, and will take place in ${legalEntity.venueCounty}, or, at your election if you are a consumer, in the county where you reside, or by telephone or video, or on documents only. The arbitrator has exclusive authority to resolve all issues of arbitrability, scope, enforceability, and the merits, except that a court decides whether Section 24.5 has been violated. The arbitrator may award any relief a court could award on an individual basis, must apply these Terms, and must issue a written reasoned decision. Judgment on the award may be entered in any court of competent jurisdiction.`,
        },
        { kind: "subheading", text: "24.5 Class action and jury trial waiver" },
        {
          kind: "p",
          text: "ARBITRATION AND ANY PERMITTED COURT PROCEEDING WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS. YOU AND WE WAIVE THE RIGHT TO A TRIAL BY JURY AND THE RIGHT TO BRING, JOIN, OR PARTICIPATE IN ANY CLASS, COLLECTIVE, CONSOLIDATED, PRIVATE ATTORNEY GENERAL, OR REPRESENTATIVE ACTION. The arbitrator may not consolidate claims of more than one person or preside over any representative or class proceeding without the written consent of all parties. If this paragraph is found unenforceable as to a particular claim or request for relief, that claim or request will be severed and heard in court, and the remainder will proceed in arbitration.",
        },
        { kind: "subheading", text: "24.6 Arbitration costs" },
        {
          kind: "p",
          text: "Payment of filing, administration, and arbitrator fees will be governed by the applicable AAA rules. If you are a consumer and demonstrate that the costs of arbitration are prohibitive compared with litigation, we will pay as much of your filing and arbitrator fees as the arbitrator deems necessary to prevent the arbitration from being cost-prohibitive. Each party otherwise bears its own attorneys' fees unless a statute or the arbitrator's award provides otherwise.",
        },
        { kind: "subheading", text: "24.7 Your right to opt out" },
        {
          kind: "p",
          text: `You may reject this arbitration agreement by sending written notice within thirty (30) days after you first accept these Terms. The notice must include your name, the email and mobile number associated with your account, and a clear statement that you decline arbitration, and must be sent to ${legalEntity.legalEmail} with the subject line "Arbitration Opt-Out," or by mail to the address in Section 27. Opting out affects only arbitration; the rest of these Terms, including the jury-trial and class-action waivers to the extent otherwise enforceable in court, continue to apply. Opting out will not adversely affect your account or relationship with us.`,
        },
        { kind: "subheading", text: "24.8 Changes and survival" },
        {
          kind: "p",
          text: "If we materially amend this Section 24, you may reject the amendment within thirty (30) days of notice, in which case the version in effect immediately before the amendment will govern disputes that arose before it. This Section 24 survives termination of these Terms and any closure of your account.",
        },
      ],
    },
    {
      id: "governing-law",
      heading: "25. Governing Law and Venue",
      blocks: [
        {
          kind: "p",
          text: `These Terms and any dispute arising out of or relating to them or the Services are governed by the laws of the State of ${legalEntity.state}, excluding its conflict-of-laws rules, and by the Federal Arbitration Act as to Section 24. The United Nations Convention on Contracts for the International Sale of Goods does not apply.`,
        },
        {
          kind: "p",
          text: `For any dispute not subject to arbitration, you and we consent to the exclusive jurisdiction and venue of the state and federal courts located in ${legalEntity.venueCounty}, and waive any objection based on inconvenient forum or lack of personal jurisdiction. This choice of law and venue does not deprive you of the protection of any mandatory consumer-protection law of the state where you reside that cannot be waived by agreement.`,
        },
      ],
    },
    {
      id: "changes-terms",
      heading: "26. Changes to These Terms",
      blocks: [
        {
          kind: "p",
          text: "We may modify these Terms at any time. When we do, we will update the \"Last updated\" date above and, for material changes, provide additional notice such as an email, a text message, or a notice on the Services before the change takes effect. Material changes take effect no sooner than thirty (30) days after notice, except that changes required for legal or security reasons may take effect immediately.",
        },
        {
          kind: "p",
          text: "Your continued use of the Services after a change takes effect constitutes acceptance of the revised Terms. If you do not agree, you must stop using the Services and, if applicable, cancel your membership before the change takes effect. Changes do not apply retroactively to a dispute of which we had notice before the change.",
        },
      ],
    },
    {
      id: "general",
      heading: "27. General Provisions",
      blocks: [
        {
          kind: "list",
          items: [
            "Entire agreement: these Terms, the Privacy Policy, and any membership or order terms you accept form the entire agreement between you and us on this subject and supersede all prior discussions, proposals, and understandings, including any statement made in our marketing.",
            "No reliance: except as expressly stated here, you have not relied on any representation, promise, projection, or earnings statement in deciding to use the Services.",
            "Severability: if any provision is found unenforceable, it will be modified to the minimum extent necessary or severed, and the remaining provisions will stay in full force.",
            "No waiver: our failure to enforce a provision is not a waiver of our right to enforce it later, and any waiver must be in writing to be effective.",
            "Assignment: you may not assign or transfer these Terms or your account without our prior written consent, and any attempt to do so is void. We may assign these Terms without restriction, including in connection with a merger, acquisition, or sale of assets.",
            "Independent contractors: the parties are independent contractors. These Terms create no employment, agency, partnership, joint venture, or franchise relationship, and neither party may bind the other.",
            "Force majeure: neither party is liable for any delay or failure to perform caused by events beyond its reasonable control, including natural disasters, severe weather, fire, war, civil unrest, labor disputes, epidemic, government action, utility or carrier failure, or Internet or telecommunications outage. Payment obligations already incurred are not excused.",
            "No third-party beneficiaries: these Terms create no rights in any person who is not a party, except that our affiliates and personnel may enforce Sections 21 through 23.",
            `Notices: we may give notice by email or text to the contact details on your account, or by posting on the Services. You must send legal notices in writing to ${legalEntity.name} at ${legalEntity.address}, with a copy to ${legalEntity.legalEmail}.`,
            "Headings and interpretation: headings are for convenience only. \"Including\" means \"including without limitation,\" and these Terms will not be construed against the drafter.",
            "Electronic contracting: you consent to contract electronically and agree that your electronic acceptance, including replying to a text message as instructed, has the same legal effect as a handwritten signature.",
          ],
        },
      ],
    },
    {
      id: "terms-contact",
      heading: "28. Contact Us",
      blocks: TERMS_CONTACT_BLOCK,
    },
  ],
}
