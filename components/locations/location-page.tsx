import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { locationStates, type LocationPageData } from "@/lib/locations"
import { site } from "@/lib/site"
import { getUsMap, MAP_HEIGHT, MAP_WIDTH } from "@/lib/us-map"

type LocationPageProps = {
  page?: LocationPageData
}

export function LocationPage({ page }: LocationPageProps) {
  const { statePaths, borderPath } = getUsMap()
  const title = page?.title ?? "Licensed electricians for homes and businesses across the country."
  const description = page?.description ?? "Charge Home Solutions connects customers with local licensed electricians for EV charging, Tesla energy systems, electrical upgrades, and service in all 50 states."

  return (
    <>
      <SiteHeader />
      <div aria-hidden="true" className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]" />
      <main>
        <section className="bg-background py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="label-mono text-primary">{page?.eyebrow ?? "Nationwide electrician network"}</p>
                <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href={site.consultationHref} className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">
                    Book a free consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  <a href={site.phoneHref} className="inline-flex items-center gap-2 font-mono text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-primary">
                    <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-background p-5 shadow-sm sm:p-7">
                <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="h-auto w-full" role="img" aria-label="Map of the United States showing nationwide coverage">
                  {statePaths.map((path, index) => <path key={index} d={path} className="fill-primary/10 stroke-border" strokeWidth={0.5} />)}
                  <path d={borderPath} fill="none" className="stroke-border" strokeWidth={0.5} />
                </svg>
                <p className="mt-3 text-center font-mono text-sm text-muted-foreground">Licensed local coverage in all 50 states</p>
              </div>
            </div>
          </Container>
        </section>

        {page ? <StateDetails page={page} /> : <CoverageHub />}
      </main>
      <SiteFooter />
    </>
  )
}

function CoverageHub() {
  return (
    <>
      <Section tone="muted">
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="Find local service" title="Select your state" align="left" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locationStates.map((state) => (
              <Link key={state.slug} href={`/locations/${state.slug}`} className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-foreground">
                <p className="font-semibold text-foreground group-hover:text-primary">{state.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{state.marketCount.toLocaleString()}+ local markets</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">Explore service <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="How it works" title="Local delivery, consistent project support" align="left" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Share your address and project", "Review the electrical scope", "Get matched with a qualified local electrician"].map((step, index) => <div key={step} className="rounded-2xl border border-border p-5"><p className="font-mono text-primary">0{index + 1}</p><p className="mt-3 font-semibold text-foreground">{step}</p></div>)}
          </div>
        </Container>
      </Section>
    </>
  )
}

function StateDetails({ page }: { page: LocationPageData }) {
  return (
    <>
      <Section tone="muted">
        <Container className="max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="label-mono text-primary">Local project planning</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">{page.focusHeading}</h2></div>
            <div className="space-y-5"><div className="space-y-4">{page.focusBody.map((paragraph) => <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">{paragraph}</p>)}</div><ul className="grid gap-3 sm:grid-cols-2">{page.focusPoints.map((point) => <li key={point} className="flex gap-3 rounded-xl border border-border bg-background p-4 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{point}</li>)}</ul></div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="Local coordination" title={`Utilities and permitting in ${page.name}`} subtitle={`Our project scope accounts for the local utility, inspection, and equipment requirements that apply at your address.`} align="left" />
          <div className="mt-8 flex flex-wrap gap-3">{page.utilities.map((utility) => <span key={utility} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{utility}</span>)}</div>
        </Container>
      </Section>
      <Section tone="muted">
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="FAQ" title={`Common ${page.name} questions`} align="left" />
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-background">{page.faqs.map((faq) => <details key={faq.question} className="group px-6 py-5"><summary className="cursor-pointer list-none text-base font-semibold text-foreground group-open:text-primary">{faq.question}</summary><p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{faq.answer}</p></details>)}</div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-5xl"><div className="rounded-[2rem] border border-border bg-background p-8 sm:p-10"><p className="label-mono text-primary">Free estimate</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">Get a clear electrical recommendation for your {page.name} property.</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">A licensed electrician will review your project, capacity, and local requirements before work begins.</p><Link href={site.consultationHref} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">Book a free consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></Link></div></Container>
      </Section>
    </>
  )
}
