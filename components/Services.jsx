import Image from 'next/image'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Services({ data }) {
  return (
    <section id="services" className="scroll-mt-24 border-y border-ink/10 bg-[#f1f4f7] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 sm:gap-10">
          <Reveal>
            <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} />
          </Reveal>

          <div className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5">
            {data.items.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.07} className="h-full">
                <article className="group flex h-full min-h-[31rem] flex-col border border-ink/10 bg-white/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:bg-white hover:shadow-architectural motion-reduce:transform-none sm:p-6 md:min-h-[32rem]">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-ink/15">0{index + 1}</span>
                    <span className="h-3 w-3 border border-brand transition-colors group-hover:bg-brand" aria-hidden="true" />
                  </div>

                  <div className="mt-7 flex flex-1 flex-col">
                    <h3 className="min-h-9 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-4 min-h-28 text-sm leading-7 text-slate-600">{item.description}</p>
                    {item.highlights?.length ? (
                      <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-700">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-brand-dark transition-colors hover:text-brand"
                    >
                      <span>{item.cta}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>

                  <div className="relative mt-6 h-44 shrink-0 overflow-hidden border border-ink/10 bg-ink/5">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/20 to-transparent" aria-hidden="true" />
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
