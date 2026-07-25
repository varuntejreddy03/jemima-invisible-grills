import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { EnquiryForm } from '@/components/EnquiryForm'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'

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
        lede="Call, WhatsApp or fill in the form below — we reply the same day with a free site survey slot."
      />

      <section aria-labelledby="contact-heading" className="container-page py-14 sm:py-16">
        <h2 id="contact-heading" className="sr-only">
          Contact details and enquiry form
        </h2>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                    Phone
                  </p>
                  <a
                    href={phoneHref}
                    className="font-display text-lg font-bold text-navy-deep hover:text-navy"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                    WhatsApp
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-lg font-bold text-navy-deep hover:text-navy"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="font-display text-lg font-bold break-all text-navy-deep hover:text-navy"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                    Hours
                  </p>
                  <p className="font-display text-lg font-bold text-navy-deep">{BUSINESS.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-wider text-steel uppercase">
                    Base
                  </p>
                  <p className="font-display text-lg font-bold text-navy-deep">
                    {BUSINESS.addressLine} — installation teams sent across India
                  </p>
                </div>
              </li>
            </ul>

            {/* EDIT: replace with an embed pinned to the exact office address once confirmed */}
            <div className="overflow-hidden rounded-brand border border-steel/25">
              <iframe
                title="Jemima Invisible Grills & Safety Nets — Chennai map"
                src="https://maps.google.com/maps?q=Chennai%2C%20Tamil%20Nadu&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-brand border border-steel/25 bg-mist p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-navy-deep">
              Request a free site survey
            </h3>
            <p className="mt-1.5 mb-6 text-sm text-navy-deep/70">
              Fill this in and we'll open WhatsApp with your details ready to send.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
