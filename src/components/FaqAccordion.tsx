import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

type FaqAccordionProps = {
  faqs: { q: string; a: string }[]
  idPrefix?: string
}

export function FaqAccordion({ faqs, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="divide-y divide-steel/20 border-y border-steel/20">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        const panelId = `${idPrefix}-panel-${i}`
        const buttonId = `${idPrefix}-button-${i}`

        return (
          <div key={faq.q}>
            <h3 className="font-display">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-navy-deep"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-navy-deep/75">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
