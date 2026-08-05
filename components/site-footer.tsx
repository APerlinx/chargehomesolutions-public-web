import { ChsLogo } from "@/components/brand/chs-logo"
import { TeslaBadge } from "@/components/brand/tesla-badge"
import { Container } from "@/components/ui/section"
import { footer, site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <ChsLogo className="h-9 w-auto" variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">{site.tagline}</p>
            <div className="mt-6">
              <TeslaBadge variant="light" />
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{column.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {footer.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-xs text-ink-muted transition-colors hover:text-ink-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
