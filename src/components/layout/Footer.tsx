import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { grillServices, netServices } from '@/data/services'
import { phoneHref, BUSINESS } from '@/lib/constants'
import { CableRule } from '@/components/CableRule'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-steel/20 bg-navy-deep text-white">
      <CableRule lines={48} height={16} color="rgba(255,255,255,0.15)" />
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-block rounded bg-white p-1.5">
            <img
              src="/logo.png"
              alt={BUSINESS.name}
              width={970}
              height={924}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Invisible grills and safety nets for balconies, windows and duct areas — installed by a
            Chennai-based team, available all over India.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Invisible Grills
          </h3>
          <ul className="mt-4 space-y-2.5">
            {grillServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-white/70 hover:text-orange"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Safety &amp; Pigeon Nets
          </h3>
          <ul className="mt-4 space-y-2.5">
            {netServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-white/70 hover:text-orange"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-orange" aria-hidden="true" />
              <a href={phoneHref} className="hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-orange" aria-hidden="true" />
              <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-orange" aria-hidden="true" />
              {BUSINESS.addressLine}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-orange" aria-hidden="true" />
              {BUSINESS.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Serving all over India from Chennai.</p>
          {/* EDIT: add "GSTIN: <number>" here once available — omitted rather than invented */}
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
