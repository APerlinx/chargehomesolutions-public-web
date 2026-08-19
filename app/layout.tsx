import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { site } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Tesla-Certified Electricians, Nationwide`,
    template: `%s — ${site.name}`,
  },
  description:
    "Tesla-certified electricians for EV charger installation, Powerwall and home electrical work in all 50 states. Book a free in-home consultation.",
  applicationName: site.name,
  openGraph: {
    title: `${site.name} — Tesla-Certified Electricians, Nationwide`,
    description:
      "EV charger installation, Tesla Powerwall and licensed electrical service in all 50 states. Free in-home consultation.",
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <SiteHeader />
        {/* Apple-style offset: content clears the header by exactly its own height. */}
        <div aria-hidden="true" className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]" />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
