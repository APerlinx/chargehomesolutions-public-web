import Image from "next/image"
import { Container } from "@/components/ui/section"
import { partners } from "@/lib/content"


const TARGET_AREA = 3240

const MAX_HEIGHT = 40

const MAX_WIDTH = 176

const MIN_HEIGHT = 14

function logoSize(ratio: number) {
  let height = Math.sqrt(TARGET_AREA / ratio)
  let width = height * ratio

  if (height > MAX_HEIGHT) {
    height = MAX_HEIGHT
    width = height * ratio
  }
  if (width > MAX_WIDTH) {
    width = MAX_WIDTH
    height = width / ratio
  }
  if (height < MIN_HEIGHT) {
    height = MIN_HEIGHT
    width = height * ratio
  }

  return { width: Math.round(width), height: Math.round(height) }
}

export function Partners() {
  const loop = [...partners, ...partners]

  return (
    <section className="border-b border-border bg-background py-14">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Certified installation partner for leading brands
        </p>
      </Container>

      <div className="marquee-mask relative mt-9 overflow-hidden">
        <div className="flex w-max items-center gap-16 pr-16 animate-marquee motion-reduce:animate-none">
          {loop.map((brand, i) => {
            const { width, height } = logoSize(brand.ratio)
            return (
              <div
                key={`${brand.file}-${i}`}
                className="flex h-12 shrink-0 items-center justify-center"
                aria-hidden={i >= partners.length}
              >
                <Image
                  src={`/logos/tight/${brand.file}.svg`}
                  alt={i < partners.length ? brand.name : ""}
                  width={width}
                  height={height}
                  style={{ width, height }}
                  className="object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:invert"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
