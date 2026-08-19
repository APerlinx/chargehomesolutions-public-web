import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Search } from "lucide-react"

import { coverage } from "@/lib/savings-finder"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      /* Hero + the header-height offset above it add up to exactly one viewport. */
      className="relative flex h-[calc(100svh-var(--header-utility-h)-var(--header-nav-h))] min-h-[34rem] items-center overflow-hidden bg-background"
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

          {/* Savings Finder entry point. Deliberately typographic, not a card,
              so it reads as a quiet third option over the photo. */}
          <div className="mt-9 max-w-md border-t border-border/70 pt-6">
            <Link href="/savings-finder" className="group flex items-start gap-3.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors group-hover:border-primary">
                <Search className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <span>
                <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-foreground">
                  Check your rebates first
                  <ArrowRight
                    className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1 block text-pretty text-sm leading-relaxed text-muted-foreground">
                  State, utility and federal programs matched to your address in about a minute. Free.
                </span>
              </span>
            </Link>
            <p className="label-mono mt-3.5 text-muted-foreground">
              {coverage.programs} programs · {coverage.states} states · Verified {coverage.verified}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
