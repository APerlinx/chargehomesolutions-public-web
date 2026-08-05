"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { NetworkSphere } from "@/components/hero/network-sphere"
import { Container } from "@/components/ui/section"
import { hero } from "@/lib/content"

export function Hero() {
  const reduceMotion = useReducedMotion()

  const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: reduceMotion ? 0 : 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
    }),
  }

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      {/* Signature animation: the electrician network as a rotating sphere. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-28%] top-1/2 h-[130vw] w-[130vw] -translate-y-1/2 sm:right-[-14%] sm:h-[92vw] sm:w-[92vw] lg:right-[-6%] lg:h-[52rem] lg:w-[52rem]">
          <NetworkSphere className="h-full w-full opacity-70 sm:opacity-90" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[calc(100svh-5rem)] flex-col justify-center py-24 lg:py-28">
          <div className="max-w-2xl">
            <motion.span
              custom={0}
              variants={rise}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-raised/60 px-4 py-1.5 text-xs font-medium text-ink-muted backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {hero.badge}
            </motion.span>

            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              <motion.span custom={1} variants={rise} initial="hidden" animate="show" className="block text-ink-foreground">
                {hero.titleLead}
              </motion.span>
              <motion.span
                custom={2}
                variants={rise}
                initial="hidden"
                animate="show"
                className="mt-2 block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
              >
                {hero.titleBrand}
              </motion.span>
            </h1>

            <motion.p
              custom={3}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {hero.body}
            </motion.p>

            <motion.div
              custom={4}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] active:scale-95"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-border bg-ink-raised/40 px-7 py-3.5 text-sm font-semibold text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink-raised"
              >
                {hero.secondaryCta.label}
              </a>
            </motion.div>

            <motion.p
              custom={5}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-md text-xs leading-relaxed text-ink-muted/80"
            >
              {hero.note}
            </motion.p>

            <motion.dl
              custom={6}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-12 flex gap-12 border-t border-ink-border pt-8"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </Container>

      {/* Curved cut into the next section, echoing the reference site. */}
      <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-10 w-full sm:h-16">
          <path d="M0 80 L1440 80 L1440 40 Q720 -20 0 40 Z" className="fill-background" />
        </svg>
      </div>
    </section>
  )
}
