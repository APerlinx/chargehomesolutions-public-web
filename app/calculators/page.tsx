import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EvSavingsCalculator } from "@/components/calculators/ev-savings-calculator"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "EV Charging Savings Calculator — Home Charging vs Gas",
  description:
    "See how much you save charging your EV at home instead of buying gas. Enter your annual miles and real rates for a transparent estimate.",
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: `EV Savings Calculator — ${site.name}`,
    description: "Estimate your yearly savings from charging an EV at home versus paying for gas.",
    type: "website",
  },
}

export default function CalculatorsPage() {
  return (
    <>
      <SiteHeader />
      <div aria-hidden="true" className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]" />
      <main>
        <section aria-labelledby="calc-heading" className="bg-background pt-16 pb-20 lg:pt-20 lg:pb-24">
          <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="lg:pt-6">
                <p className="label-mono text-primary">Free tool</p>
                <h1
                  id="calc-heading"
                  className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl"
                >
                  EV savings calculator
                </h1>
                <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  Charging at home is usually a fraction of the cost of gas. See your number, then adjust every
                  assumption to match your reality.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/savings-finder"
                    className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-[0.9375rem] font-semibold text-foreground transition-colors hover:border-foreground"
                  >
                    Check your rebates too
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

              <EvSavingsCalculator />
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">How it works</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We compare two costs for the same miles: charging an EV at home at your electricity rate, versus buying
              gasoline for a car at its MPG. Home charging usually wins because electricity per mile is far cheaper than
              gas per mile — and a Level 2 charger makes it convenient. The defaults are national averages; your real
              savings come down to your utility rate, how much you drive, and your vehicles.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ready to charge at home?{" "}
              <Link href={site.consultationHref} className="font-semibold text-primary hover:text-primary-hover">
                Book a free in-home estimate
              </Link>{" "}
              — and don&rsquo;t forget to{" "}
              <Link href="/rebates" className="font-semibold text-primary hover:text-primary-hover">
                check your local rebates
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
