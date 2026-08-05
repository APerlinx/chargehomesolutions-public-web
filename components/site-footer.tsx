import Link from "next/link"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">Charge Home Solutions</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Placeholder contact details.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm sm:gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Charge Home Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
