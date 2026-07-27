import { Phone, MessageCircle } from 'lucide-react'
import { phoneHref, whatsappHref } from '@/lib/constants'

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 lg:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      {/* frosted glass backing */}
      <div className="border-t border-black/[0.08] bg-white/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.10)]">
        <div className="grid grid-cols-2 gap-2.5 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <a
            href={phoneHref}
            className="flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-semibold text-white shadow-sm shadow-navy/20 transition-all active:scale-[0.97]"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-orange py-3 text-sm font-semibold text-white shadow-sm shadow-orange/30 transition-all active:scale-[0.97]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
