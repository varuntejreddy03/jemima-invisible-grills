import { motion, useReducedMotion } from 'motion/react'

/**
 * Brand illustration for the hero: a balcony line drawing with the cable
 * rhythm animating in on load, in navy over a mist panel. Stands in for a
 * photograph until real installation photos are supplied — see CONTENT-TODO.md.
 */
export function BalconyIllustration() {
  const shouldReduceMotion = useReducedMotion()
  const cableCount = 14
  const x0 = 60
  const x1 = 540

  return (
    <svg
      viewBox="0 0 600 480"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a balcony fitted with an invisible cable grill system"
    >
      <rect x="0" y="0" width="600" height="480" fill="var(--color-mist)" />
      <rect
        x="40"
        y="60"
        width="520"
        height="360"
        fill="#ffffff"
        stroke="var(--color-steel)"
        strokeWidth="1"
      />

      {Array.from({ length: cableCount }).map((_, i) => {
        const x = x0 + (i * (x1 - x0)) / (cableCount - 1)
        return (
          <motion.line
            key={i}
            x1={x}
            y1={80}
            x2={x}
            y2={380}
            stroke="var(--color-navy)"
            strokeWidth={2}
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
          />
        )
      })}

      <rect x="40" y="360" width="520" height="20" fill="var(--color-navy)" />
      <rect x="40" y="70" width="520" height="10" fill="var(--color-navy)" />

      <rect x="40" y="380" width="520" height="80" fill="var(--color-steel)" opacity="0.15" />
      <rect x="40" y="380" width="520" height="6" fill="var(--color-steel)" />

      <rect x="270" y="300" width="16" height="60" fill="var(--color-steel)" opacity="0.6" />
      <path
        d="M278 300 C 260 280, 300 270, 278 250 C 296 260, 310 280, 278 300 Z"
        fill="var(--color-navy)"
        opacity="0.7"
      />

      <path d="M300 430 l14 18 h-28 z" fill="var(--color-orange)" />
    </svg>
  )
}
