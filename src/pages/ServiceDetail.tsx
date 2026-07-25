import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Phone, MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { SpecTable } from '@/components/SpecTable'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { EnquiryForm } from '@/components/EnquiryForm'
import { Lightbox } from '@/components/Lightbox'
import { ServiceCard } from '@/components/ServiceCard'
import { Reveal } from '@/components/Reveal'
import { getServiceBySlug } from '@/data/services'
import { phoneHref, buildWhatsappUrl, BUSINESS } from '@/lib/constants'
import { buildFaqSchema, buildBreadcrumbSchema } from '@/lib/seo-schema'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon
  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
  const whatsappUrl = buildWhatsappUrl(
    `Hi Jemima, I'm interested in ${service.name}. Please share pricing and next steps.`,
  )

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={[
          buildFaqSchema(service.faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.name, url: `/services/${service.slug}` },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="border-b border-steel/20 bg-mist">
        <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-sm text-navy-deep/70">
          <li>
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3.5 text-steel" aria-hidden="true" />
          <li>
            <Link to="/services" className="hover:text-navy">
              Services
            </Link>
          </li>
          <ChevronRight className="size-3.5 text-steel" aria-hidden="true" />
          <li aria-current="page" className="font-semibold text-navy-deep">
            {service.name}
          </li>
        </ol>
      </nav>

      <section className="border-b border-steel/20 bg-white py-12 sm:py-16">
        <div className="container-page">
          <div className="mb-5 flex size-12 items-center justify-center rounded-brand bg-mist text-navy">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <h1 className="font-display text-[clamp(1.875rem,4vw,3rem)] font-extrabold tracking-tight text-navy-deep uppercase">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-deep/75">{service.heroTagline}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-brand bg-navy px-6 py-3 font-sans font-semibold text-white hover:bg-navy-deep"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-brand bg-orange px-6 py-3 font-sans font-semibold text-white hover:bg-orange/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp about this
            </a>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_340px] lg:gap-10">
        <div className="min-w-0 space-y-14">
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">
              About {service.name}
            </h2>
            <div className="max-w-3xl space-y-4 text-navy-deep/85">
              {service.intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="best-for-heading">
            <h2
              id="best-for-heading"
              className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
            >
              Best suited for
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-deep/85">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="specs-heading">
            <h2
              id="specs-heading"
              className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
            >
              Materials &amp; specification
            </h2>
            <SpecTable rows={service.materials} />
          </section>

          <section aria-labelledby="benefits-heading">
            <h2
              id="benefits-heading"
              className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
            >
              Why this works
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {service.benefits.map((b, i) => (
                <Reveal key={b.title} delay={(i % 2) * 0.06}>
                  <h3 className="font-display text-base font-bold text-navy-deep">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-deep/70">{b.body}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section aria-labelledby="process-heading">
            <h2
              id="process-heading"
              className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
            >
              How installation works
            </h2>
            <ProcessTimeline steps={service.process} />
          </section>

          <section aria-labelledby="gallery-heading">
            <h2
              id="gallery-heading"
              className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
            >
              Gallery
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {service.gallery.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="overflow-hidden rounded-brand border border-steel/25 text-left"
                  aria-label={`View larger image: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
            >
              Frequently asked questions
            </h2>
            <FaqAccordion faqs={service.faqs} idPrefix={`${service.slug}-faq`} />
          </section>

          {relatedServices.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="mb-5 font-display text-xl font-bold tracking-tight text-navy-deep uppercase"
              >
                Related services
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-brand border border-steel/25 bg-mist p-6">
            <h2 className="font-display text-lg font-bold text-navy-deep">
              Get a quote for this service
            </h2>
            <p className="mt-1.5 mb-5 text-sm text-navy-deep/70">
              Free survey, same-day pricing. Available {BUSINESS.hours.toLowerCase()}.
            </p>
            <EnquiryForm defaultService={service.slug} compact />
          </div>
        </aside>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={service.gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <CtaBand
        title={`Get ${service.shortName.toLowerCase()} done right`}
        subtitle="Free site survey, same-day quote, install this week."
      />
    </>
  )
}
