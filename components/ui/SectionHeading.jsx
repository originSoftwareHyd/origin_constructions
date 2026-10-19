// Key place names rendered in bold inside subtitles.
const emphasisTerms = ['Hyderabad', 'Telangana']
const emphasisPattern = new RegExp(`(${emphasisTerms.join('|')})`, 'g')

function Emphasised({ text, dark }) {
  return text.split(emphasisPattern).map((part, index) =>
    emphasisTerms.includes(part) ? (
      <strong key={index} className={`font-semibold ${dark ? 'text-white' : 'text-ink'}`}>
        {part}
      </strong>
    ) : (
      part
    )
  )
}

// `split` spreads heading and subtitle across the full width on large screens;
// use `stacked` where the heading already sits in its own column.
export default function SectionHeading({ badge, heading, subtitle, dark = false, layout = 'split', children }) {
  if (layout === 'stacked') {
    return (
      <div className="max-w-3xl">
        <span className={`eyebrow ${dark ? 'text-white' : ''}`}>{badge}</span>
        <h2 className={`section-heading mt-5 text-balance ${dark ? 'text-white' : 'text-ink'}`}>{heading}</h2>
        {subtitle ? (
          <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-[1.0625rem] ${dark ? 'text-white/70' : 'text-slate-600'}`}>
            <Emphasised text={subtitle} dark={dark} />
          </p>
        ) : null}
        {children}
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
      <div className="min-w-0">
        <span className={`eyebrow ${dark ? 'text-white' : ''}`}>{badge}</span>
        <h2 className={`section-heading mt-5 text-balance ${dark ? 'text-white' : 'text-ink'}`}>{heading}</h2>
      </div>
      {subtitle || children ? (
        <div
          className={`relative min-w-0 overflow-hidden border py-6 pl-7 pr-6 sm:py-7 sm:pl-9 sm:pr-8 ${
            dark ? 'border-white/10 bg-white/[0.04]' : 'border-ink/10 bg-white/70 shadow-[0_18px_50px_rgba(12,20,32,0.06)]'
          }`}
        >
          <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-gold" aria-hidden="true" />
          {subtitle ? (
            <p className={`relative text-base leading-8 sm:text-[1.0625rem] ${dark ? 'text-white/70' : 'text-slate-600'}`}>
              <Emphasised text={subtitle} dark={dark} />
            </p>
          ) : null}
          {children}
        </div>
      ) : null}
    </div>
  )
}
