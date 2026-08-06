/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils"

/**
 * "Tesla Certified Installer" credential shown beside the CHS logo.
 *
 * The Tesla mark and wordmark are the official assets, rendered unmodified: no
 * recolouring, no filters, and no distortion. Both ship in Tesla red, which reads
 * on light and dark backgrounds alike, so neither is ever inverted — running a
 * filter over them turned Tesla red into cyan. Only the "CERTIFIED INSTALLER"
 * caption, which is our text and not Tesla's, adapts to the surface.
 */
export function TeslaBadge({
  className = "",
  variant = "default",
}: {
  className?: string
  /**
   * Names the surface the badge sits on, which decides the caption colour:
   * - `default` — the normal page surface, in either theme.
   * - `ink` — a surface that is dark in BOTH themes (the unscrolled header over the hero).
   * - `light` — the footer, which is near-white in light mode and dark in dark mode.
   *
   * Each `dark:` half pins dark mode to the value it already rendered.
   */
  variant?: "default" | "light" | "ink"
}) {
  const captionTones = {
    default: "text-muted-foreground",
    ink: "text-ink-muted dark:text-muted-foreground",
    light: "text-muted-foreground dark:text-ink-muted",
  }
  return (
    /*
     * cn (tailwind-merge) rather than string concatenation: the base "inline-flex"
     * and a caller's "hidden" are both display utilities of equal specificity, so
     * plain concatenation left the winner up to stylesheet order — "inline-flex"
     * won and the header's "hidden sm:flex" never hid the badge on phones.
     * tailwind-merge drops the base class when the caller passes its own.
     */
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/*
       * Sized taller than the text block beside it, so the mark's upper edge rises
       * above the wordmark rather than sitting boxed in line with it.
       */}
      <img
        src="/logos/tesla-mark.svg"
        alt=""
        width={25}
        height={25}
        className="h-[25px] w-[25px] shrink-0"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        {/*
         * The source viewBox is 342x35, a 9.771 ratio. It was previously forced to
         * 52x6 (8.667), squashing every glyph ~11% horizontally — that is what made
         * the E and S look smeared. Height is set and width left automatic so the
         * browser derives it from the intrinsic ratio and cannot distort it again.
         */}
        <img
          src="/logos/tesla-wordmark.svg"
          alt="Tesla"
          width={98}
          height={10}
          className="h-[10px] w-auto"
        />
        {/*
         * Caption tracks the wordmark's rendered width so the two stay flush. The
         * wordmark is 9.771:1, so at 10px tall it spans ~98px; 19 mono characters at
         * 6.5px with 0.185em tracking come to ~97px. Changing the wordmark height
         * without rescaling this leaves the caption visibly over- or under-running it.
         *
         * nowrap because that fit is only ~0.7px of slack: at browser zoom the
         * rounding goes the other way and the caption breaks into two lines, which
         * splits the credential and pushes the header row taller.
         */}
        <span
          className={cn(
            "mt-[3px] whitespace-nowrap font-mono text-[6.5px] leading-none tracking-[0.185em]",
            captionTones[variant],
          )}
        >
          CERTIFIED INSTALLER
        </span>
      </span>
    </span>
  )
}
