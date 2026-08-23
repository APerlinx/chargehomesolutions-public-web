import { ElectricianHeader } from "@/components/electrician/header"
import { ElectricianFooter } from "@/components/electrician/footer"

// /for-electricians is a self-contained sub-site: its own header, footer and
// theme, deliberately separate from the marketing site's chrome and routing.
// The next-themes ThemeProvider lives in the ROOT layout (app/layout.tsx), not
// here — a nested provider re-renders its anti-flash <script> on client
// navigation, which React 19 flags. The electrician theme is scoped via the
// .electrician-site CSS class, so this stays a visually separate sub-site.
export default function ForElectriciansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="electrician-site flex min-h-dvh flex-col bg-background text-foreground">
      <ElectricianHeader />
      <main className="flex-1">{children}</main>
      <ElectricianFooter />
    </div>
  )
}
