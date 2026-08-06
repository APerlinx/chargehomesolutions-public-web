import type { MetadataRoute } from "next"

import { ROUTES, SITE_URL } from "@/lib/site"

/** Served at /sitemap.xml. The marketing page is the priority; legal pages rarely change. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? ("weekly" as const) : ("yearly" as const),
    priority: route === "/" ? 1 : 0.3,
  }))
}
