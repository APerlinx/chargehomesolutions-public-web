"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { computeEvSavings, evSavingsDefaults, formatUsd } from "@/lib/ev-savings"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const MILE_PRESETS = [8000, 12000, 15000, 20000]

type AssumptionField = {
  key: "electricityRate" | "gasPrice" | "evEfficiency" | "gasMpg"
  label: string
  suffix: string
  step: number
}

const ASSUMPTIONS: AssumptionField[] = [
  { key: "electricityRate", label: "Electricity", suffix: "$/kWh", step: 0.01 },
  { key: "gasPrice", label: "Gas price", suffix: "$/gal", step: 0.1 },
  { key: "evEfficiency", label: "EV efficiency", suffix: "mi/kWh", step: 0.1 },
  { key: "gasMpg", label: "Gas car", suffix: "MPG", step: 1 },
]

export function EvSavingsCalculator() {
  const [values, setValues] = useState({ ...evSavingsDefaults })

  function setField(key: keyof typeof values, raw: string) {
    const n = Number(raw)
    setValues((v) => ({ ...v, [key]: Number.isFinite(n) && n >= 0 ? n : 0 }))
  }

  const result = useMemo(() => computeEvSavings(values), [values])
  const saves = result.annualSavings > 0

  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
      <div>
        <label htmlFor="ev-miles" className="label-mono text-muted-foreground">
          Miles you drive a year
        </label>
        <div className="mt-3 flex items-center gap-3 rounded-full border border-border bg-muted px-5 py-3.5 transition-colors focus-within:border-primary">
          <input
            id="ev-miles"
            type="number"
            min={0}
            inputMode="numeric"
            value={values.annualMiles}
            onChange={(e) => setField("annualMiles", e.target.value)}
            className="w-full bg-transparent text-[0.9375rem] text-foreground outline-none"
          />
          <span className="shrink-0 text-sm text-muted-foreground">miles/yr</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {MILE_PRESETS.map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={values.annualMiles === m}
              onClick={() => setValues((v) => ({ ...v, annualMiles: m }))}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                values.annualMiles === m
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-foreground",
              )}
            >
              {m.toLocaleString("en-US")}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div role="status" aria-live="polite" className="mt-8 rounded-2xl bg-muted px-6 py-6">
        <p className="label-mono text-muted-foreground">Charging at home vs gas</p>
        <p className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          {saves ? `Save ${formatUsd(result.annualSavings)}/yr` : "No fuel savings"}
        </p>
        {saves ? (
          <p className="mt-1 text-sm text-muted-foreground">about {formatUsd(result.monthlySavings)}/month</p>
        ) : (
          <p className="mt-1 text-sm text-muted-foreground">
            At these numbers, home charging isn&rsquo;t cheaper — try your real rates below.
          </p>
        )}
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-background px-4 py-3">
            <p className="text-muted-foreground">Home charging</p>
            <p className="mt-0.5 font-semibold text-foreground">{formatUsd(result.evAnnualCost)}/yr</p>
          </div>
          <div className="rounded-xl bg-background px-4 py-3">
            <p className="text-muted-foreground">Gasoline</p>
            <p className="mt-0.5 font-semibold text-foreground">{formatUsd(result.gasAnnualCost)}/yr</p>
          </div>
        </div>
      </div>

      {/* Editable assumptions — transparent, so the number is defensible. */}
      <fieldset className="mt-6">
        <legend className="label-mono text-muted-foreground">Assumptions (adjust to your reality)</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {ASSUMPTIONS.map((a) => (
            <label key={a.key} className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">
                {a.label} <span className="font-mono">({a.suffix})</span>
              </span>
              <input
                type="number"
                min={0}
                step={a.step}
                inputMode="decimal"
                value={values[a.key]}
                onChange={(e) => setField(a.key, e.target.value)}
                className="rounded-xl border border-border bg-muted px-4 py-2.5 text-[0.9375rem] text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
          ))}
        </div>
      </fieldset>

      <Link
        href={site.consultationHref}
        className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        Get a home charger installed — free estimate
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        A planning estimate from national-average figures, not a guarantee. Your real savings depend on your electricity
        rate, driving and vehicle.
      </p>
    </div>
  )
}
