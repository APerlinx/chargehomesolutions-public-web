import Image from "next/image"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { howItWorks } from "@/lib/content"

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeader eyebrow={howItWorks.eyebrow} title={howItWorks.title} subtitle={howItWorks.subtitle} />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {howItWorks.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.1}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <span className="eyebrow inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {card.tag}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{card.body}</p>

                <ol className="mt-7 flex flex-col gap-4">
                  {card.items.map((item, idx) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
