import type { LegalBlock, LegalDoc } from "@/lib/legal"
import { Container, Eyebrow } from "@/components/ui/section"

/**
 * Renders any bracketed placeholder -- [like this] -- with a visible highlight
 * so unfilled business facts are obvious at a glance instead of shipping
 * silently into a live legal document.
 */
function Text({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g)

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span
            key={i}
            title="Placeholder — replace before publishing"
            className="rounded bg-accent/15 px-1 py-0.5 font-mono text-[0.85em] text-accent-foreground ring-1 ring-accent/40 dark:bg-accent/20"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          <Text text={block.text} />
        </p>
      )

    case "subheading":
      return (
        <h3 className="mt-2 text-base font-semibold tracking-[-0.01em] text-foreground sm:text-lg">
          <Text text={block.text} />
        </h3>
      )

    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base"
            >
              <span aria-hidden="true" className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-primary/50" />
              <Text text={item} />
            </li>
          ))}
        </ul>
      )

    case "numbered":
      return (
        <ol className="flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-8 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 font-mono text-xs font-medium tabular-nums text-primary"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Text text={item} />
            </li>
          ))}
        </ol>
      )

    case "callout":
      return (
        <div className="rounded-[var(--radius)] border border-primary/25 bg-primary/[0.06] p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
            <Text text={block.title} />
          </p>
          <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-foreground/90">
            <Text text={block.text} />
          </p>
        </div>
      )

    case "table":
      return (
        <div className="overflow-hidden rounded-[var(--radius)] border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted">
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">
                    <Text text={row[0]} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <Text text={row[1]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <main className="flex-1">
      {/* Extra top padding clears the site's fixed header. */}
      <header className="bg-ink text-ink-foreground">
        <Container className="pb-16 pt-28 sm:pb-20 lg:pt-36">
          <div className="flex max-w-3xl flex-col gap-5">
            <Eyebrow tone="ink">{doc.eyebrow}</Eyebrow>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{doc.title}</h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">{doc.summary}</p>
            <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink-border pt-6">
              <div className="flex flex-col gap-1">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">Effective date</dt>
                <dd className="text-sm text-ink-foreground">
                  <Text text={doc.effectiveDate} />
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">Last updated</dt>
                <dd className="text-sm text-ink-foreground">
                  <Text text={doc.lastUpdated} />
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </header>

      <Container className="py-14 sm:py-20">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-labelledby="toc-heading" className="mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-24">
              <h2
                id="toc-heading"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground"
              >
                On this page
              </h2>
              <ol className="mt-4 flex flex-col gap-2 border-l border-border">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent py-1 pl-4 text-sm leading-snug text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="flex min-w-0 flex-col gap-12">
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-balance text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-5 flex flex-col gap-5">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}
