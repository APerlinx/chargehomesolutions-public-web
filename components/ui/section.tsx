import type { ReactNode } from "react"
import { Reveal } from "@/components/ui/reveal"

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Section({
  children,
  id,
  className = "",
  tone = "default",
}: {
  children: ReactNode
  id?: string
  className?: string
  tone?: "default" | "muted" | "ink" | "panel"
}) {
  const tones = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    ink: "bg-ink text-ink-foreground",
    
    panel: "bg-panel text-panel-foreground",
  }

  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${tones[tone]} ${className}`}>
      {children}
    </section>
  )
}


const labelTones = {
  default: { text: "text-muted-foreground", rule: "bg-border" },
  ink: { text: "text-ink-muted", rule: "bg-ink-border" },
  panel: { text: "text-panel-muted", rule: "bg-panel-border" },
}

type LabelTone = keyof typeof labelTones


export function Eyebrow({ children, tone = "default" }: { children: ReactNode; tone?: LabelTone }) {
  return (
    <span className={`eyebrow flex items-center gap-3 ${labelTones[tone].text}`}>
      <span aria-hidden="true" className={`h-px w-6 ${labelTones[tone].rule}`} />
      {children}
    </span>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
}: {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: "center" | "left"
  tone?: LabelTone
}) {
  const isCentered = align === "center"

  return (
    <Reveal className={`flex flex-col gap-5 ${isCentered ? "items-center text-center" : "items-start"}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {subtitle ? (
        <p
          className={`max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${labelTones[tone].text}`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
