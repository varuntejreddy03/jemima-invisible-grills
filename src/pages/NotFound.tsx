import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { CableRule } from '@/components/CableRule'
import { services } from '@/data/services'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Jemima Invisible Grills & Safety Nets"
        description="This page doesn't exist. Browse our invisible grill and safety net services for balconies, windows and duct areas in Chennai and across India."
        path="/404"
      />

      <section className="container-page py-20 text-center sm:py-28">
        <p className="font-display text-8xl font-extrabold text-navy/15">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase">
          That opening doesn't exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-navy-deep/75">
          The page you're looking for has moved or never existed. Here's the full list of what we
          install instead.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-brand bg-orange px-6 py-3.5 font-sans font-semibold text-white hover:bg-orange/90"
        >
          Browse all services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>

        <div className="mx-auto mt-14 max-w-2xl">
          <CableRule lines={28} height={20} className="mb-8 opacity-40" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="text-navy-deep/70 hover:text-orange"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
