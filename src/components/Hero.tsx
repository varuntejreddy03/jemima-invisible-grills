import { useState, useEffect } from 'react'
import { Phone, MessageCircle, ShieldCheck, Clock, Truck, Layers, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'

const heroSlides = [
  { src: '/invisible-grills-balcony-evening-woman-standing.webp', service: 'Invisible Grills',   slug: 'invisible-grills' },
  { src: '/invisible-grills-apartment-balcony-night.webp',         service: 'Invisible Grills',   slug: 'invisible-grills' },
  { src: '/invisible-grills-balcony-night-city-view.webp',         service: 'Invisible Grills',   slug: 'invisible-grills' },
  { src: '/pigeon-nets-balcony-corridor-net.webp',                  service: 'Pigeon Nets',        slug: 'pigeon-nets' },
  { src: '/pigeon-nets-balcony-installation-greenery-view.webp',    service: 'Pigeon Nets',        slug: 'pigeon-nets' },
  { src: '/safety-nets-balcony-child-safety-father-and-baby.webp',  service: 'Safety Nets',        slug: 'safety-nets' },
  { src: '/cloth-hangers-ceiling-pulley-hanger-white-balcony.webp', service: 'Cloth Hangers',      slug: 'cloth-hangers' },
  { src: '/sports-nets-indoor-turf-court-net-enclosure.webp',       service: 'Sports Nets',        slug: 'sports-nets' },
  { src: '/duct-area-nets-installation-in-progress-shaft.webp',     service: 'Duct Area Nets',     slug: 'duct-area-nets' },
  { src: '/staircase-nets-stairwell-net-installation.webp',         service: 'Staircase Nets',     slug: 'staircase-nets' },
  { src: '/construction-nets-warehouse-roof-net.webp',              service: 'Construction Nets',  slug: 'construction-nets' },
]

const trustPoints = [
  { icon: Clock,       label: '24×7 service' },
  { icon: ShieldCheck, label: 'Free site survey' },
  { icon: Truck,       label: 'All-India install' },
  { icon: Layers,      label: 'SS 316 steel' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  const reduce = useReducedMotion()
  const [bgIdx, setBgIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setBgIdx((i) => (i + 1) % heroSlides.length), 4500)
    return () => clearInterval(t)
  }, [])

  const current = heroSlides[bgIdx]

  return (
    <section aria-labelledby="hero-heading" className="relative isolate flex min-h-[85vh] flex-col sm:min-h-[92vh]">

      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            aria-hidden="true"
            fetchPriority={i === 0 ? 'high' : 'low'}
            width={1600}
            height={1067}
            className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-1000 ${
              i === bgIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep/85 sm:bg-gradient-to-r sm:from-navy-deep/92 sm:via-navy-deep/75 sm:to-navy-deep/30" />
        <div className="absolute inset-0 cable-backdrop opacity-[0.06]" />
      </div>

      {/* Service name badge — top right, changes with each slide */}
      <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.service}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Link
              to={`/services/${current.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-orange/50 bg-navy-deep/70 px-4 py-2 text-xs font-bold tracking-wide text-white backdrop-blur-md transition-colors hover:bg-orange hover:border-orange"
            >
              <span className="size-1.5 rounded-full bg-orange animate-pulse" />
              {current.service}
              <ArrowRight className="size-3 opacity-70" aria-hidden="true" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="container-page flex flex-1 items-end pb-8 pt-16 sm:items-center sm:py-24 lg:py-32">
        <motion.div
          className="w-full max-w-2xl"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={reduce ? undefined : fadeUp} className="mb-4 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white/85 uppercase backdrop-blur-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-orange" />
              {BUSINESS.city} · {BUSINESS.areaServed}-wide
            </span>
          </motion.div>

          <motion.h1
            variants={reduce ? undefined : fadeUp}
            id="hero-heading"
            className="font-display text-[clamp(2.25rem,8vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight text-white"
          >
            Balconies you can{' '}
            <span className="text-gradient">see through.</span>{' '}
            Not fall through.
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-white/70 sm:mt-5 sm:max-w-lg sm:text-lg"
          >
            Invisible grills and safety nets — Chennai-based team, available 24×7, installed anywhere in India.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/40 transition-all active:scale-[0.97] hover:bg-orange-light sm:px-6"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all active:scale-[0.97] hover:bg-white/20 sm:px-6"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call now
            </a>
          </motion.div>

          <motion.div variants={reduce ? undefined : fadeUp} className="mt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors hover:text-white"
            >
              Explore all services
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="container-page flex gap-1.5 pb-4">
        {heroSlides.map((slide, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setBgIdx(i)}
            aria-label={`${slide.service} image ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === bgIdx ? 'h-1.5 w-5 bg-orange' : 'size-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Trust strip */}
      <motion.div
        className="border-t border-white/10 bg-navy-deep/80 backdrop-blur-md"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
      >
        <div className="container-page grid grid-cols-2 gap-x-4 gap-y-3 py-4 sm:grid-cols-4 sm:py-5">
          {trustPoints.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange/20">
                <Icon className="size-4 text-orange" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold leading-tight text-white/80">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
