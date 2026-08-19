import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CostEstimator } from "@/components/cost-estimator/estimator"
import { costServices, formatUsd } from "@/lib/cost-guide"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `EV Charger, Panel, Powerwall & Electrical Cost Guide (${new Date().getFullYear()})`,
  description:
    "What home electrical work really costs — EV charger, 200A panel upgrade, Tesla Powerwall, standby generator and whole-house rewiring. Estimate your project in seconds.",
  alternates: { canonical: "/cost-guides" },
  openGraph: {
    title: `Cost Guides — ${site.name}`,
    description: "Typical installed-cost ranges for EV charging, panels, batteries, generators and rewiring.",
    type: "website",
  },
}

export default function CostGuidesPage() {
  return (
    <>
      <SiteHeader />
      <div aria-hidden="true" className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]" />
      <main>
        <section aria-labelledby="cost-heading" className="bg-background pt-16 pb-20 lg:pt-20 lg:pb-24">
          <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="lg:pt-6">
                <p className="label-mono text-primary">Free tool</p>
                <h1
                  id="cost-heading"
                  className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl"
                >
                  Cost estimator
                </h1>
                <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  What home electrical work actually costs — pick a project for a realistic range before you book. No
                  email required.
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

              <CostEstimator />
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              Typical installed costs
            </h2>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              National ballpark ranges, before rebates. Your exact price is set by your home and confirmed at the free
              in-home estimate.
            </p>

            <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
              {costServices.map((s) => (
                <li key={s.id} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-5">
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{s.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                  </div>
                  <p className="shrink-0 font-mono text-sm font-semibold text-foreground">
                    {formatUsd(s.low)}–{formatUsd(s.high)}
                    {s.openEnded ? "+" : ""}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Installing solar, a Tesla Wall Connector or something not listed here?{" "}
              <Link href={site.consultationHref} className="font-semibold text-primary hover:text-primary-hover">
                Ask for a free quote
              </Link>{" "}
              — we price it against your actual setup.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
