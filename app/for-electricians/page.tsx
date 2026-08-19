import { Hero } from "@/components/sections/hero"
import { Partners } from "@/components/sections/partners"
import { Sms } from "@/components/sections/sms"
import { WhyUs } from "@/components/sections/why-us"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Plans } from "@/components/sections/plans"
import { Fees } from "@/components/sections/fees"
import { CaseStudy } from "@/components/sections/case-study"
import { Testimonials } from "@/components/sections/testimonials"
import { About } from "@/components/sections/about"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

// Chrome (header/footer/theme) comes from ./layout.tsx — this page is just the
// electrician marketing sections.
export default function ForElectriciansPage() {
  return (
    <>
      <Hero />
      <Partners />
      <Sms />
      <WhyUs />
      <Projects />
      <Certifications />
      <Plans />
      <Fees />
      <CaseStudy />
      <Testimonials />
      <About />
      <Faq />
      <FinalCta />
    </>
  )
}
