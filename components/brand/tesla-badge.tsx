/* eslint-disable @next/next/no-img-element */

/**
 * "Tesla Certified Installer" credential shown beside the CHS logo.
 *
 * The Tesla mark and wordmark are the official assets, rendered unmodified —
 * only inverted from black to white on dark backgrounds, which matches Tesla's
 * own light-on-dark usage. They are deliberately not restyled or recoloured.
 */
export function TeslaBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src="/logos/tesla-mark.svg" alt="" width={13} height={13} className="shrink-0" aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <img
          src="/logos/tesla-wordmark.svg"
          alt="Tesla"
          width={52}
          height={6}
          className="h-[6px] w-[52px] dark:invert"
        />
        <span className="mt-[4px] font-mono text-[6.5px] leading-none tracking-[0.2em] text-muted-foreground">
          CERTIFIED INSTALLER
        </span>
      </span>
    </span>
  )
}
