import Icon from './Icon'

export default function Button({ href, children, variant = 'brand', className = '' }) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-[0.69rem] font-extrabold uppercase tracking-[0.16em] transition-all duration-200 focus:outline-none'

  const variants = {
    brand:
      'border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark',
    outline:
      'border-white/30 bg-transparent text-white hover:border-white/70 hover:bg-white/5',
    light:
      'border-ink/20 bg-transparent text-ink hover:border-brand hover:text-brand'
  }

  return (
    <a href={href} className={`${base} ${variants[variant] || variants.brand} ${className}`.trim()}>
      <span>{children}</span>
      <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}
