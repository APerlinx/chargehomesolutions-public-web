import { Zap, TrendingUp } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { caseStudy } from "@/lib/content"

export function CaseStudy() {
  return (
    <Section id="case-study">
      <Container>
        <SectionHeader eyebrow={caseStudy.eyebrow} title={caseStudy.title} subtitle={caseStudy.subtitle} />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="relative grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {/* Before */}
            <div className="bg-card p-8 sm:p-10">
              <span className="eyebrow text-muted-foreground">{caseStudy.before.label}</span>
              <div className="mt-6">
                <p className="text-5xl font-semibold tracking-tight text-muted-foreground">{caseStudy.before.jobs}</p>
                <p className="mt-1 text-sm text-muted-foreground">{caseStudy.before.jobsLabel}</p>
              </div>
              <div className="mt-6">
                <p className="text-4xl font-semibold tracking-tight text-muted-foreground">{caseStudy.before.income}</p>
                <p className="mt-1 text-sm text-muted-foreground">{caseStudy.before.incomeLabel}</p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-bold">
                  {caseStudy.person.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{caseStudy.person.name}</p>
                  <p className="text-xs text-muted-foreground">{caseStudy.person.role}</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative bg-card p-8 sm:p-10">
              <span className="eyebrow text-primary">{caseStudy.after.label}</span>
              <div className="mt-6">
                <p className="text-5xl font-semibold tracking-tight text-primary">{caseStudy.after.jobs}</p>
                <p className="mt-1 text-sm text-muted-foreground">{caseStudy.after.jobsLabel}</p>
              </div>
              <div className="mt-6">
                <p className="text-4xl font-semibold tracking-tight text-primary">{caseStudy.after.income}</p>
                <p className="mt-1 text-sm text-muted-foreground">{caseStudy.after.incomeLabel}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 border-t border-border pt-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                  {caseStudy.after.growth}
                </span>
              </div>
            </div>

            {/* Center connector */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-8 ring-background">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
