"use client"

import { useEffect, useRef } from "react"

/**
 * The hero's signature element: a slowly rotating sphere built from one node per
 * licensed electrician in the network. The scattering of accent-coloured nodes
 * each emit a soft electrical pulse on their own independent cycle, so charge
 * flickers awake here and there across the surface rather than in unison.
 *
 * Rendered on a canvas so 2,500 nodes stay cheap, and it degrades to a single
 * static frame when the visitor prefers reduced motion.
 */

const NODE_COUNT = 2500
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

/** Every Nth node glows in the brand accent and is able to pulse. */
const ACCENT_STRIDE = 37
/** Seconds a single pulse takes to bloom and fade. */
const PULSE_DURATION = 1.9

type Node = { x: number; y: number; z: number }

/** An accent node's own clock, so no two pulse together. */
type Pulse = {
  index: number
  /** Seconds between pulses; varied per node to keep the field desynchronised. */
  period: number
  /** Random head start, so they don't all fire on the first cycle either. */
  offset: number
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

function buildPulses(nodes: Node[]): Pulse[] {
  const pulses: Pulse[] = []
  for (let i = 0; i < nodes.length; i += ACCENT_STRIDE) {
    pulses.push({
      index: i,
      period: 5 + Math.random() * 7,
      offset: Math.random() * 12,
    })
  }
  return pulses
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
    const pulses = buildPulses(nodes)
    /** Pulse strength per node index, refreshed each frame. */
    const intensities = new Map<number, number>()
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

    /**
     * Advance each accent node's private clock. A pulse is only live for
     * PULSE_DURATION out of its (longer, randomised) period, so at any moment
     * just a handful are firing — one low on the sphere, another up top.
     */
    function updatePulses(seconds: number) {
      intensities.clear()
      for (const pulse of pulses) {
        const local = (seconds + pulse.offset) % pulse.period
        if (local >= PULSE_DURATION) continue
        const t = local / PULSE_DURATION
        // Ease in, ease out: no hard edges at either end of the bloom.
        intensities.set(pulse.index, Math.sin(Math.PI * t) ** 1.4)
      }
    }

    function draw() {
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
        const isAccent = i % ACCENT_STRIDE === 0
        const intensity = isAccent ? (intensities.get(i) ?? 0) : 0

        if (intensity > 0) {
          // Charge ring expanding away from the dot, fading as it goes.
          const facing = depth > -0.3 ? 1 : 0.2
          ctx!.strokeStyle = colors.accent
          ctx!.globalAlpha = intensity * 0.4 * alpha * facing * 2
          ctx!.lineWidth = 0.9
          ctx!.beginPath()
          ctx!.arc(sx, sy, size + intensity * 5.5, 0, Math.PI * 2)
          ctx!.stroke()

          // Halo tight to the node, giving the dot itself a hot centre.
          ctx!.fillStyle = colors.accent
          ctx!.globalAlpha = intensity * 0.16 * facing
          ctx!.beginPath()
          ctx!.arc(sx, sy, size + 2.6, 0, Math.PI * 2)
          ctx!.fill()
        }

        ctx!.globalAlpha = isAccent ? Math.min(1, alpha * (1.7 + intensity * 1.6)) : alpha
        ctx!.fillStyle = isAccent ? colors.accent : colors.node
        ctx!.beginPath()
        ctx!.arc(sx, sy, size * (1 + intensity * 0.6), 0, Math.PI * 2)
        ctx!.fill()
      }

      ctx!.globalAlpha = 1
    }

    function loop(time: number) {
      const delta = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time
      elapsed += delta * 1000
      rotation += delta * 0.09
      tilt = -0.32 + Math.sin(elapsed / 6400) * 0.05

      updatePulses(elapsed / 1000)
      draw()
      frame = requestAnimationFrame(loop)
    }

    function onPointerMove(event: PointerEvent) {
      targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2
      targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    resize()
    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (reduceMotion) draw()
    })
    resizeObserver.observe(canvas)

    if (reduceMotion) {
      draw()
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
