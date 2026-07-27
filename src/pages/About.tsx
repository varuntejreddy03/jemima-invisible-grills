import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { StatCounter } from '@/components/StatCounter'
import { chennaiLocalities } from '@/data/serviceAreas'
import { BUSINESS } from '@/lib/constants'

const principles = [
  {
    title: 'Survey before we quote',
    body: 'We measure the actual opening and check every access point before pricing anything — not a phone-quote based on a description.',
  },
  {
    title: 'Real steel grades, stated up front',
    body: 'SS 316 grade where it matters for corrosion resistance — we tell you the difference from cheaper 202 grade instead of letting "stainless steel" do the talking.',
  },
  {
    title: 'Honest recommendation',
    body: 'Sometimes a net suits your situation better than a grill, or the other way round. We say so even when one costs more than the other.',
  },
  {
    title: 'Warranty on the quote, not after',
    body: 'Cable, net and workmanship warranty periods are written on the quote itself before you decide — not negotiated after installation.',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Installations completed' },
  { value: 10, suffix: '+', label: 'Indian cities served' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
]

export function About() {
  return (
    <>
      <Seo
        title="About Jemima Invisible Grills & Safety Nets | Chennai"
        description="Chennai-based installers of invisible grills and safety nets, working across India. Our approach: survey first, real steel grades, honest recommendations."
        path="/about"
      />

      <PageHeader
        eyebrow="About us"
        title="A Chennai team that closes gaps for a living"
        lede="We install invisible grills and safety nets for apartments, villas, schools and commercial buildings — balcony by balcony, across Chennai and beyond."
      />

      {/* ── Story ── */}
      <section aria-labelledby="story-heading" className="container-page py-20 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionTitle eyebrow="Our story" title="Why this business exists" id="story-heading" className="mb-8" />
            <div className="space-y-5 text-base leading-relaxed text-navy-deep/75">
              <p>
                Most balcony grills sold in Chennai are priced on how they look in a photo, not on
                what steel grade they actually are or whether the spacing is safe for a child. Most
                pigeon problems get "fixed" with spikes that birds simply walk around.{' '}
                {BUSINESS.name} was set up to do both of these properly — survey the actual opening,
                use the steel or mesh grade the job calls for, and say so clearly on the quote.
              </p>
              <p>
                We work across apartments, independent houses, housing societies, schools and
                commercial sites — fitting invisible grills where the view matters and safety nets
                where birds, falls or ball impact are the problem — installed by our own trained
                teams, not subcontracted out.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-deep hover:-translate-y-0.5"
            >
              See all services <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionTitle eyebrow="How we work" title="Our service philosophy" className="mb-8" />
            <ul className="space-y-5">
              {principles.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange/10 mt-0.5">
                    <CheckCircle2 className="size-4 text-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-navy-deep">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-deep/65">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Stats ── */}
      <section aria-labelledby="numbers-heading" className="bg-navy-deep py-16 text-white sm:py-20">
        <div className="container-page">
          <h2 id="numbers-heading" className="sr-only">Jemima in numbers</h2>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="font-display text-5xl font-extrabold text-orange">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section aria-labelledby="coverage-heading" className="container-page py-20 sm:py-24">
        <SectionTitle
          eyebrow="Where we work"
          title="Chennai is home ground. India is the coverage."
          subtitle="Every locality in Chennai as routine work — and trained teams sent anywhere in India for larger jobs, societies and commercial sites."
          id="coverage-heading"
          className="mb-10"
        />
        <div className="flex flex-wrap gap-2.5">
          {chennaiLocalities.map((loc) => (
            <span
              key={loc}
              className="rounded-full border border-steel/25 bg-mist px-3.5 py-1.5 text-sm text-navy-deep/80"
            >
              {loc}
            </span>
          ))}
        </div>
        <Link
          to="/service-areas"
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy-deep transition-all hover:border-orange hover:text-orange"
        >
          See full all-India coverage <ArrowRight className="size-4" />
        </Link>
      </section>

      <CtaBand />
    </>
  )
}
