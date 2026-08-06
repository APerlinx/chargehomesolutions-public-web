"use client"

import { useEffect, useRef } from "react"



const NODE_COUNT = 2500
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))


const ACCENT_COUNT = 68

const PULSE_DURATION = 1.7

const MIN_GAP = 0.35
const MAX_GAP = 0.85

type Node = { x: number; y: number; z: number }


type Pulse = {
  index: number
  
  age: number
}

function buildNodes(): Node[] {
  const nodes: Node[] = []
  for (let i = 0; i < NODE_COUNT; i++) {
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


function toRgbParts(color: string) {
  const fallback = "37, 99, 235"
  const probe = document.createElement("canvas")
  probe.width = 1
  probe.height = 1
  const probeCtx = probe.getContext("2d")
  if (!probeCtx) return fallback
  probeCtx.fillStyle = "#2563eb"
  probeCtx.fillStyle = color
  probeCtx.fillRect(0, 0, 1, 1)
  const [r, g, b, a] = probeCtx.getImageData(0, 0, 1, 1).data
  return a === 0 ? fallback : `${r}, ${g}, ${b}`
}

function readColors() {
  const styles = getComputedStyle(document.documentElement)
  const accent = styles.getPropertyValue("--primary").trim() || "#2563eb"
  const accentRgb = toRgbParts(accent)
  return {
    
    node: styles.getPropertyValue("--ink-foreground").trim() || "#f8fafc",
    accent,
    
    accentSoft: `rgba(${accentRgb}, 0.45)`,
    accentClear: `rgba(${accentRgb}, 0)`,
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
    
    const pulses: Pulse[] = []
    
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

    
    function updatePulses(delta: number) {
      nextPulseIn -= delta
      if (nextPulseIn <= 0) {
        nextPulseIn = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)
        const index = accentIndices[Math.floor(Math.random() * accentIndices.length)]
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
        const envelope = t < 0.18 ? t / 0.18 : Math.pow(1 - (t - 0.18) / 0.82, 1.5)
        intensities.set(pulse.index, envelope)
      }
    }

    function draw() {
      const radius = Math.min(width, height) * 0.42
      ctx!.clearRect(0, 0, width, height)

      pointerX += (targetPointerX - pointerX) * 0.05
      pointerY += (targetPointerY - pointerY) * 0.05

      for (let i = 0; i < nodes.length; i++) {
        const { sx, sy, depth } = project(nodes[i], radius)
        const normalized = (depth + 1) / 2
        const alpha = 0.06 + normalized * 0.5
        const size = 0.35 + normalized * 1.05

        const accent = isAccent[i] === 1
        const intensity = accent ? (intensities.get(i) ?? 0) : 0

        if (intensity > 0) {
          const facing = depth > -0.3 ? 1 : 0.25

          const glowRadius = 13 * intensity + 3
          const glow = ctx!.createRadialGradient(sx, sy, 0, sx, sy, glowRadius)
          glow.addColorStop(0, colors.accent)
          glow.addColorStop(0.35, colors.accentSoft)
          glow.addColorStop(1, colors.accentClear)
          ctx!.fillStyle = glow
          ctx!.globalAlpha = intensity * 0.95 * facing
          ctx!.beginPath()
          ctx!.arc(sx, sy, glowRadius, 0, Math.PI * 2)
          ctx!.fill()
        }

        ctx!.globalAlpha = accent ? Math.min(1, alpha * 1.7 + intensity * 1.1) : alpha
        ctx!.fillStyle = accent ? colors.accent : colors.node
        ctx!.beginPath()
        ctx!.arc(sx, sy, size * (1 + intensity * 1.4), 0, Math.PI * 2)
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
