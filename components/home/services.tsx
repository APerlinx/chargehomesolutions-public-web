import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { networkStats, services } from "@/lib/home"

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="bg-background pt-20 lg:pt-28">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        {/* The link lives up here on the open sky rather than below the grid,
            where it would fall on the low-contrast roof. */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="label-mono text-primary">Services</p>
            <h2
              id="services-heading"
              className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl"
            >
              Complete electrical and home electrification.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <li key={service.title} className="bg-background">
              <Link
                href={service.href}
                className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors hover:bg-muted"
              >
                <div>
                  <h3 className="text-pretty text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{service.blurb}</p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-bleed closing band. The roofline is anchored to the bottom so the
          panels sit in frame with clear sky above — no overlay, no fade. */}
      <div className="relative mt-20 h-64 w-full sm:h-80 lg:mt-24 lg:h-[26rem]">
        <Image
          src="/images/solar-roof.png"
          alt="Solar panels on the standing-seam metal roof of a modern home"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  )
}

export function NetworkStats() {
  return (
    <section aria-labelledby="network-heading" className="bg-ink py-20 lg:py-24">
      <div className="mx-auto grid max-w-[92rem] gap-14 px-5 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <h2
            id="network-heading"
            className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink-foreground sm:text-[2.75rem]"
          >
            A nationwide electrician network in all 50 states.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-ink-muted">
            Certified electricians ready for your home or business, wherever you are.
          </p>
          <Link
            href="/locations"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-ink-foreground"
          >
            Find electricians near you
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-border lg:grid-cols-4">
          {networkStats.map((stat) => (
            <div key={stat.label} className="bg-ink-raised px-4 py-10 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block whitespace-nowrap text-2xl font-semibold tracking-[-0.03em] text-ink-foreground xl:text-[1.75rem]">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-ink-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
