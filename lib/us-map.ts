import "server-only"
import { geoAlbersUsa, geoPath } from "d3-geo"
import { feature, mesh } from "topojson-client"
import states10m from "us-atlas/states-10m.json"
import { coverageMarkers } from "@/lib/content"



export const MAP_WIDTH = 975
export const MAP_HEIGHT = 610

// us-atlas ships a plain JSON topology whose shape doesn't line up cleanly with
// topojson-client's generics, so it's treated as untyped at this boundary.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topo = states10m as any

export type ProjectedMarker = { city: string; x: number; y: number; size: number }


const MAP_PADDING = 6

export function getUsMap() {
  const projection = geoAlbersUsa()
  const path = geoPath(projection)

  const statesFeature = feature(topo, topo.objects.states) as unknown as {
    features: Array<Parameters<typeof path>[0]>
  }

  const drawable = statesFeature.features.filter((f) => path(f))

  projection.fitExtent(
    [
      [MAP_PADDING, MAP_PADDING],
      [MAP_WIDTH - MAP_PADDING, MAP_HEIGHT - MAP_PADDING],
    ],
    { type: "FeatureCollection", features: drawable } as unknown as Parameters<typeof path>[0],
  )

  const statePaths = drawable.map((f) => path(f)).filter((d): d is string => Boolean(d))

  const borders = mesh(topo, topo.objects.states, (a, b) => a !== b)
  const borderPath = path(borders as unknown as Parameters<typeof path>[0]) ?? ""

  const markers: ProjectedMarker[] = []
  for (const m of coverageMarkers) {
    const point = projection(m.coords)
    if (!point) continue
    markers.push({ city: m.city, x: point[0], y: point[1], size: m.size })
  }

  return { statePaths, borderPath, markers }
}
