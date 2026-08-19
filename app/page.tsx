import { Hero } from "@/components/home/hero"
import { CredentialMarquee, TrustStatement } from "@/components/home/trust"
import { NetworkStats, Services } from "@/components/home/services"
import { Assurances, Reviews } from "@/components/home/reviews"

export default function HomePage() {
  return (
    /* Full-bleed bands separated by a visible gutter, the way apple.com stacks
       them: the parent's color shows through the gap as a thin divider. */
    <div className="flex flex-col gap-2.5 bg-border">
      <Hero />
      <TrustStatement />
      <CredentialMarquee />
      <Services />
      <NetworkStats />
      <Reviews />
      <Assurances />
    </div>
  )
}
