import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalDocument } from "@/components/legal/legal-document"
import { privacyPolicy } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Charge Home Solutions collects, uses, discloses, and protects personal information, including our SMS program and your state privacy rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Charge Home Solutions",
    description:
      "How Charge Home Solutions collects, uses, discloses, and protects personal information, including our SMS program and your state privacy rights.",
    type: "article",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <LegalDocument doc={privacyPolicy} />
      <SiteFooter />
    </div>
  )
}
