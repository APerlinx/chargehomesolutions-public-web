import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { site } from "@/lib/site"

export type ServicePageData = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  stats?: { label: string; value: string }[]
  sections: {
    heading: string
    body: string[]
    points?: string[]
  }[]
  faqs: { question: string; answer: string }[]
  related: { label: string; href: string }[]
}

export function EvChargingServicePage({
  eyebrow,
  title,
  description,
  bullets,
  stats = [],
  sections,
  faqs,
  related,
}: ServicePageData) {
  return (
    <>
      <SiteHeader />
      <div aria-hidden="true" className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]" />
      <main>
        <section className="bg-background py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="label-mono text-primary">{eyebrow}</p>
                <h1 className="mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={site.consultationHref}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    Book a free consultation
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

              <div className="rounded-[1.75rem] border border-border bg-background p-6 shadow-sm">
                <p className="label-mono text-primary">What’s included</p>
                <ul className="mt-6 space-y-4">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {stats.length > 0 ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-border bg-background p-4">
                        <p className="font-mono text-2xl font-semibold text-foreground">{stat.value}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </section>

        {sections.map((section, index) => (
          <Section key={section.heading} tone={index % 2 === 1 ? "muted" : "default"}>
            <Container className="max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="label-mono text-primary">{eyebrow}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}

                  {section.points && section.points.length > 0 ? (
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li key={point} className="rounded-2xl border border-border p-4 text-sm leading-relaxed text-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Container>
          </Section>
        ))}

        <Section>
          <Container className="max-w-5xl">
            <SectionHeader eyebrow="FAQ" title="Common questions" align="left" />

            <div className="mt-10 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-background">
              {faqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none text-left text-base font-semibold text-foreground group-open:text-primary">
                    {faq.question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="muted">
          <Container className="max-w-5xl">
            <div className="rounded-[2rem] border border-border bg-background p-8 sm:p-10">
              <p className="label-mono text-primary">Free estimate</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                Get a charging setup built around your home, panel, and driving habits.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Talk with a licensed electrician, get a clear recommendation, and confirm the best charger, breaker, and
                routing path before any work starts.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={site.consultationHref}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Book your free consultation
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
          </Container>
        </Section>

        <Section>
          <Container className="max-w-5xl">
            <SectionHeader eyebrow="More services" title="Explore related EV charging solutions" align="left" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-border p-4 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
