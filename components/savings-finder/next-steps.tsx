import Link from "next/link"
import { ArrowRight, Check, Phone, Plus } from "lucide-react"

import { finderFaqs, pathToInstall, whyChooseUs } from "@/lib/savings-finder"
import { site } from "@/lib/site"

/** Three ordered steps — a genuine sequence, so these keep their numbers. */
export function PathToInstall() {
  return (
    <section aria-labelledby="path-heading" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="label-mono text-primary">How it works</p>
          <h2
            id="path-heading"
            className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl"
          >
            From savings estimate to install.
          </h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {pathToInstall.map((step, index) => (
            <li key={step.title} className="bg-background p-7">
              <span className="font-mono text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em] text-foreground">{step.title}</h3>
              <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href="/rebates-incentives/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Explore the rebates hub
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href="/calculators/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Estimate your project cost
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/**
 * FAQ built on native details/summary so it works without client JS, paired
 * with the credentials list from the legacy sidebar.
 */
export function FinderFaq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <p className="label-mono text-primary">Questions</p>
            <h2
              id="faq-heading"
              className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[2.75rem]"
            >
              Frequently asked questions.
            </h2>

            <div className="mt-10 border-t border-border">
              {finderFaqs.map((faq) => (
                <details key={faq.question} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-semibold text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <Plus
                      className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-2xl pb-6 text-pretty leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:pt-28">
            <h3 className="label-mono text-muted-foreground">Why Charge Home Solutions</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FinderCta() {
  return (
    <section aria-labelledby="finder-cta-heading" className="bg-ink py-20 lg:py-24">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2
              id="finder-cta-heading"
              className="text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-foreground sm:text-[2.5rem]"
            >
              Get your free in-home estimate.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
              A licensed electrician confirms the incentives you qualify for, prices the work, and handles the filing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={site.consultationHref}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Book your free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-3.5 font-mono text-[0.9375rem] font-semibold text-ink-foreground transition-colors hover:border-ink-foreground"
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
