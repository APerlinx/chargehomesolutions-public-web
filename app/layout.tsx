import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://chargehomesolutions.com"),
  title: {
    default: "Charge Home Solutions — Real Electrician Appointments by SMS",
    template: "%s | Charge Home Solutions",
  },
  description:
    "We don't sell leads. Charge Home Solutions books real customer appointments — EV chargers, Tesla Powerwall, panel upgrades and more — and sends them straight to licensed electricians by SMS. Free to join, no app required.",
  keywords: [
    "EV charger installation",
    "Tesla Powerwall installer",
    "electrician appointments",
    "panel upgrade jobs",
    "electrician network",
  ],
  openGraph: {
    title: "Charge Home Solutions — Real Electrician Appointments by SMS",
    description:
      "Booked customer appointments sent straight to your phone. EV chargers, Powerwall, panel upgrades and more. Free to join, no app required.",
    type: "website",
    siteName: "Charge Home Solutions",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
