import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Partners } from "@/components/sections/partners"
import { Sms } from "@/components/sections/sms"
import { WhyUs } from "@/components/sections/why-us"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Coverage } from "@/components/sections/coverage"
import { Plans } from "@/components/sections/plans"
import { Fees } from "@/components/sections/fees"
import { CaseStudy } from "@/components/sections/case-study"
import { Testimonials } from "@/components/sections/testimonials"
import { About } from "@/components/sections/about"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Sms />
        <WhyUs />
        <Projects />
        <Certifications />
        <Coverage />
        <Plans />
        <Fees />
        <CaseStudy />
        <Testimonials />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
