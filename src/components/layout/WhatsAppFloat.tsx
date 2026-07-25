import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '@/lib/constants'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-6 z-30 hidden items-center justify-center rounded-full bg-orange p-4 text-white shadow-lg transition-transform hover:scale-105 lg:flex"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
