import Link from "next/link"
import { ChsLogo } from "@/components/brand/chs-logo"

// Minimal customer-facing header (the .com marketing side). Kept plain on
// purpose — the polished marketing design is handled separately in v0.
export function CustomerHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Charge Home Solutions home"
          className="flex items-center"
        >
          <ChsLogo className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            href="/for-electricians"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            For Electricians
          </Link>
          <Link
            href="/request-service"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  )
}
