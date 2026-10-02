import Container from './ui/Container'
import Reveal from './ui/Reveal'
import AnimatedCounter from './ui/AnimatedCounter'
import SectionHeading from './ui/SectionHeading'

export default function PortfolioStats({ data }) {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-brand-deep py-24 text-white sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading badge="Portfolio" heading={data[0]?.label || 'Portfolio'} dark />
        </Reveal>

        <div className="mt-14 grid border-l border-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {data.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="h-full">
              <article className="relative flex min-h-[13rem] flex-col justify-between border-b border-r border-white/10 px-5 py-7 sm:border-b-0 sm:border-t sm:px-6 lg:min-h-[16rem]">
                <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/45">0{index + 1}</span>
                <div>
                  <div className="text-6xl font-semibold tracking-[-0.07em] text-brand sm:text-7xl lg:text-8xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-4 max-w-[12rem] text-sm leading-6 text-white/65">{stat.label}</p>
                </div>
                <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-brand/40" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
