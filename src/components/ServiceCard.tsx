import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col justify-between rounded-brand border border-steel/25 bg-white p-6 transition-colors hover:border-navy/50 hover:bg-mist/40"
    >
      <div>
        <div className="mb-4 flex size-11 items-center justify-center rounded-brand bg-mist text-navy">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="font-display text-lg font-bold text-navy-deep">{service.shortName}</h3>
        <p className="mt-2 text-sm text-navy-deep/70">{service.heroTagline}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-orange">
        View details
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
