import { Link } from 'react-router-dom'
import { Clock, Layers, Baby, Truck, Award, Quote, Check, X } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { BUSINESS } from '@/lib/constants'

const howItWorks = [
  {
    step: 'Site survey',
    body: 'A free visit to measure every opening, usually arranged same day or next day, anywhere in Chennai.',
  },
  {
    step: 'Quote same day',
    body: 'A clear, itemised quote on WhatsApp within hours — no site-visit fee, no obligation to proceed.',
  },
  {
    step: 'Installation',
    body: 'Most homes are done in a single visit. Larger buildings and societies are scheduled in phases.',
  },
  {
    step: 'Warranty & aftercare',
    body: 'Every job is logged against a warranty period. Re-tensioning, repairs and re-fixing are free within that window.',
  },
]

const whyUs = [
  {
    icon: Clock,
    title: '24×7 availability',
    body: 'Call, WhatsApp or email any day, any hour — someone from the team responds, not a voicemail.',
  },
  {
    icon: Layers,
    title: '304-grade stainless steel',
    body: "We use marine-grade cable and steel as standard, built for Chennai's coastal humidity, not the cheaper 202 grade most competitors quote first.",
  },
  {
    icon: Baby,
    title: 'Child-safe tension spacing',
    body: 'Every cable and mesh spec is checked against limb-entrapment risk, not just "looks safe from the road".',
  },
  {
    icon: Truck,
    title: 'Pan-India installation teams',
    body: 'Based in Chennai, but we send trained teams to install anywhere in India — same specification, same warranty.',
  },
  {
    icon: Award,
    title: 'Warranty in writing',
    body: 'Cable, net and workmanship warranties are stated up front on every quote, not negotiated after the sale.',
  },
]

const comparisonRows: { label: string; grill: string; ms: boolean | string; grillGood: boolean }[] =
  [
    {
      label: 'View from inside the room',
      grill: 'Stays open — cables read as a faint shimmer',
      ms: 'Visibly barred, like a cage',
      grillGood: true,
    },
    {
      label: 'Look from outside the building',
      grill: 'Building facade stays clean',
      ms: 'Bars visible on every floor',
      grillGood: true,
    },
    {
      label: 'Rust risk in coastal Chennai air',
      grill: '304-grade cable resists corrosion',
      ms: 'Painted MS chips and rusts within a monsoon or two',
      grillGood: true,
    },
    {
      label: 'Weight added to the structure',
      grill: 'Light tensioned cable',
      ms: 'Heavier welded bar',
      grillGood: true,
    },
    {
      label: 'Best suited for',
      grill: 'Balconies where the view matters',
      ms: 'Duct covers, gates, staircases needing a rigid barrier',
      grillGood: false,
    },
    {
      label: 'Re-tensioning after years of heat expansion',
      grill: 'Simple turnbuckle adjustment on a service visit',
      ms: 'Not adjustable — replacement needed if it warps',
      grillGood: true,
    },
  ]

const homeFaqs = [
  {
    q: 'Which areas do you actually cover?',
    a: 'We are based in Chennai and cover every locality in the city as our home ground, plus we send installation teams to major cities across India for larger or one-off jobs.',
  },
  {
    q: 'How is an invisible grill different from a normal grill?',
    a: 'A normal grill is welded bar or pipe, visible from both sides. An invisible grill is tensioned steel cable spaced tightly enough to be safe but thin enough to nearly disappear from a normal viewing distance.',
  },
  {
    q: 'Do you charge for the site survey?',
    a: 'No, the site visit and measurement is free, whether or not you go ahead with the installation.',
  },
  {
    q: 'How is pricing worked out?',
    a: "Grills are priced per running foot of cable, nets per square foot of mesh — we'll show you the exact breakdown on your quote, not just a lump sum.",
  },
  {
    q: 'How long does a typical installation take?',
    a: 'A single balcony or window: a few hours in one visit. Full apartments, societies and commercial sites are scheduled over multiple days depending on scope.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'Cable and net material carries a multi-year warranty against rust/UV degradation, and installation workmanship is separately warrantied for the first year. Exact terms are on your quote — see each service page for typical figures.',
  },
]

export function Home() {
  return (
    <>
      <Seo
        title="Invisible Grills & Safety Nets in Chennai | Jemima"
        description="Invisible grills and safety/pigeon nets for balconies, windows and duct areas. Chennai based, installed all over India. Free site survey, 24x7 service."
        path="/"
      />

      <Hero />

      <section aria-labelledby="what-we-install-heading" className="container-page py-16 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
              What we install
            </p>
            <h2
              id="what-we-install-heading"
              className="font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
            >
              Eleven ways to close a gap
            </h2>
          </div>
          <Link
            to="/services"
            className="font-sans text-sm font-semibold text-navy underline underline-offset-2 hover:text-orange"
          >
            View all services →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="how-it-works-heading"
        className="border-y border-steel/20 bg-mist py-16 sm:py-20"
      >
        <div className="container-page">
          <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Process
          </p>
          <h2
            id="how-it-works-heading"
            className="mb-10 font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
          >
            How it works
          </h2>
          <ProcessTimeline steps={howItWorks} />
        </div>
      </section>

      <section aria-labelledby="why-us-heading" className="container-page py-16 sm:py-20">
        <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
          Why Jemima
        </p>
        <h2
          id="why-us-heading"
          className="mb-10 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
        >
          What actually makes a difference on your balcony
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.06} className="flex gap-4">
              <Icon className="mt-1 size-6 shrink-0 text-orange" aria-hidden="true" />
              <div>
                <h3 className="font-display text-base font-bold text-navy-deep">{title}</h3>
                <p className="mt-1.5 text-sm text-navy-deep/70">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="comparison-heading"
        className="border-y border-steel/20 bg-mist py-16 sm:py-20"
      >
        <div className="container-page">
          <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Comparison
          </p>
          <h2
            id="comparison-heading"
            className="mb-10 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
          >
            Invisible grill vs. conventional MS grill
          </h2>
          <div className="overflow-x-auto rounded-brand border border-steel/25 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of invisible cable grills against conventional mild steel grills
              </caption>
              <thead>
                <tr className="border-b border-steel/25">
                  <th scope="col" className="px-5 py-4 font-sans font-semibold text-navy-deep">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-5 py-4 font-sans font-semibold text-navy-deep">
                    Invisible grill (cable)
                  </th>
                  <th scope="col" className="px-5 py-4 font-sans font-semibold text-navy-deep">
                    Conventional MS grill
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-steel/15 last:border-0">
                    <th
                      scope="row"
                      className="border-l-2 border-navy/40 px-5 py-4 align-top font-sans text-xs font-semibold tracking-wide text-steel uppercase"
                    >
                      {row.label}
                    </th>
                    <td className="px-5 py-4 align-top text-navy-deep">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                        {row.grill}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top text-navy-deep/80">
                      <span className="flex items-start gap-2">
                        {row.grillGood ? (
                          <X className="mt-0.5 size-4 shrink-0 text-steel" aria-hidden="true" />
                        ) : (
                          <Check className="mt-0.5 size-4 shrink-0 text-steel" aria-hidden="true" />
                        )}
                        {row.ms}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="testimonials-heading" className="container-page py-16 sm:py-20">
        <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
          What Chennai says
        </p>
        <h2
          id="testimonials-heading"
          className="mb-10 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
        >
          From balconies across the city
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name + t.locality}
              delay={(i % 2) * 0.08}
              className="rounded-brand border border-steel/25 bg-white p-6"
            >
              <Quote className="size-6 text-orange" aria-hidden="true" />
              <p className="mt-3 text-navy-deep/85">{t.quote}</p>
              <p className="mt-4 font-sans text-sm font-semibold text-navy-deep">
                {t.name} <span className="font-normal text-steel">— {t.locality}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="gallery-strip-heading"
        className="border-y border-steel/20 bg-mist py-16 sm:py-20"
      >
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
                Our work
              </p>
              <h2
                id="gallery-strip-heading"
                className="font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
              >
                From site survey to finished install
              </h2>
            </div>
            <Link
              to="/gallery"
              className="font-sans text-sm font-semibold text-navy underline underline-offset-2 hover:text-orange"
            >
              View full gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block overflow-hidden rounded-brand border border-steel/25 bg-white"
              >
                <img
                  src={s.gallery[0].src}
                  alt={s.gallery[0].alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="container-page py-16 sm:py-20">
        <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mb-8 font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase"
        >
          Common questions
        </h2>
        <div className="max-w-3xl">
          <FaqAccordion faqs={homeFaqs} idPrefix="home-faq" />
        </div>
      </section>

      <CtaBand
        title={`Ready when you are, ${BUSINESS.city}`}
        subtitle="Free site survey, same-day quote, and a team that can start this week."
      />
    </>
  )
}
