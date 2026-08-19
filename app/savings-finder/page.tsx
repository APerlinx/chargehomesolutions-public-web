import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CoverageBand, IncentivesChecked } from "@/components/savings-finder/coverage"
import { LongTail, StackIllustrated, WhyCheckFirst } from "@/components/savings-finder/explainer"
import { FinderPanel } from "@/components/savings-finder/finder-panel"
import { FinderCta, FinderFaq, PathToInstall } from "@/components/savings-finder/next-steps"
import { coverage } from "@/lib/savings-finder"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Savings Finder: Free EV, Powerwall & Electrical Rebate Finder",
  description:
    "Find every EV charger, Powerwall and electrical rebate you qualify for. State, utility and federal programs matched to your address, free.",
  alternates: { canonical: "/savings-finder" },
  openGraph: {
    title: `Savings Finder — ${site.name}`,
    description:
      "State, utility and federal rebates for EV chargers, batteries and panel upgrades, matched to your address.",
    type: "website",
  },
}

export default function SavingsFinderPage() {
  return (
    <>
      <SiteHeader />
      <div
        aria-hidden="true"
        className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]"
      />
      <main>
      <section aria-labelledby="finder-heading" className="bg-background pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:pt-6">
              <p className="label-mono text-primary">Free tool</p>
              <h1
                id="finder-heading"
                className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl"
              >
                Savings Finder
              </h1>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Find every EV charger, Powerwall and electrical rebate you qualify for — state, utility, and the federal
                programs that remain, in one place.
              </p>

              <p className="label-mono mt-8 text-muted-foreground">
                {coverage.programs} programs · {coverage.states} states · Verified {coverage.verified}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={site.consultationHref}
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-[0.9375rem] font-semibold text-foreground transition-colors hover:border-foreground"
                >
                  Book a free consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-mono text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </div>

            <FinderPanel />
          </div>
        </div>
      </section>

      <CoverageBand />
      <IncentivesChecked />
      <WhyCheckFirst />
      <StackIllustrated />
      <LongTail />
      <PathToInstall />
      <FinderFaq />
      <FinderCta />
      </main>
      <SiteFooter />
    </>
  )
}
