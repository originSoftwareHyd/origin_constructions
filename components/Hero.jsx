import Button from './ui/Button'
import Container from './ui/Container'
import HeroImage from './HeroImage'
import Reveal from './ui/Reveal'

export default function Hero({ data, brand, stats, phone }) {
  // Set to data.visual to switch back to the previous hero image.
  const heroImage = '/images/hero/hero-modern-home.jpg'
  const [beforeHighlight, afterHighlight] = data.headline.split(data.headlineHighlight)

  return (
    <section id="home" className="relative overflow-hidden bg-brand-deep pt-[4.75rem] text-white md:pt-[7rem]">
      <div className="absolute inset-0 architectural-grid-dark opacity-75" aria-hidden="true" />
      <div className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-12 py-12 sm:py-16 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-14 xl:gap-20">
          <div className="min-w-0">
            <Reveal>
              <div className="flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-brand">
                <span className="h-px w-10 bg-brand" />
                <span>{data.subTagline}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="hero-heading mt-6 text-balance">
                {beforeHighlight}
                <span className="bg-gradient-to-r from-brand to-sky-300 bg-clip-text text-transparent">{data.headlineHighlight}</span>
                {afterHighlight}
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-[1.0625rem]">{data.description}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
                {data.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-brand/50 bg-brand/15 text-brand" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 4.5 4.5L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <dl className="mt-9 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={stat.label} className={index ? 'border-l border-white/10 pl-5' : 'pr-5'}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      {stat.value}
                      <span className="text-brand">{stat.suffix}</span>
                    </dd>
                    <dd className="mt-1 text-[0.62rem] font-extrabold uppercase leading-4 tracking-[0.14em] text-white/50">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="min-w-0">
            <div className="relative border border-white/15 bg-white/[0.04] p-3 shadow-architectural-dark sm:p-4">
              <div className="flex items-center justify-between pb-3 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/50">
                <span>{brand.name} · Hyderabad</span>
                <span className="text-brand">01</span>
              </div>

              <HeroImage src={heroImage} alt={data.imageAlt} />

              <div className="absolute -left-3 bottom-10 hidden border border-white/15 bg-brand-deep/90 px-5 py-4 shadow-architectural-dark backdrop-blur sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center bg-brand text-white" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                      <circle cx="12" cy="9.5" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Free site visit &amp; estimate</div>
                    <div className="mt-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.16em] text-white/55">Anywhere in Hyderabad</div>
                  </div>
                </div>
              </div>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button href="#contact" variant="brand" className="w-full">
                  {data.primaryCta}
                </Button>
                <Button href="#services" variant="outline" className="w-full">
                  {data.secondaryCta}
                </Button>
              </div>
              <p className="mt-4 text-center text-xs text-white/50">
                Prefer to talk?{' '}
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white">
                  Call {phone}
                </a>{' '}
                for a free site visit.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
