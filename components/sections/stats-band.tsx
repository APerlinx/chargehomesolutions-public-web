import { Container } from "@/components/ui/section"
import { CountUp } from "@/components/ui/count-up"
import { Reveal } from "@/components/ui/reveal"
import { liveStats } from "@/lib/content"

export function StatsBand() {
  return (
    <section className="relative bg-ink py-20 text-ink-foreground sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 120% at 50% 0%, color-mix(in oklch, var(--primary) 40%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {liveStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <dd className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <CountUp
                  value={stat.value}
                  prefix={"prefix" in stat ? stat.prefix : ""}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </dd>
              <dt className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">{stat.label}</dt>
              <p className="mt-1 text-xs text-ink-muted/70">{stat.note}</p>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
