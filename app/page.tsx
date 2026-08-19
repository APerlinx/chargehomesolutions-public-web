import { Hero } from "@/components/home/hero"
import { CredentialMarquee, TrustStatement } from "@/components/home/trust"
import { NetworkStats, Services } from "@/components/home/services"
import { Assurances, Reviews } from "@/components/home/reviews"

export default function HomePage() {
  return (
    /* Full-bleed bands separated by a hairline gap, the way apple.com stacks them. */
    <div className="flex flex-col gap-[3px] bg-border">
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
