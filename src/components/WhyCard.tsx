import { motion, useReducedMotion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

type WhyCardProps = {
  icon: LucideIcon
  title: string
  body: string
  delay?: number
}

export function WhyCard({ icon: Icon, title, body, delay = 0 }: WhyCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="group flex flex-col items-center rounded-[2.5rem] border border-steel/20 bg-gradient-to-b from-white to-mist p-8 text-center shadow-md shadow-navy/5 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-navy/10"
      initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-navy shadow-lg shadow-navy/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-orange group-hover:shadow-orange/30">
        <Icon className="size-8 text-white" aria-hidden="true" />
      </div>
      <h3 className="mb-3 font-display text-base font-bold text-navy-deep">{title}</h3>
      <p className="text-sm leading-relaxed text-navy-deep/65">{body}</p>
    </motion.div>
  )
}
