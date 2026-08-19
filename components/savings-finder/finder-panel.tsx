"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, MapPin, Phone, Plus } from "lucide-react"

import { RebateCard } from "@/components/rebates/rebate-card"
import { finderStates, projectOptions, sweepLayers } from "@/lib/savings-finder"
import { rebates } from "@/lib/rebates"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

/**
 * The tool's input surface. On submit it resolves the chosen state to the real
 * programs from the rebate dataset and shows them inline (value first), then
 * offers the free in-home estimate carrying the user's context along.
 */
export function FinderPanel() {
  const [selected, setSelected] = useState<string[]>(["ev-charger"])
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [error, setError] = useState(false)

  function toggle(id: string) {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!state) {
      setError(true)
      return
    }
    setError(false)
    setSubmitted(state)
  }

  const result = submitted ? rebates.find((r) => r.state === submitted) : undefined

  // Carry only non-personal context (state + projects) into the booking flow to
  // pre-frame the estimate. The address is deliberately kept out of the URL — it
  // is PII that would otherwise persist in browser history and server logs; the
  // booking form collects it directly instead.
  const bookingHref = submitted
    ? `${site.consultationHref}?${new URLSearchParams({
        state: submitted,
        projects: selected.join(","),
      }).toString()}`
    : site.consultationHref

  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="finder-address" className="label-mono text-muted-foreground">
            Your address <span className="font-sans normal-case tracking-normal">(optional)</span>
          </label>
          <div className="mt-3 flex items-center gap-3 rounded-full border border-border bg-muted px-5 py-3.5 transition-colors focus-within:border-primary">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <input
              id="finder-address"
              type="text"
              autoComplete="street-address"
              placeholder="Enter your full address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="w-full bg-transparent text-[0.9375rem] text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <p className="mt-2.5 pl-1 text-sm leading-relaxed text-muted-foreground">
            We bring it to your free estimate. Pick your state below to see programs now.
          </p>
        </div>

        <fieldset className="mt-8">
          <legend className="label-mono text-muted-foreground">What are you planning?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectOptions.map((option) => {
              const isOn = selected.includes(option.id)

              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => toggle(option.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    isOn
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-foreground",
                  )}
                >
                  {option.label}
                  <Plus
                    className={cn("h-3.5 w-3.5 transition-transform", isOn && "rotate-45")}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="sm:w-56">
            <label htmlFor="finder-state" className="label-mono text-muted-foreground">
              Your state
            </label>
            <div className="relative mt-3">
              <select
                id="finder-state"
                value={state}
                aria-invalid={error}
                aria-describedby={error ? "finder-state-error" : undefined}
                onChange={(event) => {
                  setState(event.target.value)
                  setSubmitted(null)
                  if (event.target.value) setError(false)
                }}
                className="w-full appearance-none rounded-full border border-border bg-muted pl-5 pr-11 py-3.5 text-[0.9375rem] text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">My state</option>
                {finderStates.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:flex-1"
          >
            Find my rebates
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
        {error ? (
          <p id="finder-state-error" role="alert" className="mt-3 text-sm text-primary">
            Pick your state to see the programs you may qualify for.
          </p>
        ) : null}
      </form>

      {submitted ? (
        <div role="status" aria-live="polite" className="mt-8 border-t border-border pt-8">
          {result ? (
            <>
              <p className="text-lg font-semibold text-foreground">
                You may qualify for {result.programs.length} program{result.programs.length === 1 ? "" : "s"} in{" "}
                {result.state}
              </p>
              <ul className="mt-5 grid gap-4">
                {result.programs.map((program) => (
                  <RebateCard key={`${program.officialUrl}-${program.name}`} program={program} />
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              We don&rsquo;t track a state or utility program in {submitted} yet. Your free in-home estimate still covers
              every federal and manufacturer option you qualify for.
            </p>
          )}

          <div className="mt-6 rounded-2xl bg-muted px-6 py-6">
            <p className="font-semibold text-foreground">Want us to lock these in?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              We confirm which programs you qualify for and file the paperwork — free.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={bookingHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Book my free estimate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 font-mono text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* The four layers the sweep covers, as a hairline strip under the form. */
        <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {sweepLayers.map((layer) => (
            <li key={layer} className="bg-muted px-4 py-3.5 text-xs font-medium leading-snug text-muted-foreground">
              {layer}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
