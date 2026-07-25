import { CableRule } from '@/components/CableRule'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  lede?: string
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="border-b border-steel/20 bg-mist">
      <div className="container-page py-12 sm:py-16">
        {eyebrow && (
          <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[clamp(1.875rem,4vw,3rem)] font-extrabold tracking-tight text-navy-deep uppercase">
          {title}
        </h1>
        {lede && <p className="mt-4 max-w-2xl text-lg text-navy-deep/75">{lede}</p>}
      </div>
      <CableRule lines={32} height={18} className="opacity-40" />
    </section>
  )
}
