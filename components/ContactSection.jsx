'use client'

import { useState } from 'react'
import Container from './ui/Container'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.phone.trim() && !/^[0-9+()\-\s]{7,}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!values.message.trim()) errors.message = 'Message is required.'

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

    const subject = `${brand.name} enquiry from ${values.name}`
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      '',
      'Message:',
      values.message
    ].join('\n')

    const mailto = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setStatus('success')
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink/10 bg-[#f2f1ed] py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading badge="Contact Us" heading={brand.name} subtitle={brand.tagline} />
        </Reveal>

        <div className="mt-14 grid min-w-0 gap-10 lg:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16 lg:mt-16">
          <Reveal className="min-w-0">
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ContactCard icon="pin" label="Address">
                <p className="contact-value text-sm leading-7 text-slate-700">{data.address}</p>
              </ContactCard>

              <ContactCard icon="phone" label="Phone">
                <a className="contact-value text-sm leading-7 text-slate-700 transition-colors hover:text-brand" href={`tel:${data.phone.replace(/\s+/g, '')}`}>
                  {data.phone}
                </a>
              </ContactCard>

              <ContactCard icon="mail" label="Email">
                <a className="contact-value text-sm leading-7 text-slate-700 transition-colors hover:text-brand" href={`mailto:${data.email}`}>
                  {data.email}
                </a>
              </ContactCard>

              <ContactCard icon="clock" label="Working Hours">
                <p className="contact-value text-sm leading-7 text-slate-700">{data.hours}</p>
              </ContactCard>
            </div>
          </Reveal>

          <Reveal className="min-w-0" delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="min-w-0 border border-ink/10 bg-white p-6 shadow-architectural sm:p-8 lg:p-10">
              <div className="grid min-w-0 gap-x-8 gap-y-7 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={updateField}
                  error={errors.name}
                  autoComplete="name"
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
                  label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={updateField}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <div className="hidden sm:block" aria-hidden="true" />
                <div className="sm:col-span-2">
                  <Field
                    label="Message"
                    name="message"
                    value={values.message}
                    onChange={updateField}
                    error={errors.message}
                    multiline
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-5 border-t border-ink/10 pt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <p className="max-w-xl text-xs leading-6 text-slate-500">
                  This form does not submit to a website backend. After validation, it opens your email client with the message prepared for {data.email}.
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
    <article className="min-w-0 border border-ink/10 bg-white/65 p-5 transition-colors hover:border-brand/35 hover:bg-white sm:p-6">
      <div className="flex items-start gap-4">
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

function Field({ label, name, value, onChange, error, type = 'text', autoComplete, multiline = false }) {
  const id = `contact-${name}`

  return (
    <div className="min-w-0">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="field-shell mt-2" data-invalid={Boolean(error)}>
        {multiline ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            rows={6}
            className="block min-h-40 w-full resize-y bg-transparent px-0 py-3 text-sm leading-7 text-ink placeholder:text-slate-400 focus:outline-none"
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
