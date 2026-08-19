import { longTailPrograms, stackExample } from "@/lib/savings-finder"

/**
 * The argument for address-level checking, set as a two-column editorial
 * spread so the long-form copy stays readable.
 */
export function WhyCheckFirst() {
  return (
    <section aria-labelledby="why-first-heading" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="label-mono text-primary">Why it matters</p>
            <h2
              id="why-first-heading"
              className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[2.75rem]"
            >
              Check the incentives before you price the project.
            </h2>
          </div>

          <div className="max-w-2xl space-y-10">
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-foreground">
                Stacking covers a real share of the cost
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                A state storage rebate like California&apos;s SGIP runs to thousands of dollars on a Powerwall, and
                utility rebates add hundreds more on an EV charger. Because programs change and many depend on your
                exact location or census tract, the only reliable way to know your savings is to check your specific
                situation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-foreground">
                Address-level checking beats every list
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Incentive articles age badly. Programs open, exhaust their budgets, change tiers, and reopen with new
                rules, sometimes within a single quarter. A static list that was accurate in January misleads by June.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Service-territory detail matters more than most homeowners expect: rebate amounts turn entirely on
                which utility serves the meter, and two houses a mile apart can sit with different providers and
                different payouts. No national article carries that resolution.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-foreground">The order changes decisions</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Incentives shape which project, which hardware, and which month make sense — decisions that harden the
                moment a contract is signed. Five minutes with the finder before any quote keeps every option open and
                every dollar claimable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** The composite example, as a ledger of what one sweep surfaced. */
export function StackIllustrated() {
  return (
    <section aria-labelledby="stack-heading" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="label-mono text-primary">The stack, illustrated</p>
            <h2
              id="stack-heading"
              className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[2.75rem]"
            >
              One address, three programs.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{stackExample.scenario}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{stackExample.outcome}</p>
          </div>

          <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {stackExample.items.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-6 px-6 py-6">
                <div>
                  <dt className="text-[0.9375rem] font-semibold text-foreground">{item.label}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{item.note}</dd>
                </div>
                <dd className="shrink-0 font-mono text-lg font-semibold tracking-[-0.02em] text-primary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

/** The obscure long tail, plus the promise that we file the paperwork. */
export function LongTail() {
  return (
    <section aria-labelledby="long-tail-heading" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="label-mono text-primary">The long tail</p>
            <h2
              id="long-tail-heading"
              className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[2.75rem]"
            >
              Programs most homeowners never hear about.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Each is small alone. Together they routinely add four figures to a project&apos;s incentive haul. No
              homeowner should need to become a policy researcher to collect money programs were funded to distribute,
              so the finder reads the long tail for you.
            </p>
          </div>

          <ul className="flex flex-col justify-center gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {longTailPrograms.map((program) => (
              <li key={program} className="bg-background px-6 py-5 text-[0.9375rem] leading-relaxed text-foreground">
                {program}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
