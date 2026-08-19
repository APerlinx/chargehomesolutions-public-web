import Link from "next/link"

// Minimal customer-facing footer. Plain by design — v0 owns the marketing look.
export function CustomerFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} Charge Home Solutions. All rights
          reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link href="/for-electricians" className="hover:text-foreground">
            For Electricians
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
