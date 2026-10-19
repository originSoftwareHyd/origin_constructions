import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function ServiceAreas({ data }) {
  return (
    <section id="service-areas" className="scroll-mt-24 border-t border-ink/10 bg-[#f1f4f7] py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {data.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06} className="h-full">
              <article className="h-full border border-ink/10 bg-white/75 p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.areas.map((area) => (
                    <li key={area} className="border border-ink/10 px-2.5 py-1 text-xs leading-5 text-slate-600">
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
