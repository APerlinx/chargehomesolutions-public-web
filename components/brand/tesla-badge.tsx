/* eslint-disable @next/next/no-img-element */

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
  variant?: "default" | "light"
}) {
  const isLight = variant === "light"
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/*
       * Sized taller than the text block beside it, so the mark's upper edge rises
       * above the wordmark rather than sitting boxed in line with it.
       */}
      <img
        src="/logos/tesla-mark.svg"
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 shrink-0"
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
          width={107}
          height={11}
          className="h-[11px] w-auto"
        />
        <span
          className={`mt-[3px] font-mono text-[7px] leading-none tracking-[0.185em] ${
            isLight ? "text-ink-muted" : "text-muted-foreground"
          }`}
        >
          CERTIFIED INSTALLER
        </span>
      </span>
    </span>
  )
}
