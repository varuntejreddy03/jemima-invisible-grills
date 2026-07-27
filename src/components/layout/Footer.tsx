import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { chennaiLocalities } from '@/data/serviceAreas'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'All services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/service-areas', label: 'Service areas' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-white">

      {/* ── Main grid ── */}
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" aria-label={`${BUSINESS.name} — home`}>
            <img
              src="/logo.png"
              alt={BUSINESS.name}
              width={970}
              height={924}
              className="h-12 w-auto rounded-lg bg-white p-1.5"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Invisible grills, safety nets, pigeon nets, cloth hangers and sports nets —
            installed by a Chennai-based team, available all over India.
          </p>
          {/* contact pills */}
          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-orange/40 hover:text-white"
            >
              <Phone className="size-4 text-orange" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-orange/40 hover:text-white"
            >
              <Mail className="size-4 text-orange" aria-hidden="true" />
              <span className="truncate">{BUSINESS.email}</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.14em] text-white/40 uppercase">
            Services
          </h3>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-orange"
                >
                  <ArrowRight className="size-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true" />
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.14em] text-white/40 uppercase">
            Quick links
          </h3>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-orange"
                >
                  <ArrowRight className="size-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + WhatsApp CTA */}
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.14em] text-white/40 uppercase">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
              {BUSINESS.addressLine}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
              {BUSINESS.hours}
            </li>
          </ul>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-orange/35"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp for a free quote
          </a>
          <Link
            to="/contact"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:text-white"
          >
            Send an enquiry
          </Link>
        </div>
      </div>

      {/* ── Areas strip ── */}
      <div className="border-t border-white/8">
        <div className="container-page py-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.14em] text-white/35 uppercase shrink-0">
              Areas served
            </span>
            {chennaiLocalities.map((loc) => (
              <span
                key={loc}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55"
              >
                {loc}
              </span>
            ))}
            <Link
              to="/service-areas"
              className="rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange transition-colors hover:bg-orange/20"
            >
              + All-India coverage →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Serving all over India from {BUSINESS.city}.</p>
        </div>
      </div>

    </footer>
  )
}
