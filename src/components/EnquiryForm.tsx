import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  CheckCircle2, Mail, User, Phone as PhoneIcon,
  MapPin, Layers, Hash, MessageSquare, MessageCircle,
} from 'lucide-react'
import { services } from '@/data/services'
import { BUSINESS } from '@/lib/constants'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Enter your name'),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  locality: z.string().trim().min(2, 'Enter your locality / city'),
  service: z.string().min(1, 'Select a service'),
  openingCount: z.string().trim().min(1, 'Enter number of openings'),
  message: z.string().trim().optional(),
})

type EnquiryFormValues = z.infer<typeof enquirySchema>

type EnquiryFormProps = {
  defaultService?: string
  compact?: boolean
}

type FieldProps = {
  id: string
  label: string
  icon: React.ReactNode
  error?: string
  children: React.ReactNode
}

function Field({ id, label, icon, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-semibold text-navy-deep/70">
        <span className="text-orange">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs font-medium text-red-500">
          <span className="size-1.5 rounded-full bg-red-500 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-steel/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange/25 focus:border-orange'
const inputNormal = `${inputBase} border-steel/25 hover:border-steel/50`
const inputError = `${inputBase} border-red-400 focus:ring-red-200 focus:border-red-400`

export function EnquiryForm({ defaultService, compact = false }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { service: defaultService ?? '' },
  })

  const onSubmit = (values: EnquiryFormValues) => {
    const serviceName = services.find((s) => s.slug === values.service)?.name ?? values.service
    const lines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Location: ${values.locality}`,
      `Service: ${serviceName}`,
      `Openings: ${values.openingCount}`,
    ]
    if (values.message) lines.push(`Note: ${values.message}`)
    const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    reset({ service: defaultService ?? '', name: '', phone: '', locality: '', openingCount: '', message: '' })
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-6 text-center" role="status">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="size-7 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="font-display text-base font-bold text-navy-deep">WhatsApp opened!</h3>
        <p className="mt-1.5 text-sm text-navy-deep/65">
          We'll reply within the hour.
        </p>
        <div className="mt-5 flex flex-col gap-2.5">
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-steel/25 bg-white px-4 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:border-orange/30 hover:text-orange"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email instead
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-steel hover:text-orange transition-colors"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    )
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={compact ? 'space-y-3.5' : 'space-y-4'}>

      {/* Name + Phone side by side */}
      <div className="grid grid-cols-2 gap-3">
        <Field id="ef-name" label="Name" icon={<User className="size-3.5" />} error={errors.name?.message}>
          <input
            id="ef-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={errors.name ? inputError : inputNormal}
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>
        <Field id="ef-phone" label="Phone" icon={<PhoneIcon className="size-3.5" />} error={errors.phone?.message}>
          <input
            id="ef-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="98765 43210"
            className={errors.phone ? inputError : inputNormal}
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
        </Field>
      </div>

      <Field id="ef-locality" label="Locality / City" icon={<MapPin className="size-3.5" />} error={errors.locality?.message}>
        <input
          id="ef-locality"
          type="text"
          placeholder="e.g. Adyar, Chennai"
          className={errors.locality ? inputError : inputNormal}
          aria-invalid={!!errors.locality}
          {...register('locality')}
        />
      </Field>

      <Field id="ef-service" label="Service needed" icon={<Layers className="size-3.5" />} error={errors.service?.message}>
        <select
          id="ef-service"
          className={`${errors.service ? inputError : inputNormal} cursor-pointer`}
          aria-invalid={!!errors.service}
          {...register('service')}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
      </Field>

      <Field id="ef-count" label="No. of balconies / windows" icon={<Hash className="size-3.5" />} error={errors.openingCount?.message}>
        <input
          id="ef-count"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 2"
          className={errors.openingCount ? inputError : inputNormal}
          aria-invalid={!!errors.openingCount}
          {...register('openingCount')}
        />
      </Field>

      {!compact && (
        <Field id="ef-message" label="Message (optional)" icon={<MessageSquare className="size-3.5" />}>
          <textarea
            id="ef-message"
            rows={3}
            placeholder="Anything else we should know?"
            className={inputNormal}
            {...register('message')}
          />
        </Field>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-orange py-3.5 text-sm font-semibold text-white shadow-md shadow-orange/30 transition-all duration-200 hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/35 active:scale-[0.98] disabled:opacity-60"
      >
        <MessageCircle className="size-4 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
        Send via WhatsApp
      </button>

      <p className="text-center text-[11px] text-steel/70">
        Or email us at{' '}
        <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-navy-deep/60 hover:text-orange transition-colors">
          {BUSINESS.email}
        </a>
      </p>
    </form>
  )
}
