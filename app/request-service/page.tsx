"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import {
  SERVICE_TYPES,
  US_STATES,
  submitServiceRequest,
  type ServiceRequestInput,
} from "@/lib/api"

// Functional (not designed) customer job-booking form. Wires the public site to
// POST /public/services so the full flow — submit -> Service created -> SMS — is
// testable. v0 will replace the surrounding marketing chrome later.

const EMPTY: ServiceRequestInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  type: "",
  customerComments: "",
  customerAvailability: "",
  company: "", // honeypot
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export default function RequestServicePage() {
  const [form, setForm] = useState<ServiceRequestInput>(EMPTY)
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [error, setError] = useState<string | null>(null)

  const set =
    (field: keyof ServiceRequestInput) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setStatus("submitting")
    try {
      await submitServiceRequest(form)
      setStatus("success")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setStatus("idle")
    }
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16 lg:pt-20">
        <Section>
          <Container className="max-w-2xl">
            {status === "success" ? (
              <div className="rounded-2xl border border-border bg-panel p-8 text-center text-panel-foreground">
                <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                  Request received
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thanks — we&apos;ve got your request and a certified
                  electrician near you will be in touch. You&apos;ll get a text
                  confirmation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY)
                    setStatus("idle")
                  }}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <SectionHeader
                  align="left"
                  eyebrow="Free consultation"
                  title="Request service"
                  subtitle="Tell us what you need and where. We'll match you with a certified electrician and text you a confirmation."
                />

                <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="firstName">
                        First name
                      </label>
                      <input
                        id="firstName"
                        className={inputClass}
                        value={form.firstName}
                        onChange={set("firstName")}
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        className={inputClass}
                        value={form.lastName}
                        onChange={set("lastName")}
                        required
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={inputClass}
                        value={form.email}
                        onChange={set("email")}
                        required
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={inputClass}
                        value={form.phone}
                        onChange={set("phone")}
                        required
                        maxLength={30}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="address">
                      Street address
                    </label>
                    <input
                      id="address"
                      className={inputClass}
                      value={form.address}
                      onChange={set("address")}
                      required
                      maxLength={255}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <label className={labelClass} htmlFor="city">
                        City
                      </label>
                      <input
                        id="city"
                        className={inputClass}
                        value={form.city}
                        onChange={set("city")}
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="state">
                        State
                      </label>
                      <select
                        id="state"
                        className={inputClass}
                        value={form.state}
                        onChange={set("state")}
                        required
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="zipCode">
                        ZIP code
                      </label>
                      <input
                        id="zipCode"
                        className={inputClass}
                        value={form.zipCode}
                        onChange={set("zipCode")}
                        required
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="type">
                      Service needed
                    </label>
                    <select
                      id="type"
                      className={inputClass}
                      value={form.type}
                      onChange={set("type")}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="customerAvailability">
                      Your availability{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="customerAvailability"
                      className={inputClass}
                      placeholder="e.g. weekday mornings"
                      value={form.customerAvailability}
                      onChange={set("customerAvailability")}
                      maxLength={2000}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="customerComments">
                      Anything else{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="customerComments"
                      className={inputClass}
                      rows={4}
                      value={form.customerComments}
                      onChange={set("customerComments")}
                      maxLength={2000}
                    />
                  </div>

                  {/* Honeypot — hidden from real users, dropped server-side if filled. */}
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={set("company")}
                    />
                  </div>

                  {error ? (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-500/40 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-400"
                    >
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting…" : "Request service"}
                  </button>
                </form>
              </>
            )}
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
