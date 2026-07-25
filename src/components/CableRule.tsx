import { motion, useReducedMotion } from 'motion/react'

type CableRuleProps = {
  lines?: number
  height?: number | string
  color?: string
  className?: string
}

/**
 * The site's signature motif: thin vertical cable lines at a fixed rhythm,
 * staggered draw-in from the top on scroll. Used as section dividers, a
 * hero backdrop, and (via SpecTable) the left edge of spec rows.
 */
export function CableRule({
  lines = 20,
  height = 56,
  color = 'var(--color-navy)',
  className = '',
}: CableRuleProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className={`flex w-full items-stretch justify-between ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {Array.from({ length: lines }).map((_, i) => (
        <motion.span
          key={i}
          className="w-px origin-top"
          style={{ backgroundColor: color }}
          initial={shouldReduceMotion ? false : { scaleY: 0, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
