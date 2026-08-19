"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react"

import { primaryNav, type NavItem } from "@/lib/nav"
import { site, trustSignals } from "@/lib/site"
import { FlagGlyph, Logo, TeslaCertifiedBadge } from "@/components/brand"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Collapse the panel as soon as the user starts scrolling the page.
  useEffect(() => {
    if (openIndex === null) return
    const onScroll = () => setOpenIndex(null)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [openIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      setOpenIndex(null)
      setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const openPanel = useCallback((index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenIndex(index)
  }, [])

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120)
  }, [])

  const activeItem = openIndex === null ? null : primaryNav[openIndex]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background plate: invisible at rest, frosted once the page moves. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled || openIndex !== null
            ? "border-b border-border bg-background/72 shadow-[0_1px_24px_-12px_rgba(0,0,0,0.28)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      />

      <div className="relative">
        {/* Utility row — retires on scroll. */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-400 ease-out",
            scrolled ? "max-h-0 -translate-y-1 opacity-0" : "max-h-(--header-utility-h) translate-y-0 opacity-100",
          )}
        >
          <div className="mx-auto flex h-(--header-utility-h) max-w-[92rem] items-center gap-6 px-5 lg:px-8">
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex items-center gap-2">
                <FlagGlyph />
                <span className="label-mono whitespace-nowrap text-foreground">Proudly American</span>
              </span>

              <span aria-hidden="true" className="hidden h-3 w-px bg-border md:block" />

              <ul className="hidden items-center gap-4 md:flex">
                {trustSignals.map((signal) => (
                  <li key={signal} className="label-mono whitespace-nowrap text-muted-foreground">
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <a href={site.phoneHref} className="group flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span className="flex flex-col leading-none">
                  <span className="label-mono text-muted-foreground">Call us 24/7</span>
                  <span className="mt-0.5 font-mono text-[0.8125rem] font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {site.phone}
                  </span>
                </span>
              </a>

              <ConsultationButton className="hidden sm:inline-flex">
                Book your free in-home consultation
              </ConsultationButton>
            </div>
          </div>
        </div>

        {/* Nav row */}
        <div onMouseLeave={scheduleClose}>
          <div className="mx-auto flex h-(--header-nav-h) max-w-[92rem] items-center gap-5 px-5 lg:px-8">
            <div className="flex items-center gap-4">
              <Logo />
              <span aria-hidden="true" className="hidden h-8 w-px bg-border 2xl:block" />
              <TeslaCertifiedBadge className="hidden 2xl:flex" />
            </div>

            <nav aria-label="Primary" className="ml-auto hidden items-center lg:flex">
              <ul className="flex items-center">
                {primaryNav.map((item, index) => (
                  <li key={item.label}>
                    <NavTrigger
                      item={item}
                      isOpen={openIndex === index}
                      onOpen={() => openPanel(index)}
                      onClose={() => setOpenIndex(null)}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Crossfades in as the utility row retires, so the CTA never leaves. */}
            <div
              className={cn(
                "ml-auto hidden items-center gap-2 overflow-hidden transition-all duration-400 ease-out lg:flex",
                scrolled ? "max-w-[24rem] opacity-100" : "max-w-0 opacity-0",
              )}
              aria-hidden={!scrolled}
            >
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border px-3.5 py-2 font-mono text-[0.8125rem] font-semibold tracking-tight text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
              <ConsultationButton tabIndex={scrolled ? 0 : -1}>Free consultation</ConsultationButton>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {activeItem?.groups ? (
            <MegaPanel item={activeItem} onMouseEnter={() => openIndex !== null && openPanel(openIndex)} />
          ) : null}
        </div>
      </div>

      {mobileOpen ? <MobileMenu onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  )
}

function ConsultationButton({
  children,
  className,
  tabIndex,
}: {
  children: React.ReactNode
  className?: string
  tabIndex?: number
}) {
  return (
    <Link
      href={site.consultationHref}
      tabIndex={tabIndex}
      className={cn(
        "group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-[0.75rem] font-semibold tracking-[0.01em] text-primary-foreground transition-colors hover:bg-primary-hover",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  )
}

function NavTrigger({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const shared =
    "relative flex items-center gap-1 px-3 py-2 text-[0.8125rem] font-medium text-foreground transition-colors hover:text-primary"

  const underline = (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
        isOpen ? "scale-x-100" : "scale-x-0",
      )}
    />
  )

  if (!item.groups) {
    return (
      <Link href={item.href} className={shared} onMouseEnter={onClose}>
        {item.label}
      </Link>
    )
  }

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={() => (isOpen ? onClose() : onOpen())}
      className={shared}
    >
      {item.label}
      <ChevronDown
        className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")}
        aria-hidden="true"
      />
      {underline}
    </button>
  )
}

function MegaPanel({ item, onMouseEnter }: { item: NavItem; onMouseEnter: () => void }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="absolute inset-x-0 top-full border-b border-border bg-background/95 shadow-[0_28px_48px_-28px_rgba(0,0,0,0.32)] backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-[92rem] gap-12 px-5 py-9 lg:px-8">
        <div className="flex flex-1 gap-10">
          {item.groups?.map((group) => (
            <div key={group.title} className="min-w-0 flex-1">
              <h2 className="label-mono mb-4 text-muted-foreground">{group.title}</h2>
              <ul className="flex flex-col gap-0.5">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-2 rounded py-1.5 text-[0.875rem] leading-snug text-foreground transition-colors hover:text-primary"
                    >
                      <span className="text-pretty">{link.label}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3 w-3 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {item.feature ? (
          <Link
            href={item.feature.href}
            className="group flex w-[19rem] shrink-0 flex-col justify-between rounded-xl bg-muted p-6 transition-colors hover:bg-foreground"
          >
            <div>
              <span className="label-mono text-primary">{item.feature.eyebrow}</span>
              <p className="mt-3 text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-background">
                {item.feature.title}
              </p>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground transition-colors group-hover:text-border">
                {item.feature.body}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-primary transition-colors group-hover:text-background">
              {item.feature.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ) : null}
      </div>

      {item.viewAll ? (
        <div className="border-t border-border">
          <div className="mx-auto max-w-[92rem] px-5 py-3.5 lg:px-8">
            <Link
              href={item.viewAll.href}
              className="group inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary"
            >
              {item.viewAll.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-nav-h))] overflow-y-auto border-b border-border bg-background lg:hidden">
      <div className="px-5 pb-8 pt-4">
        <div className="flex flex-col gap-3 pb-5">
          <ConsultationButton className="justify-center py-3 text-[0.8125rem]">
            Book your free in-home consultation
          </ConsultationButton>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-border py-3 font-mono text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {site.phone}
            <span className="label-mono text-muted-foreground">24/7</span>
          </a>
        </div>

        <ul className="flex flex-col">
          {primaryNav.map((item) =>
            item.groups ? (
              <li key={item.label} className="border-t border-border">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[0.9375rem] font-medium text-foreground">
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="pb-4">
                    {item.groups.map((group) => (
                      <div key={group.title} className="pb-3">
                        <h3 className="label-mono py-2 text-muted-foreground">{group.title}</h3>
                        <ul className="flex flex-col">
                          {group.links.map((link) => (
                            <li key={link.href + link.label}>
                              <Link
                                href={link.href}
                                onClick={onNavigate}
                                className="block py-2 text-[0.875rem] text-muted-foreground"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.viewAll ? (
                      <Link
                        href={item.viewAll.href}
                        onClick={onNavigate}
                        className="inline-flex items-center gap-2 py-1 text-[0.8125rem] font-medium text-primary"
                      >
                        {item.viewAll.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </details>
              </li>
            ) : (
              <li key={item.label} className="border-t border-border">
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-3.5 text-[0.9375rem] font-medium text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
          <span className="flex items-center gap-2">
            <FlagGlyph />
            <span className="label-mono text-foreground">Proudly American</span>
          </span>
          <TeslaCertifiedBadge className="ml-auto" />
        </div>
      </div>
    </div>
  )
}
