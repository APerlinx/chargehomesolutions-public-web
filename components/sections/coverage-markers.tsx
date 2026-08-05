"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ProjectedMarker } from "@/lib/us-map"

/** Pulsing hub markers rendered over the precomputed SVG map. */
export function CoverageMarkers({ markers }: { markers: ProjectedMarker[] }) {
  const reduceMotion = useReducedMotion()

  return (
    <g>
      {markers.map((m, i) => {
        const r = 2.4 + m.size * 1.5
        return (
          <g key={m.city} transform={`translate(${m.x} ${m.y})`}>
            {!reduceMotion && (
              <motion.circle
                r={r}
                className="fill-primary"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 3.2 }}
                transition={{
                  duration: 2.4,
                  delay: (i % 8) * 0.28,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center" }}
              />
            )}
            <circle r={r} className="fill-primary" />
            <circle r={r * 0.45} className="fill-white/80" />
          </g>
        )
      })}
    </g>
  )
}
