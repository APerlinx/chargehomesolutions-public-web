import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { credentials } from "@/lib/home"

export function TrustStatement() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative flex min-h-[42rem] items-center overflow-hidden bg-background lg:min-h-[46rem]"
    >
      <Image
        src="/images/home-battery.png"
        alt="A home battery mounted on the exterior wall of a modern white house"
        fill
        sizes="100vw"
        /* No overlay. The copy sits on the open sky, so narrow screens crop
           right to that sky and wide screens crop left to keep the battery. */
        className="object-cover object-right lg:object-left"
      />

      <div className="relative mx-auto w-full max-w-[92rem] px-5 lg:px-8">
        <div className="ml-auto max-w-lg text-left lg:text-right">
          <p className="label-mono text-primary">We install. We power. We protect.</p>
          <h2
            id="trust-heading"
            className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            One crew for the whole system.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground lg:ml-auto lg:max-w-md">
            Charger, battery, panel and permit, handled by the same certified team. No subcontractor roulette, no
            surprise change orders.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 lg:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur">
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
              Tesla-certified in all 50 states
            </span>
            <Link
              href="/tesla-certified-installer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              See the proof
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CredentialMarquee() {
  /* Two identical halves so the -50% translate loops without a seam. */
  const halves = [credentials, credentials]

  return (
    <section aria-label="Certifications and ratings" className="overflow-hidden bg-muted py-8">
      <div className="marquee-track flex">
        {halves.map((half, halfIndex) => (
          <ul key={halfIndex} className="flex shrink-0 items-center" aria-hidden={halfIndex === 1}>
            {half.map((item) => (
              <li
                key={`${halfIndex}-${item.headline}`}
                className="flex shrink-0 flex-col items-center border-r border-border px-10 text-center"
              >
                <span className="text-base font-semibold tracking-[-0.01em] text-foreground">{item.headline}</span>
                <span className="mt-0.5 text-xs text-muted-foreground">{item.sub}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
