import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ChamberBadge, Logo, TeslaCertifiedBadge } from "@/components/brand"
import { socialLinks } from "@/components/social-icons"
import { BackToTop } from "@/components/back-to-top"
import { footerColumns, legalLinks, serviceStates, site, stateHref, toolsAndResources } from "@/lib/site"

const linkClass = "text-[0.8125rem] leading-relaxed text-ink-muted transition-colors hover:text-ink-foreground"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-ink-foreground">
      {/* Brand row */}
      <div className="mx-auto max-w-[92rem] px-5 pb-14 pt-16 lg:px-8">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Logo tone="light" />
            <span aria-hidden="true" className="h-9 w-px bg-ink-border" />
            <TeslaCertifiedBadge tone="light" />
          </div>
          <ChamberBadge href={site.chamberHref} />
        </div>
      </div>

      {/* Service columns */}
      <div className="mx-auto max-w-[92rem] px-5 pb-14 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
              <h2 id={`footer-${column.title}`} className="mb-4 text-[0.8125rem] font-semibold text-ink-foreground">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Tools & resources */}
      <div className="border-t border-ink-border">
        <div className="mx-auto max-w-[92rem] px-5 py-12 lg:px-8">
          <h2 id="footer-tools" className="mb-5 text-[0.8125rem] font-semibold text-ink-foreground">
            Tools &amp; Resources
          </h2>
          <nav aria-labelledby="footer-tools">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-5">
              {toolsAndResources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Locations */}
      <div className="border-t border-ink-border">
        <div className="mx-auto max-w-[92rem] px-5 py-12 lg:px-8">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="footer-locations" className="text-[0.8125rem] font-semibold text-ink-foreground">
              Service Locations, All 50 States
            </h2>
            <Link
              href="/locations/"
              className="group inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary"
            >
              View all locations
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <nav aria-labelledby="footer-locations">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {serviceStates.map((state) => (
                <li key={state}>
                  <Link href={stateHref(state)} className={linkClass}>
                    {state}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-[0.8125rem] font-semibold leading-relaxed text-ink-foreground">
                  Nationwide Network
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-border">
        <div className="mx-auto max-w-[92rem] px-5 py-8 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {site.offices.map((office) => (
                <Link key={office.label} href={office.href} className={linkClass}>
                  {office.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="font-mono text-[0.8125rem] font-semibold tracking-tight text-ink-foreground transition-colors hover:text-primary"
              >
                {site.phone}
              </a>
            </div>

            <ul className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-raised text-ink-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-muted">
            &copy; {year} {site.legalName}. {site.tagline}
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  )
}
