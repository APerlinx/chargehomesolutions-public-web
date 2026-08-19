import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { site } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* Hero placeholder — the real hero is the next step. The white band above
          it is the header-height offset, so the transparent header reads on white. */}
      <section className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="flex min-h-[32rem] flex-col justify-end rounded-2xl bg-muted px-8 py-12 lg:px-14 lg:py-16">
          <span className="label-mono text-primary">Hero, next up</span>
          <h1 className="mt-4 max-w-3xl text-pretty text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground lg:text-6xl">
            Tesla-certified electricians for your EV charger, Powerwall and panel.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Licensed, background-checked installers in all 50 states. Flat pricing, permits handled, work backed by a
            written warranty.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={site.consultationHref}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Book your free in-home consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Scroll runway so the header's scrolled state is exercised. */}
      <section className="mx-auto max-w-[92rem] px-5 py-24 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">Homepage sections land here</h2>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Header and footer are in place. Scroll to watch the utility row retire and the frosted plate fade in.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Services", "How it works", "Savings", "Coverage", "Reviews", "FAQ"].map((block) => (
            <div key={block} className="flex h-40 items-end rounded-xl border border-border p-5">
              <span className="label-mono text-muted-foreground">{block}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
