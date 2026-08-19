import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone } from "lucide-react"

import { coverage } from "@/lib/savings-finder"
import { site } from "@/lib/site"

/** The three program families the finder checks, kept short for the hero panel. */
const finderChecks = ["State & local incentives", "Utility rebates", "Federal home energy programs"]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      /* From lg up, hero + the header-height offset above it add up to exactly
         one viewport. Below lg the finder panel stacks under the copy, so the
         section grows instead of clipping its own content. */
      className="relative flex min-h-[calc(100svh-var(--header-utility-h)-var(--header-nav-h))] items-center overflow-hidden bg-background py-14 lg:h-[calc(100svh-var(--header-utility-h)-var(--header-nav-h))] lg:min-h-[34rem] lg:py-0"
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
        {/* Copy left, Savings Finder right, tops aligned. */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="max-w-xl">
            <p className="label-mono text-primary">Tesla-Certified · All 50 States</p>
            <h1
              id="hero-heading"
              className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.25rem]"
            >
              Charging, storage and power. Installed right.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Licensed, background-checked electricians for your EV charger, Powerwall and panel. Flat pricing, permits
              handled, work backed in writing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={site.consultationHref}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Book a free in-home consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
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

          {/* Savings Finder entry point. A single button plus the three things
              it checks, so the offer is clear without rebuilding the tool here.
              mt-9 offsets the eyebrow line's height so the panel's first rule
              sits level with the top of the headline. */}
          <aside
            aria-labelledby="hero-finder-heading"
            /* Nearly clear so the house behind reads through. The tint stays
               low and the legibility comes from the blur instead, which softens
               the busy photo without hiding it. */
            className="w-full max-w-sm rounded-2xl border border-border/60 bg-gradient-to-b from-background/30 to-background/15 p-6 backdrop-blur-md lg:mt-9 lg:shrink-0"
          >
            <h2 id="hero-finder-heading" className="text-pretty text-lg font-semibold leading-snug text-foreground">
              See what your address qualifies for
            </h2>
            <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">
              Rebates, incentives and installation costs, matched to your address in about a minute. Free, no obligation.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5 border-t border-border/60 pt-5">
              {finderChecks.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/savings-finder"
              className="group mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Check my savings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>

            {/* Split across two lines rather than letting the single line wrap. */}
            <p className="label-mono mt-4 text-center leading-relaxed text-muted-foreground">
              {coverage.programs} programs · {coverage.states} states
              <br />
              Verified {coverage.verified}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
