'use client'

import { useState } from 'react'
import Container from './ui/Container'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Select from './ui/Select'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  description: '',
  budget: ''
}

const projectTypes = [
  'Residential',
  'Commercial',
  'Villa',
  'Apartment',
  'Renovation',
  'Interior Design',
  'Other'
]

const budgetRanges = [
  'Under ₹10L',
  '₹10L - ₹25L',
  '₹25L - ₹50L',
  '₹50L - ₹1Cr',
  '₹1Cr+',
  'Not Sure Yet'
]

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Full name is required.'
  if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  const phoneDigits = values.phone.replace(/\D/g, '')
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^\+?[0-9()\-\s]+$/.test(values.phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!projectTypes.includes(values.projectType)) errors.projectType = 'Select a project type.'
  if (!values.location.trim()) errors.location = 'Project location is required.'
  if (!values.description.trim()) errors.description = 'Project description is required.'

  return errors
}

export default function ContactSection({ data, brand }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const updateField = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      setStatus('error')
      return
    }

    setStatus('preparing')

    const subject = `${brand.name} project enquiry from ${values.name}`
    const body = [
      `Full Name: ${values.name.trim()}`,
      `Email: ${values.email.trim() || 'Not provided'}`,
      `Phone: ${values.phone.trim()}`,
      `Project Type: ${values.projectType}`,
      `Project Location: ${values.location.trim()}`,
      `Budget Range: ${values.budget || 'Not provided'}`,
      '',
      'Project Description:',
      values.description.trim()
    ].join('\n')

    // Replace this mailto handoff with the project API call when a backend is available.
    const mailto = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setStatus('success')
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink/10 bg-[#f2f1ed] py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} />
        </Reveal>

        <div className="mt-10 grid min-w-0 gap-6 sm:mt-12 sm:gap-8 lg:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch lg:gap-8">
          <Reveal className="min-w-0">
            <div className="grid h-full min-w-0 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:grid-rows-4">
              <ContactCard icon="pin" label="Address">
                <p className="contact-value text-sm leading-6 text-slate-700">{data.address}</p>
              </ContactCard>

              <ContactCard icon="phone" label="Phone">
                <a className="contact-value text-sm leading-6 text-slate-700 transition-colors hover:text-brand" href={`tel:${data.phone.replace(/\s+/g, '')}`}>
                  {data.phone}
                </a>
              </ContactCard>

              <ContactCard icon="mail" label="Email">
                <a className="contact-value text-sm leading-6 text-slate-700 transition-colors hover:text-brand" href={`mailto:${data.email}`}>
                  {data.email}
                </a>
              </ContactCard>

              <ContactCard icon="clock" label="Working Hours">
                <p className="contact-value text-sm leading-6 text-slate-700">{data.hours}</p>
              </ContactCard>
            </div>
          </Reveal>

          <Reveal className="h-full w-full min-w-0" delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="h-full min-w-0 border border-ink/10 bg-white p-4 shadow-architectural sm:p-7 lg:p-8">
              <div className="grid min-w-0 gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
                <Field
                  label="Full Name *"
                  name="name"
                  value={values.name}
                  onChange={updateField}
                  error={errors.name}
                  autoComplete="name"
                  required
                />
                <Field
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={updateField}
                  error={errors.phone}
                  autoComplete="tel"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={updateField}
                  error={errors.email}
                  autoComplete="email"
                />
                <Field
                  label="Project Type *"
                  name="projectType"
                  value={values.projectType}
                  onChange={updateField}
                  error={errors.projectType}
                  options={projectTypes}
                  placeholder="Select project type"
                  required
                />
                <Field
                  label="Budget Range"
                  name="budget"
                  value={values.budget}
                  onChange={updateField}
                  options={budgetRanges}
                  placeholder="Select budget range"
                />
                <div>
                  <Field
                    label="Project Location *"
                    name="location"
                    value={values.location}
                    onChange={updateField}
                    error={errors.location}
                    autoComplete="address-level2"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Field
                    label="Project Description *"
                    name="description"
                    value={values.description}
                    onChange={updateField}
                    error={errors.description}
                    multiline
                    required
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-4 border-t border-ink/10 pt-4 sm:mt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:pt-5">
                <p className="max-w-xl text-xs leading-6 text-slate-500">
                  After validation, your email client opens with the project enquiry prepared for {data.email}.
                </p>
                <button
                  type="submit"
                  className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-ink bg-ink px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:border-brand hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === 'preparing'}
                >
                  <span>{status === 'preparing' ? 'Preparing…' : 'Submit'}</span>
                  <Icon name="arrow" className="h-4 w-4 text-brand transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              <div aria-live="polite" className="min-h-8 pt-4 text-xs">
                {status === 'error' ? <p className="text-[#8e2c1d]">Please correct the highlighted fields and try again.</p> : null}
                {status === 'success' ? <p className="text-slate-700">Your email client has been opened with the enquiry details.</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function ContactCard({ icon, label, children }) {
  return (
    <article className="h-full min-w-0 border border-ink/10 bg-white/65 p-4 transition-colors hover:border-brand/35 hover:bg-white sm:p-6">
      <div className="flex h-full items-center gap-4">
        <span className="mt-0.5 shrink-0 text-brand" aria-hidden="true">
          <Icon name={icon} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="field-label">{label}</div>
          <div className="mt-2 min-w-0">{children}</div>
        </div>
      </div>
    </article>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
  multiline = false,
  options,
  placeholder,
  required = false
}) {
  const id = `contact-${name}`

  return (
    <div className="min-w-0">
      <label htmlFor={id} id={`${id}-label`} className="field-label">
        {label}
      </label>
      <div className="field-shell mt-2" data-invalid={Boolean(error)}>
        {options ? (
          <Select
            id={id}
            labelId={`${id}-label`}
            name={name}
            value={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            invalid={Boolean(error)}
            describedBy={error ? `${id}-error` : undefined}
          />
        ) : multiline ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            rows={3}
            required={required}
            className="block min-h-24 w-full resize-y bg-transparent px-0 py-3 text-sm leading-7 text-ink placeholder:text-slate-400 focus:outline-none"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            required={required}
            className="block w-full min-w-0 bg-transparent px-0 py-3 text-sm text-ink placeholder:text-slate-400 focus:outline-none"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        )}
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs leading-5 text-[#8e2c1d]">
          {error}
        </p>
      ) : null}
    </div>
  )
}
