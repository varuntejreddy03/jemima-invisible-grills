import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { CtaBand } from '@/components/CtaBand'
import { chennaiLocalities, indianCities } from '@/data/serviceAreas'

export function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas — Chennai & All of India | Jemima"
        description="Jemima installs invisible grills and safety nets across every locality in Chennai, plus major cities all over India. Free survey — call +91 78100 40329."
        path="/service-areas"
      />

      <PageHeader
        eyebrow="Service areas"
        title="Chennai is home ground. India is the coverage."
        lede="We install in every locality across Chennai as routine work, and send trained teams to other Indian cities for larger jobs, societies and commercial sites."
      />

      <section aria-labelledby="chennai-heading" className="container-page py-14 sm:py-16">
        <h2
          id="chennai-heading"
          className="mb-6 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase"
        >
          Chennai localities
        </h2>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {chennaiLocalities.map((locality) => (
            <li key={locality} className="border-l-2 border-navy/30 pl-3 text-navy-deep/85">
              {locality}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="india-heading"
        className="border-y border-steel/20 bg-mist py-14 sm:py-16"
      >
        <div className="container-page">
          <h2
            id="india-heading"
            className="mb-3 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase"
          >
            Also serving, across India
          </h2>
          <p className="mb-6 max-w-2xl text-navy-deep/75">
            For societies, schools, sports facilities and larger residential projects outside
            Chennai, we schedule installation visits to the cities below and beyond — get in touch
            to check a date for your city.
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
            {indianCities.map((city) => (
              <li key={city} className="border-l-2 border-orange/50 pl-3 text-navy-deep/85">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Don't see your city listed?"
        subtitle="Call or WhatsApp us — for the right project size, we travel."
      />
    </>
  )
}
