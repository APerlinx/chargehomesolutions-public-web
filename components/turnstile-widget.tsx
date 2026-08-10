"use client"

import { useEffect, useRef } from "react"

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  remove: (id: string) => void
  reset: (id?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const SCRIPT_ID = "cf-turnstile-script"
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

// Loads the Cloudflare Turnstile script once and resolves when it's ready.
let scriptPromise: Promise<void> | null = null
function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(
      SCRIPT_ID,
    ) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener("load", () => resolve())
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Turnstile")),
      )
      return
    }
    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener("load", () => resolve())
    script.addEventListener("error", () =>
      reject(new Error("Failed to load Turnstile")),
    )
    document.head.appendChild(script)
  })
  return scriptPromise
}

// Renders a Cloudflare Turnstile widget. Calls onVerify with the token when the
// challenge passes, and onExpire when it expires or errors (so the caller can
// clear a stored token and block submit until a fresh one arrives). Callbacks
// are held in refs so changing their identity never re-renders the widget.
export function TurnstileWidget({
  siteKey,
  onVerify,
  onExpire,
  className,
}: {
  siteKey: string
  onVerify: (token: string) => void
  onExpire?: () => void
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const onVerifyRef = useRef(onVerify)
  const onExpireRef = useRef(onExpire)

  // Keep the callback refs current without re-rendering the widget.
  useEffect(() => {
    onVerifyRef.current = onVerify
    onExpireRef.current = onExpire
  })

  useEffect(() => {
    let cancelled = false
    void loadTurnstile()
      .then(() => {
        if (
          cancelled ||
          !containerRef.current ||
          !window.turnstile ||
          widgetIdRef.current
        ) {
          return
        }
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => onVerifyRef.current(token),
          "expired-callback": () => onExpireRef.current?.(),
          "error-callback": () => onExpireRef.current?.(),
        })
      })
      .catch(() => {
        // Script failed to load — treat as unverified so submit stays blocked.
        onExpireRef.current?.()
      })

    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey])

  return <div ref={containerRef} className={className} />
}
