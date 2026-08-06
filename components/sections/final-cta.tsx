import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { finalCta } from "@/lib/content"

export function FinalCta() {
  return (
    <section id="work-with-us" className="relative overflow-hidden bg-panel py-24 text-panel-foreground sm:py-32">
      <div
        
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(50% 100% at 50% 100%, color-mix(in oklch, var(--primary) 45%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {finalCta.title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-panel-muted">{finalCta.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={finalCta.primary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              {finalCta.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={finalCta.secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-panel-border bg-panel-raised/40 px-8 py-4 text-sm font-semibold text-panel-foreground backdrop-blur-sm transition-colors hover:bg-panel-raised"
            >
              {finalCta.secondary.label}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
