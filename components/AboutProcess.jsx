import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import InnovationBanner from './InnovationBanner'

const stepIcons = [
  // Concept: drafting compass over a sketch line
  <>
    <circle cx="24" cy="9" r="3" />
    <path d="M22.5 11.5 13 38M25.5 11.5 35 38M17.5 26h13" />
    <path d="M6 42h36" strokeDasharray="2 3" />
  </>,
  // Approvals: drawing sheet with stamp
  <>
    <path d="M10 5h20l8 8v30H10z" />
    <path d="M30 5v8h8M16 18h16M16 24h16M16 30h8" />
    <circle cx="31" cy="34" r="5" />
    <path d="m29 34 1.5 1.5L33 33" />
  </>,
  // Construction: building with crane
  <>
    <path d="M6 43h36M10 43V23h16v20M14 28h3M19 28h3M14 34h3M19 34h3" />
    <path d="M34 43V8M30 8h12M34 8l-8 6M40 8v6" />
    <path d="M38 14v4h4v-4" />
  </>
]

export default function AboutProcess({ data }) {
  return (
    <section id="about" className="scroll-mt-24 bg-canvas py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <SectionHeading badge={data.sectionBadge} heading={data.heading} subtitle={data.subtitle} layout="stacked" />
            {data.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div className="relative grid gap-0 border-l border-ink/10 sm:grid-cols-3 sm:border-l-0 sm:border-t">
            {data.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07} className="h-full">
                <article className="group relative flex h-full flex-col border-b border-r border-ink/10 px-5 py-8 transition-colors hover:bg-brand/[0.035] sm:min-h-[20rem] sm:border-b-0 sm:border-r sm:border-l sm:px-6 sm:py-9 sm:first:border-l">
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-brand sm:text-6xl">{step.number}</span>
                    <span className="mt-2 h-3 w-3 border border-gold" aria-hidden="true" />
                  </div>
                  <div className="my-auto py-8" aria-hidden="true">
                    <span className="grid h-16 w-16 place-items-center border border-brand/20 bg-brand/[0.06] text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {stepIcons[index]}
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-ink sm:text-lg xl:text-2xl">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <InnovationBanner data={data.banner} />
        </Reveal>
      </Container>
    </section>
  )
}
