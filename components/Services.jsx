import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Services({ data }) {
  return (
    <section id="services" className="scroll-mt-24 border-y border-ink/10 bg-[#f1f4f7] py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} />
          </Reveal>

          <div className="grid border-l border-ink/10 sm:grid-cols-3 sm:border-l-0 sm:border-t">
            {data.items.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.07} className="h-full">
                <article className="group flex h-full min-h-[24rem] flex-col border-b border-r border-ink/10 px-5 py-7 transition-colors hover:bg-canvas sm:border-b-0 sm:border-l sm:px-6 sm:py-8">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-ink/15">0{index + 1}</span>
                    <span className="h-3 w-3 border border-brand transition-colors group-hover:bg-brand" aria-hidden="true" />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                    <a
                      href="#contact"
                      className="mt-7 inline-flex items-center gap-2 text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-brand-dark transition-colors hover:text-brand"
                    >
                      <span>{item.cta}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
