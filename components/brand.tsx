import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * ChargeHome Solutions wordmark. The bolt sits inside the "C" counter-space of
 * the mark block, echoing the legacy logo without redrawing the car outline.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light"
  className?: string
}) {
  const isLight = tone === "light"

  return (
    <Link
      href="/"
      aria-label={`Charge Home Solutions, home`}
      className={cn("group flex shrink-0 items-center gap-2.5 whitespace-nowrap", className)}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.6rem] transition-transform duration-300 group-hover:-translate-y-px",
          isLight ? "bg-ink-foreground text-ink" : "bg-foreground text-background",
        )}
      >
        {/* House outline with a bolt struck through it. The bolt is stroked in
            the tile's own background color with paint-order:stroke, so the
            stroke reads as a clean gap where it crosses the house. */}
        <svg viewBox="0 0 24 24" className="h-[1.3rem] w-[1.3rem]" aria-hidden="true">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth={2.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3.4 11.6 12 3.6l8.6 8" />
            <path d="M5.4 11.4v9.2h13.2v-9.2" />
          </g>
          <path
            d="M14.6 4.9 6.9 14.7h4l-1.5 7.9 7.7-10.2h-4.2z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2.6}
            strokeLinejoin="round"
            paintOrder="stroke"
            className={isLight ? "stroke-ink-foreground" : "stroke-foreground"}
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        {/* Two weights in one word, as in the logo: "Charge" set bold, "Home"
            set regular so the compound reads as two parts without a space. */}
        <span
          className={cn(
            "text-[1.0625rem] tracking-[-0.02em]",
            isLight ? "text-ink-foreground" : "text-foreground",
          )}
        >
          <span className="font-semibold">Charge</span>
          <span className="font-normal">Home</span>
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.5625rem] tracking-[0.32em]",
            isLight ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          SOLUTIONS
        </span>
      </span>
    </Link>
  )
}

/** Tesla "Energy Certified Installer" lockup, as on the legacy site. */
export function TeslaCertifiedBadge({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light"
  className?: string
}) {
  const isLight = tone === "light"

  return (
    <span
      className={cn(
        "flex items-center gap-2 rounded-md border px-2.5 py-1.5",
        isLight ? "border-ink-border bg-ink-raised" : "border-border bg-muted",
        className,
      )}
    >
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-sm font-semibold",
          isLight ? "bg-ink-foreground text-ink" : "bg-foreground text-background",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
          <path d="M3 4h18v3h-7.4v13h-3.2V7H3z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-[0.6875rem] font-semibold", isLight ? "text-ink-foreground" : "text-foreground")}>
          Energy
        </span>
        <span className={cn("mt-0.5 text-[0.625rem]", isLight ? "text-ink-muted" : "text-muted-foreground")}>
          Certified Installer
        </span>
      </span>
    </span>
  )
}

/** Chamber of Commerce verified-member seal, rendered as a typographic crest. */
export function ChamberBadge({ href, className }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex w-fit flex-col items-center gap-1.5 rounded-full border border-ink-border bg-ink-raised px-6 py-5 text-center transition-colors hover:border-ink-muted",
        className,
      )}
    >
      <span className="font-mono text-[0.5625rem] tracking-[0.22em] text-ink-muted">CHAMBER OF COMMERCE</span>
      <span className="text-sm font-semibold tracking-tight text-ink-foreground">Verified Member</span>
      <span aria-hidden="true" className="mt-0.5 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-primary" />
        ))}
      </span>
    </a>
  )
}

/** Small US-flag glyph for the "Proudly American" signal. */
export function FlagGlyph({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block h-3 w-[1.125rem] shrink-0 overflow-hidden rounded-[2px]", className)}
    >
      <span className="absolute inset-0 flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={cn("flex-1", i % 2 === 0 ? "bg-[#b22234]" : "bg-white")} />
        ))}
      </span>
      <span className="absolute left-0 top-0 h-[0.5rem] w-[0.5rem] bg-[#3c3b6e]" />
    </span>
  )
}
