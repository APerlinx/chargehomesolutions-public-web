import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PlaceholderContent } from "@/components/placeholder-content"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PlaceholderContent />
      </main>
      <SiteFooter />
    </div>
  )
}
