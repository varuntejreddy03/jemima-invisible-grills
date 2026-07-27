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
      className="group card-lift shimmer flex flex-col justify-between overflow-hidden rounded-brand border border-steel/25 bg-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
        <img
          src={service.gallery[0].src}
          alt={service.gallery[0].alt}
          width={800}
          height={600}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-brand bg-white/90 text-navy shadow-sm transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-4" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-display text-lg font-bold text-navy-deep">{service.shortName}</h3>
          <p className="mt-1.5 text-sm text-navy-deep/70">{service.heroTagline}</p>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-orange">
          View details
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
