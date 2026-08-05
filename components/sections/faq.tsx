"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Plus } from "lucide-react"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { faq } from "@/lib/content"
import { cn } from "@/lib/utils"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <Section id="faq">
      <Container>
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <ul className="flex flex-col gap-3">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold">{item.q}</span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted transition-transform duration-300",
                        isOpen && "rotate-45 bg-primary text-primary-foreground",
                      )}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
