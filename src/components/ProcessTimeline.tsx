import { Reveal } from '@/components/Reveal'

type ProcessTimelineProps = {
  steps: { step: string; body: string }[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.step} delay={i * 0.06} className="border-l-2 border-navy/30 pl-5">
          <span className="font-display text-3xl font-extrabold text-orange/80">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-2 font-display text-base font-bold tracking-tight text-navy-deep uppercase">
            {s.step}
          </h3>
          <p className="mt-2 text-sm text-navy-deep/70">{s.body}</p>
        </Reveal>
      ))}
    </ol>
  )
}
