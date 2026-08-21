import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Phone } from 'lucide-react'

import { coverage } from '@/lib/savings-finder'
import { site } from '@/lib/site'

/** The three program families the finder checks, kept short for the hero panel. */
const finderChecks = [
  'State & local incentives',
  'Utility rebates',
  'Federal home energy programs',
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      /* From lg up, hero + the header-height offset above it add up to exactly
         one viewport. Below lg the finder panel stacks under the copy, so the
         section grows instead of clipping its own content.
         lg:items-stretch lets the inner column span the full hero height, which
         is what allows the finder panel to sit at the very bottom; lg:py-10
         becomes its margin from the bottom edge. */
      className="relative flex min-h-[calc(100svh-var(--header-utility-h)-var(--header-nav-h))] items-center overflow-hidden bg-muted py-14 lg:h-[calc(100svh-var(--header-utility-h)-var(--header-nav-h))] lg:min-h-[34rem] lg:items-stretch lg:py-10"
    >
      <Image
        src="/images/hero-ev-charging.png"
        alt="A white Tesla charging from a wall connector at a modern white home at dusk"
        fill
        priority
        sizes="100vw"
        /* No overlay on the photo. The copy sits in the frame's empty area
           instead, so narrow screens crop left (blank wall) and wide screens
           crop right to keep the car and charger in view. */
        className="object-cover object-left lg:object-right"
      />

      <div className="relative mx-auto w-full max-w-[92rem] px-5 lg:px-8">
        {/* Copy left (vertically centred), Savings Finder pinned to the bottom right. */}
        <div className="flex flex-col gap-10 lg:h-full lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="max-w-xl lg:my-auto">
            <p className="label-mono text-primary">
              Tesla-Certified · All 50 States
            </p>
            <h1
              id="hero-heading"
              className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.25rem]"
            >
              Charging, storage and power. Installed right.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Licensed, background-checked electricians for your EV charger,
              Powerwall and panel. Flat pricing, permits handled, work backed in
              writing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={site.consultationHref}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Book a free in-home consultation
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3.5 font-mono text-[0.9375rem] font-semibold text-foreground backdrop-blur transition-colors hover:border-foreground"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>

          {/* Savings Finder entry point, as a landscape band at the bottom right:
              copy on top, then the checks list and the action side by side so the
              shape stays wider than it is tall. */}
          <aside
            aria-labelledby="hero-finder-heading"
            /* Nearly clear so the house behind reads through, with an even tint
               and only a light blur so the photo stays recognisable. */
            className="w-full rounded-2xl border border-border/60 bg-background/30 p-6 backdrop-blur-sm lg:max-w-lg lg:self-end"
          >
            <h2
              id="hero-finder-heading"
              className="text-pretty text-lg font-semibold leading-snug text-foreground"
            >
              See what your address qualifies for
            </h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Rebates, incentives and installation costs, matched to your
              address in about a minute. Free.
            </p>

            <div className="mt-5 flex flex-col gap-5 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <ul className="flex flex-col gap-2">
                {finderChecks.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <Check
                      className="h-3.5 w-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/savings-finder"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Check my savings
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <p className="label-mono mt-5 text-muted-foreground">
              {coverage.programs} programs · {coverage.states} states · Verified{' '}
              {coverage.verified}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
