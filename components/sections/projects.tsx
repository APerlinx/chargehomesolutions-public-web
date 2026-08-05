import Image from "next/image"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { Icon } from "@/components/ui/icon"
import { projects } from "@/lib/content"

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader eyebrow={projects.eyebrow} title={projects.title} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-border"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
