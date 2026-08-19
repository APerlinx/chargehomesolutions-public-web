"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, MapPin } from "lucide-react"
import { Container, Section, Eyebrow } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { Icon } from "@/components/ui/icon"
import { sms } from "@/lib/content"


export function Sms() {
  return (
    <Section id="how-it-works" tone="muted">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>{sms.eyebrow}</Eyebrow>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {sms.titleLines[0]}
                <br />
                <span className="text-primary">{sms.titleLines[1]}</span>
              </h2>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{sms.body}</p>
            </Reveal>

            <ul className="mt-9 flex flex-col gap-6">
              {sms.features.map((feature, i) => (
                <Reveal as="li" key={feature.title} delay={i * 0.1} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={feature.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <a
                href={sms.cta.href}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] active:scale-95"
              >
                {sms.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Phone />
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Phone() {
  const reduceMotion = useReducedMotion()

  const bubble = (delay: number) => ({
    initial: { opacity: 0, y: 14, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  const floater = (delay: number, x: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12, x },
          whileInView: { opacity: 1, y: 0, x },
          viewport: { once: true },
          transition: { duration: 0.6, delay },
        }

  return (
    <div className="relative">
      {}
      <motion.div
        {...floater(0.5, 0)}
        className="absolute -left-6 top-24 z-20 hidden rounded-2xl border border-border bg-card px-4 py-2.5 text-xs font-semibold shadow-xl sm:block"
      >
        {sms.floaters[0].label}
      </motion.div>
      <motion.div
        {...floater(0.8, 0)}
        className="absolute -left-24 top-[48%] z-20 hidden rounded-2xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-primary shadow-xl sm:block"
      >
        {sms.floaters[1].label}
      </motion.div>
      <motion.div
        {...floater(1.1, 0)}
        className="absolute -right-10 bottom-12 z-20 hidden items-center gap-1.5 rounded-2xl border border-border bg-card px-4 py-2.5 text-xs font-semibold shadow-xl sm:flex"
      >
        <MapPin className="h-3.5 w-3.5 text-primary" />
        {sms.floaters[2].label}
      </motion.div>

      {}
      <div className="relative w-[300px] rounded-[2.75rem] border border-border bg-ink p-2.5 shadow-2xl sm:w-[330px]">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-card">
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-ink" />
          <div className="flex flex-col gap-3 px-4 pb-6 pt-10">
            <div className="flex flex-col items-center border-b border-border pb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">
                CHS
              </div>
              <p className="mt-1.5 text-xs font-medium text-muted-foreground">Charge Home Solutions</p>
            </div>

            <motion.div {...bubble(0.1)} className="max-w-[85%] self-start rounded-2xl rounded-tl-md bg-muted px-3.5 py-2.5">
              <p className="text-[13px] font-semibold">New Appointment</p>
              <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                EV Charger Installation
                <br />5 miles away · Tomorrow 2:00–6:00 PM
                <br />Reply YES to accept
              </p>
            </motion.div>

            <motion.div {...bubble(0.35)} className="max-w-[80%] self-start rounded-2xl rounded-tl-md bg-muted px-3.5 py-2.5">
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                You have 2 hours to accept this appointment.
              </p>
            </motion.div>

            <motion.div {...bubble(0.6)} className="self-end rounded-2xl rounded-tr-md bg-primary px-5 py-2.5">
              <p className="text-[13px] font-bold text-primary-foreground">YES</p>
            </motion.div>

            <motion.div
              {...bubble(0.85)}
              className="max-w-[88%] self-start rounded-2xl rounded-tl-md border border-primary/20 bg-primary/5 px-3.5 py-3"
            >
              <p className="text-[13px] font-semibold text-primary">Appointment Confirmed</p>
              <div className="mt-1.5 space-y-0.5 text-[11.5px] leading-relaxed text-muted-foreground">
                <p>Name: John Smith</p>
                <p>123 Main St, Los Angeles, CA</p>
                <p>Phone: (555) 123-4567</p>
                <p>Tomorrow 2:00–6:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
