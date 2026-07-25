import { Phone, MessageCircle } from 'lucide-react'
import { phoneHref, whatsappHref } from '@/lib/constants'
import { CableRule } from '@/components/CableRule'

type CtaBandProps = {
  title?: string
  subtitle?: string
}

export function CtaBand({
  title = 'Get a free site survey',
  subtitle = 'Tell us your balcony or window size on WhatsApp and get a quote the same day.',
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-navy-deep py-14 text-white sm:py-16"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <CableRule lines={48} height="100%" color="rgba(255,255,255,0.08)" />
      </div>
      <div className="container-page relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            id="cta-heading"
            className="font-display text-2xl font-extrabold tracking-tight uppercase sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-white/70">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-brand bg-white px-6 py-3.5 font-sans font-semibold text-navy-deep transition-colors hover:bg-mist"
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
    </section>
  )
}
