import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { grillServices, netServices } from '@/data/services'
import { phoneHref, BUSINESS } from '@/lib/constants'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const [lastPathname, setLastPathname] = useState(location.pathname)
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMobileOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-steel/20 bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label={`${BUSINESS.name} — home`}>
          <img src="/logo.png" alt="" width={970} height={924} className="h-12 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 font-sans text-sm font-semibold text-navy-deep hover:text-navy"
            >
              Services
              <ChevronDown
                className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 z-50 mt-3 w-[560px] -translate-x-1/2 rounded-brand border border-steel/20 bg-white p-6 shadow-lg"
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="mb-3 font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                        Invisible Grills
                      </p>
                      <ul className="space-y-2.5">
                        {grillServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="text-sm text-navy-deep hover:text-orange"
                            >
                              {s.shortName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                        Safety &amp; Pigeon Nets
                      </p>
                      <ul className="space-y-2.5">
                        {netServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="text-sm text-navy-deep hover:text-orange"
                            >
                              {s.shortName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    to="/services"
                    className="mt-5 inline-block font-sans text-sm font-semibold text-navy underline underline-offset-2"
                  >
                    View all services →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-sans text-sm font-semibold ${isActive ? 'text-navy' : 'text-navy-deep hover:text-navy'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 font-sans text-sm font-semibold text-navy-deep hover:text-navy"
          >
            <Phone className="size-4" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="rounded-brand bg-orange px-5 py-2.5 font-sans text-sm font-semibold text-white hover:bg-orange/90"
          >
            Get free quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden"
          aria-label="Open menu"
          aria-haspopup="true"
          aria-expanded={mobileOpen}
        >
          <Menu className="size-7 text-navy-deep" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="container-page flex items-center justify-between py-3">
              <Link to="/" aria-label={`${BUSINESS.name} — home`}>
                <img src="/logo.png" alt="" width={970} height={924} className="h-10 w-auto" />
              </Link>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="size-7 text-navy-deep" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-page flex flex-1 flex-col gap-6 py-6">
              <Link to="/" className="font-display text-lg font-bold text-navy-deep">
                Home
              </Link>
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-display text-lg font-bold text-navy-deep"
                >
                  {l.label}
                </Link>
              ))}
              <div>
                <p className="mb-3 font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                  Invisible Grills
                </p>
                <ul className="space-y-3">
                  {grillServices.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="text-navy-deep">
                        {s.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                  Safety &amp; Pigeon Nets
                </p>
                <ul className="space-y-3">
                  {netServices.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="text-navy-deep">
                        {s.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={phoneHref}
                className="flex items-center gap-2 font-sans font-semibold text-navy-deep"
              >
                <Phone className="size-4" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="mt-auto rounded-brand bg-orange px-6 py-3.5 text-center font-sans font-semibold text-white"
              >
                Get free quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
