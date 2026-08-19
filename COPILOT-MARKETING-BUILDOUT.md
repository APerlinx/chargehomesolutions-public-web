# Copilot Brief — Marketing Pages Buildout

**How to use:** In a Copilot session, say: _"Read `COPILOT-MARKETING-BUILDOUT.md` and do BATCH 1."_ (Then BATCH 2 in the next session, and so on — one batch per session.)

---

## Role

You are building out the remaining marketing pages for a **Next.js 16 (App Router) + Tailwind v4** website. A design system, shared chrome, and several finished sections already exist. Your job is to **ADD** the remaining marketing pages, reusing the existing design system — do not invent new styling.

## Source of content (legacy site)

The old website is live at: **https://chargehomesolutions.com**

Every page you build has a matching legacy page at the **same path**, e.g.

- new `/ev-charger-installation` → `https://chargehomesolutions.com/ev-charger-installation/`
- new `/about` → `https://chargehomesolutions.com/about/`
- new `/locations/texas` → `https://chargehomesolutions.com/locations/texas/`

For each page, take the equivalent content (headings, service descriptions, bullet points, FAQs, CTAs) from that legacy URL and rework it into this site's tone and layout. Keep the information equivalent; **do not copy styling** from the old site — only the content.

## Branch / workflow

- Create **one** branch from `main` called `feat/marketing-buildout` (create it once, never branch again). Commit and push every batch to **this** branch.
- Do **NOT** open a pull request per batch and do **NOT** push to `main`.
- After **every** page you create, run `npm run build` **and** `npm run lint`. Both must pass with **0 errors** before you continue or push. **Never push a red build** — this is the only quality gate, treat it as mandatory.

## Hard rules — never violate

Breaking these corrupts finished, wired features.

1. **NEVER create or edit anything under these paths** — they are finished and owned elsewhere:
   - `app/for-electricians/**`, `components/electrician/**`
   - `app/rebates/**`, `app/cost-guides/**`, `app/calculators/**`, `app/savings-finder/**`
   - `components/rebates/**`, `components/cost-estimator/**`, `components/calculators/**`, `components/savings-finder/**`
   - `lib/rebates.ts`, `lib/cost-guide.ts`, `lib/ev-savings.ts`, `lib/savings-finder.ts`
   - `scripts/**`
2. **NEVER edit these shared files** — import and reuse them only:
   - `components/site-header.tsx`, `components/site-footer.tsx`, `components/brand.tsx`
   - `components/ui/**`
   - `lib/site.ts`, `lib/nav.ts`, `app/layout.tsx`, `app/globals.css`
   - `lib/nav.ts` already contains every navigation link, so you only need to **create the page** at each route — do not touch `nav.ts`.
3. **ONLY ADD new files:** `app/<route>/page.tsx`, plus any new components under `components/<new-section>/` and any new data under `lib/<new-file>.ts`. Do not modify any existing file outside the pages you add.

## Every page MUST

- Follow the exact chrome pattern of the reference page: render `<SiteHeader />`, then the offset spacer `<div aria-hidden="true" className="h-[calc(var(--header-utility-h)+var(--header-nav-h))]" />`, then `<main>…</main>`, then `<SiteFooter />`.
- Use **only** existing design tokens and utilities: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary`, `bg-primary-hover`, `label-mono`, and the `Container` / `Section` / `SectionHeader` helpers from `components/ui/section`. **No new colors, no hardcoded hex values.**
- Export a Next `metadata` object with `title`, `description`, and `alternates: { canonical: "<the route>" }`.
- Use icons from `lucide-react` only.
- Be a **Server Component** (no `"use client"`) unless it genuinely needs interactivity.

## Reference pages — copy their structure and styling

- `app/cost-guides/page.tsx` — standard marketing page (hero + sections + CTA)
- `app/rebates/[state]/page.tsx` — content-list layout with cards

---

## Batches (do ONE per session)

Build only the routes in the current batch, verify build + lint are green, push to `feat/marketing-buildout`, then stop.

### BATCH 1 — EV charging services
`/ev-charging`, `/ev-charger-installation`, `/level-2-ev-charger-installation`, `/nema-14-50-outlet-installation`, `/ev-ready-home-wiring`, `/ev-charger-circuit-installation`, `/tesla-wall-connector-installation`, `/tesla-universal-wall-connector-installation`, `/amazon-ev-charger-installation`, `/ev-charger-repair`, `/ev-charger-relocation`, `/commercial-ev-charging`, `/condo-apartment-ev-charging`, `/multi-ev-charging-installation`, `/ev-fleet-charging`, `/retail-shopping-center-ev-charging`, `/hotel-hospitality-ev-charging`, `/tesla-wall-connector-business`

### BATCH 2 — Battery / solar / energy
`/tesla-powerwall-installation`, `/powerwall-3-installation`, `/multi-powerwall-installation`, `/home-battery-installation`, `/solar-battery-installation`, `/solar-panel-installation`, `/solar-storage-retrofit`, `/energy-storage`, `/off-grid-systems`, `/backup-power-systems`, `/home-energy-monitoring`

### BATCH 3 — Electrical + emergency
`/electrical`, `/electrical-panel-upgrade`, `/whole-house-rewiring`, `/generator-installation`, `/circuit-breaker-replacement`, `/lighting-installation`, `/commercial-lighting-retrofit`, `/electrical-inspection`, `/emergency`, `/emergency-electrician`, `/power-outage-repair`, `/storm-damage-electrical-repair`, `/sparking-outlet-repair`, `/burning-smell-electrical`

### BATCH 4 — Commercial + hubs
`/services`, `/commercial-electrical`, `/commercial-electrician`, `/electrician-network`, `/tesla-certified-installer`

### BATCH 5 — Locations
Build **one shared template + a data file**, then the pages:
`/locations`, `/locations/california`, `/locations/florida`, `/locations/georgia`, `/locations/illinois`, `/locations/new-york`, `/locations/north-carolina`, `/locations/pennsylvania`, `/locations/texas`

### BATCH 6 — Company / info
`/about`, `/contact`, `/careers`, `/investors`, `/financing`, `/warranty`, `/reviews`, `/why-charge-home-solutions`, `/learn`, `/common-questions`

---

## Off-limits — do NOT build these (they already exist; see rule 1)

`/`, `/for-electricians`, `/rebates`, `/cost-guides`, `/calculators`, `/savings-finder`, `/request-service`, `/privacy`, `/terms`
