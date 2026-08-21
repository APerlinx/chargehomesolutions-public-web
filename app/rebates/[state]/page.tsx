import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChevronRight, Phone, ShieldCheck } from 'lucide-react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { RebateCard } from '@/components/rebates/rebate-card'
import { getStateRebates, rebates, REBATES_VERIFIED } from '@/lib/rebates'
import { site } from '@/lib/site'

type Params = { state: string }

export function generateStaticParams(): Params[] {
  return rebates.map((s) => ({ state: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { state } = await params
  const data = getStateRebates(state)
  if (!data) return {}
  const title = `${data.state} EV Charger, Battery & Electrical Rebates (${new Date().getFullYear()})`
  const description = `${data.programs.length} state, utility and federal rebate programs for EV chargers, batteries and panel upgrades in ${data.state}. Verified ${REBATES_VERIFIED}.`
  return {
    title,
    description,
    alternates: { canonical: `/rebates/${data.slug}` },
    openGraph: {
      title: `${data.state} Rebates — ${site.name}`,
      description,
      type: 'website',
    },
  }
}

export default async function StateRebatesPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { state } = await params
  const data = getStateRebates(state)
  if (!data) notFound()

  return (
    <>
      <SiteHeader />
      <div
        aria-hidden="true"
        className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]"
      />
      <main>
        <section className="bg-muted pt-14 pb-16 lg:pt-16 lg:pb-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="label-mono flex items-center gap-1.5 text-muted-foreground"
            >
              <Link
                href="/rebates"
                className="transition-colors hover:text-foreground"
              >
                Rebates
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-foreground">{data.state}</span>
            </nav>

            <h1 className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
              {data.state} rebates &amp; incentives
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Every state, utility and federal program we track for EV chargers,
              home batteries and panel upgrades in {data.state} — with a link to
              each official page so you can confirm eligibility.
            </p>
            <p className="label-mono mt-6 text-muted-foreground">
              {data.programs.length} programs · Verified {REBATES_VERIFIED}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={site.consultationHref}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Book a free consultation
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

        <section className="bg-background pb-20 pt-4 lg:pb-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {data.programs.map((program) => (
                <RebateCard
                  key={`${program.officialUrl}-${program.name}`}
                  program={program}
                />
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p>
                Amounts and eligibility are set by each program and change over
                time. Confirm on the official page before you buy — and we
                confirm every incentive you qualify for at your free in-home
                estimate, then file the paperwork for you.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
