"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { costServices, formatUsd, getCostService } from "@/lib/cost-guide"
import { cn } from "@/lib/utils"

/**
 * Cost Estimator — sums a service's base range with any selected modifiers and
 * shows an estimated range. Deliberately not a binding quote; the copy makes
 * that clear and every path points to the free in-home estimate.
 */
export function CostEstimator() {
  const [serviceId, setServiceId] = useState(costServices[0].id)
  const [mods, setMods] = useState<Record<string, boolean>>({})

  const service = getCostService(serviceId)!

  function selectService(id: string) {
    setServiceId(id)
    setMods({})
  }

  const { low, high } = useMemo(() => {
    let lo = service.low
    let hi = service.high
    for (const m of service.modifiers) {
      if (mods[m.id]) {
        lo += m.low
        hi += m.high
      }
    }
    return { low: lo, high: hi }
  }, [service, mods])

  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
      <fieldset>
        <legend className="label-mono text-muted-foreground">What are you installing?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {costServices.map((s) => {
            const isOn = s.id === serviceId
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={isOn}
                onClick={() => selectService(s.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isOn
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-foreground",
                )}
              >
                {s.label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{service.blurb}</p>

      {service.modifiers.length > 0 ? (
        <fieldset className="mt-6">
          <legend className="label-mono text-muted-foreground">Anything else?</legend>
          <div className="mt-3 flex flex-col gap-2">
            {service.modifiers.map((m) => {
              const isOn = Boolean(mods[m.id])
              return (
                <label
                  key={m.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-colors",
                    isOn ? "border-primary bg-primary/5" : "border-border hover:border-foreground",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isOn}
                      onChange={() => setMods((c) => ({ ...c, [m.id]: !c[m.id] }))}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="font-medium text-foreground">{m.label}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    +{formatUsd(m.low)}–{formatUsd(m.high)}
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>
      ) : null}

      {/* Result */}
      <div className="mt-8 rounded-2xl bg-muted px-6 py-6">
        <p className="label-mono text-muted-foreground">Estimated range · {service.unit}</p>
        <p className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          {formatUsd(low)}–{formatUsd(high)}
          {service.openEnded ? "+" : ""}
        </p>
        {service.resilience ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.resilience}</p>
        ) : null}
        {service.rebateEligible ? (
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            This often qualifies for state &amp; utility rebates.{" "}
            <Link href="/rebates" className="font-semibold text-primary hover:text-primary-hover">
              See your state&rsquo;s programs
            </Link>
            .
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/request-service"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Get an exact price — free in-home estimate
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Estimates are national ranges before rebates, for planning only. Your exact price depends on your home and is
        confirmed at the free in-home estimate.
      </p>
    </div>
  )
}
