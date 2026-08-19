import { ThemeProvider } from "@/components/theme-provider"
import { ElectricianHeader } from "@/components/electrician/header"
import { ElectricianFooter } from "@/components/electrician/footer"

// /for-electricians is a self-contained sub-site: its own header, footer and
// theme, deliberately separate from the marketing site's chrome and routing.
export default function ForElectriciansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-dvh flex-col">
        <ElectricianHeader />
        <main className="flex-1">{children}</main>
        <ElectricianFooter />
      </div>
    </ThemeProvider>
  )
}
