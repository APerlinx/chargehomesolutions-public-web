import { ArrowUpRight } from "lucide-react"

import type { RebateProgram } from "@/lib/rebates"
import { cn } from "@/lib/utils"

const categoryStyles: Record<RebateProgram["category"], string> = {
  Federal: "bg-primary/10 text-primary",
  State: "bg-accent/10 text-accent",
  Utility: "bg-muted text-muted-foreground",
}

export function RebateCard({ program }: { program: RebateProgram }) {
  return (
    <li className="flex flex-col rounded-2xl border border-border bg-background p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <span
            className={cn(
              "inline-flex rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
              categoryStyles[program.category],
            )}
          >
            {program.category}
          </span>
          <h3 className="mt-2 text-base font-semibold text-foreground">{program.name}</h3>
        </div>
        <span className="shrink-0 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary">
          {program.amount}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{program.eligibility}</p>
      {program.detail ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.detail}</p>
      ) : null}

      <a
        href={program.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
      >
        Official program page
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </li>
  )
}
