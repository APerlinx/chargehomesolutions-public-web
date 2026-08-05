"use client"

import { useEffect, useRef } from "react"

/**
 * The hero's signature element: a slowly rotating sphere built from one node per
 * licensed electrician in the network. Charge arcs between neighbouring nodes and
 * chains outward across the surface, like current finding its way through a grid.
 *
 * Rendered on a canvas so 2,500 nodes stay cheap, and it degrades to a single
 * static frame when the visitor prefers reduced motion.
 */

const NODE_COUNT = 2500
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

/** Segments per spark: enough to read as a jagged discharge, few enough to stay cheap. */
const SPARK_SEGMENTS = 12
/** How far a spark may reach, as chord length on the unit sphere. Keeps hops local. */
const MIN_REACH = 0.07
const MAX_REACH = 0.22

type Node = { x: number; y: number; z: number }

type Discharge = {
  from: Node
  to: Node
  /** Unit vector perpendicular to the hop, used to zigzag the spark sideways. */
  px: number
  py: number
  pz: number
  /** Lateral offset per segment, tapered to zero at both ends so it meets the nodes. */
  offsets: number[]
  age: number
  duration: number
  /** Chain generation; capped so a single spark can't cascade forever. */
  generation: number
  hasChained: boolean
}

function buildNodes(): Node[] {
  const nodes: Node[] = []
  for (let i = 0; i < NODE_COUNT; i++) {
    // Fibonacci sphere: even distribution without clustering at the poles.
    const y = 1 - (i / (NODE_COUNT - 1)) * 2
    const radius = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = GOLDEN_ANGLE * i
    nodes.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius })
  }
  return nodes
}

function readColors() {
  const styles = getComputedStyle(document.documentElement)
  return {
    node: styles.getPropertyValue("--foreground").trim() || "#111827",
    accent: styles.getPropertyValue("--primary").trim() || "#2563eb",
  }
}

export function NetworkSphere({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const nodes = buildNodes()
    const discharges: Discharge[] = []
    let colors = readColors()

    let width = 0
    let height = 0
    let dpr = 1
    let rotation = 0
    let tilt = -0.32
    let pointerX = 0
    let pointerY = 0
    let targetPointerX = 0
    let targetPointerY = 0
    let nextDischargeAt = 600
    let elapsed = 0
    let frame = 0
    let lastTime = performance.now()

    const themeObserver = new MutationObserver(() => {
      colors = readColors()
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas!.width = Math.round(width * dpr)
      canvas!.height = Math.round(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    /** A node on the hemisphere facing the viewer, so the discharge reads clearly. */
    function pickVisibleNode() {
      for (let attempt = 0; attempt < 12; attempt++) {
        const candidate = nodes[Math.floor(Math.random() * nodes.length)]
        if (candidate.z > -0.1) return candidate
      }
      return nodes[Math.floor(Math.random() * nodes.length)]
    }

    /** Nearest usable neighbour within reach, so charge steps rather than flies. */
    function pickNeighbour(from: Node) {
      let best: Node | null = null
      let bestDistance = Infinity
      for (let attempt = 0; attempt < 60; attempt++) {
        const candidate = nodes[Math.floor(Math.random() * nodes.length)]
        const dx = candidate.x - from.x
        const dy = candidate.y - from.y
        const dz = candidate.z - from.z
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (distance >= MIN_REACH && distance <= MAX_REACH && distance < bestDistance) {
          best = candidate
          bestDistance = distance
        }
      }
      return best
    }

    function spawnDischarge(origin?: Node, generation = 0) {
      const from = origin ?? pickVisibleNode()
      const to = pickNeighbour(from)
      if (!to) return

      // Perpendicular to the hop plane: offsetting along it bends the spark
      // sideways across the surface instead of lifting it into a trajectory.
      let px = from.y * to.z - from.z * to.y
      let py = from.z * to.x - from.x * to.z
      let pz = from.x * to.y - from.y * to.x
      const length = Math.sqrt(px * px + py * py + pz * pz) || 1
      px /= length
      py /= length
      pz /= length

      const spread = 0.1 + Math.random() * 0.1
      const offsets: number[] = []
      for (let step = 0; step <= SPARK_SEGMENTS; step++) {
        const t = step / SPARK_SEGMENTS
        // Taper to zero at both ends so the spark terminates exactly on the nodes.
        offsets.push((Math.random() - 0.5) * spread * Math.sin(Math.PI * t))
      }

      discharges.push({
        from,
        to,
        px,
        py,
        pz,
        offsets,
        age: 0,
        duration: 0.85 + Math.random() * 0.55,
        generation,
        hasChained: false,
      })
      if (discharges.length > 18) discharges.shift()
    }

    /** Rotate a unit-sphere point into screen space. */
    function project(node: Node, radius: number) {
      const cosR = Math.cos(rotation)
      const sinR = Math.sin(rotation)
      const x1 = node.x * cosR - node.z * sinR
      const z1 = node.x * sinR + node.z * cosR

      const wobble = tilt + pointerY * 0.14
      const cosT = Math.cos(wobble)
      const sinT = Math.sin(wobble)
      const y1 = node.y * cosT - z1 * sinT
      const z2 = node.y * sinT + z1 * cosT

      return {
        sx: width / 2 + x1 * radius + pointerX * 12,
        sy: height / 2 + y1 * radius,
        depth: z2,
      }
    }

    function draw(delta: number) {
      const radius = Math.min(width, height) * 0.42
      ctx!.clearRect(0, 0, width, height)

      pointerX += (targetPointerX - pointerX) * 0.05
      pointerY += (targetPointerY - pointerY) * 0.05

      // Nodes: one per licensed electrician, faded by depth so the sphere reads as volume.
      for (let i = 0; i < nodes.length; i++) {
        const { sx, sy, depth } = project(nodes[i], radius)
        const normalized = (depth + 1) / 2
        const alpha = 0.06 + normalized * 0.5
        const size = 0.35 + normalized * 1.05

        // A thin scattering of nodes glows in the brand accent.
        const isAccent = i % 37 === 0
        ctx!.globalAlpha = isAccent ? Math.min(1, alpha * 1.7) : alpha
        ctx!.fillStyle = isAccent ? colors.accent : colors.node
        ctx!.beginPath()
        ctx!.arc(sx, sy, size, 0, Math.PI * 2)
        ctx!.fill()
      }

      // Discharges: charge arcing between neighbouring electricians. The whole
      // spark lights at once and fades, rather than a head dragging a trail.
      ctx!.lineCap = "round"
      for (let i = discharges.length - 1; i >= 0; i--) {
        const discharge = discharges[i]
        discharge.age += delta
        if (discharge.age >= discharge.duration) {
          discharges.splice(i, 1)
          continue
        }

        // Chain onward from the far node, so current propagates node to node.
        if (!discharge.hasChained && discharge.age > discharge.duration * 0.32) {
          discharge.hasChained = true
          if (discharge.generation < 3 && Math.random() < 0.72) {
            spawnDischarge(discharge.to, discharge.generation + 1)
          }
        }

        // Quick swell, gentle decay, with a slow shimmer so it breathes.
        const life = discharge.age / discharge.duration
        const envelope = life < 0.2 ? life / 0.2 : Math.pow(1 - (life - 0.2) / 0.8, 1.7)
        const intensity = envelope * (0.82 + Math.sin(discharge.age * 22) * 0.18)

        const points: { sx: number; sy: number; depth: number }[] = []
        for (let step = 0; step <= SPARK_SEGMENTS; step++) {
          const t = step / SPARK_SEGMENTS
          const offset = discharge.offsets[step]
          // Lerp then renormalise: the spark rides the surface of the sphere.
          const x = discharge.from.x + (discharge.to.x - discharge.from.x) * t + discharge.px * offset
          const y = discharge.from.y + (discharge.to.y - discharge.from.y) * t + discharge.py * offset
          const z = discharge.from.z + (discharge.to.z - discharge.from.z) * t + discharge.pz * offset
          const length = Math.sqrt(x * x + y * y + z * z) || 1
          points.push(project({ x: x / length, y: y / length, z: z / length }, radius))
        }

        const facing = points[Math.floor(SPARK_SEGMENTS / 2)].depth > -0.3 ? 1 : 0.16
        ctx!.strokeStyle = colors.accent

        // Outer bloom, then a tighter core for the hot centre of the arc.
        ctx!.globalAlpha = intensity * 0.16 * facing
        ctx!.lineWidth = 3.5
        ctx!.beginPath()
        ctx!.moveTo(points[0].sx, points[0].sy)
        for (let step = 1; step < points.length; step++) ctx!.lineTo(points[step].sx, points[step].sy)
        ctx!.stroke()

        ctx!.globalAlpha = intensity * 0.85 * facing
        ctx!.lineWidth = 1.1
        ctx!.stroke()

        // Both endpoints flare while the arc is live.
        ctx!.fillStyle = colors.accent
        for (const end of [points[0], points[points.length - 1]]) {
          ctx!.globalAlpha = intensity * 0.9 * facing
          ctx!.beginPath()
          ctx!.arc(end.sx, end.sy, 1.7, 0, Math.PI * 2)
          ctx!.fill()

          ctx!.globalAlpha = intensity * 0.12 * facing
          ctx!.beginPath()
          ctx!.arc(end.sx, end.sy, 5.5, 0, Math.PI * 2)
          ctx!.fill()
        }
      }

      ctx!.globalAlpha = 1
    }

    function loop(time: number) {
      const delta = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time
      elapsed += delta * 1000
      rotation += delta * 0.09
      tilt = -0.32 + Math.sin(elapsed / 6400) * 0.05

      if (elapsed >= nextDischargeAt) {
        spawnDischarge()
        nextDischargeAt = elapsed + 320 + Math.random() * 620
      }

      draw(delta)
      frame = requestAnimationFrame(loop)
    }

    function onPointerMove(event: PointerEvent) {
      targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2
      targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    resize()
    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (reduceMotion) draw(0)
    })
    resizeObserver.observe(canvas)

    if (reduceMotion) {
      draw(0)
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true })
      frame = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      themeObserver.disconnect()
      window.removeEventListener("pointermove", onPointerMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      role="presentation"
    />
  )
}
