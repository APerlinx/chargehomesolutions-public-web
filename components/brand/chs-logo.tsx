

import { cn } from "@/lib/utils"


const LOGO_RATIO = "793 / 376"
const LOGO_MASK = "/brand/chs-logo-mask.png"

export function ChsLogo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Charge Home Solutions"
      
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
