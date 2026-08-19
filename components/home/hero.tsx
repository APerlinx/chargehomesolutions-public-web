import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

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
        className="object-cover object-right"
      />

      {/* Narrow screens have no clear space beside the car, so the photo gets a
          near-solid wash; wide screens only need a left-to-right falloff. */}
      <div aria-hidden="true" className="absolute inset-0 bg-background/85 lg:hidden" />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-background from-20% via-background/85 via-50% to-transparent to-80% lg:block"
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
        </div>
      </div>
    </section>
  )
}
