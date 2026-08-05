import Link from "next/link"

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Charge Home Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            EV charging, installed and supported end to end
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Placeholder hero copy. This section will introduce the core offering
            and route visitors to the primary conversion action once the final
            design is defined.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
            <Link
              href="#services"
              className="inline-flex h-10 items-center justify-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-muted"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
