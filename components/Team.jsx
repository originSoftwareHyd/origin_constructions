import Image from 'next/image'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function TeamPhoto({ member }) {
  if (!member.image) {
    return (
      <div className="relative grid aspect-[4/4.6] place-items-center overflow-hidden border border-ink/10 bg-[#e9eef2]" aria-hidden="true">
        <div className="absolute inset-0 architectural-grid opacity-70" />
        <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-gold/70" />
        <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-brand/25" />
        <span className="relative text-6xl font-semibold tracking-[-0.07em] text-ink/75 sm:text-7xl">{getInitials(member.name)}</span>
      </div>
    )
  }

  const isRemote = /^https?:\/\//i.test(member.image)

  return (
    <div className="relative aspect-[4/4.6] overflow-hidden border border-ink/10 bg-[#e9eef2]">
      {isRemote ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.025]"
        />
      ) : (
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.025]"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/20 via-transparent to-transparent opacity-70" />
      <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-white/45" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-white/45" />
    </div>
  )
}

export default function Team({ data }) {
  return (
    <section id="team" className="scroll-mt-24 bg-canvas py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading badge={data.sectionBadge} heading={data.heading} />
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3 lg:mt-16">
          {data.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.06}>
              <article className="group">
                <TeamPhoto member={member} />
                <div className="flex items-start justify-between gap-5 border-b border-ink/15 py-5">
                  <div className="min-w-0">
                    <h3 className="break-words text-xl font-semibold tracking-tight text-ink sm:text-[1.38rem]">{member.name}</h3>
                    <p className="mt-2 text-[0.67rem] font-extrabold uppercase tracking-[0.15em] text-slate-500">{member.role}</p>
                  </div>
                  <span className="shrink-0 text-[0.61rem] font-extrabold tracking-[0.16em] text-gold">0{index + 1}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
