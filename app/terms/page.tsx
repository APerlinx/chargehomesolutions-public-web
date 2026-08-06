import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalDocument } from "@/components/legal/legal-document"
import { termsOfService } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Charge Home Solutions platform, including electrician obligations, membership billing, referral fees, and dispute resolution.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Charge Home Solutions",
    description:
      "The terms governing use of the Charge Home Solutions platform, including electrician obligations, membership billing, referral fees, and dispute resolution.",
    type: "article",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <LegalDocument doc={termsOfService} />
      <SiteFooter />
    </div>
  )
}
