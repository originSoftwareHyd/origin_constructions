import Image from 'next/image'
import Button from './ui/Button'
import Container from './ui/Container'
import Reveal from './ui/Reveal'

export default function Hero({ data, brand }) {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-deep pt-32 text-white">
      <div className="absolute inset-0 architectural-grid-dark opacity-75" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[46%] border-l border-white/10 lg:block" aria-hidden="true" />
      <div className="absolute right-[9%] top-[19%] hidden h-[30rem] w-[28rem] border border-brand/30 lg:block" aria-hidden="true" />
      <div className="absolute right-[13%] top-[25%] hidden h-[20rem] w-[18rem] border border-white/10 lg:block" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-[58%] w-[60%] bg-[radial-gradient(circle_at_70%_50%,rgba(0,133,232,0.18),transparent_55%)]" aria-hidden="true" />

      <Container className="relative z-10 pb-14 pt-14 sm:pb-16 lg:pb-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(24rem,0.9fr)] lg:items-end">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-brand">
                <span className="h-px w-10 bg-brand" />
                <span>{data.subTagline}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display-heading mt-7 max-w-6xl text-balance">{data.headline}</h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 grid gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:items-end">
                <p className="max-w-2xl text-base leading-8 text-white/70">{data.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button href="#contact" variant="brand">
                    {data.primaryCta}
                  </Button>
                  <Button href="#about" variant="outline">
                    {data.secondaryCta}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="lg:justify-self-end">
            <div className="relative overflow-hidden border border-white/15 bg-white/5 p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/50">
                <span>{brand.name}</span>
                <span>01</span>
              </div>

              <div className="relative mt-4 h-[18rem] overflow-hidden border border-white/10 sm:h-[23rem] sm:w-[26rem]">
                <Image
                  src={data.visual}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 26rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-deep/20" aria-hidden="true" />
                <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,133,232,0.2),transparent_35%),linear-gradient(165deg,transparent_50%,rgba(255,255,255,0.07)_51%,transparent_52%)]" aria-hidden="true" />
                <div className="absolute left-[11%] top-[12%] h-[68%] w-[54%] border-l border-t border-brand/70" aria-hidden="true" />
                <div className="absolute bottom-[12%] right-[11%] h-[22%] w-[26%] border-b border-r border-white/55" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-white/45 sm:block" aria-hidden="true">
        Origin Construction
      </div>
    </section>
  )
}
