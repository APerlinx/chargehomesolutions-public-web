'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { NetworkSphere } from '@/components/hero/network-sphere'
import { Container } from '@/components/ui/section'
import { CountUp } from '@/components/ui/count-up'
import { hero, liveStats } from '@/lib/content'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: reduceMotion ? 0 : 0.15 + i * 0.09,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-ink-foreground"
    >
      {}
      <div className="pointer-events-none absolute inset-0">
        {}
        <div className="absolute right-[-28%] top-1/2 h-[130vw] w-[130vw] -translate-y-1/2 sm:right-[-14%] sm:h-[92vw] sm:w-[92vw] lg:right-auto lg:left-[calc(50%+5rem)] lg:h-[max(58rem,50vw-4rem)] lg:w-[max(58rem,50vw-4rem)]">
          <NetworkSphere className="h-full w-full opacity-70 sm:opacity-90" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-ink to-transparent" />
      </div>

      <Container className="relative">
        {}
        <div className="flex min-h-svh flex-col justify-center py-28 lg:py-32">
          <div>
            <motion.div
              custom={0}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mb-7 flex items-center gap-4"
            >
              <span aria-hidden="true" className="h-px w-10 bg-ink-muted/50" />
              <span className="font-mono text-xs tracking-[0.08em] text-ink-muted">
                {hero.eyebrow}
              </span>
            </motion.div>

            <h1 className="max-w-[80%] text-[clamp(2.75rem,6.2vw,5.5rem)] font-light leading-[0.98] tracking-[-0.035em]">
              <motion.span
                custom={1}
                variants={rise}
                initial="hidden"
                animate="show"
                className="block text-ink-foreground"
              >
                {hero.titleLead}
              </motion.span>
              {}
              <motion.span
                custom={2}
                variants={rise}
                initial="hidden"
                animate="show"
                className="block bg-linear-to-r from-primary via-primary to-accent bg-clip-text pb-[0.14em] text-transparent"
              >
                {hero.titleBrand}
              </motion.span>
            </h1>

            <motion.p
              custom={3}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-8 max-w-xl text-pretty text-lg font-light leading-relaxed text-ink-muted sm:text-xl"
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

            <motion.dl
              custom={5}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-14 grid grid-cols-2 justify-items-center gap-x-8 gap-y-8 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-16"
            >
              {liveStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-medium tracking-tight sm:text-4xl">
                    <CountUp
                      value={stat.value}
                      prefix={'prefix' in stat ? stat.prefix : ''}
                      suffix={stat.suffix}
                      decimals={'decimals' in stat ? stat.decimals : 0}
                    />
                  </dd>
                  <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs font-light text-ink-muted/70">
                    {stat.note}
                  </p>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </Container>

      {}
      <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-10 w-full sm:h-16"
        >
          <path
            d="M0 80 L1440 80 L1440 40 Q720 -20 0 40 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
