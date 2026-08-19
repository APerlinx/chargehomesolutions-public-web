import { Container, Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { coverage } from "@/lib/content"
import { getUsMap, MAP_WIDTH, MAP_HEIGHT } from "@/lib/us-map"
import { CoverageMarkers } from "@/components/sections/coverage-markers"

export function Coverage() {
  const { statePaths, borderPath, markers } = getUsMap()

  return (
    <Section id="coverage" tone="panel">
      <Container>
        <SectionHeader eyebrow={coverage.eyebrow} title={coverage.title} subtitle={coverage.subtitle} tone="panel" />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-panel-border bg-panel-raised/40 p-4 sm:p-8">
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="h-auto w-full"
              role="img"
              aria-label="Map of the United States showing active coverage in all 50 states"
            >
              <g>
                {statePaths.map((d, i) => (
                  
                  <path
                    key={i}
                    d={d}
                    className="fill-panel-foreground/[0.07] stroke-panel-border dark:fill-panel-foreground/[0.05]"
                    strokeWidth={0.5}
                  />
                ))}
                <path d={borderPath} fill="none" className="stroke-panel-border" strokeWidth={0.5} />
              </g>
              <CoverageMarkers markers={markers} />
            </svg>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
