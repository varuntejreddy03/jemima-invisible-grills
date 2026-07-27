type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  id?: string
  className?: string
}

export function SectionTitle({ eyebrow, title, subtitle, center = false, light = false, id, className = '' }: SectionTitleProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-sans text-sm font-semibold tracking-[0.2em] text-orange uppercase">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`font-display text-3xl font-extrabold tracking-tight uppercase ${light ? 'text-white' : 'text-navy-deep'}`}>
        {title}
      </h2>
      <div className={`mt-3 h-1 w-14 rounded-full bg-orange ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base ${light ? 'text-white/70' : 'text-navy-deep/65'} ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
