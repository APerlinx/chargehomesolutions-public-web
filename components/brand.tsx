import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * ChargeHome Solutions wordmark. The bolt sits inside the "C" counter-space of
 * the mark block, echoing the legacy logo without redrawing the car outline.
 */
export function Logo({
  tone = "dark",
  href = "/",
  className,
}: {
  tone?: "dark" | "light"
  href?: string
  className?: string
}) {
  const isLight = tone === "light"

  return (
    <Link
      href={href}
      aria-label={`Charge Home Solutions, home`}
      className={cn("group flex shrink-0 items-center gap-2.5 whitespace-nowrap", className)}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-px">
        {/* The real brand icon: charcoal squircle, solid white house (with
            chimney + torn bottom), charcoal lightning. Traced from the source
            logo; the white house is painted behind so the icon reads correctly
            on any background, not just white. */}
        <svg viewBox="110 170 218 220" className="h-full w-full" aria-hidden="true">
          <rect x="150" y="210" width="142" height="150" rx="18" fill="#ffffff" />
          <path
            fill="#2b2b2e"
            d="M112.670570,301.999939 C112.696709,272.338440 112.604538,243.176193 112.804611,214.015930 C112.892525,201.203262 116.607285,189.749084 126.998428,181.236984 C135.106400,174.595215 144.844299,172.994370 154.702255,172.939285 C198.192261,172.696304 241.685089,172.690247 285.175110,172.927048 C294.526367,172.977966 303.730499,174.711548 311.496094,180.842606 C321.389771,188.653809 326.021545,199.270065 326.104980,211.354507 C326.423645,257.507019 326.476837,303.665314 326.088165,349.816925 C325.921906,369.559814 311.603394,384.064941 291.867279,386.454987 C286.881744,387.058777 281.915222,387.292450 276.919891,387.294464 C238.093399,387.310181 199.266907,387.316162 160.440414,387.299011 C156.943298,387.297485 153.426102,387.317932 149.952423,386.978363 C127.002876,384.735107 113.374825,370.036652 112.812935,346.490356 C112.463196,331.834106 112.698364,317.163879 112.670570,301.999939 M205.768402,222.270905 C186.009720,240.889877 166.251038,259.508820 145.812943,278.768005 C151.508148,280.708557 155.859436,279.939209 160.088562,279.883484 C164.564728,279.824524 166.293106,281.323181 166.219955,285.968811 C165.996948,300.130646 166.086685,314.298798 166.179977,328.463654 C166.224808,335.267426 169.581345,338.619781 176.296265,338.712341 C183.294266,338.808777 190.300735,338.551056 197.291595,338.792725 C200.815735,338.914520 202.358582,337.447205 203.252563,334.254333 C206.079788,324.156738 209.104874,314.114655 212.013123,304.039490 C212.505219,302.334717 213.362213,300.619476 212.430634,298.536407 C203.103088,297.328064 193.478195,299.341461 184.156830,297.380554 C184.234207,294.655060 185.626205,293.338104 186.670044,291.874146 C201.759293,270.712280 216.784042,249.503265 232.061646,228.478043 C234.508911,225.110062 234.261414,223.086960 231.238419,220.611221 C228.667923,218.506104 226.313675,216.116287 224.006943,213.714890 C220.994080,210.578400 218.186234,210.374115 215.046982,213.599136 C212.261536,216.460648 209.222885,219.075699 205.768402,222.270905 M245.435059,274.847900 C248.594040,275.300140 252.043625,273.767975 255.645767,276.565277 C239.202484,299.532471 222.845291,322.379486 206.488083,345.226471 C208.534271,345.114044 209.970078,344.514893 211.003540,343.504303 C215.269028,339.333191 220.370316,338.500763 226.131256,338.650146 C237.611740,338.947845 249.105408,338.750916 260.593597,338.735168 C270.026154,338.722198 272.842743,335.943481 272.855408,326.623535 C272.874207,312.804565 272.945282,298.984802 272.813538,285.167053 C272.776855,281.317261 274.134064,279.622345 278.067657,279.923950 C280.715790,280.126923 283.395233,280.031067 286.055237,279.928650 C287.643799,279.867462 289.707489,280.390167 290.454132,278.444336 C291.181427,276.548920 289.456635,275.438141 288.286865,274.312103 C282.171692,268.425598 276.076721,262.516205 269.860657,256.737518 C267.618073,254.652756 266.591248,252.355209 266.676575,249.271957 C266.842255,243.282532 266.762207,237.285477 266.728210,231.291901 C266.719910,229.827530 267.161255,227.827362 265.709259,227.128891 C261.654449,225.178391 257.183380,225.682251 253.043777,226.542145 C250.087402,227.156250 251.436462,230.429794 251.167709,232.602173 C250.973969,234.168198 251.739227,235.958359 249.885864,237.386551 C245.620911,235.673080 243.474731,230.982361 238.666794,228.744080 C234.225693,244.028107 229.894775,258.932922 225.568680,273.821136 C226.605148,274.300781 227.039200,274.672516 227.478790,274.679199 C233.137299,274.765350 238.796600,274.799377 245.435059,274.847900 z"
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
        {/* Official Tesla mark (from public/logos/tesla-mark.svg), inlined so it
            inherits the tile's ink/light color instead of the brand red. */}
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z" />
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

/** Chamber of Commerce verified-member seal (links to the directory listing). */
export function ChamberBadge({ href, className }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamber of Commerce verified member"
      className={cn("inline-block w-fit transition-opacity hover:opacity-90", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/COF-Badge.png"
        alt="Chamber of Commerce Verified Member"
        width={151}
        height={150}
        className="h-auto w-[132px]"
      />
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
