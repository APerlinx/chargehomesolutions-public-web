"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ProjectedMarker } from "@/lib/us-map"

/** Seconds for one expand-and-fade pass, plus the rest between passes. */
const PULSE_DURATION = 3.4
const PULSE_REST = 0.8
const PULSE_CYCLE = PULSE_DURATION + PULSE_REST

/** Only hubs this size and above get an animated ring; the rest stay static. */
const PULSE_MIN_SIZE = 2

/**
 * Spreads start times across the full cycle using the golden ratio, so phases are
 * evenly distributed but never land in visible synchronised groups the way
 * `index % 8` did.
 */
function pulseDelay(i: number) {
  return ((i * 0.6180339887) % 1) * PULSE_CYCLE
}

function dotRadius(size: number) {
  return 1.6 + size * 1.1
}

/** Pulsing hub markers rendered over the precomputed SVG map. */
export function CoverageMarkers({ markers }: { markers: ProjectedMarker[] }) {
  const reduceMotion = useReducedMotion()

  return (
    <g>
      {markers.map((m, i) => {
        const r = dotRadius(m.size)
        const isHub = m.size >= PULSE_MIN_SIZE

        return (
          <g key={m.city} transform={`translate(${m.x} ${m.y})`}>
            {isHub && !reduceMotion && (
              <motion.circle
                r={r}
                className="fill-primary"
                /*
                 * Opacity starts AND ends at 0 so the infinite loop restarts on an
                 * invisible frame. The previous version animated 0.5 -> 0, which
                 * snapped back to 0.5 on every repeat and read as a flicker.
                 */
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0, 0.35, 0], scale: [1, 2.4, 3.6] }}
                transition={{
                  duration: PULSE_DURATION,
                  delay: pulseDelay(i),
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: PULSE_REST,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center", willChange: "transform, opacity" }}
              />
            )}
            <circle r={r} className={isHub ? "fill-primary" : "fill-primary/60"} />
            {isHub && <circle r={r * 0.42} className="fill-white/80" />}
          </g>
        )
      })}
    </g>
  )
}
