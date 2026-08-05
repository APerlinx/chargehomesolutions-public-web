import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { Icon } from "@/components/ui/icon"
import { certifications } from "@/lib/content"
import { cn } from "@/lib/utils"

export function Certifications() {
  return (
    <Section id="certifications" tone="muted">
      <Container>
        <SectionHeader
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.08}
              className={cn(
                "flex flex-col rounded-3xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg",
                "featured" in item && item.featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border",
              )}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
