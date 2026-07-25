import { Phone, MessageCircle, ShieldCheck, Clock, Truck, Layers } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'
import { BalconyIllustration } from '@/components/BalconyIllustration'

const trustPoints = [
  { icon: Clock, label: '24×7 service' },
  { icon: ShieldCheck, label: 'Free site survey' },
  { icon: Truck, label: 'All-India installation' },
  { icon: Layers, label: '304-grade steel' },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-steel/20 bg-white"
    >
      <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            {BUSINESS.city} · {BUSINESS.areaServed}-wide installation
          </p>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-extrabold tracking-tight text-navy-deep uppercase"
          >
            Balconies you can see through.
            <br />
            <span className="text-navy">Not fall through.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-navy-deep/80">
            Invisible grills and safety nets, installed by a Chennai-based team, available{' '}
            {BUSINESS.hours.toLowerCase()} — with installation teams sent anywhere in India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-brand bg-navy px-6 py-3.5 font-sans font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-brand bg-orange px-6 py-3.5 font-sans font-semibold text-white transition-colors hover:bg-orange/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp quote
            </a>
          </div>
        </div>

        <motion.div
          className="relative aspect-[5/4] w-full overflow-hidden rounded-brand border border-steel/30"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <BalconyIllustration />
        </motion.div>
      </div>

      <div className="border-t border-steel/20 bg-mist">
        <div className="container-page grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="size-5 shrink-0 text-orange" aria-hidden="true" />
              <span className="font-sans text-sm font-semibold text-navy-deep">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
