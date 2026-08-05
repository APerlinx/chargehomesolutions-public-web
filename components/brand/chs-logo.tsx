/**
 * Charge Home Solutions wordmark, rebuilt as a clean vector.
 *
 * Keeps the original identity — a car silhouette above the "ChargeHome
 * SOLUTIONS" lockup — but redrawn with smooth geometry, and the wordmark set in
 * the site typeface so it stays crisp at every size and inherits the theme colour.
 */
export function ChsLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 44 26"
        className="h-[26px] w-[44px] shrink-0 overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        {/* Car profile: roofline sweeping into the body, drawn as one smooth stroke. */}
        <path
          d="M3 17.4c0-1.2.5-2 1.7-2.4l4.6-1.5 4.1-4.6c1-1.1 2.2-1.7 3.7-1.7h7.6c1.6 0 3 .6 4.2 1.7l4.4 4.2 4.6 1.1c1.3.3 2.1 1.2 2.1 2.5v1.9c0 .8-.6 1.4-1.4 1.4h-2.2"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6 20.4h9.6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        {/* Wheels */}
        <circle cx="9.6" cy="20.4" r="3.1" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="27.2" cy="20.4" r="3.1" stroke="currentColor" strokeWidth="1.9" />
        {/* Charge bolt in the brand accent, sitting where the window line breaks. */}
        <path
          d="M20.6 8.3 16.2 14h3.3l-1.1 4.4 4.6-5.9h-3.4l1-4.2Z"
          fill="var(--color-primary)"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[-0.025em]">
          Charge<span className="font-normal">Home</span>
        </span>
        <span className="mt-[3px] font-mono text-[7px] leading-none tracking-[0.34em] text-muted-foreground">
          SOLUTIONS
        </span>
      </span>
    </span>
  )
}
