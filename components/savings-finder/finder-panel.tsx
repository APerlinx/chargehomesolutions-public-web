"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, MapPin, Plus } from "lucide-react"

import { finderStates, projectOptions, sweepLayers } from "@/lib/savings-finder"
import { cn } from "@/lib/utils"

/**
 * The tool's input surface. Selection state is local for now — the submit
 * handler is intentionally inert until the matching logic is wired up.
 */
export function FinderPanel() {
  const [selected, setSelected] = useState<string[]>(["ev-charger"])
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")

  function toggle(id: string) {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8">
      <form
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <div>
          <label htmlFor="finder-address" className="label-mono text-muted-foreground">
            Your address
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
            We use it to auto-match your state, utility and local incentives.
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
              Or pick your state
            </label>
            <div className="relative mt-3">
              <select
                id="finder-state"
                value={state}
                onChange={(event) => setState(event.target.value)}
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
      </form>

      {/* The four layers the sweep covers, as a hairline strip under the form. */}
      <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {sweepLayers.map((layer) => (
          <li key={layer} className="bg-muted px-4 py-3.5 text-xs font-medium leading-snug text-muted-foreground">
            {layer}
          </li>
        ))}
      </ul>
    </div>
  )
}
