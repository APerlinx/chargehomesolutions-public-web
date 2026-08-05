import Image from "next/image"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { gallery } from "@/lib/content"
import { cn } from "@/lib/utils"

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2 sm:col-span-1",
  wide: "sm:col-span-2",
  normal: "",
}

export function Gallery() {
  return (
    <Section id="gallery">
      <Container>
        <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} subtitle={gallery.subtitle} />

        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
          {gallery.items.map((item, i) => (
            <Reveal
              key={item.image}
              delay={(i % 3) * 0.08}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border",
                spanClass[item.span] ?? "",
              )}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
