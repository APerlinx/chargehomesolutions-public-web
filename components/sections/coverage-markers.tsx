import type { ProjectedMarker } from "@/lib/us-map"

/** Seconds for one expand-and-fade pass at the smallest marker size. */
const PULSE_BASE_DURATION = 3.2
/** Extra seconds added at the largest size, so big hubs swell more slowly. */
const PULSE_DURATION_SPREAD = 1.3

/**
 * Spreads start times across the cycle using the golden ratio, so phases are
 * evenly distributed but never land in visible synchronised groups the way
 * `index % 8` did.
 */
function pulseDelay(i: number, cycle: number) {
  return ((i * 0.6180339887) % 1) * cycle
}

/** Rounded to avoid float noise like r="3.8000000000000003" in the markup. */
function dotRadius(size: number) {
  return Math.round((1.6 + size * 1.1) * 100) / 100
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t
}

/**
 * Pulsing coverage markers rendered over the precomputed SVG map.
 *
 * Every marker pulses. Rather than a hub/non-hub switch, the ring's spread,
 * brightness, and duration all interpolate across the size range present in the
 * data, so a small town reads as a faint quick blip and a major hub as a wide
 * slow bloom -- the two ends of one continuous scale.
 *
 * The animation is pure CSS. That keeps this a server component (no client JS
 * for ~118 markers) and lets the global prefers-reduced-motion rule in
 * globals.css disable it, instead of a `useReducedMotion` hook.
 */
export function CoverageMarkers({ markers }: { markers: ProjectedMarker[] }) {
  const sizes = markers.map((m) => m.size)
  const minSize = Math.min(...sizes)
  const maxSize = Math.max(...sizes)
  /** Guard against a divide-by-zero if every marker ever shares one size. */
  const sizeRange = maxSize - minSize || 1

  return (
    <g>
      {markers.map((m, i) => {
        const r = dotRadius(m.size)
        // 0 at the smallest marker in the data, 1 at the largest.
        const t = (m.size - minSize) / sizeRange

        const duration = lerp(PULSE_BASE_DURATION, PULSE_BASE_DURATION + PULSE_DURATION_SPREAD, t)

        return (
          <g key={m.city} transform={`translate(${m.x} ${m.y})`}>
            <circle
              r={r}
              className="map-pulse fill-primary"
              style={
                {
                  // Smaller dots ripple a shorter distance and stay dimmer, so
                  // the map keeps its hub hierarchy now that everything moves.
                  "--pulse-scale": lerp(2.3, 3.8, t).toFixed(2),
                  "--pulse-peak": lerp(0.22, 0.42, t).toFixed(2),
                  "--pulse-duration": `${duration.toFixed(2)}s`,
                  "--pulse-delay": `${pulseDelay(i, duration).toFixed(2)}s`,
                } as React.CSSProperties
              }
            />
            <circle r={r} className="fill-primary" fillOpacity={lerp(0.62, 1, t).toFixed(2)} />
            <circle r={r * 0.42} className="fill-white" fillOpacity={lerp(0.4, 0.85, t).toFixed(2)} />
          </g>
        )
      })}
    </g>
  )
}
