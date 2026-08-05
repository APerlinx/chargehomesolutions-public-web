import { Check } from "lucide-react"
import { Container, Section, Eyebrow } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { fees } from "@/lib/content"

export function Fees() {
  return (
    <Section id="fees" tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>{fees.eyebrow}</Eyebrow>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{fees.title}</h2>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{fees.subtitle}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-[1fr_auto] bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-foreground">
                <span>Installation type</span>
                <span>Referral fee</span>
              </div>
              <ul className="bg-card">
                {fees.rows.map((row) => (
                  <li
                    key={row.type}
                    className="grid grid-cols-[1fr_auto] items-center border-b border-border px-6 py-4 last:border-b-0"
                  >
                    <span className="text-sm text-foreground">{row.type}</span>
                    <span className="text-sm font-semibold text-primary">{row.fee}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="flex flex-col justify-center rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">{fees.aside.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{fees.aside.body}</p>
            <ul className="mt-7 flex flex-col gap-4">
              {fees.aside.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
