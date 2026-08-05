import Image from "next/image"
import { Container } from "@/components/ui/section"
import { partners } from "@/lib/content"

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
          {loop.map((brand, i) => (
            <div key={`${brand.file}-${i}`} className="flex h-10 shrink-0 items-center" aria-hidden={i >= partners.length}>
              <Image
                src={`/logos/${brand.file}.svg`}
                alt={i < partners.length ? brand.name : ""}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
