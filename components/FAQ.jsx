import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function FAQ({ data }) {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-ink/10 bg-canvas py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} />
          </Reveal>

          <div className="border-t border-ink/10">
            {data.items.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.03}>
                <details className="group border-b border-ink/10" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-ink sm:text-lg">{item.question}</h3>
                    <span
                      className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center border border-brand text-xs font-bold text-brand transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
