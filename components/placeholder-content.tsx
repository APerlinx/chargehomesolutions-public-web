const placeholderBlocks = [
  {
    title: "Home installation",
    body: "Placeholder description for residential charger installation services.",
  },
  {
    title: "Business & fleet",
    body: "Placeholder description for commercial and multi-unit charging setups.",
  },
  {
    title: "Service & support",
    body: "Placeholder description for maintenance, diagnostics, and ongoing support.",
  },
]

export function PlaceholderContent() {
  return (
    <>
      <section id="services" className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Services
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Placeholder section. Content structure is in place so the final
            design can be applied without restructuring the page.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-[var(--radius)] border border-border p-6"
              >
                <h3 className="text-base font-medium">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                About
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Placeholder company overview. Replace with positioning,
                credentials, and coverage area.
              </p>
            </div>
            <div className="rounded-[var(--radius)] bg-muted p-6">
              <h3 className="text-base font-medium">Placeholder panel</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Reserved space for supporting content such as certifications,
                process steps, or a contact prompt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
