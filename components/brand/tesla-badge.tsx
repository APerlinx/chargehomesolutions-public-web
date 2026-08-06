

import { cn } from "@/lib/utils"


export function TeslaBadge({
  className = "",
  variant = "default",
}: {
  className?: string
  
  variant?: "default" | "light" | "ink"
}) {
  const captionTones = {
    default: "text-muted-foreground",
    ink: "text-ink-muted dark:text-muted-foreground",
    light: "text-muted-foreground dark:text-ink-muted",
  }
  return (
    
    <span className={cn("inline-flex items-center gap-2", className)}>
      {}
      <img
        src="/logos/tesla-mark.svg"
        alt=""
        width={25}
        height={25}
        className="h-[25px] w-[25px] shrink-0"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        {}
        <img
          src="/logos/tesla-wordmark.svg"
          alt="Tesla"
          width={98}
          height={10}
          className="h-[10px] w-auto"
        />
        {}
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
