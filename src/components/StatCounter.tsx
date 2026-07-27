import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

type StatCounterProps = {
  value: number
  suffix?: string
  duration?: number
}

/** Counts up from 0 to `value` once it scrolls into view. */
export function StatCounter({ value, suffix = '', duration = 1.4 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0)

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setDisplay(Math.round(progress * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, shouldReduceMotion, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
