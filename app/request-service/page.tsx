"use client"

import { useState } from "react"
import { CustomerHeader } from "@/components/customer-header"
import { CustomerFooter } from "@/components/customer-footer"
import { Container, Section } from "@/components/ui/section"
import { TurnstileWidget } from "@/components/turnstile-widget"
import {
  APPOINTMENT_WINDOWS,
  SERVICE_TYPES,
  US_STATES,
  submitServiceRequest,
  type ServiceRequestInput,
} from "@/lib/api"

// Functional customer booking form. Captures the request + a booked appointment
// (date + window) and posts to POST /public/services, which schedules it and
// auto-starts dispatch. v0 owns the visual design later.

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

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
  scheduledLocalDate: "",
  appointmentWindow: "",
  customerComments: "",
  company: "", // honeypot
}

function todayLocalISO(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

// Immediate feedback for the common cases; the server (libphonenumber via
// @IsPhoneNumber('US')) stays the source of truth. A US number is 10 digits, or
// 11 digits starting with the country code 1.
function isLikelyUsPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "")
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"))
}

const PHONE_ERROR = "Enter a valid US phone number, e.g. (312) 555-0111."

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export default function RequestServicePage() {
  const [form, setForm] = useState<ServiceRequestInput>(EMPTY)
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  )
  const [error, setError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [turnstileKey, setTurnstileKey] = useState(0)

  const minDate = todayLocalISO()
  const needsTurnstile = Boolean(TURNSTILE_SITE_KEY)

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
    if (!isLikelyUsPhone(form.phone)) {
      setPhoneError(PHONE_ERROR)
      return
    }
    if (needsTurnstile && !token) {
      setError("Please complete the verification below.")
      return
    }
    setStatus("submitting")
    try {
      await submitServiceRequest({ ...form, turnstileToken: token ?? undefined })
      setStatus("success")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setStatus("idle")
      // The Turnstile token is single-use — remount the widget for a fresh one.
      setToken(null)
      setTurnstileKey((k) => k + 1)
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-dvh flex-col">
        <CustomerHeader />
        <main className="flex-1">
          <Section>
            <Container className="max-w-2xl">
              <div className="rounded-2xl border border-border bg-panel p-8 text-center text-panel-foreground">
                <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                  Appointment requested
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thanks &mdash; we&apos;re matching you with a certified
                  electrician near you. You&apos;ll get a text confirming your
                  appointment shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY)
                    setToken(null)
                    setTurnstileKey((k) => k + 1)
                    setStatus("idle")
                  }}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Book another appointment
                </button>
              </div>
            </Container>
          </Section>
        </main>
        <CustomerFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <CustomerHeader />
      <main className="flex-1">
        <Section>
          <Container className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight">
              Book your free consultation
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us what you need and pick a date. We&apos;ll match you with a
              certified electrician and text you a confirmation.
            </p>

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
                    onChange={(e) => {
                      set("phone")(e)
                      if (phoneError) setPhoneError(null)
                    }}
                    required
                    maxLength={30}
                    aria-invalid={phoneError ? true : undefined}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                  />
                  {phoneError ? (
                    <p
                      id="phone-error"
                      className="mt-1.5 text-sm text-red-700 dark:text-red-400"
                    >
                      {phoneError}
                    </p>
                  ) : null}
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="scheduledLocalDate">
                    Preferred date
                  </label>
                  <input
                    id="scheduledLocalDate"
                    type="date"
                    className={inputClass}
                    value={form.scheduledLocalDate}
                    onChange={set("scheduledLocalDate")}
                    min={minDate}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="appointmentWindow">
                    Preferred time
                  </label>
                  <select
                    id="appointmentWindow"
                    className={inputClass}
                    value={form.appointmentWindow}
                    onChange={set("appointmentWindow")}
                    required
                  >
                    <option value="" disabled>
                      Select a window
                    </option>
                    {APPOINTMENT_WINDOWS.map((w) => (
                      <option key={w.value} value={w.value}>
                        {w.label}
                      </option>
                    ))}
                  </select>
                </div>
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

              {needsTurnstile && TURNSTILE_SITE_KEY ? (
                <TurnstileWidget
                  key={turnstileKey}
                  siteKey={TURNSTILE_SITE_KEY}
                  onVerify={setToken}
                  onExpire={() => setToken(null)}
                />
              ) : null}

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
                disabled={
                  status === "submitting" || (needsTurnstile && !token)
                }
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting…" : "Book Appointment"}
              </button>
            </form>
          </Container>
        </Section>
      </main>
      <CustomerFooter />
    </div>
  )
}
