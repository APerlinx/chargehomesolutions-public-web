import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { rebateStateList, rebateTotals, REBATES_VERIFIED } from '@/lib/rebates'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EV Charger, Battery & Electrical Rebates by State',
  description: `Browse ${rebateTotals.programs} state, utility and federal rebate programs across ${rebateTotals.states} states for EV chargers, home batteries and panel upgrades. Verified ${REBATES_VERIFIED}.`,
  alternates: { canonical: '/rebates' },
  openGraph: {
    title: `Rebates & Incentives by State — ${site.name}`,
    description:
      'State, utility and federal rebates for EV chargers, batteries and panel upgrades — browse by state.',
    type: 'website',
  },
}

export default function RebatesIndexPage() {
  const states = rebateStateList()

  return (
    <>
      <SiteHeader />
      <div
        aria-hidden="true"
        className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]"
      />
      <main>
        <section className="bg-muted pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <p className="label-mono text-primary">Rebates &amp; incentives</p>
            <h1 className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl">
              Rebates by state
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The state, utility and federal programs that pay you back on EV
              chargers, home batteries and panel upgrades. Pick your state to
              see every program we track — each with a link to the official
              page.
            </p>
            <p className="label-mono mt-8 text-muted-foreground">
              {rebateTotals.programs} programs · {rebateTotals.states} states ·
              Verified {REBATES_VERIFIED}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/savings-finder"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Check my address
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
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
        </section>

        <section className="bg-background pb-20 pt-8 lg:pb-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {states.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/rebates/${s.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-foreground"
                  >
                    <span className="font-medium text-foreground">
                      {s.state}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                        {s.count}
                      </span>
                      <ChevronRight
                        className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
