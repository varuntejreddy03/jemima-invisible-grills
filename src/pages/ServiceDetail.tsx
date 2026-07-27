import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import {
  Phone, MessageCircle, CheckCircle2, ChevronRight,
  ShieldCheck, Clock, Truck, Award, Star, Wrench,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Seo } from '@/components/Seo'
import { SectionTitle } from '@/components/SectionTitle'
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

const trustPoints = [
  { icon: ShieldCheck, label: 'Free site survey' },
  { icon: Clock,       label: '24×7 availability' },
  { icon: Truck,       label: 'Pan-India teams' },
  { icon: Award,       label: 'Warranty in writing' },
  { icon: Star,        label: '500+ installations' },
  { icon: Wrench,      label: 'SS 316 grade steel' },
]

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

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

      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[420px] items-center overflow-hidden bg-navy-deep sm:min-h-[480px]"
        aria-labelledby="service-hero-heading"
      >
        {/* background image */}
        {service.gallery[0] && (
          <img
            src={service.gallery[0].src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover opacity-25"
          />
        )}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-transparent" />

        <div className="container-page relative z-10 py-16">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <li className="font-semibold text-orange">{service.name}</li>
            </ol>
          </nav>

          <motion.p
            className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Chennai · Pan-India installation
          </motion.p>

          <motion.h1
            id="service-hero-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white uppercase"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {service.name}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-lg text-white/80"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {service.heroTagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <a href={phoneHref} className="btn-navy px-6 py-3.5 text-base">
              <Phone className="size-5" aria-hidden="true" />
              Call now
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary px-6 py-3.5 text-base">
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="border-b border-steel/20 bg-mist">
        <div className="container-page grid grid-cols-2 gap-0 divide-x divide-steel/20 sm:grid-cols-3 lg:grid-cols-6">
          {trustPoints.map(({ icon: TIcon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-2.5 px-4 py-4"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
            >
              <TIcon className="size-4 shrink-0 text-orange" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-navy-deep">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Main content + sidebar ── */}
      <div className="container-page grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_340px] lg:gap-10">
        <div className="min-w-0 space-y-16">

          {/* Intro */}
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">About {service.name}</h2>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-navy-deep/80">
              {service.intro.map((para, i) => (
                <Reveal key={i}><p>{para}</p></Reveal>
              ))}
            </div>
          </section>

          {/* Why you need it — icon cards */}
          <section aria-labelledby="why-heading">
            <SectionTitle id="why-heading" eyebrow="Why it matters" title={`Why you need ${service.shortName}`} className="mb-8" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {service.benefits.map((b, i) => (
                <Reveal key={b.title} delay={(i % 2) * 0.07}>
                  <div className="group flex gap-4 rounded-[1.5rem] border border-steel/20 bg-gradient-to-b from-white to-mist p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-orange/20">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy shadow-md shadow-navy/20 transition-all duration-300 group-hover:bg-orange group-hover:shadow-orange/30">
                      <Icon className="size-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-navy-deep">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-deep/65">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Best suited for */}
          <section aria-labelledby="best-for-heading">
            <SectionTitle id="best-for-heading" eyebrow="Ideal for" title="Best suited for" className="mb-6" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.bestFor.map((item, i) => (
                <Reveal as="li" key={item} delay={(i % 2) * 0.06}>
                  <div className="flex items-start gap-3 rounded-brand border border-steel/15 bg-white p-4 shadow-sm transition-all duration-200 hover:border-orange/30 hover:shadow-md">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                    <span className="text-sm text-navy-deep/85">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* Technical specs */}
          <section aria-labelledby="specs-heading">
            <SectionTitle id="specs-heading" eyebrow="Specifications" title="Materials & specification" className="mb-6" />
            <div className="overflow-x-auto rounded-brand border border-steel/20 bg-white shadow-sm">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-deep text-white">
                    <th className="px-5 py-3.5 font-sans font-semibold">Specification</th>
                    <th className="px-5 py-3.5 font-sans font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {service.materials.map((m, i) => (
                    <tr key={m.label} className={i % 2 === 0 ? 'bg-white' : 'bg-mist/60'}>
                      <td className="px-5 py-3.5 font-sans font-semibold text-navy-deep">{m.label}</td>
                      <td className="px-5 py-3.5 text-navy-deep/75">{m.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Installation process */}
          <section aria-labelledby="process-heading">
            <SectionTitle id="process-heading" eyebrow="Our process" title="How installation works" subtitle="Simple, fast, done in one visit for most homes." className="mb-8" />
            <ProcessTimeline steps={service.process} />
          </section>

          {/* Gallery */}
          {service.gallery.length > 0 && (
            <section aria-labelledby="gallery-heading">
              <SectionTitle id="gallery-heading" eyebrow="Our work" title="Installation gallery" subtitle="Real installations by our team." className="mb-6" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {service.gallery.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="group overflow-hidden rounded-brand border border-steel/20 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    aria-label={`View larger: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <SectionTitle id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" className="mb-6" />
            <FaqAccordion faqs={service.faqs} idPrefix={`${service.slug}-faq`} />
          </section>

          {/* Related services */}
          {relatedServices.length > 0 && (
            <section aria-labelledby="related-heading">
              <SectionTitle id="related-heading" eyebrow="Also consider" title="Related services" className="mb-6" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-2xl border border-steel/20 bg-white shadow-md">
            <div className="bg-navy-deep px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange">
                  <Icon className="size-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-base font-bold text-white">Get a quote</h2>
                  <p className="text-xs text-white/55">{service.shortName}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Free survey', 'Same-day quote', '24×7 support'].map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/75">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <EnquiryForm defaultService={service.slug} compact />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href={phoneHref} className="btn-navy flex items-center justify-center gap-2 py-3 text-sm">
              <Phone className="size-4" aria-hidden="true" />
              Call now
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary flex items-center justify-center gap-2 py-3 text-sm">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
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
        title={`Ready to get ${service.shortName.toLowerCase()} installed?`}
        subtitle="Free site survey, same-day quote, and a team that can start this week."
      />
    </>
  )
}
