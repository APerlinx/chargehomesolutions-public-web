import { ChsLogo } from '@/components/brand/chs-logo'
import { TeslaBadge } from '@/components/brand/tesla-badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { Container } from '@/components/ui/section'
import { footer, site } from '@/lib/content'

export function ElectricianFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground dark:border-ink dark:bg-ink dark:text-ink-foreground">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <ChsLogo className="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground dark:text-ink-muted">
              {site.tagline}
            </p>
            <div className="mt-6">
              <TeslaBadge className="origin-left scale-95" variant="light" />
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground dark:text-ink-muted">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground dark:text-ink-foreground/80 dark:hover:text-ink-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 dark:border-ink-border sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground dark:text-ink-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-6">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground dark:text-ink-muted dark:hover:text-ink-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle className="size-8 text-muted-foreground hover:bg-muted dark:text-ink-muted dark:hover:bg-ink-raised" />
          </div>
        </div>
      </Container>
    </footer>
  )
}
