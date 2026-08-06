"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Star, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { testimonials } from "@/lib/content"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const count = testimonials.items.length

  const go = (dir: number) => setActive((prev) => (prev + dir + count) % count)

  return (
    <Section id="testimonials" tone="panel">
      <Container>
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} tone="panel" />

        {/* Carousel */}
        <Reveal className="relative mx-auto mt-14 max-w-3xl">
          <div className="min-h-[16rem] rounded-3xl border border-panel-border bg-panel-raised/50 p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-6 text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                  &ldquo;{testimonials.items[active].quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {testimonials.items[active].initials}
                  </span>
                  <div>
                    <p className="font-semibold">{testimonials.items[active].name}</p>
                    <p className="text-sm text-panel-muted">{testimonials.items[active].role}</p>
                  </div>
                  <span className="ml-auto hidden rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary sm:inline-flex">
                    {testimonials.items[active].metric}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-panel-border text-panel-foreground transition-colors hover:bg-panel-raised"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active ? "w-6 bg-primary" : "w-2 bg-panel-border hover:bg-panel-muted",
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-panel-border text-panel-foreground transition-colors hover:bg-panel-raised"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        {/* Live feed */}
        <Reveal delay={0.1} className="mx-auto mt-20 max-w-3xl">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-panel-border bg-panel-raised/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Live feed
            </span>
            <span className="text-sm text-panel-muted">{testimonials.feedLabel}</span>
          </div>

          <ul className="flex flex-col gap-3">
            {testimonials.feed.map((item, i) => (
              <motion.li
                key={item.job}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-panel-border bg-panel-raised/40 px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{item.job}</p>
                  <p className="text-xs text-panel-muted">{item.location}</p>
                </div>
                <span className="text-sm font-semibold text-primary">{item.value}</span>
                <span className="hidden text-xs text-panel-muted sm:block">{item.time}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
