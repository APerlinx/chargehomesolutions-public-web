import Link from 'next/link'
import { ArrowRight, Phone, Star } from 'lucide-react'

import { assurances, reviews } from '@/lib/home'
import { site } from '@/lib/site'

function Stars() {
  return (
    <div
      role="img"
      className="flex items-center gap-0.5"
      aria-label="Rated 5 out of 5"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-3.5 w-3.5 fill-primary text-primary"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="marketing-ink-band py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="label-mono text-primary">Reviews</p>
          <h2
            id="reviews-heading"
            className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl"
          >
            Real reviews from real customers.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            In their own words, from homeowners we have installed for.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6"
            >
              <div>
                <Stars />
                <blockquote className="mt-5 text-pretty text-[0.9375rem] leading-relaxed text-foreground">
                  {review.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8">
                <span className="block text-sm font-semibold text-foreground">
                  {review.name}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {review.detail}
                </span>
              </figcaption>
            </figure>
          ))}

          {/* Sits in the grid as the fifth card, matching the old site's layout. */}
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-7 sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <div>
              <h3 className="text-balance text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-primary-foreground">
                Ready to power your home?
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-primary-foreground/85">
                Get a free, no-obligation estimate from a licensed electrician
                today.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-2.5">
              <Link
                href={site.consultationHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Book your free consultation
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Assurances() {
  return (
    /* Raised ink keeps this strip distinct from the footer's darker ink below. */
    <section aria-label="What every job includes" className="bg-muted py-14">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <ul className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {assurances.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
              />
              <div>
                <span className="block text-sm font-semibold text-foreground">
                  {item.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {item.sub}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
