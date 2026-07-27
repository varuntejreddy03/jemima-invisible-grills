import { motion, useReducedMotion } from 'motion/react'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  lede?: string
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-navy-deep py-12 text-white sm:py-20">
      {/* cable texture */}
      <div className="absolute inset-0 cable-backdrop opacity-[0.06]" aria-hidden="true" />
      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep to-transparent" aria-hidden="true" />

      <div className="container-page relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-white/80 uppercase backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white uppercase">
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{lede}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
