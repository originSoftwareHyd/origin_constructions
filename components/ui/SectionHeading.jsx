export default function SectionHeading({ badge, heading, subtitle, dark = false }) {
  return (
    <div className="max-w-3xl">
      <span className={`eyebrow ${dark ? 'text-white' : ''}`}>{badge}</span>
      <h2 className={`section-heading mt-5 text-balance ${dark ? 'text-white' : 'text-ink'}`}>{heading}</h2>
      {subtitle ? (
        <p className={`mt-6 max-w-2xl text-base leading-8 ${dark ? 'text-white/65' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
