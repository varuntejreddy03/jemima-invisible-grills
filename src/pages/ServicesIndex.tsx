import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { Reveal } from '@/components/Reveal'
import { CtaBand } from '@/components/CtaBand'
import { grillServices, netServices } from '@/data/services'

export function ServicesIndex() {
  return (
    <>
      <Seo
        title="All Services — Invisible Grills & Safety Nets | Chennai"
        description="Invisible grills, children's safety grills, pigeon nets, duct area nets, glass safety nets and more. Free survey across Chennai and pan-India."
        path="/services"
      />

      <PageHeader
        eyebrow="Services"
        title="Every opening, closed the right way"
        lede="Eleven services split into two families — tensioned cable grills for openings where the view matters, and mesh nets for birds, falls and general safety. Pick the one that matches your situation, or call us and we'll tell you honestly which one fits."
      />

      <section aria-labelledby="grill-services-heading" className="container-page py-14 sm:py-16">
        <h2
          id="grill-services-heading"
          className="mb-8 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase"
        >
          Invisible Grills
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grillServices.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="net-services-heading"
        className="border-t border-steel/20 bg-mist py-14 sm:py-16"
      >
        <div className="container-page">
          <h2
            id="net-services-heading"
            className="mb-8 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase"
          >
            Safety &amp; Pigeon Nets
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {netServices.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
