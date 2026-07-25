import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const tagComponents = {
  div: motion.div,
  li: motion.li,
}

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: keyof typeof tagComponents
}

/** Quiet fade-and-rise on scroll, honouring prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = tagComponents[as]

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
    >
      {children}
    </Component>
  )
}
