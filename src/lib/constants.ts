export const BUSINESS = {
  name: 'Jemima Invisible Grills & Safety Nets',
  shortName: 'Jemima',
  phoneDisplay: '+91 78100 40329',
  phoneTel: '+917810040329',
  whatsappNumber: '917810040329',
  email: 'Jemimainvisiblegrills03@gmail.com',
  city: 'Chennai',
  state: 'Tamil Nadu',
  addressLine: 'Chennai, Tamil Nadu',
  hours: 'Open all 7 days, 24 hours',
  areaServed: 'India',
  siteUrl: 'https://www.jemimasafetynets.in',
} as const

export const phoneHref = `tel:${BUSINESS.phoneTel}`

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const whatsappHref = buildWhatsappUrl(
  `Hi Jemima, I would like a free site survey and quote for invisible grills / safety nets.`,
)
