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

/**
 * How many nodes glow in the brand accent. These are chosen at random rather than
 * by a fixed stride: a regular stride lands on a helix of the Fibonacci spiral, and
 * those nodes visually align into a thin streak that looks like something flying
 * across the sphere as it rotates.
 */
const ACCENT_COUNT = 68
/** Seconds a single flash takes to swell and fade. */
const PULSE_DURATION = 1.6
/** Gap between flashes. One dot lights, then another elsewhere a moment later. */
const MIN_GAP = 0.9
const MAX_GAP = 1.9

type Node = { x: number; y: number; z: number }

/** A single live flash on one accent node. */
type Pulse = {
  index: number
  /** Seconds since this flash began. */
  age: number
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

function buildAccents(nodes: Node[]): { accentIndices: number[]; isAccent: Uint8Array } {
  const isAccent = new Uint8Array(nodes.length)
  const accentIndices: number[] = []
  while (accentIndices.length < ACCENT_COUNT) {
    const index = Math.floor(Math.random() * nodes.length)
    if (isAccent[index]) continue
    isAccent[index] = 1
    accentIndices.push(index)
  }
  return { accentIndices, isAccent }
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
    const { accentIndices, isAccent } = buildAccents(nodes)
    /** Only the handful of flashes currently alive. */
    const pulses: Pulse[] = []
    /** Flash strength per node index, refreshed each frame. */
    const intensities = new Map<number, number>()
    let nextPulseIn = 0.6
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
     * A single scheduler lights one node at a time, waiting a random beat before
     * choosing another somewhere else on the sphere. Because flashes are spawned
     * rather than driven by per-node clocks, the count on screen stays down to
     * roughly one or two — quiet, and never in unison.
     */
    function updatePulses(delta: number) {
      nextPulseIn -= delta
      if (nextPulseIn <= 0) {
        nextPulseIn = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)
        const index = accentIndices[Math.floor(Math.random() * accentIndices.length)]
        // Skip if that node is already lit, so a flash never doubles up.
        if (!pulses.some((pulse) => pulse.index === index)) {
          pulses.push({ index, age: 0 })
        }
      }

      intensities.clear()
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i]
        pulse.age += delta
        if (pulse.age >= PULSE_DURATION) {
          pulses.splice(i, 1)
          continue
        }
        const t = pulse.age / PULSE_DURATION
        // Ease in, ease out: no hard edges at either end of the flash.
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
        const accent = isAccent[i] === 1
        const intensity = accent ? (intensities.get(i) ?? 0) : 0

        if (intensity > 0) {
          const facing = depth > -0.3 ? 1 : 0.2

          // No ring — just light bleeding off the dot. Two stacked soft fills
          // fake a radial falloff cheaply, reading as a dim electrical flash.
          ctx!.fillStyle = colors.accent
          ctx!.globalAlpha = intensity * 0.1 * facing
          ctx!.beginPath()
          ctx!.arc(sx, sy, size + 5, 0, Math.PI * 2)
          ctx!.fill()

          ctx!.globalAlpha = intensity * 0.22 * facing
          ctx!.beginPath()
          ctx!.arc(sx, sy, size + 2.2, 0, Math.PI * 2)
          ctx!.fill()
        }

        // The flashing node brightens to a hot core, with only a hint of swell.
        ctx!.globalAlpha = accent ? Math.min(1, alpha * 1.7 + intensity * 0.75) : alpha
        ctx!.fillStyle = accent ? colors.accent : colors.node
        ctx!.beginPath()
        ctx!.arc(sx, sy, size * (1 + intensity * 0.5), 0, Math.PI * 2)
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

      updatePulses(delta)
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
