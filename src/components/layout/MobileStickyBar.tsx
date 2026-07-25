import { Phone, MessageCircle } from 'lucide-react'
import { phoneHref, whatsappHref } from '@/lib/constants'

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-steel/20 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] lg:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={phoneHref}
        className="flex items-center justify-center gap-2 bg-navy py-3.5 font-sans text-sm font-semibold text-white"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call now
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-orange py-3.5 font-sans text-sm font-semibold text-white"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
