/**
 * Charge Home Solutions logo — the official stacked lockup: line-art car with the
 * charging plug above, "ChargeHome" and the ruled "SOLUTIONS" line below.
 *
 * The artwork is the real brand asset rather than a redrawn approximation, painted
 * through a CSS mask so the shape stays pixel-identical while the colour comes from
 * `currentColor`. That keeps one asset working on both light and dark backgrounds.
 */

import { cn } from "@/lib/utils"

/** Intrinsic size of the trimmed mask, used to lock the aspect ratio. */
const LOGO_RATIO = "793 / 376"
const LOGO_MASK = "/brand/chs-logo-mask.png"

export function ChsLogo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Charge Home Solutions"
      /* cn so a caller passing its own display utility (e.g. "hidden") overrides
         the base "inline-block" instead of losing to it on stylesheet order. */
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        aspectRatio: LOGO_RATIO,
        maskImage: `url("${LOGO_MASK}")`,
        WebkitMaskImage: `url("${LOGO_MASK}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  )
}
