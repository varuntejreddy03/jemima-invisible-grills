import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { chennaiLocalities } from '@/data/serviceAreas'
import { BUSINESS } from '@/lib/constants'

const principles = [
  {
    title: 'Survey before we quote',
    body: 'We measure the actual opening and check every access point before pricing anything — not a phone-quote based on a description.',
  },
  {
    title: 'Real steel grades, stated up front',
    body: '304 grade where it matters for corrosion resistance, and we tell you the difference from cheaper 202 grade instead of letting "stainless steel" do the talking.',
  },
  {
    title: 'Honest grill-vs-net recommendation',
    body: 'Sometimes a net suits your situation better than a grill, or the other way round. We say so even when one costs more than the other.',
  },
  {
    title: 'Warranty stated on the quote, not after',
    body: 'Cable, net and workmanship warranty periods are written on the quote itself before you decide, not negotiated after installation.',
  },
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
        lede="We install invisible grills and safety nets for apartments, villas, schools and commercial buildings — balcony by balcony, duct by duct, across Chennai and beyond."
      />

      <section aria-labelledby="story-heading" className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2
              id="story-heading"
              className="mb-4 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase"
            >
              Why this business exists
            </h2>
            <div className="space-y-4 text-navy-deep/85">
              <p>
                Most balcony grills sold in Chennai are priced on how they look in a photo, not on
                what steel grade they actually are or whether the spacing is safe for a child. Most
                pigeon problems get "fixed" with spikes that birds simply walk around.{' '}
                {BUSINESS.name} was set up to do both of these properly — survey the actual opening,
                use the steel or mesh grade the job calls for, and say so clearly on the quote.
              </p>
              <p>
                {/* EDIT: confirm real founding year, founder name and background before publishing */}
                We work across apartments, independent houses, housing societies, schools and
                commercial sites, fitting invisible grills where the view matters and safety nets
                where birds, falls or ball impact are the problem — installed by our own trained
                teams, not subcontracted out.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase">
              Our service philosophy
            </h2>
            <ul className="space-y-5">
              {principles.map((p) => (
                <li key={p.title} className="border-l-2 border-navy/30 pl-4">
                  <h3 className="font-display text-base font-bold text-navy-deep">{p.title}</h3>
                  <p className="mt-1 text-sm text-navy-deep/70">{p.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="numbers-heading"
        className="border-y border-steel/20 bg-navy-deep py-14 text-white sm:py-16"
      >
        <div className="container-page">
          <h2
            id="numbers-heading"
            className="mb-10 font-display text-2xl font-extrabold tracking-tight uppercase"
          >
            In numbers
          </h2>
          {/* EDIT: confirm real figures before publishing — these are placeholders only */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-4xl font-extrabold text-orange">500+</p>
              <p className="mt-2 text-sm text-white/70">Installations completed</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-orange">10+</p>
              <p className="mt-2 text-sm text-white/70">Indian cities served</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-orange">5+</p>
              <p className="mt-2 text-sm text-white/70">Years installing grills &amp; nets</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="coverage-heading" className="container-page py-14 sm:py-16">
        <h2
          id="coverage-heading"
          className="mb-4 font-display text-2xl font-extrabold tracking-tight text-navy-deep uppercase"
        >
          Where we work
        </h2>
        <p className="max-w-2xl text-navy-deep/80">
          Home ground is Chennai — every locality, from Adyar to Sholinganallur. For larger jobs,
          societies and commercial sites, we send installation teams across India.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {chennaiLocalities.slice(0, 12).map((locality) => (
            <span
              key={locality}
              className="rounded-brand border border-steel/30 bg-mist px-3 py-1.5 text-sm text-navy-deep"
            >
              {locality}
            </span>
          ))}
        </div>
        <Link
          to="/service-areas"
          className="mt-6 inline-block font-sans text-sm font-semibold text-navy underline underline-offset-2 hover:text-orange"
        >
          See the full coverage list →
        </Link>
      </section>

      <CtaBand />
    </>
  )
}
