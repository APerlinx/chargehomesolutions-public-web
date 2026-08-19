import type { ProjectedMarker } from "@/lib/us-map"


const PULSE_BASE_DURATION = 3.2

const PULSE_DURATION_SPREAD = 1.3


function pulseDelay(i: number, cycle: number) {
  return ((i * 0.6180339887) % 1) * cycle
}


function dotRadius(size: number) {
  return Math.round((1.6 + size * 1.1) * 100) / 100
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t
}


export function CoverageMarkers({ markers }: { markers: ProjectedMarker[] }) {
  const sizes = markers.map((m) => m.size)
  const minSize = Math.min(...sizes)
  const maxSize = Math.max(...sizes)
  
  const sizeRange = maxSize - minSize || 1

  return (
    <g>
      {markers.map((m, i) => {
        const r = dotRadius(m.size)
        const t = (m.size - minSize) / sizeRange

        const duration = lerp(PULSE_BASE_DURATION, PULSE_BASE_DURATION + PULSE_DURATION_SPREAD, t)

        return (
          <g key={m.city} transform={`translate(${m.x} ${m.y})`}>
            <circle
              r={r}
              className="map-pulse fill-primary"
              style={
                {
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
