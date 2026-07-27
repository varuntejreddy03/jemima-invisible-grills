import { MapPin } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
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

      {/* ── Chennai localities ── */}
      <section aria-labelledby="chennai-heading" className="container-page py-20 sm:py-24">
        <SectionTitle
          eyebrow="Home ground"
          title="Chennai localities"
          subtitle="We cover every corner of the city — same-day survey slots available across all areas below."
          id="chennai-heading"
          className="mb-12"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {chennaiLocalities.map((loc, i) => (
            <Reveal key={loc} delay={(i % 4) * 0.04}>
              <div className="flex items-center gap-3 rounded-2xl border border-steel/20 bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:border-orange/30 hover:shadow-md">
                <MapPin className="size-4 shrink-0 text-orange" aria-hidden="true" />
                <span className="text-sm font-medium text-navy-deep">{loc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── India cities ── */}
      <section aria-labelledby="india-heading" className="border-y border-steel/15 bg-navy-deep py-20 text-white sm:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Pan-India"
            title="Also serving across India"
            subtitle="For societies, schools, sports facilities and larger residential projects outside Chennai — we schedule installation visits to the cities below and beyond."
            id="india-heading"
            light
            className="mb-12"
          />
          <div className="flex flex-wrap gap-3">
            {indianCities.map((city) => (
              <span
                key={city}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-orange/40 hover:text-white"
              >
                {city}
              </span>
            ))}
            <span className="rounded-full border border-orange/40 bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
              + more on request
            </span>
          </div>
        </div>
      </section>

      {/* ── How we travel ── */}
      <section aria-labelledby="travel-heading" className="container-page py-20 sm:py-24">
        <SectionTitle
          eyebrow="Outside Chennai"
          title="How pan-India jobs work"
          id="travel-heading"
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Contact us first',
              body: 'Call or WhatsApp with your city and a rough description of the job — we confirm whether we can schedule a visit.',
            },
            {
              step: '02',
              title: 'Remote quote estimate',
              body: 'We give you a ballpark range based on photos and measurements you share, before committing to a travel visit.',
            },
            {
              step: '03',
              title: 'Scheduled installation',
              body: 'Our team travels to your city, does the survey and installation in one trip — same spec and warranty as Chennai jobs.',
            },
          ].map((item) => (
            <Reveal key={item.step}>
              <div className="rounded-2xl border border-steel/20 bg-white p-6 shadow-sm">
                <span className="font-display text-3xl font-extrabold text-orange/30">{item.step}</span>
                <h3 className="mt-3 font-display text-base font-bold text-navy-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Don't see your city listed?"
        subtitle="Call or WhatsApp us — for the right project size, we travel."
      />
    </>
  )
}
