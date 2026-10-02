import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function AboutProcess({ data }) {
  return (
    <section id="about" className="scroll-mt-24 bg-canvas py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} />
          </Reveal>

          <div className="relative grid gap-0 border-l border-ink/10 sm:grid-cols-3 sm:border-l-0 sm:border-t">
            {data.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07} className="h-full">
                <article className="group relative flex h-full flex-col border-b border-r border-ink/10 px-5 py-8 transition-colors hover:bg-brand/[0.035] sm:min-h-[20rem] sm:border-b-0 sm:border-r sm:border-l sm:px-6 sm:py-9 sm:first:border-l">
                  <div className="mb-auto flex items-start justify-between gap-5">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-brand sm:text-6xl">{step.number}</span>
                    <span className="mt-2 h-3 w-3 border border-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <div className="relative overflow-hidden border border-brand/20 bg-brand px-6 py-7 text-white sm:px-8 sm:py-8 lg:px-10">
            <div className="absolute inset-y-0 right-0 w-1/3 architectural-grid-dark opacity-40" aria-hidden="true" />
            <p className="relative max-w-5xl text-lg font-semibold leading-8 sm:text-xl">{data.bannerQuote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
