import { Check, X } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { site, whyUs } from "@/lib/content"

export function WhyUs() {
  return (
    <Section id="why-us" tone="ink">
      <Container>
        <SectionHeader eyebrow={whyUs.eyebrow} title={whyUs.title} subtitle={whyUs.subtitle} tone="ink" />

        <Reveal className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-ink-border">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 bg-ink-raised px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted sm:px-7">
            <span>Feature</span>
            <span className="w-24 text-center sm:w-32">{whyUs.competitor}</span>
            <span className="w-24 text-center sm:w-32 text-primary">{site.name}</span>
          </div>

          <ul>
            {whyUs.rows.map((row, i) => (
              <li
                key={row}
                className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-4 px-5 py-4 text-sm sm:px-7 ${
                  i % 2 === 0 ? "bg-ink" : "bg-ink-raised/40"
                }`}
              >
                <span className="text-ink-foreground/90">{row}</span>
                <span className="flex w-24 justify-center sm:w-32">
                  <X className="h-5 w-5 text-ink-muted/50" aria-hidden="true" />
                  <span className="sr-only">Not offered by {whyUs.competitor}</span>
                </span>
                <span className="flex w-24 justify-center sm:w-32">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="sr-only">Offered by {site.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
