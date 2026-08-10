import Link from "next/link"
import { CustomerHeader } from "@/components/customer-header"
import { CustomerFooter } from "@/components/customer-footer"

// Minimal customer landing (the chargehomesolutions.com side). Functional entry
// point only — book an appointment, or cross over to the electrician site. The
// full marketing design is done separately in v0.
export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <CustomerHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Certified electricians, nationwide
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Book your free in-home consultation
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            EV chargers, Tesla Powerwall, panel upgrades and more &mdash;
            installed by certified electricians near you. Pick a date and
            we&apos;ll match you and text a confirmation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
            >
              Book Appointment
            </Link>
            <Link
              href="/for-electricians"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              I&apos;m an electrician
            </Link>
          </div>
        </section>
      </main>
      <CustomerFooter />
    </div>
  )
}
