/**
 * Canonical production origin, in one place so `metadataBase`, `robots.txt`, and
 * `sitemap.xml` can never drift apart. No trailing slash.
 */
export const SITE_URL = "https://chargehomesolutions.com"

/** Every indexable route. Keep in sync when a public page is added. */
export const ROUTES = ["/", "/privacy", "/terms"] as const
