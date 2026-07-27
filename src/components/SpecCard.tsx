import { motion, useReducedMotion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

type SpecCardProps = {
  icon: LucideIcon
  title: string
  value: string
  delay?: number
}

export function SpecCard({ icon: Icon, title, value, delay = 0 }: SpecCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="rounded-brand border border-steel/20 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-md"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Icon className="mx-auto mb-3 size-7 text-orange" aria-hidden="true" />
      <h4 className="mb-1 font-display text-sm font-bold text-navy-deep">{title}</h4>
      <p className="text-xs leading-relaxed text-navy-deep/65">{value}</p>
    </motion.div>
  )
}
