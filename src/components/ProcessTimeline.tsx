import { motion, useReducedMotion } from 'motion/react'

type ProcessTimelineProps = {
  steps: { step: string; body: string }[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const reduce = useReducedMotion()

  return (
    <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* connecting line — desktop only */}
      <div
        className="absolute top-8 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-orange/20 via-orange to-orange/20 lg:block"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      />

      {steps.map((s, i) => (
        <motion.li
          key={s.step}
          className="relative z-10 flex flex-col items-start gap-4 rounded-brand border border-steel/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-md"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
        >
          {/* number circle */}
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange font-display text-lg font-extrabold text-white shadow-md shadow-orange/30">
            {i + 1}
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-navy-deep">{s.step}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">{s.body}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
