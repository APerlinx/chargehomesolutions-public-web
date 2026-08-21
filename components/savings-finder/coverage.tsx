import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

import { coverage, incentivesChecked } from '@/lib/savings-finder'

/**
 * Dark band making the page's sharpest claim: the counts are dated, and the
 * expired federal credits have been stripped out.
 */
export function CoverageBand() {
  return (
    <section
      aria-labelledby="coverage-heading"
      className="bg-background py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5">
              <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="label-mono text-muted-foreground">
                Verified {coverage.verified}
              </span>
            </span>
            <h2
              id="coverage-heading"
              className="mt-6 text-balance text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.025em] text-foreground sm:text-[2.125rem]"
            >
              {coverage.programs} rebate programs across {coverage.states}{' '}
              states, each checked against the program&apos;s own page.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              The federal clean-energy tax credits ended in 2025 and 2026. Most
              contractor sites still advertise the 30% credit. We removed the
              programs that closed and dated the ones that are still open, so
              the number you plan around is the number you can actually claim.
            </p>
            <Link
              href="/rebates/"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              See what is open in your state
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/** The five incentive layers, as a hairline grid matching the services table. */
export function IncentivesChecked() {
  return (
    <section
      aria-labelledby="incentives-heading"
      className="marketing-ink-band py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="label-mono text-primary">Coverage</p>
          <h2
            id="incentives-heading"
            className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl"
          >
            Incentives we check for you.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every layer combined into one number for your exact address, with
            the filing windows and eligibility fine print decoded into plain
            instructions.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {incentivesChecked.map((incentive) => (
            <li
              key={incentive.title}
              className="flex flex-col bg-background p-6"
            >
              {/* These layers stack rather than sequence, so no step numbers. */}
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rotate-45 bg-primary"
              />
              <h3 className="mt-5 text-pretty text-[0.9375rem] font-semibold leading-snug text-foreground">
                {incentive.title}
              </h3>
              <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {incentive.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
