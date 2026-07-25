type SpecTableProps = {
  rows: { label: string; value: string }[]
  caption?: string
}

export function SpecTable({ rows, caption }: SpecTableProps) {
  return (
    <div>
      {caption && (
        <p className="mb-3 font-sans text-xs font-semibold tracking-wider text-steel uppercase">
          {caption}
        </p>
      )}
      <dl className="divide-y divide-steel/20 overflow-hidden rounded-brand border border-steel/25">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-l-2 border-navy/40 bg-white px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <dt className="w-full shrink-0 font-sans text-xs font-semibold tracking-wider text-steel uppercase sm:w-52">
              {row.label}
            </dt>
            <dd className="font-sans text-sm text-navy-deep">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
