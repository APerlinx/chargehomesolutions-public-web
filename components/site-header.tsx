'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { ChsLogo } from '@/components/brand/chs-logo'
import { TeslaBadge } from '@/components/brand/tesla-badge'
import { nav as navLinks } from '@/lib/content'
import { LOGIN_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onInk = !scrolled
  const inkText = onInk
    ? 'text-ink-foreground dark:text-foreground'
    : 'text-foreground'
  const inkMuted = onInk
    ? 'text-ink-muted hover:text-ink-foreground dark:text-muted-foreground dark:hover:text-foreground'
    : 'text-muted-foreground hover:text-foreground'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
        inkText,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/for-electricians"
            className="flex items-center gap-3"
            aria-label="Charge Home Solutions for electricians"
          >
            <ChsLogo className="h-9 w-auto lg:h-10" />
          </Link>
          <span
            className={cn(
              'hidden h-7 w-px sm:block',
              onInk ? 'bg-ink-border dark:bg-border' : 'bg-border',
            )}
            aria-hidden="true"
          />
          <TeslaBadge
            className="hidden origin-left scale-95 sm:flex"
            variant={onInk ? 'ink' : 'default'}
          />
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn('text-sm font-medium transition-colors', inkMuted)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LOGIN_URL}
            className={cn(
              'hidden rounded-full px-4 py-2 text-sm font-medium transition-colors lg:inline-flex',
              inkMuted,
            )}
          >
            Log In
          </a>
          <Link
            href="/for-electricians#plans"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95 lg:inline-flex"
          >
            Work With Us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
              onInk
                ? 'hover:bg-ink-raised dark:hover:bg-muted'
                : 'hover:bg-muted',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href={LOGIN_URL}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-foreground"
                >
                  Log In
                </a>
                <Link
                  href="/for-electricians#plans"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Work With Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
