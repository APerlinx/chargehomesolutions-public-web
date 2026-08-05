import "server-only"
import { geoAlbersUsa, geoPath } from "d3-geo"
import { feature, mesh } from "topojson-client"
import states10m from "us-atlas/states-10m.json"
import { coverageMarkers } from "@/lib/content"

/**
 * Precomputes the US map as flat SVG path strings on the server so the client
 * bundle never ships the topojson file or d3-geo. The map is projected into a
 * fixed 975x610 viewBox (the us-atlas Albers standard).
 */

export const MAP_WIDTH = 975
export const MAP_HEIGHT = 610

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topo = states10m as any

export type ProjectedMarker = { city: string; x: number; y: number; size: number }

/** Breathing room so no state touches the container edge. */
const MAP_PADDING = 6

export function getUsMap() {
  const projection = geoAlbersUsa()
  const path = geoPath(projection)

  const statesFeature = feature(topo, topo.objects.states) as unknown as {
    features: Array<Parameters<typeof path>[0]>
  }

  // geoAlbersUsa has no projection for Puerto Rico or the Pacific territories, so
  // those geometries return null. Drop them before fitting, otherwise they'd skew
  // the extent (and they can't be drawn anyway).
  const drawable = statesFeature.features.filter((f) => path(f))

  // Fit the real geometry to the viewBox instead of hardcoding scale/translate: at
  // the old fixed scale(1300) Alaska's inset started at x = -58 and was clipped off
  // the left edge. fitExtent guarantees every state lands inside the frame.
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
