import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Mail } from 'lucide-react'
import { services } from '@/data/services'
import { BUSINESS, buildWhatsappUrl } from '@/lib/constants'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Enter your name'),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  locality: z.string().trim().min(2, 'Enter your locality and city'),
  service: z.string().min(1, 'Select a service'),
  openingCount: z.string().trim().min(1, 'Enter number of balconies / windows'),
  message: z.string().trim().optional(),
})

type EnquiryFormValues = z.infer<typeof enquirySchema>

type EnquiryFormProps = {
  defaultService?: string
  compact?: boolean
}

function buildMessage(values: EnquiryFormValues): string {
  const serviceName = services.find((s) => s.slug === values.service)?.name ?? values.service
  const lines = [
    `Hi Jemima, I would like a free site survey and quote.`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Locality/City: ${values.locality}`,
    `Service needed: ${serviceName}`,
    `Balconies/windows: ${values.openingCount}`,
  ]
  if (values.message) lines.push(`Message: ${values.message}`)
  return lines.join('\n')
}

export function EnquiryForm({ defaultService, compact = false }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [mailtoHref, setMailtoHref] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      service: defaultService ?? '',
    },
  })

  const onSubmit = (values: EnquiryFormValues) => {
    const message = buildMessage(values)
    const whatsappUrl = buildWhatsappUrl(message)
    setMailtoHref(
      `mailto:${BUSINESS.email}?subject=${encodeURIComponent('Site survey request')}&body=${encodeURIComponent(message)}`,
    )
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    reset({
      service: defaultService ?? '',
      name: '',
      phone: '',
      locality: '',
      openingCount: '',
      message: '',
    })
  }

  const inputClass =
    'w-full rounded-brand border border-steel/40 bg-white px-3.5 py-2.5 text-sm text-navy-deep placeholder:text-steel focus:border-navy'
  const labelClass =
    'mb-1.5 block font-sans text-xs font-semibold tracking-wide text-navy-deep uppercase'
  const errorClass = 'mt-1 text-xs font-medium text-red-600'

  if (submitted) {
    return (
      <div className="rounded-brand border border-navy/20 bg-mist p-6" role="status">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-orange" aria-hidden="true" />
          <div>
            <p className="font-display font-bold text-navy-deep">
              Enquiry ready — check the WhatsApp tab we opened
            </p>
            <p className="mt-1 text-sm text-navy-deep/75">
              If WhatsApp did not open automatically, use the link below to email us the same
              details instead.
            </p>
            <a
              href={mailtoHref}
              className="mt-3 inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy underline underline-offset-2"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email us instead
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 font-sans text-sm font-semibold text-orange"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={compact ? 'space-y-4' : 'space-y-5'}
    >
      <div>
        <label htmlFor="ef-name" className={labelClass}>
          Name
        </label>
        <input
          id="ef-name"
          type="text"
          autoComplete="name"
          className={inputClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'ef-name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p id="ef-name-error" className={errorClass}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ef-phone" className={labelClass}>
          Phone (WhatsApp number)
        </label>
        <input
          id="ef-phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="98765 43210"
          className={inputClass}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'ef-phone-error' : undefined}
          {...register('phone')}
        />
        {errors.phone && (
          <p id="ef-phone-error" className={errorClass}>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ef-locality" className={labelClass}>
          Locality / City
        </label>
        <input
          id="ef-locality"
          type="text"
          placeholder="e.g. Adyar, Chennai"
          className={inputClass}
          aria-invalid={!!errors.locality}
          aria-describedby={errors.locality ? 'ef-locality-error' : undefined}
          {...register('locality')}
        />
        {errors.locality && (
          <p id="ef-locality-error" className={errorClass}>
            {errors.locality.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ef-service" className={labelClass}>
          Service
        </label>
        <select
          id="ef-service"
          className={inputClass}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'ef-service-error' : undefined}
          {...register('service')}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="ef-service-error" className={errorClass}>
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ef-count" className={labelClass}>
          Number of balconies / windows
        </label>
        <input
          id="ef-count"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 2"
          className={inputClass}
          aria-invalid={!!errors.openingCount}
          aria-describedby={errors.openingCount ? 'ef-count-error' : undefined}
          {...register('openingCount')}
        />
        {errors.openingCount && (
          <p id="ef-count-error" className={errorClass}>
            {errors.openingCount.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ef-message" className={labelClass}>
          Message (optional)
        </label>
        <textarea
          id="ef-message"
          rows={compact ? 2 : 3}
          className={inputClass}
          placeholder="Anything else we should know?"
          {...register('message')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-brand bg-orange px-6 py-3.5 font-sans font-semibold text-white transition-colors hover:bg-orange/90 disabled:opacity-60"
      >
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-steel">Or email {BUSINESS.email} directly.</p>
    </form>
  )
}
