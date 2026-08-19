import { Check } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { Icon } from "@/components/ui/icon"
import { about } from "@/lib/content"

export function About() {
  return (
    <Section id="about" tone="muted">
      <Container>
        <SectionHeader eyebrow={about.eyebrow} title={about.title} />

        <Reveal delay={0.05} className="mx-auto mt-8 flex max-w-3xl flex-col gap-5 text-center">
          {about.body.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {about.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={(i % 2) * 0.1}
              className="rounded-3xl border border-border bg-card p-8 sm:p-9"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              {"list" in card && card.list ? (
                <ul className="mt-5 flex flex-col gap-2.5">
                  {card.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-3xl bg-ink px-8 py-12 text-center text-ink-foreground sm:px-12 sm:py-16">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{about.vision.title}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-ink-muted">{about.vision.body}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
