import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Zap, Star } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { EnquiryForm } from '@/components/EnquiryForm'
import { Reveal } from '@/components/Reveal'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: BUSINESS.phoneDisplay,
    href: phoneHref,
    cta: 'Call now',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: BUSINESS.phoneDisplay,
    href: whatsappHref,
    cta: 'Open WhatsApp',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    cta: 'Send email',
  },
]

const trustPoints = [
  { icon: Zap, text: 'Same-day reply guaranteed' },
  { icon: ShieldCheck, text: 'Free site survey, no obligation' },
  { icon: Star, text: 'Serving Chennai 24×7' },
]

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Jemima Invisible Grills & Safety Nets | Chennai"
        description="Call, WhatsApp or email Jemima Invisible Grills & Safety Nets for a free site survey in Chennai. Open all 7 days, 24 hours. Pan-India installation."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact"
        title="Tell us about your balcony or window"
        lede="Call, WhatsApp or fill in the form — we reply the same day with a free site survey slot."
      />

      <section aria-labelledby="contact-heading" className="container-page py-16 sm:py-20">
        <h2 id="contact-heading" className="sr-only">Contact details and enquiry form</h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

          {/* ── Left: contact info ── */}
          <div className="space-y-6">

            {/* Quick contact cards */}
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, cta, external }) => (
                <Reveal key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-steel/20 bg-white p-5 shadow-sm transition-all duration-200 hover:border-orange/30 hover:shadow-md"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 transition-colors duration-200 group-hover:bg-orange">
                      <Icon className="size-5 text-orange transition-colors duration-200 group-hover:text-white" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold tracking-[0.1em] text-steel/70 uppercase">{label}</p>
                      <p className="mt-0.5 truncate font-display text-base font-bold text-navy-deep">{value}</p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-steel/20 px-3 py-1.5 text-xs font-semibold text-navy-deep/60 transition-colors group-hover:border-orange/30 group-hover:text-orange">
                      {cta}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Hours + location */}
            <Reveal>
              <div className="rounded-2xl border border-steel/20 bg-mist p-6">
                <div className="flex items-start gap-4 border-b border-steel/15 pb-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy/8">
                    <Clock className="size-4 text-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.1em] text-steel/70 uppercase">Hours</p>
                    <p className="mt-0.5 font-display text-base font-bold text-navy-deep">{BUSINESS.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy/8">
                    <MapPin className="size-4 text-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.1em] text-steel/70 uppercase">Base</p>
                    <p className="mt-0.5 font-display text-base font-bold text-navy-deep">
                      {BUSINESS.addressLine}
                    </p>
                    <p className="mt-1 text-sm text-navy-deep/55">Installation teams sent across India</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-steel/20 shadow-sm">
                <iframe
                  title="Jemima Invisible Grills & Safety Nets — Chennai map"
                  src="https://maps.google.com/maps?q=Chennai%2C%20Tamil%20Nadu&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  style={{ border: 0, display: 'block' }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* ── Right: form ── */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-steel/20 bg-white p-7 shadow-sm sm:p-8">
              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.14em] text-orange uppercase">Free site survey</p>
                <h3 className="mt-2 font-display text-xl font-extrabold text-navy-deep">
                  Request a quote
                </h3>
                <p className="mt-1.5 text-sm text-navy-deep/60">
                  Fill this in and we'll open WhatsApp with your details ready to send.
                </p>
              </div>
              <EnquiryForm />

              {/* trust strip */}
              <div className="mt-6 flex flex-wrap gap-4 border-t border-steel/15 pt-5">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-xs text-navy-deep/55">
                    <Icon className="size-3.5 text-orange" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}
