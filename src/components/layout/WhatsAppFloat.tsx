import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '@/lib/constants'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="pulse-ring fixed right-6 bottom-6 z-30 hidden items-center justify-center rounded-full bg-orange p-4 text-white shadow-lg shadow-orange/40 transition-transform duration-200 hover:scale-110 hover:shadow-xl hover:shadow-orange/50 lg:flex"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
