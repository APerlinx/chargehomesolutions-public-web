import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { CredentialMarquee, TrustStatement } from "@/components/home/trust"
import { NetworkStats, Services } from "@/components/home/services"
import { Assurances, Reviews } from "@/components/home/reviews"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      {/* Apple-style offset: content clears the fixed header by its own height. */}
      <div
        aria-hidden="true"
        className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]"
      />
      <main>
        {/* Full-bleed bands separated by a gutter of plain page background, so
            the stack reads as one row of grid cells with no divider line. */}
        <div className="flex flex-col gap-5 bg-background">
          <Hero />
          <TrustStatement />
          <CredentialMarquee />
          <Services />
          <NetworkStats />
          <Reviews />
          <Assurances />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
