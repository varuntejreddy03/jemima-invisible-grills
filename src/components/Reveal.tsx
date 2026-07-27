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

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = tagComponents[as]

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.97 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
