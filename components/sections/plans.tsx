import { Check, ShieldCheck } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { plans } from "@/lib/content"
import { workWithUsUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Plans() {
  return (
    <Section id="plans" className="py-14 sm:py-20">
      <Container>
        <Reveal className="mx-auto mb-8 flex max-w-xl items-center justify-center gap-2 rounded-full border border-border bg-muted px-5 py-3 text-center text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-muted-foreground">
            <span className="font-semibold text-foreground">{plans.notice.text}</span>{" "}
            <a href="#coverage" className="font-semibold text-primary underline-offset-4 hover:underline">
              {plans.notice.linkLabel}
            </a>
          </span>
        </Reveal>

        <SectionHeader eyebrow={plans.eyebrow} title={plans.title} subtitle={plans.subtitle} />

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {plans.tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.1}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8",
                tier.featured
                  ? "border-primary bg-card shadow-2xl shadow-primary/10 lg:-mt-4 lg:mb-4"
                  : "border-border bg-card",
              )}
            >
              {"badge" in tier && tier.badge ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  {tier.badge}
                </span>
              ) : null}

              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-3 min-h-[2.5rem] text-sm leading-relaxed text-muted-foreground">{tier.body}</p>

              <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={workWithUsUrl(tier.plan)}
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-95",
                  tier.featured
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-border text-foreground hover:bg-muted",
                )}
              >
                {tier.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
