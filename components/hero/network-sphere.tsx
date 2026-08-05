"use client"

import { useEffect, useRef } from "react"

/**
 * The hero's signature element: a slowly rotating sphere built from one node per
 * licensed electrician in the network. Every few moments a pulse of light travels
 * along an arc between two nodes — an appointment being dispatched to an installer.
 *
 * Rendered on a canvas so 2,500 nodes stay cheap, and it degrades to a single
 * static frame when the visitor prefers reduced motion.
 */

const NODE_COUNT = 2500
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

type Node = { x: number; y: number; z: number }

type Dispatch = {
  from: Node
  to: Node
  /** Control point that lifts the arc off the sphere surface. */
  cx: number
  cy: number
  cz: number
  progress: number
  speed: number
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
    const dispatches: Dispatch[] = []
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
    let nextDispatchAt = 600
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

    function spawnDispatch() {
      // Prefer nodes on the visible hemisphere so the pulse reads clearly.
      const pick = () => {
        for (let attempt = 0; attempt < 12; attempt++) {
          const candidate = nodes[Math.floor(Math.random() * nodes.length)]
          if (candidate.z > -0.1) return candidate
        }
        return nodes[Math.floor(Math.random() * nodes.length)]
      }
      const from = pick()
      const to = pick()
      const lift = 1.32
      dispatches.push({
        from,
        to,
        cx: ((from.x + to.x) / 2) * lift,
        cy: ((from.y + to.y) / 2) * lift,
        cz: ((from.z + to.z) / 2) * lift,
        progress: 0,
        speed: 0.5 + Math.random() * 0.35,
      })
      if (dispatches.length > 5) dispatches.shift()
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

      // Dispatch arcs: an appointment travelling from the platform to an installer.
      for (let i = dispatches.length - 1; i >= 0; i--) {
        const dispatch = dispatches[i]
        dispatch.progress += delta * dispatch.speed
        if (dispatch.progress >= 1.35) {
          dispatches.splice(i, 1)
          continue
        }

        const head = Math.min(1, dispatch.progress)
        const steps = 26
        ctx!.lineWidth = 1
        ctx!.strokeStyle = colors.accent

        let previous: { sx: number; sy: number; depth: number } | null = null
        for (let step = 0; step <= steps; step++) {
          const t = (step / steps) * head
          const inv = 1 - t
          // Quadratic Bézier through the lifted control point.
          const point = {
            x: inv * inv * dispatch.from.x + 2 * inv * t * dispatch.cx + t * t * dispatch.to.x,
            y: inv * inv * dispatch.from.y + 2 * inv * t * dispatch.cy + t * t * dispatch.to.y,
            z: inv * inv * dispatch.from.z + 2 * inv * t * dispatch.cz + t * t * dispatch.to.z,
          }
          const projected = project(point, radius)
          if (previous) {
            const trail = step / steps
            const fade = Math.max(0, 1 - (dispatch.progress - 1) * 2.6)
            ctx!.globalAlpha = trail * 0.5 * fade * (projected.depth > -0.35 ? 1 : 0.18)
            ctx!.beginPath()
            ctx!.moveTo(previous.sx, previous.sy)
            ctx!.lineTo(projected.sx, projected.sy)
            ctx!.stroke()
          }
          previous = projected
        }

        // The travelling pulse itself.
        if (previous && dispatch.progress <= 1) {
          ctx!.globalAlpha = previous.depth > -0.35 ? 0.95 : 0.3
          ctx!.fillStyle = colors.accent
          ctx!.beginPath()
          ctx!.arc(previous.sx, previous.sy, 2.4, 0, Math.PI * 2)
          ctx!.fill()

          ctx!.globalAlpha = 0.16
          ctx!.beginPath()
          ctx!.arc(previous.sx, previous.sy, 7, 0, Math.PI * 2)
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

      if (elapsed >= nextDispatchAt) {
        spawnDispatch()
        nextDispatchAt = elapsed + 900 + Math.random() * 1400
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
